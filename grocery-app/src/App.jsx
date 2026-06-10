import './App.css';

/* ─── DATA ─────────────────────────────────────────────────────────────── */
const freshPicks = [
  { id:1, name:'Tender Coconut Water', qty:'1 pc · 300 ml', price:55, mrp:70, off:21, time:'8 mins', img:'🥥', bg:'#e8f5e9' },
  { id:2, name:'Loose Lemon', qty:'3 pcs · approx 150g', price:15, mrp:20, off:25, time:'8 mins', img:'🍋', bg:'#fffde7' },
  { id:3, name:'Banana - Robusta', qty:'6 pcs · approx 450g', price:37, mrp:45, off:18, time:'8 mins', img:'🍌', bg:'#fff8e1' },
  { id:4, name:'Fresh Tomato', qty:'500g', price:24, mrp:35, off:32, time:'8 mins', img:'🍅', bg:'#fce4ec' },
  { id:5, name:'Onion', qty:'1 kg', price:42, mrp:55, off:24, time:'8 mins', img:'🧅', bg:'#fff3e0' },
  { id:6, name:'Potato', qty:'1 kg', price:32, mrp:40, off:20, time:'8 mins', img:'🥔', bg:'#f3e5f5' },
];

const trendingItems = [
  { id:7, name:"Lay's Classic Salted Chips", qty:'104g', price:20, mrp:20, off:0, time:'8 mins', img:'🫙', bg:'#fff9c4' },
  { id:8, name:'Amul Gold Full Cream Milk', qty:'500 ml Pouch', price:31, mrp:32, off:0, time:'8 mins', img:'🥛', bg:'#e3f2fd' },
  { id:9, name:'Cadbury 5 Star', qty:'40g', price:20, mrp:20, off:0, time:'8 mins', img:'🍫', bg:'#f3e5f5' },
  { id:10, name:'Maggi 2-Minute Noodles', qty:'70g', price:14, mrp:14, off:0, time:'8 mins', img:'🍜', bg:'#fff3e0' },
];

const storeItems = [
  { id:11, name:'Ariel Matic Liquid Detergent', qty:'1 L', price:239, mrp:349, off:32, time:'8 mins', img:'🧴', bg:'#e3f2fd', tag:'BESTSELLER' },
  { id:12, name:'Surf Excel Matic Liquid', qty:'2 L', price:399, mrp:525, off:24, time:'8 mins', img:'🫧', bg:'#e8f5e9' },
  { id:13, name:'Tide Ultra Clean Powder', qty:'1 kg', price:149, mrp:199, off:25, time:'8 mins', img:'📦', bg:'#fff8e1' },
  { id:14, name:'Harpic Power Plus Cleaner', qty:'1 L', price:99, mrp:130, off:24, time:'8 mins', img:'🚿', bg:'#fce4ec' },
];

const categories = [
  { id:1, name:'Vegetables\n& Fruits', emoji:'🥦', bg:'#f3fff4', iconBg:'#d4f0d4' },
  { id:2, name:'Dairy &\nBreakfast', emoji:'🥛', bg:'#f0f8ff', iconBg:'#daeeff' },
  { id:3, name:'Snacks &\nMunchies', emoji:'🍟', bg:'#fffbf0', iconBg:'#ffefc0' },
  { id:4, name:'Cold Drinks\n& Juices', emoji:'🥤', bg:'#fff0f5', iconBg:'#ffd6e5' },
  { id:5, name:'Bakery &\nBiscuits', emoji:'🍞', bg:'#f5f0ff', iconBg:'#e2d4ff' },
  { id:6, name:'Instant &\nFrozen Food', emoji:'🍲', bg:'#f0fff8', iconBg:'#c8f5e4' },
  { id:7, name:'Tea, Coffee\n& More', emoji:'☕', bg:'#fff5ee', iconBg:'#ffdcc9' },
  { id:8, name:'Atta, Rice\n& Dal', emoji:'🌾', bg:'#f9fff0', iconBg:'#dff5b8' },
];

const coupons = [
  { id:1, code:'BLINK50', label:'50% OFF', sub:'upto ₹100', min:'Min order ₹199', color:'#fff8e1', border:'#f9a825', icon:'🏷️' },
  { id:2, code:'SAVE150', label:'₹150 OFF', sub:'on your order', min:'Min order ₹999', color:'#e8f5e9', border:'#2e7d32', icon:'💚' },
  { id:3, code:'NEW100', label:'₹100 OFF', sub:'for new users', min:'Min order ₹499', color:'#e8eaf6', border:'#3949ab', icon:'🎁' },
];

/* ─── PRODUCT CARD ──────────────────────────────────────────────────────── */
import { useState } from 'react';
function ProductCard({ p }) {
  const [qty, setQty] = useState(0);
  return (
    <div className="card">
      <div className="card-img" style={{ background: p.bg }}>
        {p.tag && <span className="tag-badge">{p.tag}</span>}
        {p.off > 0 && !p.tag && <span className="off-badge">{p.off}% OFF</span>}
        <span className="card-emoji">{p.img}</span>
      </div>
      <div className="card-body">
        <div className="delivery-row">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="#7e818c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 14.5h-1v-6l-3 1.75-.5-.87 3.5-2.01V7h1v9.5z"/></svg>
          <span className="delivery-time">{p.time}</span>
        </div>
        <p className="card-name">{p.name}</p>
        <p className="card-qty">{p.qty}</p>
        <div className="card-footer">
          <div>
            <span className="card-price">₹{p.price}</span>
            {p.mrp > p.price && <span className="card-mrp">₹{p.mrp}</span>}
          </div>
          {qty === 0
            ? <button className="btn-add" onClick={() => setQty(1)}>ADD</button>
            : <div className="btn-stepper">
                <button onClick={() => setQty(q => Math.max(0,q-1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q+1)}>+</button>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

/* ─── BANNER CAROUSEL ───────────────────────────────────────────────────── */
function BannerCarousel() {
  const [i, setI] = useState(0);
  const banners = [
    { key:'yf', comp: <YFBanner /> },
    { key:'fresh', comp: <FreshBanner /> },
  ];
  return (
    <div className="carousel-wrap">
      <div className="carousel-inner">{banners[i].comp}</div>
      <div className="dots">
        {banners.map((_,idx) =>
          <span key={idx} className={`dot${idx===i?' dot-active':''}`} onClick={()=>setI(idx)}/>
        )}
      </div>
    </div>
  );
}

function YFBanner() {
  return (
    <div className="yfbanner">
      {/* BG circles */}
      <div className="yf-circle1"/>
      <div className="yf-circle2"/>
      <div className="yf-left">
        <div className="yf-badge">YELLOW FRIDAY</div>
        <div className="yf-pct">70<span>%</span></div>
        <div className="yf-off">OFF</div>
        <div className="yf-mins">in MINUTES</div>
        <div className="yf-sub">On hundreds of products</div>
      </div>
      <div className="yf-right">
        {[
          {h:76, bg:'#ef5350', label:'Ariel'},
          {h:88, bg:'#1565c0', label:'Surf\nExcel'},
          {h:70, bg:'#f9a825', label:'Tide'},
        ].map((b,idx) => (
          <div key={idx} className="yf-bottle" style={{height:b.h, background:b.bg}}>
            <span>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FreshBanner() {
  return (
    <div className="freshbanner">
      <div className="fresh-left">
        <div className="fresh-badge">FRESH DEALS</div>
        <div className="fresh-pct">50<span>%</span> <span className="fresh-off">OFF</span></div>
        <div className="fresh-sub">On Vegetables & Fruits</div>
        <button className="fresh-btn">Shop Now</button>
      </div>
      <div className="fresh-right">🥦🍅🥕</div>
    </div>
  );
}

/* ─── SECTION HEADER ────────────────────────────────────────────────────── */
function SectionHead({ title, sub }) {
  return (
    <div className="sec-head">
      <div>
        <p className="sec-title">{title}</p>
        {sub && <p className="sec-sub">{sub}</p>}
      </div>
      <button className="sec-all">See all <svg width="12" height="12" viewBox="0 0 24 24" fill="#0c831f"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
    </div>
  );
}

/* ─── APP ───────────────────────────────────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState(0);

  const catTabs = [
    {label:'All', emoji:'🏠'},
    {label:'Veggies', emoji:'🥦'},
    {label:'Fruits', emoji:'🍎'},
    {label:'Dairy', emoji:'🥛'},
    {label:'Snacks', emoji:'🍟'},
    {label:'Drinks', emoji:'🥤'},
    {label:'Bakery', emoji:'🍞'},
    {label:'Cleaning', emoji:'🧹'},
    {label:'Personal', emoji:'🧴'},
    {label:'Baby', emoji:'👶'},
  ];

  return (
    <div className="phone">
      {/* ── HEADER ── */}
      <header className="header">
        <div className="hd-left">
          <div className="logo-mark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0c831f"><path d="M13 3L4 14h7l-2 8 9-11h-7z"/></svg>
          </div>
          <div className="hd-loc">
            <div className="hd-loc-top">
              <span className="loc-label">Home</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
            <p className="loc-addr">Sector 6, Panchkula, Haryana 134109</p>
          </div>
        </div>
        <div className="hd-right">
          <div className="hd-eta">
            <span className="eta-num">10</span>
            <span className="eta-unit">minutes</span>
          </div>
          <button className="hd-cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2l.03-.12.9-1.68H18c.75 0 1.41-.41 1.75-1.03L22.46 5H5.21L4.27 3H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25z"/></svg>
            <span>My Cart</span>
            <span className="cart-badge">3</span>
          </button>
        </div>
      </header>

      {/* ── SEARCH ── */}
      <div className="search-bar">
        <div className="search-inner">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="#7e818c"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <span className="search-placeholder">Search &quot;milk&quot;</span>
          <div className="search-divider"/>
          <div className="search-mic">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#0c831f"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            <span>Voice</span>
          </div>
        </div>
      </div>

      {/* ── CATEGORY TABS ── */}
      <div className="cat-tabs">
        {catTabs.map((t,idx) => (
          <button key={idx} className={`cat-tab${activeCategory===idx?' cat-tab-active':''}`} onClick={() => setActiveCategory(idx)}>
            <span className="cat-tab-emoji">{t.emoji}</span>
            <span className="cat-tab-label">{t.label}</span>
            {activeCategory===idx && <span className="cat-tab-line"/>}
          </button>
        ))}
      </div>

      {/* ── SCROLLABLE BODY ── */}
      <div className="body">

        {/* CAROUSEL */}
        <BannerCarousel />

        {/* FRESH PICKS */}
        <div className="section">
          <SectionHead title="Fresh picks for you" sub="Delivered in 8 minutes" />
          <div className="grid2">
            {freshPicks.map(p => <ProductCard key={p.id} p={p}/>)}
          </div>
        </div>

        {/* YF PROMO STRIP */}
        <div className="px12 py8">
          <div className="yfstrip">
            <div className="yfs-left">
              <span className="yfs-badge">YELLOW FRIDAY</span>
              <div className="yfs-pct">70% <span>OFF</span></div>
              <div className="yfs-mins">in MINUTES</div>
            </div>
            <div className="yfs-bottles">
              {['🧴','📦','🫧'].map((e,i)=>(
                <div key={i} className="yfs-bottle"><span>{e}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* ALL CATEGORIES */}
        <div className="section">
          <SectionHead title="All categories" />
          <div className="grid4">
            {categories.map(c => (
              <button key={c.id} className="cat-item" style={{background:c.bg}}>
                <div className="cat-icon" style={{background:c.iconBg}}><span>{c.emoji}</span></div>
                <span className="cat-name">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* TRENDING */}
        <div className="section">
          <SectionHead title="Trending subcategories" />
          <div className="hscroll">
            {[
              {name:'Chips & Namkeen',emoji:'🍟',bg:'#fff9c4'},
              {name:'Cold Drinks',emoji:'🥤',bg:'#e3f2fd'},
              {name:'Ice Cream',emoji:'🍦',bg:'#fce4ec'},
              {name:'Chocolates',emoji:'🍫',bg:'#f3e5f5'},
              {name:'Biscuits',emoji:'🍪',bg:'#fff3e0'},
            ].map((t,i)=>(
              <div key={i} className="trend-chip" style={{background:t.bg}}>
                <span className="trend-emoji">{t.emoji}</span>
                <span className="trend-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TRENDING NOW */}
        <div className="section">
          <SectionHead title="Trending now" sub="Most ordered this week" />
          <div className="grid2">
            {trendingItems.map(p => <ProductCard key={p.id} p={p}/>)}
          </div>
        </div>

        {/* COUPONS */}
        <div className="section">
          <SectionHead title="Coupons for you" />
          <div className="hscroll">
            {coupons.map(c => (
              <div key={c.id} className="coupon" style={{background:c.color, borderColor:c.border}}>
                <div className="coupon-top">
                  <span className="coupon-icon">{c.icon}</span>
                  <div>
                    <p className="coupon-label">{c.label}</p>
                    <p className="coupon-sub">{c.sub}</p>
                  </div>
                </div>
                <div className="coupon-divider" style={{borderColor:c.border}}/>
                <div className="coupon-bottom">
                  <span className="coupon-code" style={{color:c.border}}>{c.code}</span>
                  <button className="coupon-apply" style={{background:c.border}}>Apply</button>
                </div>
                <p className="coupon-min">{c.min}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CADBURY BANNER */}
        <div className="px12 py8">
          <div className="cadbury-banner">
            <div className="cadbury-left">
              <p className="cadbury-brand">CADBURY</p>
              <p className="cadbury-title">Mitha Moments</p>
              <p className="cadbury-sub">Starting from ₹10</p>
              <button className="cadbury-btn">Shop Now</button>
            </div>
            <div className="cadbury-right">🍫</div>
          </div>
        </div>

        {/* SHOP IN STORE */}
        <div className="section">
          <SectionHead title="Shop in store" sub="Cleaning & Household" />
          <div className="grid2">
            {storeItems.map(p => <ProductCard key={p.id} p={p}/>)}
          </div>
        </div>

        {/* SECOND YF BANNER */}
        <div className="px12 py8">
          <div className="yfstrip2">
            <div>
              <span className="yfs-badge">YELLOW FRIDAY</span>
              <div className="yfs-pct" style={{fontSize:34}}>70% <span style={{fontSize:20}}>OFF</span></div>
              <div className="yfs-mins">in MINUTES · On cleaning products</div>
            </div>
            <div className="yfs-bottles">
              {['🧼','🧹','🪣'].map((e,i)=>(
                <div key={i} className="yfs-bottle"><span>{e}</span></div>
              ))}
            </div>
          </div>
        </div>

        {/* NEW FOR YOU */}
        <div className="section">
          <SectionHead title="New for you" />
          <div className="hscroll">
            {[
              {name:'Avocado',emoji:'🥑',price:'₹89',bg:'#e8f5e9'},
              {name:'Blueberry',emoji:'🫐',price:'₹129',bg:'#ede7f6'},
              {name:'Kiwi',emoji:'🥝',price:'₹49',bg:'#f1f8e9'},
              {name:'Dragon Fruit',emoji:'🍑',price:'₹199',bg:'#fce4ec'},
              {name:'Fig',emoji:'🍇',price:'₹79',bg:'#f3e5f5'},
            ].map((t,i)=>(
              <div key={i} className="newfor-chip" style={{background:t.bg}}>
                <span className="newfor-emoji">{t.emoji}</span>
                <span className="newfor-name">{t.name}</span>
                <span className="newfor-price">{t.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{height:80}}/>
      </div>

      {/* ── BOTTOM NAV ── */}
      <nav className="bottom-nav">
        {[
          { id:'home', label:'Home', icon:<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> },
          { id:'categories', label:'Categories', icon:<svg viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg> },
          { id:'cart', label:'Cart', badge:3, icon:<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2l.03-.12.9-1.68H18c.75 0 1.41-.41 1.75-1.03L22.46 5H5.21L4.27 3H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25z"/></svg> },
          { id:'account', label:'Account', icon:<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> },
        ].map(item => (
          <button key={item.id} className={`nav-item${activeTab===item.id?' nav-active':''}`} onClick={()=>setActiveTab(item.id)}>
            {activeTab===item.id && <span className="nav-indicator"/>}
            <span className="nav-icon-wrap">
              {item.icon}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
