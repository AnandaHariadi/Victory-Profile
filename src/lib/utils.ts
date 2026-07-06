import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = 'IDR'): string {
  if (currency === 'IDR') {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Selamat Pagi';
  if (hour < 15) return 'Selamat Siang';
  if (hour < 18) return 'Selamat Sore';
  return 'Selamat Malam';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateCandlestickData(days: number = 30, startPrice: number = 1900) {
  const data = [];
  let price = startPrice;

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));

    const volatility = price * 0.02;
    const open = price + (Math.random() - 0.5) * volatility;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * volatility * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * 0.5;

    data.push({
      date: date.toISOString().split('T')[0],
      timestamp: date.getTime(),
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: Math.floor(Math.random() * 50000) + 10000,
    });

    price = close;
  }

  return data;
}

export function calculatePipValue(pair: string, lotSize: number): number {
  const pipValues: Record<string, number> = {
    'EUR/USD': 10,
    'GBP/USD': 10,
    'USD/JPY': 9.1,
    'AUD/USD': 10,
    'XAU/USD': 1,
    'XAG/USD': 50,
    'OIL/USD': 10,
  };
  return (pipValues[pair] || 10) * lotSize;
}

export function calculateMargin(price: number, lotSize: number, leverage: number): number {
  const contractSize = 100000;
  return (price * lotSize * contractSize) / leverage;
}

export function calculatePnL(
  entryPrice: number,
  currentPrice: number,
  lotSize: number,
  direction: 'buy' | 'sell',
  pair: string
): number {
  const pipValue = calculatePipValue(pair, lotSize);
  const priceDiff = direction === 'buy'
    ? currentPrice - entryPrice
    : entryPrice - currentPrice;

  if (pair.includes('XAU')) {
    return priceDiff * lotSize * 100;
  }

  const pips = pair.includes('JPY') ? priceDiff * 100 : priceDiff * 10000;
  return pips * pipValue;
}
