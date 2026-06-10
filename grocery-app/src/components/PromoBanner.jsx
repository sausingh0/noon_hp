export default function PromoBanner({ type = 'yellow-friday' }) {
  if (type === 'yellow-friday') {
    return (
      <div className="px-3 py-2">
        <div
          className="rounded-xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #1a237e 0%, #283593 40%, #1565c0 100%)',
            minHeight: '100px',
          }}
        >
          {/* Background decorative circles */}
          <div
            className="absolute right-0 top-0 w-32 h-32 rounded-full opacity-20"
            style={{ background: '#f8d000', transform: 'translate(30%, -30%)' }}
          />
          <div
            className="absolute right-8 bottom-0 w-20 h-20 rounded-full opacity-10"
            style={{ background: '#f8d000', transform: 'translate(0, 30%)' }}
          />

          <div className="relative flex items-center justify-between px-4 py-3">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center bg-[#f8d000] rounded-full px-2 py-0.5 mb-1">
                <span className="font-black text-[10px] text-[#1a237e] tracking-wider">YELLOW FRIDAY</span>
              </div>
              {/* Big discount */}
              <div className="flex items-baseline">
                <span className="text-white font-black leading-none" style={{ fontSize: '44px' }}>70%</span>
                <span className="text-white font-black text-xl ml-1">OFF</span>
              </div>
              <p className="text-[#f8d000] font-bold text-xs">in MINUTES</p>
              <p className="text-white/70 text-[10px] mt-0.5">On hundreds of products</p>
            </div>

            {/* Product bottles/items */}
            <div className="flex items-end gap-1 mr-2">
              {[
                { h: 70, bg: '#ef5350', label: 'Tide' },
                { h: 80, bg: '#42a5f5', label: 'Surf' },
                { h: 65, bg: '#66bb6a', label: 'Ariel' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg flex items-center justify-center text-white font-bold text-[8px]"
                  style={{
                    width: '36px',
                    height: `${item.h}px`,
                    backgroundColor: item.bg,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Shop Now button */}
          <div className="px-4 pb-3">
            <button className="bg-[#f8d000] text-[#1a237e] font-black text-xs px-4 py-1.5 rounded-full">
              Shop Now →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cadbury') {
    return (
      <div className="px-3 py-2">
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
            minHeight: '90px',
          }}
        >
          <div className="flex items-center px-4 py-3 gap-3">
            <div className="flex-1">
              <p className="text-[#ffd54f] font-black text-xs">CADBURY</p>
              <p className="text-white font-bold text-base leading-tight">Mitha Moments</p>
              <p className="text-white/70 text-[10px] mt-1">Starting at ₹10</p>
              <button className="mt-2 bg-white text-[#6a1b9a] font-bold text-[10px] px-3 py-1 rounded-full">
                Shop Now
              </button>
            </div>
            <div className="flex items-center">
              <div
                className="rounded-xl"
                style={{ width: '80px', height: '70px', backgroundColor: '#7b1fa2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span className="text-3xl">🍫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
