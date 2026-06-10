import { useState, useEffect, useRef } from 'react';

const banners = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #1565c0 100%)',
    badge: { text: 'YELLOW FRIDAY', color: '#f8d000', textColor: '#1a237e' },
    discount: '70%',
    discountSub: 'OFF',
    tagline: 'in MINUTES',
    subText: 'On Hundreds of Products',
    products: [
      { name: 'Surf Excel', img: 'https://placehold.co/60x80/ffffff/0c831f?text=Surf', color: '#4fc3f7' },
      { name: 'Ariel', img: 'https://placehold.co/60x80/ffffff/0c831f?text=Ariel', color: '#ef5350' },
      { name: 'Tide', img: 'https://placehold.co/60x80/ffffff/0c831f?text=Tide', color: '#42a5f5' },
    ],
    accent: '#f8d000',
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)',
    badge: { text: 'FRESH DEALS', color: '#a5d6a7', textColor: '#1b5e20' },
    discount: '50%',
    discountSub: 'OFF',
    tagline: 'Fresh Vegetables',
    subText: 'Farm to your doorstep',
    products: [],
    accent: '#a5d6a7',
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #e65100 0%, #f57c00 50%, #ff9800 100%)',
    badge: { text: 'HOT DEALS', color: '#fff9c4', textColor: '#e65100' },
    discount: '40%',
    discountSub: 'OFF',
    tagline: 'On Snacks & Drinks',
    subText: 'Limited time offer',
    products: [],
    accent: '#fff9c4',
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="px-3 py-2">
      <div className="relative rounded-xl overflow-hidden" style={{ height: '140px' }}>
        {banners.map((banner, idx) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
            style={{ background: banner.bg }}
          >
            <div className="flex h-full px-4 py-3 items-center justify-between">
              {/* Left content */}
              <div className="flex-1">
                {/* Badge */}
                <div
                  className="inline-flex items-center px-2 py-0.5 rounded-full mb-1"
                  style={{ backgroundColor: banner.badge.color }}
                >
                  <span className="font-black text-[10px] tracking-wide" style={{ color: banner.badge.textColor }}>
                    {banner.badge.text}
                  </span>
                </div>
                {/* Discount */}
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-black" style={{ fontSize: '48px', lineHeight: 1 }}>
                    {banner.discount}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-white font-black text-xl leading-none">{banner.discountSub}</span>
                  </div>
                </div>
                {/* Tagline */}
                <p className="text-white font-bold text-xs leading-tight">{banner.tagline}</p>
                <p className="text-white/70 text-[10px] mt-0.5">{banner.subText}</p>
              </div>

              {/* Right: product images */}
              {banner.products.length > 0 && (
                <div className="flex items-end gap-1">
                  {banner.products.map((prod, i) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden flex flex-col items-center justify-end"
                      style={{
                        width: '52px',
                        height: `${60 + i * 8}px`,
                        backgroundColor: prod.color + '33',
                        border: `1px solid ${prod.color}55`,
                      }}
                    >
                      <img src={prod.img} alt={prod.name} className="w-full object-contain" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
