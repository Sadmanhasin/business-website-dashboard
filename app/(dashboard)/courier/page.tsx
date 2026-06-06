export default function CourierPage() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-display-lg font-display-lg text-primary">Courier Delivery OS</h1>
          <p className="text-on-surface-variant font-body-md">Real-time parcel tracking across all logistics partners.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-all">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Parcel
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-md hover:shadow-lg transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Reports
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4">
        {[
          { label: 'Total Parcels', value: '1,482', cls: '' },
          { label: 'Delivered', value: '1,240', cls: 'text-emerald-600' },
          { label: 'Cash Collected', value: '৳5,700', cls: '' },
          { label: 'Courier Stock', value: '132', cls: '' },
          { label: 'Returned to Me', value: '14', cls: 'text-error' },
          { label: 'Cash Pending', value: '৳2,840', cls: 'text-secondary' },
          { label: 'Awaiting Settl.', value: '৳1,150', cls: '' },
        ].map(k => (
          <div key={k.label} className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm">
            <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-wider mb-2">{k.label}</p>
            <h3 className={`font-headline-lg text-headline-lg ${k.cls}`}>{k.value}</h3>
          </div>
        ))}
      </div>

      {/* Courier Performance */}
      <div className="space-y-4">
        <h3 className="font-headline-sm">Courier Performance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Pathao', rate: '88%', delivered: '412', returned: '42', avgTime: '2.4 Days', pending: '৳1,240', active: true },
            { name: 'Steadfast', rate: '85.6%', delivered: '528', returned: '68', avgTime: '1.8 Days', pending: '৳850', active: false },
            { name: 'RedX', rate: '90.4%', delivered: '210', returned: '18', avgTime: '3.1 Days', pending: '৳510', active: false },
            { name: 'Sundarban', rate: '87.1%', delivered: '90', returned: '12', avgTime: '4.5 Days', pending: '৳240', active: false },
          ].map(c => (
            <div
              key={c.name}
              className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm text-left transition-all relative overflow-hidden cursor-pointer ${c.active ? 'border-2 border-secondary shadow-md' : 'border border-outline-variant hover:border-secondary/50'}`}
            >
              {c.active && (
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <span className="material-symbols-outlined text-[64px]">local_shipping</span>
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-headline-sm text-on-surface">{c.name}</h4>
                  <span className="text-emerald-600 font-bold text-headline-lg">{c.rate}</span>
                </div>
                {c.active && (
                  <span className="bg-secondary-container text-on-secondary-container p-2 rounded-lg">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-y-3">
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold">Delivered</p><p className="font-headline-sm">{c.delivered}</p></div>
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold">Returned</p><p className="font-headline-sm">{c.returned}</p></div>
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold">Avg Time</p><p className="font-headline-sm">{c.avgTime}</p></div>
                <div><p className="text-[10px] text-on-surface-variant uppercase font-bold">Cash Pending</p><p className="font-headline-sm text-secondary">{c.pending}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parcel List */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-outline-variant bg-surface-container-low/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 sm:pb-0">
            <button className="pb-2 font-label-md active-tab whitespace-nowrap">All Parcels</button>
            <button className="pb-2 font-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap">Delivered</button>
            <button className="pb-2 font-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap">In Transit</button>
            <button className="pb-2 font-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap flex items-center gap-1">
              Returned <span className="bg-error text-white text-[10px] px-1.5 rounded-full">4</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input className="pl-9 pr-4 py-2 border border-outline-variant rounded-lg text-body-sm w-full" placeholder="Tracking ID..." type="text" />
            </div>
            <button className="p-2 border border-outline-variant rounded-lg"><span className="material-symbols-outlined">filter_list</span></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/10 border-b border-outline-variant">
                {['Parcel & ID', 'Customer', 'Courier / Method', 'Status', 'Last Update', 'Cash Value', ''].map(h => (
                  <th key={h} className={`p-4 font-label-md text-label-md uppercase text-on-surface-variant tracking-wider ${h === 'Cash Value' ? 'text-right' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr className="hover:bg-surface-container-low/40 transition-colors">
                <td className="p-4"><p className="font-headline-sm">#TRK-982341</p><p className="text-[10px] text-on-surface-variant">Order #12940</p></td>
                <td className="p-4"><p className="font-body-md font-semibold">Ariful Islam</p><p className="text-body-sm text-on-surface-variant">+880 1712-345678</p></td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-[10px] font-bold text-red-600">P</span>
                    <p className="text-body-md">Pathao (Cash)</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-label-sm flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[14px]">task_alt</span> Delivered
                  </span>
                </td>
                <td className="p-4"><p className="text-body-md">Today, 10:24 AM</p><p className="text-[10px] text-on-surface-variant">Delivered in 2.1 days</p></td>
                <td className="p-4 text-right font-headline-sm">৳1,250</td>
                <td className="p-4"><button className="p-1 hover:bg-surface-container-high rounded"><span className="material-symbols-outlined">more_vert</span></button></td>
              </tr>
              <tr className="bg-error-container/5 hover:bg-error-container/10 transition-colors">
                <td className="p-4"><p className="font-headline-sm">#TRK-982355</p><p className="text-[10px] text-on-surface-variant">Order #12943</p></td>
                <td className="p-4"><p className="font-body-md font-semibold">Saima Rashid</p><p className="text-body-sm text-on-surface-variant">Dhaka, Banani</p></td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-[10px] font-bold text-blue-600">S</span>
                    <p className="text-body-md">Steadfast</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-label-sm flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[14px]">assignment_return</span> Returned
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-body-md font-semibold text-rose-700">Inventory Impact</p>
                    <p className="text-[10px] text-on-surface-variant italic">Stock not yet received</p>
                  </div>
                </td>
                <td className="p-4 text-right font-headline-sm text-error">৳2,100</td>
                <td className="p-4"><button className="p-1 hover:bg-surface-container-high rounded"><span className="material-symbols-outlined">more_vert</span></button></td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-4"><p className="font-headline-sm">#TRK-982390</p><p className="text-[10px] text-on-surface-variant">Order #12948</p></td>
                <td className="p-4"><p className="font-body-md font-semibold">Nigar Sultana</p><p className="text-body-sm text-on-surface-variant">Chittagong</p></td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-[10px] font-bold text-red-600">P</span>
                    <p className="text-body-md">Pathao</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[14px]">local_shipping</span> In Transit
                  </span>
                </td>
                <td className="p-4"><p className="text-body-md">Yesterday, 4:45 PM</p><p className="text-[10px] text-on-surface-variant">Reached Hub: CTG-01</p></td>
                <td className="p-4 text-right font-headline-sm">৳1,100</td>
                <td className="p-4"><button className="p-1 hover:bg-surface-container-high rounded"><span className="material-symbols-outlined">more_vert</span></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-label-md text-on-surface-variant">Showing 3 of 1,482 total parcels</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-outline-variant rounded-lg opacity-50 pointer-events-none"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
            <div className="flex gap-1">
              <button className="w-8 h-8 bg-secondary text-white rounded-lg text-label-md">1</button>
              <button className="w-8 h-8 hover:bg-surface-container-low rounded-lg text-label-md">2</button>
            </div>
            <button className="p-2 border border-outline-variant rounded-lg"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}
