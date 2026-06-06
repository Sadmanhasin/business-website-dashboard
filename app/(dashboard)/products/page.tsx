const products = [
  {
    name: 'Premium Silk Panjabi', sku: 'PAN-2024-001',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAESPyvrUrK5WTL6UH83Y2OmJq8QChUKsNLdypHuHxKyMeXshsyrIBFeKnXAZOL-fwoFW5zsgw_olIP2HVrZm13WkVj331fOTZtr-_6KNoo7tIeLIPBeMLKjJma2nJp0bPqR4GY17YDzdzKqCuxmd562HVvKUAep8O3uneax9u_Yk4occ6YYc4B4vftVdg6dfuUzaBcGlZmpwJZHX4vCO1MdQVnfEqegnLMDWjdzKLpy8VLWjrcV97gYAY6RK7KSPXGnYt67Wqi9r2',
    badges: [
      { label: 'Active', cls: 'bg-on-tertiary-container text-tertiary-fixed' },
      { label: 'High Margin', cls: 'bg-secondary-container text-on-secondary-container' },
    ],
    price: '৳4,500', margin: '42%', marginCls: 'text-on-tertiary-container',
    channels: [{ icon: 'face_nod', label: 'Facebook', value: '৳4,800' }, { icon: 'language', label: 'Website', value: '৳4,500' }, { icon: 'person_pin_circle', label: 'In-person', value: '৳5,200' }],
    stockW: 'w-3/4', stockColor: 'bg-secondary', stock: '142 units', roi: '2.8x',
  },
  {
    name: 'Nordic Smart Watch', sku: 'GAD-2024-882',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi6sD-JM0k8djcxLqYF1R-WqXVpBdVXnMpJhtbj4_M9tvK7ZL-tVjzwhHrtXLlR1KZo-KJK7iY6ugl5DmZwrizQuGkRDOkP5bmx_iQ3ylqHPHm2pj9Rx791DRH-h-aXo9HJI-vIQExwHMPDh206ZKObCaCv5597TB-ijGsDz_UiMkt80wklyTHbJBlyPiy1DhOrR3roHspyqjkhBhcMSc_S3YcxSqTLIJVL0IedN3STbuvk261MBwgw37P1IsHFGq2xiXm-aUw6FwT',
    badges: [
      { label: 'Low Stock', cls: 'bg-error-container text-on-error-container' },
      { label: 'Volume Driver', cls: 'bg-surface-container-highest text-on-surface' },
    ],
    price: '৳8,900', margin: '18%', marginCls: 'text-on-tertiary-container',
    channels: [{ icon: 'face_nod', label: 'Facebook', value: '৳9,200' }, { icon: 'language', label: 'Website', value: '৳8,900' }, { icon: 'person_pin_circle', label: 'In-person', value: '৳9,500' }],
    stockW: 'w-1/5', stockColor: 'bg-error', stock: '12 units', roi: '1.4x',
  },
  {
    name: 'Rose Glow Serum', sku: 'COS-2024-441',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVnd0dhDIRgUWwpfvPYRRv4Ttx0mDU3HBxWWNUUCUHsx-vvw7f-A8dnwlfCcpev2wIJc-Ruv7f8i0M1HgGRuczDxMiCpwjYLK_y039NIxHOzkKWFvNGdHQ1z-H8oZBZj0pBK9mphb-puzk0IddIGG-PnHFoTMGDGxfrhoZm7cweLCKrMfVxuHLLlL7EDJvAPi1wf7Dzhdu_x7CLxydmGa2OnevIm_ghn_667LY0-WZYI-G_aNyZ4tDyokw7Sm7DBqMK2OsN8kCoqaU',
    badges: [
      { label: 'Active', cls: 'bg-on-tertiary-container text-tertiary-fixed' },
      { label: 'High Margin', cls: 'bg-secondary-container text-on-secondary-container' },
    ],
    price: '৳1,250', margin: '55%', marginCls: 'text-on-tertiary-container',
    channels: [{ icon: 'face_nod', label: 'Facebook', value: '৳1,400' }, { icon: 'language', label: 'Website', value: '৳1,250' }, { icon: 'person_pin_circle', label: 'In-person', value: '৳1,500' }],
    stockW: 'w-[90%]', stockColor: 'bg-secondary', stock: '540 units', roi: '3.1x',
  },
  {
    name: 'Wireless Audio Pro', sku: 'GAD-2024-910',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApVmMysVbpB2d2YgT6gxtEpCRnl--IVZEitoO6sxIM6Wy3lmnBOmsHgAVL8rWtqi0LvCq1lI4qwb8C69nz5gCsZZnDZfDU_ACHa0y9sRjMPlDjb3xVqg74g_SbXvu6RR02diMCjN9HH-DP3NP_6A-JxcBlT7ZNGypnzfVPHNiSvgqWVJbzYWEqZADJVSsiT9Dde-vo0spN982qxxaMTk6HJQl53NtufkzG1JeGZ2QDJmLRn4_Qd6Th3WAXGLsQ9LVjFiHXsTgpeF14',
    badges: [{ label: 'Draft', cls: 'bg-surface-container-highest text-on-surface' }],
    price: '৳12,000', margin: '25%', marginCls: 'text-on-tertiary-container',
    channels: [{ icon: 'remove', label: '---', value: '৳0' }],
    stockW: 'w-0', stockColor: 'bg-secondary', stock: '0 units', roi: null, draft: true,
  },
]

export default function ProductsPage() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-display-lg text-primary">Products</h1>
          <p className="text-on-surface-variant font-body-md">Manage 1,284 inventory items across 3 channels.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[18px]">sync</span> Sync Shopify
          </button>
          <button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[18px]">file_download</span> Export CSV
          </button>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2 rounded-lg font-headline-sm text-headline-sm active:scale-95 transition-transform shadow-sm">
            <span className="material-symbols-outlined">add</span> Create Product
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant flex items-center gap-6 shadow-sm">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          <span className="font-label-md text-label-md">Filters</span>
        </div>
        <div className="flex gap-2">
          <select className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 font-label-md text-label-md focus:ring-1 focus:ring-secondary">
            <option>All Categories</option><option>Clothing</option><option>Gadgets</option><option>Cosmetics</option>
          </select>
          <select className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 font-label-md text-label-md focus:ring-1 focus:ring-secondary">
            <option>Status: Active</option><option>Status: Draft</option><option>Status: Out of Stock</option>
          </select>
          <select className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 font-label-md text-label-md focus:ring-1 focus:ring-secondary">
            <option>Profitability: All</option><option>High Margin</option><option>Volume Driver</option>
          </select>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-on-surface-variant font-label-md">View:</span>
          <div className="flex border border-outline-variant rounded-lg overflow-hidden">
            <button className="p-1.5 bg-secondary-container text-on-secondary-container"><span className="material-symbols-outlined text-[20px]">grid_view</span></button>
            <button className="p-1.5 hover:bg-surface-container-low"><span className="material-symbols-outlined text-[20px]">list</span></button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.sku} className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer">
            <div className="h-48 bg-surface-container-low relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={p.img} alt={p.name} />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {p.badges.map(b => (
                  <span key={b.label} className={`px-2 py-1 rounded-md font-label-sm text-label-sm ${b.cls}`}>{b.label}</span>
                ))}
              </div>
            </div>
            <div className={`p-4 space-y-4 ${p.draft ? 'opacity-75' : ''}`}>
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{p.name}</h3>
                  <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                </div>
                <p className="text-on-surface-variant font-body-sm">SKU: {p.sku}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-outline-variant border-dashed">
                <div>
                  <p className="text-on-surface-variant font-label-sm uppercase">Base Price</p>
                  <p className="font-currency-display text-headline-sm text-primary">{p.price}</p>
                </div>
                <div>
                  <p className="text-on-surface-variant font-label-sm uppercase">Margin</p>
                  <p className={`font-headline-sm text-headline-sm ${p.marginCls}`}>{p.margin}</p>
                </div>
              </div>
              <div className="bg-surface-container-low p-3 rounded-xl space-y-2">
                {p.channels.map(ch => (
                  <div key={ch.label} className="flex justify-between items-center">
                    <span className="font-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">{ch.icon}</span> {ch.label}
                    </span>
                    <span className="font-label-md text-on-surface font-bold">{ch.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant font-label-sm">Stock Level</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                      <div className={`${p.stockW} h-full ${p.stockColor}`}></div>
                    </div>
                    <span className="font-label-md text-on-surface">{p.stock}</span>
                  </div>
                </div>
                {p.roi && (
                  <div className="text-right">
                    <span className="text-on-surface-variant font-label-sm">ROI</span>
                    <p className="font-headline-sm text-headline-sm text-secondary">{p.roi}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
