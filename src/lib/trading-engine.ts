// ============================================
// TRADING SIMULATION ENGINE
// ============================================

export interface Position {
  id: string;
  symbol: string;
  direction: 'buy' | 'sell';
  entryPrice: number;
  currentPrice: number;
  lotSize: number;
  openTime: number;
  pnl: number;
  margin: number;
}

export interface AccountState {
  balance: number;
  equity: number;
  marginUsed: number;
  freeMargin: number;
  marginLevel: number;
  openPositions: Position[];
}

export const INITIAL_BALANCE = 100000000; // Rp 100,000,000
export const DEFAULT_LEVERAGE = 100;
export const CONTRACT_SIZE = 100000; // Standard lot

/**
 * Calculates pip value in IDR assuming a fixed exchange rate for simplicity 
 * (e.g., 1 USD = 15000 IDR)
 */
export function getPipValueIDR(symbol: string, lotSize: number): number {
  const usdRate = 15000;
  
  if (symbol === 'XAU/USD') {
    return lotSize * 100 * usdRate; // 1 lot gold = $1 per 1 cent move -> 100 pips per $1
  }
  
  // Standard forex (EUR/USD)
  return lotSize * 10 * usdRate; // $10 per pip per lot
}

/**
 * Calculates Margin required in IDR
 */
export function getMarginRequiredIDR(symbol: string, lotSize: number, price: number, leverage: number): number {
  const usdRate = 15000;
  
  if (symbol === 'XAU/USD') {
    // 1 lot Gold = 100 oz. Margin = (100 * price) / leverage
    return ((100 * price) / leverage) * lotSize * usdRate;
  }
  
  // Forex (EUR/USD roughly)
  return ((CONTRACT_SIZE * 1.1) / leverage) * lotSize * usdRate; 
}

/**
 * Calculates current floating PnL for a position
 */
export function calculatePositionPnL(position: Position): number {
  const diff = position.direction === 'buy' 
    ? position.currentPrice - position.entryPrice
    : position.entryPrice - position.currentPrice;
    
  let pips = 0;
  if (position.symbol === 'XAU/USD') {
    pips = diff * 10; // $1 move = 10 pips
  } else {
    pips = diff * 10000; 
  }
  
  const pipValue = getPipValueIDR(position.symbol, position.lotSize);
  return pips * pipValue;
}

/**
 * Recalculate entire account state based on current prices
 */
export function updateAccountState(state: AccountState): AccountState {
  let totalPnL = 0;
  let totalMargin = 0;
  
  const updatedPositions = state.openPositions.map(pos => {
    const pnl = calculatePositionPnL(pos);
    totalPnL += pnl;
    totalMargin += pos.margin;
    return { ...pos, pnl };
  });
  
  const equity = state.balance + totalPnL;
  const freeMargin = equity - totalMargin;
  const marginLevel = totalMargin > 0 ? (equity / totalMargin) * 100 : 0;
  
  return {
    ...state,
    equity,
    marginUsed: totalMargin,
    freeMargin,
    marginLevel,
    openPositions: updatedPositions
  };
}

/**
 * Generate a random price tick (Random Walk)
 */
export function generateTick(currentPrice: number, volatility: number = 0.0005): number {
  const change = currentPrice * volatility * (Math.random() - 0.5);
  return Number((currentPrice + change).toFixed(5));
}
