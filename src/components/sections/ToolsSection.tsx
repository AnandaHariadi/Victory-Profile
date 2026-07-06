'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Settings2, Calculator, Activity, ArrowRightLeft } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import TradingSimulator from '../tools/TradingSimulator';
import MoneyFlowDiagram from '../tools/MoneyFlowDiagram';
import { cn } from '@/lib/utils';

export default function ToolsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    { name: 'Simulasi Trading', icon: Activity },
    { name: 'Alur Dana Nasabah', icon: ArrowRightLeft },
    // { name: 'Kalkulator Investasi', icon: Calculator }, // Can add later
  ];

  return (
    <SectionWrapper id="tools" className="bg-slate-50 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-100 text-navy-700 font-semibold text-sm mb-6">
          <Settings2 className="w-4 h-4" />
          Tools & Simulasi
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
          Pelajari & Praktikkan
        </h2>
        <p className="text-lg text-slate-600">
          Pahami alur transaksi dan latih insting trading Anda tanpa risiko finansial menggunakan simulator dan diagram interaktif kami.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-2 rounded-2xl bg-white p-2 border border-slate-100 shadow-sm max-w-fit mx-auto mb-12">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  cn(
                    'w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl py-3 px-6 text-sm font-bold leading-5 focus:outline-none transition-all',
                    selected
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-navy-900'
                  )
                }
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={cn(
                'rounded-3xl focus:outline-none',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:ring-2'
              )}
            >
              <TradingSimulator />
            </Tab.Panel>
            <Tab.Panel
              className={cn(
                'rounded-3xl focus:outline-none',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:ring-2'
              )}
            >
              <MoneyFlowDiagram />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </SectionWrapper>
  );
}
