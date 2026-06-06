export default function SettingsPage() {
  return (
    <div className="min-h-screen p-8 pb-24">
      <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h2 className="text-display-lg font-display-lg text-on-surface mb-2">Settings</h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Manage your enterprise configuration, multi-warehouse logistics, and integration protocols.</p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Vertical Nav */}
        <nav className="col-span-3 space-y-2">
          {[
            { icon: 'warehouse', label: 'Warehouse Setup', active: true },
            { icon: 'admin_panel_settings', label: 'Permissions' },
            { icon: 'chat', label: 'Integrations' },
            { icon: 'backup', label: 'Data & Backup' },
            { icon: 'account_balance', label: 'Billing Info' },
          ].map(item => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-label-md text-label-md ${item.active ? 'bg-surface-container-high text-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Config Panels */}
        <div className="col-span-9 space-y-8">
          {/* Multi-Warehouse Setup */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Multi-Warehouse Setup</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Configure logistics hubs and stock distribution centers.</p>
              </div>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-all">
                + Add Warehouse
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Dhaka Central Hub', addr: 'Tejgaon Industrial Area, Dhaka', value: '৳ 4,250,000', badge: 'Primary', badgeCls: 'bg-green-100 text-green-700', iconBg: 'bg-secondary-container text-on-secondary-container' },
                { name: 'Chittagong Port Node', addr: 'EPZ Zone, South Chittagong', value: '৳ 1,890,000', badge: 'Secondary', badgeCls: 'bg-surface-container-high text-on-surface-variant', iconBg: 'bg-surface-container-high text-on-surface-variant' },
              ].map(wh => (
                <div key={wh.name} className="flex items-center justify-between p-4 bg-surface rounded-xl border border-outline-variant">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${wh.iconBg}`}>
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm">{wh.name}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{wh.addr}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Stock Value</p>
                      <p className="font-headline-sm text-headline-sm">{wh.value}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${wh.badgeCls}`}>{wh.badge}</span>
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">edit</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Role-Based Permissions */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="font-headline-md text-headline-md text-on-surface">Employee Roles &amp; Permissions</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Define what actions your team can perform in the system.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low text-on-surface-variant">
                  <tr>
                    {['Role', 'Inventory', 'Finance', 'Staffing', 'Actions'].map((h, i) => (
                      <th key={h} className={`px-4 py-3 font-label-md text-label-md uppercase tracking-wider ${i === 0 ? 'rounded-l-lg' : ''} ${i === 4 ? 'rounded-r-lg text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {[
                    { role: 'Admin', sub: 'Full Control', inv: true, fin: true, staff: true },
                    { role: 'Manager', sub: 'Limited Finance', inv: true, fin: false, staff: true },
                    { role: 'Staff', sub: 'Sales & Support', inv: true, fin: false, staff: false },
                  ].map(row => (
                    <tr key={row.role} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-4 py-4">
                        <p className="font-headline-sm text-headline-sm">{row.role}</p>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">{row.sub}</p>
                      </td>
                      {[row.inv, row.fin, row.staff].map((allowed, i) => (
                        <td key={i} className="px-4 py-4">
                          {allowed
                            ? <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                            : <span className="material-symbols-outlined text-on-surface-variant">remove_circle_outline</span>}
                        </td>
                      ))}
                      <td className="px-4 py-4 text-right"><button className="text-on-surface-variant font-label-md text-label-md underline">Manage</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Integrations & Backup */}
          <div className="grid grid-cols-2 gap-6">
            {/* Messaging API */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm">Messaging API</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'WhatsApp Business API', on: true },
                  { label: 'SMS Notifications', on: false },
                ].map(toggle => (
                  <div key={toggle.label} className="flex items-center justify-between">
                    <span className="font-body-md text-body-md">{toggle.label}</span>
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${toggle.on ? 'bg-secondary' : 'bg-outline-variant'}`}>
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${toggle.on ? 'translate-x-5' : 'translate-x-1'}`}></div>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-outline-variant">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-label-md text-label-md text-on-surface">Connected to Meta API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Backup */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm overflow-hidden relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm">Data &amp; Backup</h3>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="bg-surface p-3 rounded-lg border border-outline-variant">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Last Backup</p>
                  <p className="font-headline-sm text-headline-sm">Today, 04:12 AM</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-md text-label-md active:scale-95 transition-all">Backup Now</button>
                  <button className="flex-1 border border-outline-variant text-on-surface-variant py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">Download SQL</button>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span className="font-label-sm text-label-sm">Automatic daily cloud backup enabled</span>
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-secondary-container/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Danger Zone */}
          <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>report</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-red-900">Advanced: Factory Reset</h3>
                <p className="font-body-sm text-body-sm text-red-700 mb-4">Clearing all data will permanently remove all orders, customers, and inventory records. This action cannot be undone.</p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-red-700 active:scale-95 transition-all">Clear All Data</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      </div>
      <footer className="fixed bottom-0 left-[280px] right-0 bg-white/80 backdrop-blur-md border-t border-outline-variant p-4 flex justify-end gap-4 z-40">
        <button className="px-6 py-2 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all">Discard Changes</button>
        <button className="px-8 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-lg active:scale-95 transition-all">Save Configuration</button>
      </footer>
    </div>
  )
}
