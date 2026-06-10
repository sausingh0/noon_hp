import Header from './components/Header';
import Search from './components/Search';
import Multitab from './components/Multitab';
import BannerCarousel from './components/BannerCarousel';
import CouponTray from './components/CouponTray';
import ProductSection from './components/ProductSection';
import CategoryGrid from './components/CategoryGrid';
import BottomNav from './components/BottomNav';
import PromoBanner from './components/PromoBanner';
import { featuredProducts, trendingProducts, cleaningProducts } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-[#f2f3f7] max-w-sm mx-auto relative">
      {/* Sticky top area */}
      <Header />
      <Search />
      <Multitab />

      {/* Scrollable content */}
      <div className="pb-20 overflow-y-auto">
        {/* Main banner carousel */}
        <BannerCarousel />

        {/* Quick pick featured items */}
        <ProductSection
          title="Fresh Picks For You"
          subtitle="Delivered in 10 minutes"
          products={featuredProducts}
        />

        {/* Yellow Friday Promo */}
        <PromoBanner type="yellow-friday" />

        {/* All Categories grid */}
        <CategoryGrid />

        {/* Trending section */}
        <ProductSection
          title="Trending Now"
          subtitle="Most ordered this week"
          products={trendingProducts}
        />

        {/* Coupon Tray */}
        <CouponTray />

        {/* Cadbury special */}
        <PromoBanner type="cadbury" />

        {/* Cleaning section */}
        <ProductSection
          title="Shop in store"
          subtitle="Cleaning & household essentials"
          products={cleaningProducts}
        />

        {/* Bottom yellow friday banner */}
        <div className="px-3 py-2">
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a237e 0%, #1565c0 100%)',
              minHeight: '80px',
            }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="inline-flex bg-[#f8d000] rounded-full px-2 py-0.5 mb-1">
                  <span className="font-black text-[9px] text-[#1a237e]">YELLOW FRIDAY</span>
                </div>
                <p className="text-white font-black text-xl leading-none">70% <span className="text-base">OFF</span></p>
                <p className="text-[#f8d000] text-[10px] font-semibold">in Minutes</p>
              </div>
              <div className="flex gap-1">
                {['🧴', '🧹', '🫧'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-12 rounded-lg bg-white/20 flex items-center justify-center text-xl"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Discover new section */}
        <div className="bg-white mt-2 px-3 py-3">
          <h2 className="text-sm font-bold text-[#1d1d1d] mb-2">New For You</h2>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {[
              { emoji: '🥑', name: 'Avocado', price: '₹89', bg: '#e8f5e9' },
              { emoji: '🫐', name: 'Blueberry', price: '₹129', bg: '#ede7f6' },
              { emoji: '🥭', name: 'Alphonso\nMango', price: '₹199', bg: '#fff3e0' },
              { emoji: '🍓', name: 'Strawberry', price: '₹99', bg: '#fce4ec' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-xl p-2 text-center"
                style={{ width: '80px', backgroundColor: item.bg }}
              >
                <div className="text-3xl mb-1">{item.emoji}</div>
                <p className="text-[10px] font-semibold text-[#1d1d1d] leading-tight whitespace-pre-line">{item.name}</p>
                <p className="text-[#0c831f] font-bold text-[11px] mt-0.5">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer spacer */}
        <div className="h-4" />
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}

export default App;
