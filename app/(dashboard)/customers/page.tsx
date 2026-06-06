export default function CustomersPage() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Customer Intelligence</h2>
          <p className="text-on-surface-variant font-body-md">Manage your segments and understand lifetime value.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg font-label-md bg-surface hover:bg-surface-container-low transition-all">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Export CRM
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md hover:opacity-90 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-sm">person_add</span>
            New Customer
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* VIP Segment Card */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-container/10 rounded-full blur-3xl group-hover:bg-secondary-container/20 transition-all"></div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded font-label-sm uppercase tracking-wider">VIP Segment</span>
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <h3 className="font-display-lg text-display-lg mb-1">৳482.5k</h3>
            <p className="text-on-surface-variant text-body-sm">Total Revenue from 124 VIPs</p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-on-tertiary-container">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span className="font-label-md">+12.4% this month</span>
          </div>
        </div>

        {/* Retention Cohort Chart */}
        <div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-headline-sm text-headline-sm">Customer Retention (Cohorts)</h3>
              <p className="text-body-sm text-on-surface-variant">Percentage of customers who made a repeat purchase</p>
            </div>
            <select className="bg-surface border-outline-variant rounded-lg text-label-md focus:ring-secondary-container">
              <option>Last 6 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <div className="space-y-2">
              <div className="h-4"></div>
              {['Month 0', 'Month 1', 'Month 2', 'Month 3'].map(m => (
                <div key={m} className="text-label-sm text-on-surface-variant">{m}</div>
              ))}
            </div>
            {[
              { month: 'Jan', vals: ['100%', '72%', '58%', '42%'], opacities: [1, 0.8, 0.6, 0.4] },
              { month: 'Feb', vals: ['100%', '78%', '61%', ''], opacities: [1, 0.85, 0.65, 0.2] },
              { month: 'Mar', vals: ['100%', '82%', '', ''], opacities: [1, 0.9, 0.2, 0.2] },
              { month: 'Apr', vals: ['100%', '', '', ''], opacities: [1, 0.2, 0.2, 0.2] },
              { month: 'May', vals: ['', '', '', ''], opacities: [0.2, 0.2, 0.2, 0.2] },
              { month: 'Jun', vals: ['', '', '', ''], opacities: [0.2, 0.2, 0.2, 0.2] },
            ].map(col => (
              <div key={col.month} className="flex flex-col gap-2">
                <div className="text-label-sm text-center font-bold">{col.month}</div>
                {col.vals.map((val, i) => (
                  <div key={i} className="h-8 bg-secondary-container rounded flex items-center justify-center text-[10px] text-white" style={{ opacity: col.opacities[i] }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Segments */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'replay', label: 'Repeat', count: '412 Customers', bg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
            { icon: 'warning', label: 'At-Risk', count: '88 Customers', bg: 'bg-error-container text-on-error-container' },
            { icon: 'keyboard_return', label: 'High Returners', count: '24 Customers', bg: 'bg-surface-variant text-on-secondary-fixed-variant' },
          ].map(seg => (
            <div key={seg.label} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm flex items-center gap-4">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${seg.bg}`}>
                <span className="material-symbols-outlined">{seg.icon}</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm">{seg.label}</h4>
                <p className="text-body-sm text-on-surface-variant">{seg.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md">Top Profiles</h3>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-high rounded-lg text-primary">
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button className="p-2 hover:bg-surface-container-low rounded-lg text-on-surface-variant">
              <span className="material-symbols-outlined">list</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Jamila Akhter', location: 'Dhaka, BD', badge: 'VIP', badgeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant', gradient: 'from-secondary-container to-blue-900', ltv: '৳12,450', orders: '42', initials: 'JA', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQNDS1OSJqRYfuLR86eJBNww-0CGlQ7IV5p7YPdBgir1U09_UPeCT1knMw7iPGtISegGx1FNcke_gDyErXLey6_nTuXOQuFfv8AJ6_8h0IV6csiv3796yQoSMT4kDOIKGSvVZaFTo1jDVu88gsY185rnIDLHMmKArjHp-JGJy4TZOX8zFgASuofPQCcEVYLTlr8BFv2saKl3ANxM3mjioAMvaK4T885GTYC0FI-4fT-wPFgUoQDJtXE-oGrYuUbWzsR_4tv2JWY8K' },
            { name: 'Rahim Uddin', location: 'Chittagong, BD', badge: 'Repeat', badgeClass: 'bg-surface-variant text-on-secondary-fixed-variant', gradient: 'from-on-primary-container to-slate-800', ltv: '৳8,210', orders: '18', initials: 'RU', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjE1mipRhCE8m5FHeVaO3RpvwpxTjKnlpjtjDFWUvpFeY3EZW2OZk3F21RNTiancoqXqFOJMAiaVMQgshv6b3s4tGJNc7fWY25C3Q8FNQwYh4NPvSxn4WwulnxLGJ3UDINUIF5O1X1wpLKqpC1HYevi2i5M6y9Olf46liWDBAnM3Y4Jegeenpl4zfiR3of236CLlk4hkz9k73GzA0Z_E3n6Aw_aUgPogwj3tCT-rUGWsZJMeqvNo2PyWlFHroZrSrWhTJX06W0sA17' },
            { name: 'Sara Khan', location: 'Sylhet, BD', badge: 'At-Risk', badgeClass: 'bg-error-container text-on-error-container', gradient: 'from-tertiary-fixed-dim to-emerald-900', ltv: '৳4,550', orders: '9', initials: 'SK', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHt2FvS2PBWseuYZ7W62Z0b8HTcMp2TzxrSMlK1Rsem_tMfqNxpSw9B80wGP-VAy80jc6Mb6uZBc9j48JG0TCM_aY0KoaOsQoLpuiBTKiYFP1vBDmlAAOQuf60JpRq_4jwOHLpYxScG_0tNVZ6j2zaI43YmfvQne3T-WRxYqqcbO8oiCGWr6bIiLBTbhxI2gky6TPhA8duK3eWxYwEwwnl7nxzbd93TaNHXUSgZY1dLWyqpV0GV4N5-ilS2mYibVUlRfGKEdDLeTRs' },
            { name: 'Tanvir Islam', location: 'Rajshahi, BD', badge: 'VIP', badgeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant', gradient: 'from-outline to-slate-600', ltv: '৳15,800', orders: '56', initials: 'TI', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8vPmEdf4M0npR7bGzD5vDFWlLjaj-4UtIL3IKLZ3zLfMPjimsO5OkiNSi9gSIEQxFvAlTxc8xrVC1ujeG5Yi4Y7I4bAExcGHv95k6wmNRzJpnmep1-VjQ0lFXWQK2vxIbJ7mnHrreXm8f67niibaWC3wQNXCFYmIdWgHFhzVK0KjSAkI-5VmaU5WIWp_UGP0_3pAByoaGCxHZtKmlJIq4fVvfyKZaKmjjzsufhkx3nPwrJ4R2xDBiClWnPnMd_TY3SGOXiE0WpJS' },
          ].map(profile => (
            <div key={profile.name} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm group hover:border-primary transition-all cursor-pointer">
              <div className={`h-24 bg-gradient-to-br ${profile.gradient} relative`}>
                <div className="absolute -bottom-6 left-6 h-12 w-12 rounded-lg border-2 border-surface-container-lowest overflow-hidden shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={profile.name} className="h-full w-full object-cover" src={profile.img} />
                </div>
              </div>
              <div className="p-6 pt-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-headline-sm text-headline-sm">{profile.name}</h4>
                    <p className="text-label-md text-on-surface-variant">{profile.location}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${profile.badgeClass}`}>{profile.badge}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">LTV</p>
                    <p className="font-currency-display text-headline-sm">{profile.ltv}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Orders</p>
                    <p className="font-currency-display text-headline-sm">{profile.orders}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact List */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
          <h3 className="font-headline-sm text-headline-sm">Complete Contact List</h3>
          <div className="flex gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">filter_list</span>
              <select className="pl-10 pr-4 py-1.5 bg-surface border-outline-variant rounded-lg text-label-md">
                <option>All Categories</option>
                <option>Cosmetics</option>
                <option>Gadgets</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Last Order</th>
                <th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Total Spend</th>
                <th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Preferred Category</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {[
                { initials: 'JA', name: 'Jamila Akhter', email: 'jamila.a@example.com', phone: '01712345678', last: '2 days ago', spend: '৳12,450', cat: 'Cosmetics', bg: 'bg-secondary-fixed text-on-secondary-fixed-variant' },
                { initials: 'RU', name: 'Rahim Uddin', email: 'rahim.u@example.com', phone: '01812345679', last: '5 days ago', spend: '৳8,210', cat: 'Gadgets', bg: 'bg-primary-fixed text-on-primary-fixed' },
                { initials: 'SK', name: 'Sara Khan', email: 'sara.k@example.com', phone: '01912345680', last: '3 weeks ago', spend: '৳4,550', cat: 'Cosmetics', bg: 'bg-surface-variant text-on-surface-variant' },
                { initials: 'TI', name: 'Tanvir Islam', email: 'tanvir.i@example.com', phone: '01512345681', last: 'Today', spend: '৳15,800', cat: 'Gadgets', bg: 'bg-secondary-fixed-dim text-on-secondary-fixed' },
              ].map(row => (
                <tr key={row.name} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs ${row.bg}`}>{row.initials}</div>
                      <div>
                        <p className="font-headline-sm text-headline-sm">{row.name}</p>
                        <p className="text-body-sm text-on-surface-variant">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md font-medium text-on-surface">{row.phone}</td>
                  <td className="px-6 py-4 text-body-md text-on-surface-variant">{row.last}</td>
                  <td className="px-6 py-4 text-body-md font-bold text-on-surface text-right">{row.spend}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-surface-container-high text-on-primary-fixed-variant rounded-full text-label-sm">{row.cat}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-surface-container-highest rounded-full transition-all">
                      <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-surface-container-low flex justify-between items-center text-label-md">
          <p className="text-on-surface-variant">Showing 1 to 4 of 2,840 customers</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-outline-variant rounded-lg bg-surface disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 border border-outline-variant rounded-lg bg-surface hover:bg-surface-container-high transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
