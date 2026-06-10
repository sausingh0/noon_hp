import { categories } from '../data/products';

export default function CategoryGrid() {
  return (
    <div className="bg-white mt-2">
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        <h2 className="text-sm font-bold text-[#1d1d1d]">All categories</h2>
        <button className="flex items-center gap-0.5 text-[#0c831f] text-xs font-semibold">
          See all
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0c831f">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 px-3 pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex flex-col items-center rounded-xl p-2 gap-1"
            style={{ backgroundColor: cat.bg }}
          >
            <span className="text-2xl">{cat.emoji}</span>
            <span className="text-[10px] font-semibold text-[#1d1d1d] text-center leading-tight whitespace-pre-line">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
