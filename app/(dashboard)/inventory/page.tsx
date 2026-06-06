export default function InventoryPage() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-lg font-display-lg text-primary tracking-tight">Inventory Management</h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-1">Real-time oversight across all regional hubs.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-outline-variant text-primary rounded-lg font-label-md hover:bg-surface-container-low transition-all active:scale-95 shadow-sm">
            <span className="material-symbols-outlined">sync_alt</span>
            Warehouse Transfer
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-outline-variant text-primary rounded-lg font-label-md hover:bg-surface-container-low transition-all active:scale-95 shadow-sm">
            <span className="material-symbols-outlined">tune</span>
            Stock Adjustment
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95 shadow-lg">
            <span className="material-symbols-outlined">add</span>
            Add Inventory
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-secondary-container/10 text-secondary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            </div>
            <span className="text-on-tertiary-container bg-tertiary-fixed/20 px-2 py-1 rounded text-label-sm font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
            </span>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Current Stock Value</p>
          <h3 className="text-currency-display font-currency-display text-primary">৳ 4,28,45,000</h3>
        </div>
        <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-error-container/20 text-error rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Low Stock Items</p>
          <h3 className="text-headline-lg font-headline-lg text-primary">06 <span className="text-body-sm font-body-sm text-error">Critical</span></h3>
        </div>
        <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-surface-container-highest text-on-surface-variant rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer_off</span>
            </div>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Dead Stock (90+ Days)</p>
          <h3 className="text-headline-lg font-headline-lg text-primary">124 <span className="text-body-sm font-body-sm text-on-surface-variant">SKUs</span></h3>
        </div>
        <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-tertiary-fixed-dim/20 text-on-tertiary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            </div>
          </div>
          <p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Stock in Transit</p>
          <h3 className="text-headline-lg font-headline-lg text-primary">1,450 <span className="text-body-sm font-body-sm text-on-surface-variant">Units</span></h3>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Aging Chart */}
        <div className="col-span-12 lg:col-span-8 glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-headline-sm font-headline-sm text-primary">Inventory Aging Analysis</h4>
            <div className="flex items-center gap-4 text-label-sm font-label-sm text-on-surface-variant">
              <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-secondary"></span> Health Check</div>
              <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-surface-container-highest"></span> Average Latency</div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4">
            {[
              { label: '0-30 Days', h: '40%', color: 'bg-secondary' },
              { label: '31-60 Days', h: '25%', color: 'bg-secondary-container' },
              { label: '61-90 Days', h: '15%', color: 'bg-surface-container-highest' },
              { label: '90-180 Days', h: '20%', color: 'bg-error' },
              { label: '180+ Days', h: '10%', color: 'bg-primary' },
            ].map(bar => (
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-3 group">
                <div className={`w-full ${bar.color} rounded-t-lg transition-all group-hover:opacity-80`} style={{ height: bar.h }}></div>
                <span className="text-label-md font-label-md text-on-surface-variant text-center">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Stock Intelligence */}
        <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-6 rounded-2xl relative overflow-hidden flex flex-col">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed">auto_awesome</span>
              <h4 className="text-headline-sm font-headline-sm">AI Stock Intelligence</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                <p className="text-body-sm font-body-sm text-on-primary/80 mb-2 uppercase tracking-wide">Optimization Insight</p>
                <p className="text-body-md font-body-md">Run a 15% clearance on <span className="font-bold text-tertiary-fixed">Stagnant Items</span> in Banani Hub to free up 14% storage space.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/15 transition-colors cursor-pointer">
                <p className="text-body-sm font-body-sm text-on-primary/80 mb-2 uppercase tracking-wide">Predictive Restock</p>
                <p className="text-body-md font-body-md">Restock <span className="font-bold text-tertiary-fixed">Gadget Pro X</span> - demand increasing by 22% for next month&apos;s forecast.</p>
              </div>
              <button className="w-full py-3 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md rounded-lg mt-4 hover:scale-[1.02] active:scale-95 transition-all">
                View Full Intelligence Report
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Inventory Movement Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
          <h4 className="text-headline-sm font-headline-sm text-primary">Live Inventory Movement</h4>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                {['SKU', 'Product Name', 'Category', 'In-Stock', 'Reserved', 'Available', 'Status', ''].map(h => (
                  <th key={h} className={`px-6 py-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider ${['In-Stock', 'Reserved', 'Available'].includes(h) ? 'text-right' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { sku: 'EL-49201', name: 'Gadget Pro X', sub: 'Version 2.0 Black', cat: 'Electronics', inStock: '1,240', reserved: '80', avail: '1,160', availClass: 'text-primary', status: 'Healthy', statusClass: 'bg-tertiary-fixed text-on-tertiary-fixed', dotClass: 'bg-on-tertiary-fixed' },
                { sku: 'HM-11023', name: 'Ergo Desk Chair', sub: 'Space Gray, Mesh', cat: 'Furniture', inStock: '12', reserved: '8', avail: '4', availClass: 'text-error', status: 'Low Stock', statusClass: 'bg-error-container text-on-error-container', dotClass: 'bg-on-error-container' },
                { sku: 'EL-55210', name: 'UltraCam 4K', sub: 'Weatherproof Outdoor', cat: 'Electronics', inStock: '3,500', reserved: '0', avail: '3,500', availClass: 'text-secondary', status: 'Overstock', statusClass: 'bg-secondary-fixed text-on-secondary-fixed', dotClass: 'bg-on-secondary-fixed' },
              ].map(row => (
                <tr key={row.sku} className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <td className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">{row.sku}</td>
                  <td className="px-6 py-4">
                    <div className="font-headline-sm text-headline-sm text-primary">{row.name}</div>
                    <div className="text-body-sm font-body-sm text-on-surface-variant">{row.sub}</div>
                  </td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-surface-container text-on-surface-variant rounded text-label-sm font-label-sm">{row.cat}</span></td>
                  <td className="px-6 py-4 text-right font-body-md">{row.inStock}</td>
                  <td className="px-6 py-4 text-right font-body-md text-on-surface-variant">{row.reserved}</td>
                  <td className={`px-6 py-4 text-right font-body-md font-bold ${row.availClass}`}>{row.avail}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-label-sm ${row.statusClass}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${row.dotClass}`}></span> {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex justify-between items-center bg-surface">
          <p className="text-label-md font-label-md text-on-surface-variant">Showing 1 to 10 of 450 items</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">Previous</button>
            <button className="px-3 py-1 bg-primary text-on-primary rounded-lg font-label-md text-label-md">1</button>
            <button className="px-3 py-1 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">2</button>
            <button className="px-3 py-1 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
