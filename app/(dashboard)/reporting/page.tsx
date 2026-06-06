export default function ReportingPage() {
  return (
    <main className="p-8 min-h-screen space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Reporting Center</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Generate, schedule, and archive detailed business reports.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest border border-outline-variant px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-low transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">schedule</span> Schedule Report
          </button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-lg hover:opacity-90 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[20px]">add</span> New Report
          </button>
        </div>
      </div>

      {/* Configuration Bento */}
      <div className="grid grid-cols-12 gap-6">
        {/* Report Config Panel */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-sm text-headline-sm">Report Configuration</h3>
            <span className="text-on-tertiary-container bg-tertiary-fixed-dim/20 px-3 py-1 rounded-full text-label-sm font-label-sm">System Ready</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant block">Report Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center gap-2 p-3 rounded-lg border border-secondary text-secondary bg-secondary-fixed/30 font-label-md">
                  <span className="material-symbols-outlined">trending_up</span> Sales
                </button>
                <button className="flex items-center gap-2 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-all font-label-md">
                  <span className="material-symbols-outlined">inventory</span> Inventory
                </button>
                <button className="flex items-center gap-2 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-all font-label-md">
                  <span className="material-symbols-outlined">campaign</span> Marketing
                </button>
                <button className="flex items-center gap-2 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-all font-label-md">
                  <span className="material-symbols-outlined">account_balance_wallet</span> Profit &amp; Loss
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant block">Date Range</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-body-md focus:ring-2 focus:ring-secondary-container outline-none">
                  <option>Last 30 Days</option><option>Last Quarter</option><option>Year to Date</option><option>Custom Range</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant block">Export Format</label>
                <div className="flex gap-3">
                  {['PDF', 'Excel', 'CSV'].map((fmt, i) => (
                    <label key={fmt} className={`flex-1 flex items-center justify-center gap-2 border border-outline-variant p-2 rounded-lg cursor-pointer hover:bg-surface-container-low transition-all ${i === 0 ? 'bg-primary-container text-on-primary-container border-primary' : ''}`}>
                      <span className="font-label-md">{fmt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant flex items-center justify-between">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="rounded text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface-variant">Include charts</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="rounded text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface-variant">Raw data table</span>
              </label>
            </div>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-headline-sm flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all">
              <span className="material-symbols-outlined">download</span> Generate and Download
            </button>
          </div>
        </div>

        {/* Stats & Schedules */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-primary-container text-on-primary-container rounded-xl p-6 relative overflow-hidden flex-1 flex flex-col justify-between">
            <div className="relative z-10">
              <h4 className="font-headline-sm text-headline-sm opacity-80">Total Exported Reports</h4>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display-lg text-display-lg font-bold">1,284</span>
                <span className="text-tertiary-fixed font-label-md flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 12%
                </span>
              </div>
            </div>
            <div className="relative z-10 mt-4 h-16 w-full">
              <div className="flex items-end gap-1 h-full">
                {['30%','45%','35%','60%','50%','80%','70%'].map((h, i) => (
                  <div key={i} className="w-full bg-on-primary-container/20 rounded-t-sm" style={{ height: h }}></div>
                ))}
              </div>
            </div>
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-container/20 blur-3xl rounded-full"></div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-headline-sm text-headline-sm">Active Schedules</h4>
              <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
            </div>
            <div className="space-y-4">
              {[
                { icon: 'mail', iconCls: 'text-secondary', label: 'Weekly Sales Digest', sub: 'Every Monday at 9:00 AM' },
                { icon: 'cloud_upload', iconCls: 'text-on-tertiary-container', label: 'Monthly Inventory Audit', sub: '1st of every month' },
              ].map(sched => (
                <div key={sched.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-surface-container-low rounded-lg">
                      <span className={`material-symbols-outlined ${sched.iconCls}`}>{sched.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md">{sched.label}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{sched.sub}</p>
                    </div>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Report History */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
          <div>
            <h3 className="font-headline-sm text-headline-sm">Report History</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Archive of all generated reports from the last 90 days.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
            <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low"><span className="material-symbols-outlined text-[20px]">search</span></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F9FAFB] border-b border-outline-variant">
              <tr>
                {['Report Name', 'Type', 'Generated By', 'Date Created', 'Format', 'Action'].map(h => (
                  <th key={h} className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { icon: 'description', iconCls: 'text-error', name: 'Q3_Sales_Performance_Final.pdf', typeBadge: 'Sales', typeCls: 'bg-secondary-fixed/40 text-on-secondary-fixed', by: 'Admin (Zubair H.)', date: 'Oct 24, 2023 11:45 PM', format: 'PDF' },
                { icon: 'table_chart', iconCls: 'text-on-tertiary-container', name: 'Inventory_Stock_Levels_Oct.xlsx', typeBadge: 'Inventory', typeCls: 'bg-surface-container-high text-on-surface-variant', by: 'System (Auto)', date: 'Oct 22, 2023 09:00 AM', format: 'XLSX' },
                { icon: 'list_alt', iconCls: 'text-on-surface-variant', name: 'Marketing_Campaign_ROI.csv', typeBadge: 'Marketing', typeCls: 'bg-tertiary-fixed/30 text-on-tertiary-fixed-variant', by: 'Merchant (Sarah K.)', date: 'Oct 20, 2023 02:30 PM', format: 'CSV' },
                { icon: 'description', iconCls: 'text-error', name: 'Profit_Loss_Statement_FY23.pdf', typeBadge: 'Finance', typeCls: 'bg-error-container text-on-error-container', by: 'Admin (Zubair H.)', date: 'Oct 18, 2023 04:15 PM', format: 'PDF' },
              ].map(row => (
                <tr key={row.name} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${row.iconCls}`}>{row.icon}</span>
                      <span className="font-body-md text-body-md font-medium">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-label-sm font-label-sm ${row.typeCls}`}>{row.typeBadge}</span></td>
                  <td className="px-6 py-4 font-body-sm text-body-sm">{row.by}</td>
                  <td className="px-6 py-4 font-body-sm text-body-sm">{row.date}</td>
                  <td className="px-6 py-4 font-label-md text-label-md">{row.format}</td>
                  <td className="px-6 py-4">
                    <button className="text-secondary hover:underline font-label-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">download</span> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-surface border-t border-outline-variant flex items-center justify-between">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 4 of 28 reports</span>
          <div className="flex gap-2">
            <button className="p-2 rounded border border-outline-variant opacity-30 pointer-events-none"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="p-2 rounded border border-outline-variant bg-primary text-on-primary font-label-md px-3">1</button>
            <button className="p-2 rounded border border-outline-variant hover:bg-surface-container-low transition-colors font-label-md px-3">2</button>
            <button className="p-2 rounded border border-outline-variant hover:bg-surface-container-low transition-colors font-label-md px-3">3</button>
            <button className="p-2 rounded border border-outline-variant hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </section>
    </main>
  )
}
