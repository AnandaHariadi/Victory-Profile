'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend, TimeScale } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Activity, BarChart2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  CandlestickController,
  CandlestickElement
);

// Generate mock OHLC data
const generateOHLCData = (days: number) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - days);
  let basePrice = 2380; 
  
  const data = [];
  for (let i = 0; i < days; i++) {
    const volatility = basePrice * 0.005;
    const open = basePrice + (Math.random() - 0.5) * volatility;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * volatility * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * 0.5;
    
    data.push({
      x: new Date(currentDate).getTime(),
      o: open,
      h: high,
      l: low,
      c: close,
    });
    
    basePrice = close;
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

export default function OHLCSection() {
  const [timeframe, setTimeframe] = useState<'1W' | '1M' | '3M' | '1Y'>('1M');
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    let days = 30;
    if (timeframe === '1W') days = 7;
    else if (timeframe === '3M') days = 90;
    else if (timeframe === '1Y') days = 365;

    const data = generateOHLCData(days);

    setChartData({
      datasets: [
        {
          label: 'XAU/USD',
          data: data,
          color: {
            up: '#10b981', // emerald-500
            down: '#ef4444', // red-500
            unchanged: '#94a3b8',
          },
          borderColor: '#0f172a',
          borderWidth: 1,
        }
      ]
    });
  }, [timeframe]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#0f172a',
        bodyColor: '#475569',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        padding: 12,
        callbacks: {
           label: function(context: any) {
             const point = context.raw;
             return [
               `Open: $${point.o.toFixed(2)}`,
               `High: $${point.h.toFixed(2)}`,
               `Low:  $${point.l.toFixed(2)}`,
               `Close: $${point.c.toFixed(2)}`
             ];
           }
        }
      }
    },
    scales: {
      x: {
        type: 'time',
        time: { unit: timeframe === '1W' ? 'day' : timeframe === '1M' ? 'day' : 'month' },
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: { color: '#64748b' }
      },
      y: {
        position: 'right',
        grid: { color: 'rgba(0,0,0,0.05)' },
        ticks: {
          color: '#64748b',
          callback: function(value: any) { return '$' + value; }
        }
      }
    }
  };

  return (
    <SectionWrapper id="ohlc" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-gold-600 font-semibold text-sm mb-4">
                <BarChart2 className="w-4 h-4" /> Market Data Real-time
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-950">
                Interactive <span className="text-gold-500">OHLC Chart</span>
              </h2>
            </div>

            {/* Timeframe Filters */}
            <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-200">
              {['1W', '1M', '3M', '1Y'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf as any)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    timeframe === tf 
                      ? 'bg-white text-navy-950 shadow-sm border border-slate-100' 
                      : 'text-slate-500 hover:text-navy-900 hover:bg-slate-100'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl"
          >
            {/* Asset Info */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
               <div>
                 <h3 className="text-2xl font-bold text-navy-950 flex items-center gap-2">
                   XAU/USD <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded">Spot Gold</span>
                 </h3>
               </div>
               <div className="text-right">
                 <div className="text-3xl font-bold text-emerald-500">
                   $2,385.50
                 </div>
                 <div className="text-sm text-emerald-600 flex items-center justify-end gap-1 font-medium">
                   <Activity className="w-3 h-3" /> +12.40 (+0.52%)
                 </div>
               </div>
            </div>

            {/* The Chart */}
            <div className="w-full h-[400px]">
              {chartData && (
                // @ts-ignore
                <Chart type="candlestick" data={chartData} options={options as any} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
