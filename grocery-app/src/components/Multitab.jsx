import { useState } from 'react';

const tabs = [
  { id: 'all', label: 'All', emoji: '🏠' },
  { id: 'vegetables', label: 'Vegetables', emoji: '🥦' },
  { id: 'fruits', label: 'Fruits', emoji: '🍎' },
  { id: 'dairy', label: 'Dairy', emoji: '🥛' },
  { id: 'snacks', label: 'Snacks', emoji: '🍿' },
  { id: 'beverages', label: 'Beverages', emoji: '🧃' },
  { id: 'bakery', label: 'Bakery', emoji: '🍞' },
  { id: 'meat', label: 'Meat', emoji: '🥩' },
  { id: 'personal', label: 'Personal', emoji: '🧴' },
  { id: 'cleaning', label: 'Cleaning', emoji: '🧹' },
];

export default function Multitab() {
  const [active, setActive] = useState('all');

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="flex overflow-x-auto hide-scrollbar px-2 py-1.5 gap-0.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex flex-col items-center flex-shrink-0 px-3 py-1 rounded-lg transition-all ${
              active === tab.id
                ? 'bg-[#e8f5e9]'
                : 'bg-transparent'
            }`}
          >
            <span className="text-lg leading-tight">{tab.emoji}</span>
            <span
              className={`text-[10px] font-medium leading-tight whitespace-nowrap mt-0.5 ${
                active === tab.id ? 'text-[#0c831f]' : 'text-[#7e818c]'
              }`}
            >
              {tab.label}
            </span>
            {active === tab.id && (
              <div className="w-4 h-0.5 bg-[#0c831f] rounded-full mt-0.5"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
