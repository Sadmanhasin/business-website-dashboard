export default function OrdersPage() {
  return (
    <div className="p-4 sm:p-8 max-w-[1600px] w-full mx-auto space-y-6 sm:space-y-8">
      {/* Header & KPIs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-1">Order Management</h2>
          <p className="text-on-surface-variant font-body-lg">Real-time logistics and fulfillment orchestration.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:min-w-[600px]">
          <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
            <p className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Delivery Success</p>
            <div className="flex items-center justify-between">
              <h3 className="font-headline-lg text-headline-lg">94%</h3>
              <span className="flex items-center text-emerald-600 font-label-md">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> 1.2%
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
            <p className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Cancellation</p>
            <div className="flex items-center justify-between">
              <h3 className="font-headline-lg text-headline-lg">3.2%</h3>
              <span className="flex items-center text-rose-600 font-label-md">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> 0.4%
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
            <p className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Return Rate</p>
            <div className="flex items-center justify-between">
              <h3 className="font-headline-lg text-headline-lg">2.8%</h3>
              <span className="flex items-center text-emerald-600 font-label-md">
                <span className="material-symbols-outlined text-[16px]">trending_down</span> 0.5%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Status Pipeline */}
      <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl overflow-x-auto shadow-sm relative no-scrollbar">
        <div className="flex items-center justify-between mb-8 min-w-[800px]">
          <h4 className="font-headline-sm text-headline-sm">Operational Pipeline</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-surface-container-low p-1 rounded-lg">
              <button className="px-3 py-1 rounded-md text-label-sm font-bold bg-white shadow-sm transition-all">All Orders</button>
              <button className="px-3 py-1 rounded-md text-label-sm font-medium text-on-surface-variant hover:bg-white/50 transition-all flex items-center gap-1">
                Pending <span className="bg-error text-white text-[8px] px-1 rounded-full">24</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-label-md font-medium whitespace-nowrap">Auto-sync active</span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-between items-start min-w-[900px] px-4 pb-4">
          <div className="absolute top-[18px] left-[5%] right-[5%] h-[2px] bg-outline-variant z-0"></div>
          <div className="absolute top-[18px] left-[5%] w-[45%] h-[2px] bg-secondary z-0"></div>
          {[
            { label: 'New', count: '24 Orders', done: true },
            { label: 'Confirmed', count: '12 Orders', done: true },
            { label: 'Packed', count: '45 Orders', done: true },
            { label: 'Dispatched', count: '08 Orders', active: true },
            { label: 'In Transit', count: '132 Orders', icon: 'local_shipping' },
            { label: 'Delivered', count: '1,240 Orders', icon: 'task_alt' },
            { label: 'Returned', count: '14 Orders', icon: 'assignment_return' },
          ].map((step, i) => (
            <div key={i} className={`relative z-10 flex flex-col items-center gap-3 ${!step.done && !step.active ? 'opacity-50' : ''}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ring-4 ring-surface-container-lowest ${
                step.done ? 'bg-secondary text-white' : step.active ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant'
              }`}>
                {step.done ? (
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                ) : step.active ? (
                  <div className="w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                ) : (
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                )}
              </div>
              <div className="text-center">
                <p className={`text-label-md font-bold ${step.active ? 'text-secondary' : ''}`}>{step.label}</p>
                <p className="text-[10px] text-on-surface-variant">{step.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant bg-surface-container-low/50">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative w-full sm:max-w-[240px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">phone</span>
              <input className="w-full pl-9 pr-4 py-2 bg-white border border-outline-variant rounded-lg text-body-sm focus:ring-2 focus:ring-secondary-container" placeholder="Phone Search..." type="text" />
            </div>
            <div className="relative hidden sm:block">
              <select className="pl-3 pr-8 py-2 bg-white border border-outline-variant rounded-lg text-body-sm appearance-none focus:ring-2 focus:ring-secondary-container">
                <option>All Couriers</option>
                <option>Steadfast</option>
                <option>Pathao</option>
                <option>Paperfly</option>
                <option>RedX</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
            </div>
            <div className="relative hidden md:block">
              <button className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant rounded-lg text-body-sm hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Last 30 Days</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-body-sm font-semibold hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-[18px]">file_download</span>
              <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-body-sm font-semibold hover:shadow-lg active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span className="hidden sm:inline">Bulk Confirm</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse order-table">
            <thead>
              <tr className="bg-surface-container-low/30 border-b border-outline-variant">
                <th className="p-4 w-12"><input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" /></th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Order ID</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Customer</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Date</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Payment</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Status</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Courier</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider text-right">Value</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider text-right">Profit</th>
                <th className="p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { id: '#12940', initials: 'AI', name: 'Ariful Islam', phone: '+880 1712-345678', date: 'May 12, 2024', time: '10:24 AM', payment: 'COD', payClass: 'bg-emerald-50 text-emerald-700', status: 'In Transit', statusClass: 'bg-secondary-fixed text-on-secondary-fixed-variant', statusIcon: 'local_shipping', courier: 'Steadfast', value: '৳1,250', profit: '৳450', avatarClass: 'bg-surface-container-highest text-primary' },
                { id: '#12941', initials: 'TA', name: 'Tasnim Ahmed', phone: '+880 1812-445566', date: 'May 12, 2024', time: '', payment: 'Prepaid', payClass: 'bg-blue-50 text-blue-700', status: 'Packed', statusClass: 'bg-surface-container-highest text-on-surface', statusIcon: 'inventory_2', courier: 'Pathao', value: '৳4,800', profit: '৳1,120', avatarClass: 'bg-primary-fixed text-on-primary-fixed' },
                { id: '#12942', initials: 'MR', name: 'Moshiur Rahman', phone: '+880 1612-998877', date: 'May 11, 2024', time: '', payment: 'COD', payClass: 'bg-emerald-50 text-emerald-700', status: 'Delivered', statusClass: 'bg-emerald-100 text-emerald-800', statusIcon: 'task_alt', courier: 'RedX', value: '৳750', profit: '৳210', avatarClass: 'bg-tertiary-fixed text-on-tertiary-fixed' },
              ].map((row) => (
                <tr key={row.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-4"><input className="rounded border-outline-variant text-secondary" type="checkbox" /></td>
                  <td className="p-4" data-label="Order ID">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{row.id}</span>
                  </td>
                  <td className="p-4" data-label="Customer">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] hidden sm:flex ${row.avatarClass}`}>{row.initials}</div>
                      <div>
                        <p className="font-body-md text-on-surface font-semibold">{row.name}</p>
                        <p className="text-[11px] text-on-surface-variant">{row.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4" data-label="Date">
                    <p className="text-body-sm text-on-surface-variant">{row.date}</p>
                    {row.time && <p className="text-[10px] text-outline">{row.time}</p>}
                  </td>
                  <td className="p-4" data-label="Payment">
                    <span className={`text-body-sm font-medium px-2 py-0.5 rounded ${row.payClass}`}>{row.payment}</span>
                  </td>
                  <td className="p-4" data-label="Status">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1 w-fit ${row.statusClass}`}>
                      <span className="material-symbols-outlined text-[14px]">{row.statusIcon}</span>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4" data-label="Courier">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-body-md">{row.courier}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right font-headline-sm" data-label="Value">{row.value}</td>
                  <td className="p-4 text-right font-headline-sm text-emerald-600" data-label="Profit">{row.profit}</td>
                  <td className="p-4 text-center" data-label="Actions">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-1.5 hover:bg-surface-container-high rounded-full transition-all text-on-surface-variant hover:text-secondary open-drawer" title="View Details">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-1.5 hover:bg-surface-container-high rounded-full transition-all text-on-surface-variant hover:text-primary" title="Edit Order">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-label-md text-on-surface-variant">Showing <span className="font-bold">10</span> of <span className="font-bold text-on-surface">1,248</span> orders</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              <button className="w-9 h-9 bg-secondary text-white rounded-lg text-label-md shadow-sm">1</button>
              <button className="w-9 h-9 hover:bg-surface-container-low rounded-lg text-label-md transition-colors">2</button>
              <button className="w-9 h-9 hover:bg-surface-container-low rounded-lg text-label-md transition-colors hidden sm:block">3</button>
              <span className="px-2">...</span>
              <button className="w-9 h-9 hover:bg-surface-container-low rounded-lg text-label-md transition-colors">125</button>
            </div>
            <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bento Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card border border-outline-variant rounded-2xl p-6 shadow-sm overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h5 className="font-headline-sm">Logistics Efficiency</h5>
              <button className="text-secondary font-label-md hover:underline">View heatmaps</button>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[
                { day: 'Sun', h: 40 }, { day: 'Mon', h: 60 }, { day: 'Wed', h: 85 }, { day: 'Fri', h: 95 },
              ].map((bar) => (
                <div key={bar.day} className="flex-1 bg-secondary/10 rounded-t-lg relative group" style={{ height: `${bar.h}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-secondary rounded-t-lg h-[80%] group-hover:h-[90%] transition-all"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold text-on-surface-variant">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-primary text-white rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20 blur-3xl -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-secondary-fixed">
              <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
              <span className="font-label-md tracking-widest uppercase">AI Insight</span>
            </div>
            <h6 className="font-headline-md mb-2 leading-tight">Courier Optimization</h6>
            <p className="text-body-sm opacity-80 mb-6">Steadfast is delivering 12% faster in Chittagong. Re-route pending orders now.</p>
          </div>
          <button className="relative z-10 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-label-md transition-all active:scale-[0.98]">
            Apply Optimization
          </button>
        </div>
      </div>

      {/* Order Detail Drawer */}
      <div id="drawer-overlay" className="fixed inset-0 bg-black/50 z-40 hidden opacity-0 transition-opacity"></div>
      <div id="order-drawer" className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-container-lowest z-50 shadow-2xl overflow-y-auto p-8 border-l border-outline-variant">
        <div className="flex items-center justify-between mb-6">
          <h3 id="drawer-title" className="font-headline-md text-headline-md">Order #12940</h3>
          <button id="close-drawer" className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="p-4 bg-surface-container-low rounded-xl">
            <p className="text-label-sm text-on-surface-variant uppercase font-bold mb-3">Customer</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container">AI</div>
              <div>
                <p className="font-headline-sm">Ariful Islam</p>
                <p className="text-body-sm text-on-surface-variant">+880 1712-345678</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-surface-container-low rounded-xl">
            <p className="text-label-sm text-on-surface-variant uppercase font-bold mb-3">Order Items</p>
            <div className="flex justify-between text-body-md py-2 border-b border-outline-variant">
              <span>Blue Cotton Polo × 2</span><span className="font-bold">৳800</span>
            </div>
            <div className="flex justify-between text-body-md py-2">
              <span>Delivery Fee</span><span className="font-bold">৳60</span>
            </div>
          </div>
          <div className="p-4 bg-primary-container text-white rounded-xl flex justify-between items-center">
            <span className="font-headline-sm">Total Collected</span>
            <span className="font-headline-lg">৳1,250</span>
          </div>
        </div>
      </div>
    </div>
  )
}
