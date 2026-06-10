const coupons = [
  {
    id: 1,
    code: 'FIRST50',
    discount: '50% OFF',
    desc: 'on first order',
    minOrder: 'Min order ₹199',
    color: '#fff8e1',
    border: '#f8d000',
    icon: '🎁',
  },
  {
    id: 2,
    code: 'SAVE100',
    discount: '₹100 OFF',
    desc: 'on orders above ₹599',
    minOrder: 'Min order ₹599',
    color: '#e8f5e9',
    border: '#0c831f',
    icon: '💰',
  },
  {
    id: 3,
    code: 'FREE20',
    discount: '20% OFF',
    desc: 'on vegetables & fruits',
    minOrder: 'Min order ₹299',
    color: '#fce4ec',
    border: '#e91e63',
    icon: '🌿',
  },
  {
    id: 4,
    code: 'NEWUSER',
    discount: '₹75 OFF',
    desc: 'for new users only',
    minOrder: 'Min order ₹149',
    color: '#e3f2fd',
    border: '#1976d2',
    icon: '✨',
  },
];

export default function CouponTray() {
  return (
    <div className="bg-white mt-2 py-3">
      <div className="flex items-center justify-between px-3 mb-2">
        <h3 className="text-sm font-bold text-[#1d1d1d]">Coupons &amp; Offers</h3>
        <button className="text-[#0c831f] text-xs font-semibold">View All</button>
      </div>
      <div className="flex gap-2 overflow-x-auto hide-scrollbar px-3">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="flex-shrink-0 rounded-xl p-2.5 flex flex-col gap-1"
            style={{
              width: '140px',
              backgroundColor: coupon.color,
              border: `1.5px dashed ${coupon.border}`,
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-base">{coupon.icon}</span>
              <div>
                <p className="font-black text-sm text-[#1d1d1d] leading-tight">{coupon.discount}</p>
                <p className="text-[10px] text-[#7e818c] leading-tight">{coupon.desc}</p>
              </div>
            </div>
            <div className="border-t border-dashed" style={{ borderColor: coupon.border }}></div>
            <div className="flex items-center justify-between">
              <div
                className="flex items-center gap-1 rounded px-1.5 py-0.5"
                style={{ backgroundColor: coupon.border + '22' }}
              >
                <span className="font-bold text-[10px]" style={{ color: coupon.border }}>{coupon.code}</span>
              </div>
              <button
                className="text-[10px] font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: coupon.border, color: 'white' }}
              >
                Apply
              </button>
            </div>
            <p className="text-[9px] text-[#7e818c]">{coupon.minOrder}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
