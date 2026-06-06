export default function MerchantPage() {
  return (
    <div className="p-container-padding-desktop flex-1 flex flex-col gap-8 max-w-[1600px] w-full mx-auto p-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time data for your business today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-body-lg">calendar_today</span> Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">
            <span className="material-symbols-outlined text-body-lg">download</span> Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "Today's Sales", value: '৳42,500', trendIcon: 'trending_up', trendCls: 'text-emerald-600', trendText: '+12% vs yesterday' },
          { label: 'Monthly Sales', value: '৳1.2M', trendIcon: 'trending_up', trendCls: 'text-emerald-600', trendText: 'On track for target' },
          { label: 'Net Profit', value: '৳320k', trendIcon: 'info', trendCls: 'text-on-primary-container', trendText: '26% margin' },
          { label: 'Total Orders', value: '145', trendIcon: 'shopping_bag', trendCls: 'text-on-surface-variant', trendText: 'Avg. ৳8,275/order', valueClass: 'text-headline-lg' },
          { label: 'Pending Orders', value: '12', trendIcon: 'priority_high', trendCls: 'text-secondary font-bold', trendText: '3 urgent', valueClass: 'text-headline-lg' },
          { label: 'Cash in Courier', value: '৳85k', trendIcon: 'local_shipping', trendCls: 'text-on-surface-variant', trendText: 'Awaiting settlement' },
        ].map(k => (
          <div key={k.label} className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">{k.label}</p>
            <h3 className={`${k.valueClass ?? 'font-currency-display text-currency-display'} text-on-surface`}>{k.value}</h3>
            <div className={`flex items-center gap-1 mt-2 ${k.trendCls}`}>
              <span className="material-symbols-outlined text-sm">{k.trendIcon}</span>
              <span className="font-label-sm text-label-sm">{k.trendText}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Middle Bento: Chart + Sales Channels */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue vs Profit Chart */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-headline-sm text-headline-sm">Revenue vs Profit</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Daily trend comparison for the last 14 days</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary-container"></span><span className="font-label-sm text-label-sm">Revenue</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span><span className="font-label-sm text-label-sm">Profit</span></div>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] w-full relative flex items-end gap-2 pb-6">
            {['40%','55%','45%','70%','60%','85%','95%','65%','50%','75%','80%','90%','100%','85%'].map((h, i) => (
              <div key={i} className="flex-1 bg-surface-container rounded-t-md hover:bg-secondary-container transition-colors relative group" style={{ height: h }}>
                {i === 0 && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">৳28k</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Sales by Channel */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-outline-variant shadow-sm">
          <h3 className="font-headline-sm text-headline-sm mb-6">Sales by Channel</h3>
          <div className="flex flex-col gap-6">
            {[
              { icon: 'face_nod', iconCls: 'text-blue-600', label: 'Facebook Store', value: '৳650k', barCls: 'bg-blue-600', w: '65%' },
              { icon: 'shopping_cart', iconCls: 'text-green-600', label: 'Shopify', value: '৳420k', barCls: 'bg-green-600', w: '42%' },
              { icon: 'storefront', iconCls: 'text-orange-600', label: 'In-person', value: '৳130k', barCls: 'bg-orange-600', w: '13%' },
            ].map(ch => (
              <div key={ch.label} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-label-md">
                  <span className="flex items-center gap-2"><span className={`material-symbols-outlined ${ch.iconCls}`}>{ch.icon}</span> {ch.label}</span>
                  <span className="font-bold">{ch.value}</span>
                </div>
                <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                  <div className={`${ch.barCls} h-full rounded-full`} style={{ width: ch.w }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-primary-container rounded-xl text-white">
            <div className="flex items-center justify-between mb-2">
              <p className="text-label-sm font-label-sm opacity-80 uppercase tracking-widest">Global Health</p>
              <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
                  <circle cx="40" cy="40" fill="none" r="34" stroke="#4edea3" strokeDasharray="213.6" strokeDashoffset="25.6" strokeWidth="8"></circle>
                </svg>
                <span className="absolute font-headline-lg text-white">88</span>
              </div>
              <div className="flex-1">
                <p className="text-headline-sm font-headline-sm">Excellent</p>
                <p className="text-label-sm opacity-70">Your business is outperforming 92% of local peers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower: AI Insights + Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-gradient-to-br from-white to-surface-container-low p-6 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">auto_awesome</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h3 className="font-headline-sm text-headline-sm">AI Insights Advisor</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/60 p-4 rounded-xl border border-outline-variant/50 hover:border-secondary transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-error mb-2">warning</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Restock Alert</p>
              <p className="font-body-md text-body-md mt-1 group-hover:text-primary transition-colors">Gadget Pro X is low (only 4 left)</p>
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-outline-variant/50 hover:border-emerald-500 transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-emerald-600 mb-2">trending_up</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Best Seller</p>
              <p className="font-body-md text-body-md mt-1 group-hover:text-primary transition-colors">Velvet Abaya (45% growth)</p>
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-outline-variant/50 hover:border-orange-500 transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-orange-600 mb-2">timer</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Dead Stock</p>
              <p className="font-body-md text-body-md mt-1 group-hover:text-primary transition-colors">15 items in inventory &gt; 90 days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-4">
          <h3 className="font-headline-sm text-headline-sm mb-2">Quick Actions</h3>
          <button className="w-full flex items-center justify-between p-4 bg-primary text-white rounded-xl hover:bg-opacity-90 active:scale-[0.98] transition-all group">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined p-2 bg-white/20 rounded-lg">add_shopping_cart</span>
              <span className="font-label-md text-label-md font-bold">Add New Order</span>
            </div>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low text-on-surface rounded-xl hover:bg-surface-container-high active:scale-[0.98] transition-all group border border-outline-variant/30">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined p-2 bg-white rounded-lg shadow-sm">account_balance_wallet</span>
              <span className="font-label-md text-label-md font-bold text-on-surface">Record Expense</span>
            </div>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="flex flex-col items-center justify-center p-3 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors gap-2">
              <span className="material-symbols-outlined text-on-surface-variant">add_circle</span>
              <span className="font-label-sm text-label-sm">New Product</span>
            </button>
            <button className="flex flex-col items-center justify-center p-3 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors gap-2">
              <span className="material-symbols-outlined text-on-surface-variant">person_add</span>
              <span className="font-label-sm text-label-sm">New Customer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
