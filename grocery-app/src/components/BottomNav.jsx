import { useState } from 'react';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#0c831f' : '#7e818c'}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    id: 'categories',
    label: 'Categories',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#0c831f' : '#7e818c'}>
        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
      </svg>
    ),
  },
  {
    id: 'cart',
    label: 'Cart',
    badge: 3,
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#0c831f' : '#7e818c'}>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H18c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0022.46 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
  },
  {
    id: 'account',
    label: 'Account',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#0c831f' : '#7e818c'}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  const [active, setActive] = useState('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className="flex-1 flex flex-col items-center py-2 gap-0.5 relative"
        >
          <div className="relative">
            {item.icon(active === item.id)}
            {item.badge && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#0c831f] text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </div>
          <span
            className={`text-[10px] font-medium ${
              active === item.id ? 'text-[#0c831f]' : 'text-[#7e818c]'
            }`}
          >
            {item.label}
          </span>
          {active === item.id && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#0c831f] rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  );
}
