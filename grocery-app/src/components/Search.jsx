export default function Search() {
  return (
    <div className="bg-white px-3 pb-2 pt-1">
      <div className="flex items-center bg-[#f2f3f7] rounded-lg px-3 py-2.5 gap-2.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#7e818c" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-[#7e818c] text-sm flex-1">Search &quot;milk&quot;</span>
        <div className="w-px h-4 bg-gray-300"></div>
        <div className="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#0c831f"/>
          </svg>
          <span className="text-[#0c831f] text-xs font-semibold">Voice</span>
        </div>
      </div>
    </div>
  );
}
