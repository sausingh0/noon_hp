import ProductCard from './ProductCard';

export default function ProductSection({ title, subtitle, products, viewAllLink }) {
  return (
    <div className="bg-white mt-2">
      {/* Section header */}
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        <div>
          <h2 className="text-sm font-bold text-[#1d1d1d]">{title}</h2>
          {subtitle && <p className="text-[10px] text-[#7e818c] mt-0.5">{subtitle}</p>}
        </div>
        <button className="flex items-center gap-0.5 text-[#0c831f] text-xs font-semibold">
          See all
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0c831f">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-2 px-3 pb-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
