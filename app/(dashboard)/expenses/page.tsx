export default function ExpensesPage() {
  return (
    <div className="p-8 min-h-screen max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Expense Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Review and optimize your business operating costs for Q3.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-all">
            <span className="material-symbols-outlined text-[18px]">download</span> Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span> New Expense
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left: KPI + Trend */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
          {/* Main KPI */}
          <div className="col-span-3 bg-primary-container text-white p-6 rounded-2xl shadow-sm overflow-hidden relative group">
            <div className="absolute right-0 top-0 opacity-10 scale-150 pointer-events-none group-hover:scale-125 transition-transform duration-700">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            </div>
            <div className="relative z-10">
              <p className="font-label-md text-label-md opacity-80 uppercase tracking-widest mb-2">Total Monthly Spend</p>
              <h3 className="font-display-lg text-display-lg mb-4">৳ 2,45,800.00</h3>
              <div className="flex items-center gap-2">
                <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> 4.2%
                </span>
                <span className="text-label-sm font-label-sm opacity-60">vs last month</span>
              </div>
            </div>
          </div>

          {/* Category Bento Cards */}
          {[
            { icon: 'apartment', pct: '32%', label: 'Office Rent', value: '৳ 78,000' },
            { icon: 'bolt', pct: '12%', label: 'Utilities', value: '৳ 29,400' },
            { icon: 'package', pct: '15%', label: 'Packaging', value: '৳ 36,800' },
          ].map(cat => (
            <div key={cat.label} className="col-span-1 glass-card p-5 rounded-2xl hover:shadow-md transition-all border border-outline-variant">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">{cat.icon}</span>
                </div>
                <span className="text-label-sm font-label-sm text-on-surface-variant">{cat.pct}</span>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">{cat.label}</p>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">{cat.value}</h4>
            </div>
          ))}

          {/* Trend Chart */}
          <div className="col-span-3 glass-card p-6 rounded-2xl border border-outline-variant">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Expense Trends</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Fixed</span>
                <span className="flex items-center gap-1.5 text-label-sm font-label-sm text-on-surface-variant"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Variable</span>
              </div>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 px-2 relative">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                {[0,1,2,3].map(i => <div key={i} className="border-t border-on-surface w-full"></div>)}
              </div>
              {[
                { month: 'Apr', varH: 40, fixH: 60 },
                { month: 'May', varH: 55, fixH: 60 },
                { month: 'Jun', varH: 45, fixH: 60 },
                { month: 'Jul', varH: 85, fixH: 60 },
                { month: 'Aug', varH: 65, fixH: 60 },
              ].map(bar => (
                <div key={bar.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex flex-col items-center gap-1">
                    <div className="w-full max-w-[24px] bg-secondary rounded-t-sm" style={{ height: `${bar.varH}px` }}></div>
                    <div className="w-full max-w-[24px] bg-primary rounded-t-sm" style={{ height: `${bar.fixH}px` }}></div>
                  </div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: AI + Categories */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Cost Optimizer */}
          <div className="bg-surface-container-highest border border-outline-variant p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:rotate-12 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Cost Optimizer</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">AI detected 3 opportunities to reduce your monthly burn rate by up to 12%.</p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
                <span className="material-symbols-outlined text-error mt-0.5">warning</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Packaging Costs Up</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Supplier &apos;EcoPack Ltd&apos; increased rates by 18%. Switch to &apos;Dhaka Wraps&apos; to save ৳ 4,200/mo.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
                <span className="material-symbols-outlined text-on-tertiary-container mt-0.5">verified</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Subscription Audit</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Detected two duplicate courier API subscriptions. Merge accounts to save ৳ 1,800/mo.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-xl hover:opacity-90 transition-all">
              View All Suggestions
            </button>
          </div>

          {/* Spend by Category */}
          <div className="glass-card p-6 rounded-2xl border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Spend by Category</h3>
            <div className="space-y-4">
              {[
                { label: 'Salaries', value: '৳ 85,000', color: 'bg-primary', w: '35%' },
                { label: 'Marketing', value: '৳ 42,000', color: 'bg-secondary', w: '17%' },
                { label: 'Rent & Utilities', value: '৳ 1,07,400', color: 'bg-surface-tint', w: '44%' },
              ].map(cat => (
                <div key={cat.label} className="space-y-1.5">
                  <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
                    <span>{cat.label}</span><span>{cat.value}</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`${cat.color} h-full rounded-full`} style={{ width: cat.w }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Expenses Table */}
        <div className="col-span-12 glass-card rounded-2xl border border-outline-variant overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Expenses</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
              <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant"><span className="material-symbols-outlined text-[20px]">sort</span></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  {['Expense Details', 'Category', 'Type', 'Status', 'Amount'].map((h, i) => (
                    <th key={h} className={`px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider ${i === 4 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  { icon: 'inventory_2', title: 'SKU-8829 Stock Replenishment', sub: 'Auto-entry: Inventory Management', cat: 'Cost of Goods', type: 'Automated', typeCls: 'text-on-tertiary-container', status: 'Cleared', statusCls: 'bg-surface-container-highest text-on-surface', amount: '৳ 12,500' },
                  { icon: 'local_shipping', title: 'Pathao Delivery Commissions', sub: 'Auto-entry: Courier Integration', cat: 'Logistics', type: 'Automated', typeCls: 'text-on-tertiary-container', status: 'Processing', statusCls: 'bg-secondary-fixed text-on-secondary-fixed', amount: '৳ 4,820' },
                  { icon: 'campaign', title: 'Facebook Ads - Q3 Campaign', sub: 'Vendor: Meta Platforms Inc.', cat: 'Marketing', type: 'Manual', typeCls: 'text-on-surface-variant', status: 'Cleared', statusCls: 'bg-surface-container-highest text-on-surface', amount: '৳ 18,000' },
                  { icon: 'badge', title: 'Staff Overtime - August', sub: 'Approved by HR Manager', cat: 'Salaries', type: 'Manual', typeCls: 'text-on-surface-variant', status: 'Pending Approval', statusCls: 'bg-error-container text-on-error-container', amount: '৳ 9,400' },
                ].map(row => (
                  <tr key={row.title} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[18px]">{row.icon}</span>
                        </div>
                        <div>
                          <p className="font-body-md text-body-md text-on-surface font-semibold">{row.title}</p>
                          <p className="font-label-sm text-label-sm text-on-surface-variant">{row.sub}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className="font-body-sm text-body-sm text-on-surface">{row.cat}</span></td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1.5 font-label-sm text-label-sm ${row.typeCls}`}>
                        <span className="material-symbols-outlined text-[16px]">{row.type === 'Automated' ? 'sync' : 'person'}</span> {row.type}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-label-sm text-label-sm px-2.5 py-1 rounded-full ${row.statusCls}`}>{row.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right"><span className="font-headline-sm text-headline-sm text-on-surface">{row.amount}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-container-lowest flex justify-between items-center">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Showing 4 of 128 transactions</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-outline-variant rounded-lg text-label-md font-label-md hover:bg-surface-container-low">Previous</button>
              <button className="px-3 py-1.5 border border-outline-variant rounded-lg text-label-md font-label-md hover:bg-surface-container-low">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
