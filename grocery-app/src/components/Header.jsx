export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Top bar - green background with logo and cart */}
      <div className="bg-[#0c831f] px-3 py-2 flex items-center justify-between">
        {/* Left: Logo + Location */}
        <div className="flex items-start gap-1.5">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <div className="bg-[#f8d000] rounded-sm w-6 h-6 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0c831f"/>
                  <circle cx="12" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg leading-none tracking-tight">blinkit</span>
            </div>
          </div>
          {/* Location */}
          <div className="ml-1">
            <div className="flex items-center gap-0.5">
              <span className="text-white font-bold text-sm leading-none">Home</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <p className="text-white/80 text-[10px] leading-tight mt-0.5 max-w-[160px] truncate">
              Sector 6, Panchkula, Haryana 134109
            </p>
          </div>
        </div>

        {/* Right: Delivery time + Cart */}
        <div className="flex items-center gap-3">
          {/* Delivery time */}
          <div className="text-center">
            <p className="text-[#f8d000] font-black text-base leading-none">10</p>
            <p className="text-white text-[9px] leading-none">minutes</p>
          </div>
          {/* Cart */}
          <button className="relative bg-white/20 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H18c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0022.46 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="text-white font-bold text-sm">My Cart</span>
            <span className="absolute -top-1.5 -right-1.5 bg-[#f8d000] text-[#0c831f] text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
    </div>
  );
}
