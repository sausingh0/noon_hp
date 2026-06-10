import { useState } from 'react';

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(0);

  const handleAdd = () => setQty(1);
  const handleIncrease = () => setQty((q) => q + 1);
  const handleDecrease = () => setQty((q) => Math.max(0, q - 1));

  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col" style={{ minHeight: '200px' }}>
      {/* Image area */}
      <div className="relative bg-[#f2f3f7] flex items-center justify-center" style={{ height: '110px' }}>
        {product.discount && (
          <div className="absolute top-1.5 left-1.5 bg-[#0c831f] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
            {product.discount}% OFF
          </div>
        )}
        {product.tag && (
          <div
            className="absolute top-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded"
            style={{ backgroundColor: product.tagColor || '#f8d000', color: product.tagTextColor || '#1d1d1d' }}
          >
            {product.tag}
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="object-contain"
          style={{ maxHeight: '90px', maxWidth: '80px' }}
        />
        {product.sponsored && (
          <div className="absolute bottom-1 right-1 bg-white/80 text-[8px] text-[#7e818c] px-1 rounded">
            Ad
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-2 pt-1.5 pb-2 flex flex-col flex-1">
        {/* Delivery time */}
        <div className="flex items-center gap-1 mb-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#7e818c">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
          </svg>
          <span className="text-[9px] text-[#7e818c] font-medium">{product.deliveryTime || '10 mins'}</span>
        </div>

        {/* Name */}
        <p className="text-[12px] font-semibold text-[#1d1d1d] leading-tight line-clamp-2 flex-1">
          {product.name}
        </p>

        {/* Weight/variant */}
        <p className="text-[10px] text-[#7e818c] mt-0.5">{product.weight}</p>

        {/* Price + Add button */}
        <div className="flex items-center justify-between mt-1.5">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#1d1d1d]">₹{product.price}</span>
              {product.mrp && (
                <span className="text-[10px] text-[#7e818c] line-through">₹{product.mrp}</span>
              )}
            </div>
          </div>

          {/* Add/Qty button */}
          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className="border-2 border-[#0c831f] text-[#0c831f] font-bold text-xs rounded-lg px-3 py-1 bg-white active:bg-[#e8f5e9] transition-colors"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center bg-[#0c831f] rounded-lg overflow-hidden">
              <button
                onClick={handleDecrease}
                className="text-white font-bold text-base px-2 py-0.5 leading-none"
              >
                −
              </button>
              <span className="text-white font-bold text-sm px-1.5">{qty}</span>
              <button
                onClick={handleIncrease}
                className="text-white font-bold text-base px-2 py-0.5 leading-none"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
