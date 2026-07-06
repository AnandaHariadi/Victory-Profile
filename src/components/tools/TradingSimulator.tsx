'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Square, Activity, DollarSign } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { 
  AccountState, 
  Position, 
  INITIAL_BALANCE, 
  generateTick, 
  updateAccountState,
  getMarginRequiredIDR
} from '@/lib/trading-engine';
import { formatCurrency } from '@/lib/utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function TradingSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [price, setPrice] = useState(2385.50); // Starting Gold price
  const [history, setHistory] = useState<number[]>(Array(50).fill(2385.50));
  const [lotSize, setLotSize] = useState(0.1);
  const [account, setAccount] = useState<AccountState>({
    balance: INITIAL_BALANCE,
    equity: INITIAL_BALANCE,
    marginUsed: 0,
    freeMargin: INITIAL_BALANCE,
    marginLevel: 0,
    openPositions: []
  });
  
  const tickRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      tickRef.current = setInterval(() => {
        setPrice(prev => {
          const newPrice = generateTick(prev, 0.0002);
          setHistory(h => [...h.slice(1), newPrice]);
          return newPrice;
        });
      }, 1000);
    } else {
      if (tickRef.current) clearInterval(tickRef.current);
    }
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [isRunning]);

  // Update account when price changes
  useEffect(() => {
    setAccount(prev => updateAccountState(prev));
  }, [price]);

  const handleOpenPosition = (direction: 'buy' | 'sell') => {
    const marginReq = getMarginRequiredIDR('XAU/USD', lotSize, price, 100);
    
    if (marginReq > account.freeMargin) {
      alert("Margin tidak cukup!");
      return;
    }

    const newPos: Position = {
      id: Math.random().toString(36).substr(2, 9),
      symbol: 'XAU/USD',
      direction,
      entryPrice: price,
      currentPrice: price,
      lotSize,
      openTime: Date.now(),
      pnl: 0,
      margin: marginReq
    };

    setAccount(prev => ({
      ...prev,
      openPositions: [...prev.openPositions, newPos]
    }));
  };

  const handleClosePosition = (id: string) => {
    setAccount(prev => {
      const pos = prev.openPositions.find(p => p.id === id);
      if (!pos) return prev;
      
      const newBalance = prev.balance + pos.pnl;
      return updateAccountState({
        ...prev,
        balance: newBalance,
        openPositions: prev.openPositions.filter(p => p.id !== id)
      });
    });
  };

  const chartData = {
    labels: Array(50).fill(''),
    datasets: [
      {
        label: 'XAU/USD',
        data: history,
        borderColor: '#C8A45D',
        backgroundColor: 'rgba(200, 164, 93, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-navy-950 rounded-3xl p-6 border border-white/10 shadow-2xl text-white">
      <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Activity className="text-gold-500 w-5 h-5" />
            Live Trading Simulator
          </h3>
          <p className="text-xs text-slate-400 mt-1">Coba simulasi trading tanpa risiko (Data Mock)</p>
        </div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
            isRunning ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          }`}
        >
          {isRunning ? <><Square className="w-4 h-4" /> Stop Market</> : <><Play className="w-4 h-4" /> Start Market</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Chart & Order Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chart */}
          <div className="bg-navy-900 rounded-xl p-4 border border-white/5 h-[300px]">
             <div className="flex justify-between items-center mb-2">
               <span className="font-bold">XAU/USD</span>
               <span className={`font-mono text-xl ${history[history.length-1] >= history[history.length-2] ? 'text-green-400' : 'text-red-400'}`}>
                 {price.toFixed(2)}
               </span>
             </div>
             <div className="h-[230px]">
               <Line 
                 data={chartData} 
                 options={{ 
                   responsive: true, 
                   maintainAspectRatio: false,
                   plugins: { legend: { display: false } },
                   scales: { 
                     x: { display: false }, 
                     y: { position: 'right', grid: { color: 'rgba(255,255,255,0.05)' } }
                   },
                   animation: { duration: 0 }
                 }} 
               />
             </div>
          </div>

          {/* Order Panel */}
          <div className="bg-navy-900 rounded-xl p-4 border border-white/5 flex items-center gap-4">
            <div className="flex-1">
              <label className="text-xs text-slate-400 block mb-1">Volume (Lot)</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setLotSize(l => Math.max(0.01, l - 0.01))} className="w-8 h-8 rounded bg-white/5 hover:bg-white/10">-</button>
                <input 
                  type="number" 
                  value={lotSize.toFixed(2)} 
                  onChange={(e) => setLotSize(Number(e.target.value))}
                  className="w-20 text-center bg-transparent border-b border-white/20 focus:outline-none focus:border-gold-500" 
                  step="0.01"
                />
                <button onClick={() => setLotSize(l => l + 0.01)} className="w-8 h-8 rounded bg-white/5 hover:bg-white/10">+</button>
              </div>
            </div>
            <button 
              onClick={() => handleOpenPosition('sell')}
              disabled={!isRunning}
              className="flex-1 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-bold disabled:opacity-50 transition-colors"
            >
              SELL
            </button>
            <button 
              onClick={() => handleOpenPosition('buy')}
              disabled={!isRunning}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold disabled:opacity-50 transition-colors"
            >
              BUY
            </button>
          </div>
        </div>

        {/* Right: Portfolio Info */}
        <div className="space-y-4">
          <div className="bg-navy-900 rounded-xl p-4 border border-white/5">
            <h4 className="text-sm text-slate-400 mb-4 font-bold border-b border-white/5 pb-2">Informasi Akun (IDR)</h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Balance</span>
                <span>{formatCurrency(account.balance)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-slate-400">Equity</span>
                <span className={account.equity > account.balance ? 'text-green-400' : account.equity < account.balance ? 'text-red-400' : ''}>
                  {formatCurrency(account.equity)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Margin</span>
                <span>{formatCurrency(account.marginUsed)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Free Margin</span>
                <span>{formatCurrency(account.freeMargin)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Margin Level</span>
                <span>{account.marginLevel > 0 ? account.marginLevel.toFixed(2) + '%' : '-'}</span>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 rounded-xl p-4 border border-white/5 flex-1 min-h-[200px]">
            <h4 className="text-sm text-slate-400 mb-4 font-bold border-b border-white/5 pb-2 flex justify-between">
              <span>Posisi Terbuka</span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-xs">{account.openPositions.length}</span>
            </h4>
            
            <div className="space-y-2 max-h-[150px] overflow-y-auto no-scrollbar">
              {account.openPositions.length === 0 ? (
                <div className="text-center text-slate-500 text-xs py-8">Tidak ada posisi terbuka</div>
              ) : (
                account.openPositions.map(pos => (
                  <div key={pos.id} className="bg-white/5 p-3 rounded-lg text-xs relative group">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold">{pos.symbol} <span className={pos.direction === 'buy' ? 'text-blue-400' : 'text-red-400'}>{pos.direction.toUpperCase()}</span></span>
                      <span>{pos.lotSize} Lot</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{pos.entryPrice.toFixed(2)} → {pos.currentPrice.toFixed(2)}</span>
                      <span className={`font-mono font-bold ${pos.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {pos.pnl >= 0 ? '+' : ''}{formatCurrency(pos.pnl)}
                      </span>
                    </div>
                    {/* Close button on hover */}
                    <button 
                      onClick={() => handleClosePosition(pos.id)}
                      className="absolute inset-y-0 right-0 bg-red-500 w-12 rounded-r-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      X
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
