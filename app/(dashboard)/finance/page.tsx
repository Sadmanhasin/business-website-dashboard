export default function FinancePage() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface">Finance Hub</h1>
          <p className="text-on-surface-variant font-body-md">Overview of your business profitability and cash performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-white text-on-surface rounded-lg font-label-md hover:bg-surface-container-low transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
            Monthly Profit Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-white text-on-surface rounded-lg font-label-md hover:bg-surface-container-low transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
            Tax Filing Summary
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* P&L Statement */}
        <section className="col-span-12 lg:col-span-8 p-6 bg-white border border-outline-variant rounded-xl shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md">Real-time P&amp;L Statement</h2>
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Live - August 2023</span>
          </div>
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="space-y-1">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Revenue</p>
              <p className="font-currency-display text-currency-display">৳4,250,000</p>
            </div>
            <div className="flex justify-center text-on-surface-variant opacity-30">
              <span className="material-symbols-outlined">remove</span>
            </div>
            <div className="col-span-2 p-4 bg-surface-container-low rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-label-sm font-label-sm">
                  <span className="text-on-surface-variant">COGS + OpEx + Ads</span>
                  <span className="text-error">৳3,120,500</span>
                </div>
                <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                  <div className="bg-error w-[73%] h-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant opacity-30">drag_handle</span>
              <div className="text-right">
                <p className="text-label-sm font-label-sm text-on-tertiary-container uppercase tracking-wider">Net Profit</p>
                <p className="font-headline-lg text-headline-lg text-on-tertiary-container">৳1,129,500</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-4 border-t border-outline-variant">
            {[
              { label: 'COGS', value: '৳1,850,000' },
              { label: 'Marketing', value: '৳420,000' },
              { label: 'Delivery', value: '৳150,500' },
              { label: 'OpEx', value: '৳700,000' },
            ].map(item => (
              <div key={item.label} className="p-3">
                <p className="text-label-sm font-label-sm text-on-surface-variant">{item.label}</p>
                <p className="font-headline-sm text-headline-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Asset Liquidity */}
        <section className="col-span-12 lg:col-span-4 p-6 bg-white border border-outline-variant rounded-xl shadow-sm flex flex-col justify-between">
          <h2 className="font-headline-md text-headline-md mb-6">Asset Liquidity</h2>
          <div className="space-y-6">
            {[
              { icon: 'account_balance', label: 'Bank Balance', sub: '4 Active Accounts', value: '৳2,840,000', iconBg: 'bg-secondary-container/10 text-secondary' },
              { icon: 'local_shipping', label: 'Cash in Courier', sub: 'Pending Settlements', value: '৳845,200', iconBg: 'bg-orange-100 text-orange-600' },
              { icon: 'person_search', label: 'Customer Dues', sub: 'B2B Accounts', value: '৳120,000', iconBg: 'bg-blue-100 text-blue-600' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconBg}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">{item.label}</p>
                    <p className="text-label-sm text-on-surface-variant">{item.sub}</p>
                  </div>
                </div>
                <p className="font-headline-sm text-headline-sm">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant">
            <div className="flex justify-between items-center text-on-surface">
              <span className="font-label-md">Total Liquidity</span>
              <span className="font-headline-md text-headline-md">৳3,805,200</span>
            </div>
          </div>
        </section>

        {/* Cash Flow */}
        <section className="col-span-12 lg:col-span-7 p-6 bg-white border border-outline-variant rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline-md text-headline-md">Cash Flow Index</h2>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 text-label-sm font-label-sm">
                <span className="w-3 h-3 rounded-full bg-secondary"></span> Inflow
              </div>
              <div className="flex items-center gap-2 text-label-sm font-label-sm">
                <span className="w-3 h-3 rounded-full bg-outline"></span> Outflow
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-4 px-2">
            {[
              { month: 'Mar', inH: '60%', outH: '80%', highlight: false },
              { month: 'Apr', inH: '75%', outH: '70%', highlight: false },
              { month: 'May', inH: '90%', outH: '60%', highlight: false },
              { month: 'Jun', inH: '85%', outH: '90%', highlight: false },
              { month: 'Jul', inH: '100%', outH: '70%', highlight: true },
            ].map(bar => (
              <div key={bar.month} className="flex-1 flex flex-col justify-end gap-1 h-full group">
                <div className="flex gap-1 items-end" style={{ height: bar.inH }}>
                  <div className={`${bar.highlight ? 'bg-secondary' : 'bg-secondary/40'} w-full rounded-t-sm h-full hover:bg-secondary transition-colors`}></div>
                  <div className={`bg-outline-variant w-full rounded-t-sm hover:bg-outline transition-colors`} style={{ height: bar.outH }}></div>
                </div>
                <p className={`text-center text-label-sm font-label-sm mt-2 ${bar.highlight ? 'text-secondary font-bold' : 'opacity-50'}`}>{bar.month}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expense Distribution */}
        <section className="col-span-12 lg:col-span-5 p-6 bg-white border border-outline-variant rounded-xl shadow-sm">
          <h2 className="font-headline-md text-headline-md mb-8">Expense Distribution</h2>
          <div className="flex items-center gap-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="transparent" r="16" stroke="#E2E8F0" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="16" stroke="#0F172A" strokeDasharray="40 100" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="16" stroke="#2170e4" strokeDasharray="25 100" strokeDashoffset="-40" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="16" stroke="#009668" strokeDasharray="20 100" strokeDashoffset="-65" strokeWidth="4"></circle>
                <circle cx="18" cy="18" fill="transparent" r="16" stroke="#ba1a1a" strokeDasharray="15 100" strokeDashoffset="-85" strokeWidth="4"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-label-sm text-on-surface-variant">Total</span>
                <span className="font-headline-sm">৳3.1M</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              {[
                { color: 'bg-primary', label: 'Salary', pct: '40%' },
                { color: 'bg-secondary', label: 'Procurement', pct: '25%' },
                { color: 'bg-[#009668]', label: 'Marketing', pct: '20%' },
                { color: 'bg-error', label: 'Rent/Misc', pct: '15%' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                    <span className="text-label-md">{item.label}</span>
                  </div>
                  <span className="text-label-md font-bold">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Recent Transactions */}
      <section className="bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-outline-variant">
          <h2 className="font-headline-md text-headline-md">Recent Transactions</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-label-md bg-surface-container-low border border-outline-variant rounded hover:bg-surface-container-high transition-colors">All Types</button>
            <button className="px-3 py-1 text-label-md bg-white border border-outline-variant rounded hover:bg-surface-container-low transition-colors">Income Only</button>
            <button className="px-3 py-1 text-label-md bg-white border border-outline-variant rounded hover:bg-surface-container-low transition-colors">Expenses Only</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low">
              <tr>
                {['Date', 'Description', 'Category', 'Amount', 'Status', ''].map(h => (
                  <th key={h} className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { date: 'Aug 24, 2023', desc: 'Warehouse Rent - Sector 7', txn: 'TXN-009823', cat: 'Operating Expense', amount: '- ৳125,000', amtClass: 'text-error', status: 'Settled', statusClass: 'text-secondary', dotClass: 'bg-secondary' },
                { date: 'Aug 23, 2023', desc: 'Bulk Order Settlement - RedX Courier', txn: 'TXN-009822', cat: 'Sales Income', amount: '+ ৳450,200', amtClass: 'text-on-tertiary-container', status: 'Settled', statusClass: 'text-secondary', dotClass: 'bg-secondary' },
                { date: 'Aug 22, 2023', desc: 'Facebook Ad Spend - Monsoon Sale', txn: 'TXN-009821', cat: 'Marketing', amount: '- ৳52,400', amtClass: 'text-error', status: 'Processing', statusClass: 'text-orange-600', dotClass: 'bg-orange-500 animate-pulse' },
                { date: 'Aug 21, 2023', desc: 'Office Utility Bills', txn: 'TXN-009820', cat: 'Utilities', amount: '- ৳18,300', amtClass: 'text-error', status: 'Settled', statusClass: 'text-secondary', dotClass: 'bg-secondary' },
              ].map(row => (
                <tr key={row.txn} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4 font-body-sm text-body-sm">{row.date}</td>
                  <td className="px-6 py-4">
                    <p className="font-body-md text-body-md text-on-surface">{row.desc}</p>
                    <p className="text-label-sm text-on-surface-variant">{row.txn}</p>
                  </td>
                  <td className="px-6 py-4"><span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded text-label-sm">{row.cat}</span></td>
                  <td className={`px-6 py-4 text-right font-headline-sm ${row.amtClass}`}>{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-label-sm font-label-sm ${row.statusClass}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${row.dotClass}`}></span> {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-all">more_vert</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-surface-container-lowest flex justify-center border-t border-outline-variant">
          <button className="text-secondary font-label-md hover:underline decoration-2 underline-offset-4">View All Transactions</button>
        </div>
      </section>
    </div>
  )
}
