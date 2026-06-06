export default function DashboardPage() {
  return (
    <div className="p-container-padding-desktop flex-1 flex flex-col gap-8 max-w-[1600px] w-full mx-auto">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Overview</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-time data for your business today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-body-lg">calendar_today</span>
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">
            <span className="material-symbols-outlined text-body-lg">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Top KPIs Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-stack-md">
        <button className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all text-left group active:scale-95">
          <p className="font-label-md text-label-md text-on-surface-variant mb-1">Today&apos;s Sales</p>
          <h3 className="font-currency-display text-currency-display text-on-surface group-hover:text-secondary transition-colors">৳42,500</h3>
          <div className="flex items-center gap-1 mt-2 text-emerald-600">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span className="font-label-sm text-label-sm">+12% vs yesterday</span>
          </div>
        </button>
        <button className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all text-left group active:scale-95">
          <p className="font-label-md text-label-md text-on-surface-variant mb-1">Monthly Sales</p>
          <h3 className="font-currency-display text-currency-display text-on-surface group-hover:text-secondary transition-colors">৳1.2M</h3>
          <div className="flex items-center gap-1 mt-2 text-emerald-600">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span className="font-label-sm text-label-sm">On track for target</span>
          </div>
        </button>
        <button className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all text-left group active:scale-95">
          <p className="font-label-md text-label-md text-on-surface-variant mb-1">Net Profit</p>
          <h3 className="font-currency-display text-currency-display text-on-surface group-hover:text-secondary transition-colors">৳320k</h3>
          <div className="flex items-center gap-1 mt-2 text-on-primary-container">
            <span className="material-symbols-outlined text-sm">info</span>
            <span className="font-label-sm text-label-sm">26% margin</span>
          </div>
        </button>
        <button className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all text-left group active:scale-95">
          <p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Orders</p>
          <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-secondary transition-colors">145</h3>
          <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            <span className="font-label-sm text-label-sm">Avg. ৳8,275/order</span>
          </div>
        </button>
        <button className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all text-left group active:scale-95">
          <p className="font-label-md text-label-md text-on-surface-variant mb-1">Pending Orders</p>
          <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-secondary transition-colors">12</h3>
          <div className="flex items-center gap-1 mt-2 text-secondary font-bold">
            <span className="material-symbols-outlined text-sm">priority_high</span>
            <span className="font-label-sm text-label-sm">3 urgent</span>
          </div>
        </button>
        <button className="bg-white p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all text-left group active:scale-95">
          <p className="font-label-md text-label-md text-on-surface-variant mb-1">Cash in Courier</p>
          <h3 className="font-currency-display text-currency-display text-on-surface group-hover:text-secondary transition-colors">৳85k</h3>
          <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">local_shipping</span>
            <span className="font-label-sm text-label-sm">Awaiting settlement</span>
          </div>
        </button>
      </section>

      {/* Quick Actions Panel */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-md text-headline-md text-on-surface">Quick Actions Panel</h3>
          <span className="text-label-sm font-label-sm text-on-surface-variant">Most frequently used tasks</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button className="action-tile-hover flex flex-col items-center gap-3 p-6 bg-white border border-outline-variant rounded-2xl shadow-sm hover:shadow-lg hover:border-secondary transition-all active:scale-95 group">
            <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">add_shopping_cart</span>
            </div>
            <span className="font-label-md text-label-md font-bold text-on-surface">Add Order</span>
          </button>
          <button className="action-tile-hover flex flex-col items-center gap-3 p-6 bg-white border border-outline-variant rounded-2xl shadow-sm hover:shadow-lg hover:border-secondary transition-all active:scale-95 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface group-hover:bg-error group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">receipt_long</span>
            </div>
            <span className="font-label-md text-label-md font-bold text-on-surface">Add Expense</span>
          </button>
          <button className="action-tile-hover flex flex-col items-center gap-3 p-6 bg-white border border-outline-variant rounded-2xl shadow-sm hover:shadow-lg hover:border-secondary transition-all active:scale-95 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">add_box</span>
            </div>
            <span className="font-label-md text-label-md font-bold text-on-surface">Add Product</span>
          </button>
          <button className="action-tile-hover flex flex-col items-center gap-3 p-6 bg-white border border-outline-variant rounded-2xl shadow-sm hover:shadow-lg hover:border-secondary transition-all active:scale-95 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface group-hover:bg-secondary transition-colors group-hover:text-white">
              <span className="material-symbols-outlined text-2xl">inventory_2</span>
            </div>
            <span className="font-label-md text-label-md font-bold text-on-surface">Inventory</span>
          </button>
          <button className="action-tile-hover flex flex-col items-center gap-3 p-6 bg-white border border-outline-variant rounded-2xl shadow-sm hover:shadow-lg hover:border-secondary transition-all active:scale-95 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface group-hover:bg-tertiary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">person_add</span>
            </div>
            <span className="font-label-md text-label-md font-bold text-on-surface">Add Employee</span>
          </button>
          <button className="action-tile-hover flex flex-col items-center gap-3 p-6 bg-white border border-outline-variant rounded-2xl shadow-sm hover:shadow-lg hover:border-secondary transition-all active:scale-95 group">
            <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface group-hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-2xl text-secondary-container group-hover:text-on-secondary-container">campaign</span>
            </div>
            <span className="font-label-md text-label-md font-bold text-on-surface">New Campaign</span>
          </button>
        </div>
      </section>

      {/* Middle Section: Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue vs Profit Chart */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-headline-sm text-headline-sm">Revenue vs Profit</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Daily trend comparison for the last 14 days</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                <span className="font-label-sm text-label-sm">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="font-label-sm text-label-sm">Profit</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] w-full relative flex items-end gap-2 pb-6 cursor-pointer">
            {[40, 55, 45, 70, 60, 85, 95, 65, 50, 75, 80, 90, 100, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-surface-container rounded-t-md hover:bg-secondary-container transition-colors relative group" style={{ height: `${h}%` }}>
                {i === 0 && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">৳28k</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sales by Channel */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-outline-variant shadow-sm">
          <h3 className="font-headline-sm text-headline-sm mb-6">Sales by Channel</h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="flex justify-between items-center text-label-md">
                <span className="flex items-center gap-2 transition-colors group-hover:text-blue-600"><span className="material-symbols-outlined text-blue-600">face_nod</span> Facebook Store</span>
                <span className="font-bold">৳650k</span>
              </div>
              <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[65%] rounded-full group-hover:opacity-80 transition-opacity"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="flex justify-between items-center text-label-md">
                <span className="flex items-center gap-2 transition-colors group-hover:text-green-600"><span className="material-symbols-outlined text-green-600">shopping_cart</span> Shopify</span>
                <span className="font-bold">৳420k</span>
              </div>
              <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                <div className="bg-green-600 h-full w-[42%] rounded-full group-hover:opacity-80 transition-opacity"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 group cursor-pointer">
              <div className="flex justify-between items-center text-label-md">
                <span className="flex items-center gap-2 transition-colors group-hover:text-orange-600"><span className="material-symbols-outlined text-orange-600">storefront</span> In-person</span>
                <span className="font-bold">৳130k</span>
              </div>
              <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden">
                <div className="bg-orange-600 h-full w-[13%] rounded-full group-hover:opacity-80 transition-opacity"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 p-4 bg-primary-container rounded-xl text-white relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-label-sm font-label-sm opacity-80 uppercase tracking-widest">Global Health</p>
              <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
                  <circle className="transition-all duration-1000 group-hover:stroke-white" cx="40" cy="40" fill="none" r="34" stroke="#4edea3" strokeDasharray="213.6" strokeDashoffset="25.6" strokeWidth="8"></circle>
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

      {/* Lower Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* AI Insights */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white to-surface-container-low p-6 rounded-2xl border border-outline-variant shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">auto_awesome</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <h3 className="font-headline-sm text-headline-sm">AI Insights Advisor</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/60 p-4 rounded-xl border border-outline-variant/50 hover:border-secondary transition-all cursor-pointer group active:scale-95">
              <span className="material-symbols-outlined text-error mb-2">warning</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Restock Alert</p>
              <p className="font-body-md text-body-md mt-1 group-hover:text-primary transition-colors">Gadget Pro X is low (only 4 left)</p>
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-outline-variant/50 hover:border-emerald-500 transition-all cursor-pointer group active:scale-95">
              <span className="material-symbols-outlined text-emerald-600 mb-2">trending_up</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Best Seller</p>
              <p className="font-body-md text-body-md mt-1 group-hover:text-primary transition-colors">Velvet Abaya (45% growth)</p>
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-outline-variant/50 hover:border-orange-500 transition-all cursor-pointer group active:scale-95">
              <span className="material-symbols-outlined text-orange-600 mb-2">timer</span>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold">Dead Stock</p>
              <p className="font-body-md text-body-md mt-1 group-hover:text-primary transition-colors">15 items in inventory &gt; 90 days</p>
            </div>
          </div>
        </div>
        {/* Recent Updates */}
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-4">
          <h3 className="font-headline-sm text-headline-sm mb-2">Recent Updates</h3>
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar max-h-[200px]">
            <div className="flex gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-secondary">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-sm text-on-secondary-container">campaign</span>
              </div>
              <div>
                <p className="text-label-md font-bold">Courier Sync Completed</p>
                <p className="text-body-sm text-on-surface-variant">45 orders updated successfully</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border-l-4 border-emerald-500">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-sm text-emerald-600">payments</span>
              </div>
              <div>
                <p className="text-label-md font-bold">Payment Received</p>
                <p className="text-body-sm text-on-surface-variant">Shopify payout ৳24,500 settled</p>
              </div>
            </div>
          </div>
          <button className="w-full text-center py-2 text-label-md text-secondary font-bold hover:underline">View All Notifications</button>
        </div>
      </section>
    </div>
  )
}
