export default function MarketingPage() {
  return (
    <div className="p-8 min-h-screen space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Marketing Analytics</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Multi-platform ad performance and ROI analysis.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-label-md text-label-md focus:ring-2 focus:ring-secondary-container outline-none flex items-center gap-2">
            <option>Last 30 Days</option><option>Last Quarter</option><option>Year to Date</option>
          </select>
          <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">download</span> Export Report
          </button>
        </div>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-primary-container text-on-primary-container p-6 rounded-2xl flex items-center gap-6 border border-outline shadow-sm">
        <div className="bg-on-tertiary-container text-tertiary-fixed rounded-full p-3 flex items-center justify-center">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        </div>
        <div className="flex-1">
          <h4 className="font-headline-sm text-headline-sm text-surface-bright mb-1">AI Marketing Insight</h4>
          <p className="font-body-md text-body-md text-on-primary-container">
            The <span className="font-bold text-surface-bright">&ldquo;Summer Collection&rdquo;</span> campaign on Facebook has the lowest CPA (৳85). Increase budget by 20% to capture weekend traffic.
          </p>
        </div>
        <button className="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-xl font-label-md text-label-md hover:bg-white transition-colors">Apply Recommendation</button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {[
          { label: 'Total Spend', value: '৳425,000', trend: '+12% vs last month' },
          { label: 'Total Reach', value: '1.2M', trend: '+5.4% vs last month' },
          { label: 'Orders', value: '3,842', trend: '+8.1% vs last month' },
          { label: 'Revenue', value: '৳1.84M', trend: '+15.3% vs last month' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-surface-container-lowest border border-outline-variant p-5 rounded-2xl shadow-sm">
            <p className="font-label-md text-label-md text-on-surface-variant mb-2">{kpi.label}</p>
            <h3 className="font-currency-display text-currency-display text-primary">{kpi.value}</h3>
            <div className="mt-3 flex items-center gap-1 text-[#009668]">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              <span className="font-label-sm text-label-sm">{kpi.trend}</span>
            </div>
          </div>
        ))}
        <div className="bg-primary text-on-primary border border-primary p-5 rounded-2xl shadow-lg">
          <p className="font-label-md text-label-md text-on-primary-container mb-2">Overall ROAS</p>
          <h3 className="font-currency-display text-currency-display">4.33x</h3>
          <div className="mt-3 flex items-center gap-1 text-[#4edea3]">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span className="font-label-sm text-label-sm">0.4x vs last month</span>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ROAS Chart (2/3) */}
        <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-headline-md text-headline-md text-primary">ROAS Trend Chart</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span><span className="font-label-sm text-label-sm text-on-surface-variant">Marketing Spend</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary"></span><span className="font-label-sm text-label-sm text-on-surface-variant">Revenue</span></div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 flex items-end justify-between px-2 gap-2 h-full">
              {[
                { h: '60%', revH: '80%', spendH: '40%' },
                { h: '65%', revH: '70%', spendH: '35%' },
                { h: '70%', revH: '90%', spendH: '45%' },
                { h: '60%', revH: '75%', spendH: '30%' },
                { h: '85%', revH: '85%', spendH: '55%' },
                { h: '75%', revH: '65%', spendH: '40%' },
                { h: '90%', revH: '95%', spendH: '60%' },
              ].map((bar, i) => (
                <div key={i} className="w-full bg-surface-container relative rounded-t-lg group" style={{ height: bar.h }}>
                  <div className="absolute bottom-0 w-full bg-secondary opacity-30 rounded-t-lg transition-all" style={{ height: bar.revH }}></div>
                  <div className="absolute bottom-0 w-full bg-primary opacity-70 rounded-t-lg transition-all" style={{ height: bar.spendH }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4 px-2 font-label-sm text-label-sm text-on-surface-variant">
            <span>W1</span><span>W2</span><span>W3</span><span>W4</span>
          </div>
        </div>

        {/* Platform Comparison (1/3) */}
        <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl shadow-sm flex flex-col">
          <h4 className="font-headline-md text-headline-md text-primary mb-6">Multi-Platform Share</h4>
          <div className="space-y-6">
            {[
              { icon: 'face_nod', label: 'Facebook Ads', pct: '42%', w: '42%' },
              { icon: 'photo_camera', label: 'Instagram', pct: '28%', w: '28%' },
              { icon: 'search', label: 'Google Search', pct: '18%', w: '18%' },
              { icon: 'music_note', label: 'TikTok Ads', pct: '12%', w: '12%' },
            ].map(p => (
              <div key={p.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary" style={p.icon === 'face_nod' ? { fontVariationSettings: "'FILL' 1" } : undefined}>{p.icon}</span>
                    <span className="font-label-md text-label-md">{p.label}</span>
                  </div>
                  <span className="font-label-md text-label-md font-bold">{p.pct}</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: p.w }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <div className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between border border-outline-variant">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Best ROAS Platform</p>
                <p className="font-headline-sm text-headline-sm text-primary">Facebook Ads (4.8x)</p>
              </div>
              <span className="material-symbols-outlined text-[#009668] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Performance Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
          <h4 className="font-headline-md text-headline-md text-primary">Campaign Performance</h4>
          <button className="text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1 transition-colors">
            View all <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F9FAFB] border-b border-outline-variant">
              <tr>
                {['Campaign Name', 'Platform', 'Budget', 'Spend', 'CPA', 'ROAS', 'Status'].map(h => (
                  <th key={h} className="px-6 py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { name: 'Summer Collection 2024', id: 'SC-00451', platform: 'Facebook', icon: 'face_nod', budget: '৳150,000', spend: '৳124,500', cpa: '৳85.00', roas: '4.82x', status: 'Active', statusCls: 'bg-[#ecfdf5] text-[#047857]' },
                { name: 'Eid Sale Push', id: 'EP-00912', platform: 'Instagram', icon: 'photo_camera', budget: '৳200,000', spend: '৳195,000', cpa: '৳112.50', roas: '3.91x', status: 'Paused', statusCls: 'bg-[#fff7ed] text-[#c2410c]' },
                { name: 'Brand Awareness Video', id: 'BA-00321', platform: 'TikTok', icon: 'music_note', budget: '৳80,000', spend: '৳45,200', cpa: '৳42.00', roas: '2.15x', status: 'Active', statusCls: 'bg-[#ecfdf5] text-[#047857]' },
                { name: 'Google Search - High Intent', id: 'GS-00882', platform: 'Google', icon: 'search', budget: '৳100,000', spend: '৳60,300', cpa: '৳210.00', roas: '5.12x', status: 'Active', statusCls: 'bg-[#ecfdf5] text-[#047857]' },
              ].map(row => (
                <tr key={row.id} className="hover:bg-surface-container-low transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md font-bold text-primary">{row.name}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">ID: {row.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-body-md text-body-md">
                      <span className="material-symbols-outlined text-[18px]" style={row.icon === 'face_nod' ? { fontVariationSettings: "'FILL' 1" } : undefined}>{row.icon}</span>
                      {row.platform}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">{row.budget}</td>
                  <td className="px-6 py-4 font-body-md text-body-md">{row.spend}</td>
                  <td className="px-6 py-4 font-body-md text-body-md">{row.cpa}</td>
                  <td className="px-6 py-4 font-body-md text-body-md font-bold text-[#009668]">{row.roas}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.statusCls}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAB */}
      <div className="flex justify-end pt-4 pb-8">
        <button className="bg-primary text-on-primary h-14 w-14 rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform group relative">
          <span className="material-symbols-outlined text-[28px]">add_chart</span>
          <span className="absolute right-16 bg-on-surface text-surface whitespace-nowrap px-3 py-1 rounded text-label-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">New Campaign</span>
        </button>
      </div>
    </div>
  )
}
