export default function EmployeesPage() {
  return (
    <div className="p-8 min-h-screen space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-display-lg font-display-lg text-on-surface">Employee Management</h2>
          <p className="text-body-lg text-on-surface-variant">Monitor workforce productivity and payroll metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-xl font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-all">
            <span className="material-symbols-outlined text-[18px]">download</span> Export Report
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded-xl font-label-md flex items-center gap-2 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-[18px]">person_add</span> New Employee
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><span className="material-symbols-outlined">group</span></div>
            <span className="text-emerald-600 text-label-sm font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">trending_up</span> +4%</span>
          </div>
          <p className="text-label-md text-on-surface-variant mb-1">Total Workforce</p>
          <h3 className="text-headline-lg font-headline-lg">124</h3>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary"><span className="material-symbols-outlined">payments</span></div>
            <span className="text-on-surface-variant text-label-sm font-bold">This Month</span>
          </div>
          <p className="text-label-md text-on-surface-variant mb-1">Monthly Payroll</p>
          <h3 className="text-headline-lg font-headline-lg">৳ 4,82,500</h3>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-tertiary-fixed-dim/20 rounded-lg text-on-tertiary-container"><span className="material-symbols-outlined">analytics</span></div>
            <span className="text-on-surface-variant text-label-sm font-bold">Avg. Score</span>
          </div>
          <p className="text-label-md text-on-surface-variant mb-1">Performance Index</p>
          <h3 className="text-headline-lg font-headline-lg">8.4 / 10</h3>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-error/10 rounded-lg text-error"><span className="material-symbols-outlined">assignment_late</span></div>
            <span className="text-error text-label-sm font-bold">12 Pending</span>
          </div>
          <p className="text-label-md text-on-surface-variant mb-1">Active Tasks</p>
          <h3 className="text-headline-lg font-headline-lg">48</h3>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Employee Directory */}
        <div className="col-span-12 lg:col-span-8 glass-card rounded-2xl flex flex-col overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <div>
              <h4 className="text-headline-sm font-headline-sm">Employee Directory</h4>
              <p className="text-label-md text-on-surface-variant">Active members in the ecosystem</p>
            </div>
            <select className="bg-surface-container-low border-none rounded-lg text-label-sm py-1.5 focus:ring-0">
              <option>All Departments</option><option>Marketing</option><option>Operations</option><option>Finance</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low/50">
                <tr>
                  {['Name & Role', 'Department', 'Salary (৳)', 'Performance', ''].map((h, i) => (
                    <th key={h} className={`px-6 py-4 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider ${i === 2 ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  { name: 'Asif Mahmud', role: 'Senior Engineer', dept: 'Technology', deptCls: 'bg-secondary/10 text-secondary', salary: '৳ 85,000', perfW: '92%', perfColor: 'bg-emerald-500', perfScore: '9.2', scoreCls: 'text-emerald-600', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJm6X0BbVCK8TSGo1xxSEBJuFUiPQHMoLs3h_8UB-pKS3UByqwuD_05g8xRDEqQObWAawGlCGsY1RRhqu2zEMCfp47DAyIaM8FTkdC59n-Nq8ApSUDd3S-yWaOR5tf4jPMx5kXHTTDL8gtzHnJVewsd8DBJwLzDTD5aB2CWCg5bYEk_X3-sb0_1_KcBy4Bl4MKUfDcy4RCztVB7wPZ4LdNpIoHpXrT0AXYj2a6CdW_LtzpsuQdSDOe6xWJ130ON_N_zZyAkWKvCA5w' },
                  { name: 'Nishat Anjum', role: 'Growth Manager', dept: 'Marketing', deptCls: 'bg-on-tertiary-container/10 text-on-tertiary-container', salary: '৳ 62,500', perfW: '85%', perfColor: 'bg-secondary-container', perfScore: '8.5', scoreCls: 'text-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdaA9TwUyeMwK4svdvz9Ndp25ZS4pPqXrqzYALWSvHsJ4X23x415yjyXM_qlPG2iRRH8FJmN217jxZCJT5P_yDmLxXp6YMgoYYpkx7-Nq7WKr_Re6YdXYrBfUuHMQcBDdFt1Y2qG5pMiNWQzl-3q859MJ4ee8xYdIG3GHUElFLuGaEMTI4NICqHVJWYtEKbhSlUHNSNzYAnKTqOfvdbgO9GT43La3d1lItjJ0k6x9WF33qkHQQo2anuBOKQijzqKmWEslpwHoCdm1G' },
                  { name: 'Tanvir Ahmed', role: 'Lead Courier Ops', dept: 'Logistics', deptCls: 'bg-surface-variant text-on-surface-variant', salary: '৳ 55,000', perfW: '42%', perfColor: 'bg-error', perfScore: '4.2', scoreCls: 'text-error', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdt_lhh2yBvMvWHPABD2jCCkyiHVs87qRgSSpAT5JIAFNbi1CXDBvHvT2V2Ii-U_1qaIQRYVrDq9RmFh5OepPwNIvLZU3DpOuEdSb8FKT8am-k1pcYapYXeQZc4P4ZyC4uOUNMX42cu1thZ7zTpfRnfGEQa-GteALo06POeLHTqt74AwMndOTHoiL7qEwHW-vwnORQcIIUy1I_Y2sFPvJl_upARW1HSVBLXM9-wFlsQ_lj6eX7doKMOZgecrQASsCdJ0MSrIYE149w' },
                ].map(emp => (
                  <tr key={emp.name} className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Employee" className="w-10 h-10 rounded-full object-cover" src={emp.img} />
                        <div>
                          <p className="text-label-md font-bold">{emp.name}</p>
                          <p className="text-body-sm text-on-surface-variant">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded-lg text-label-sm ${emp.deptCls}`}>{emp.dept}</span></td>
                    <td className="px-6 py-4 text-right"><p className="font-currency-display text-body-md font-semibold">{emp.salary}</p></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                          <div className={`h-full ${emp.perfColor}`} style={{ width: emp.perfW }}></div>
                        </div>
                        <span className={`text-label-sm font-bold ${emp.scoreCls}`}>{emp.perfScore}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant">more_vert</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-auto p-4 bg-surface-container-lowest border-t border-outline-variant flex justify-between items-center">
            <p className="text-label-sm text-on-surface-variant">Showing 1-10 of 124 employees</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-[16px]">chevron_left</span></button>
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-lg bg-primary text-on-primary">1</button>
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Sales Impact */}
          <div className="glass-card p-6 rounded-2xl flex-1 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-headline-sm font-headline-sm mb-1">Sales Impact</h4>
              <p className="text-label-md text-on-surface-variant mb-6">Revenue contribution per employee</p>
              <div className="space-y-6">
                {[
                  { label: 'Sales Team A', value: '৳ 12.4M', w: '78%', color: 'bg-secondary-container' },
                  { label: 'Marketing Team', value: '৳ 8.1M', w: '52%', color: 'bg-on-tertiary-container' },
                  { label: 'Support Upsells', value: '৳ 2.2M', w: '15%', color: 'bg-primary-container' },
                ].map(team => (
                  <div key={team.label} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-label-md font-bold">{team.label}</span>
                      <span className="text-label-md font-bold">{team.value}</span>
                    </div>
                    <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                      <div className={`h-full ${team.color} rounded-full`} style={{ width: team.w }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant">
                <div className="flex items-center gap-4 p-4 bg-secondary-fixed/30 rounded-xl border border-secondary-fixed">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <div>
                    <p className="text-label-sm font-bold text-on-secondary-fixed">Employee of the Month</p>
                    <p className="text-body-md font-bold">Nishat Anjum</p>
                  </div>
                  <button className="ml-auto text-secondary material-symbols-outlined">arrow_forward</button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="text-headline-sm font-headline-sm mb-4">Upcoming Deadlines</h4>
            <div className="space-y-4">
              <div className="flex gap-4 p-3 hover:bg-surface-container-low/50 rounded-xl transition-all border border-transparent hover:border-outline-variant group cursor-pointer">
                <div className="w-10 h-10 flex-shrink-0 bg-error-container text-on-error-container flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">assignment</span>
                </div>
                <div className="flex-1">
                  <p className="text-label-md font-bold group-hover:text-primary transition-colors">Q3 Inventory Audit</p>
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">schedule</span> Due in 2 days</p>
                </div>
                <span className="px-2 py-1 h-fit bg-error/10 text-error text-[10px] font-bold rounded uppercase tracking-tighter">Urgent</span>
              </div>
              <div className="flex gap-4 p-3 hover:bg-surface-container-low/50 rounded-xl transition-all border border-transparent hover:border-outline-variant group cursor-pointer">
                <div className="w-10 h-10 flex-shrink-0 bg-surface-container-highest text-on-surface-variant flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">group</span>
                </div>
                <div className="flex-1">
                  <p className="text-label-md font-bold group-hover:text-primary transition-colors">Team Onboarding</p>
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">schedule</span> Next Monday</p>
                </div>
                <span className="px-2 py-1 h-fit bg-on-surface-variant/10 text-on-surface-variant text-[10px] font-bold rounded uppercase tracking-tighter">Normal</span>
              </div>
            </div>
            <button className="w-full mt-4 text-label-md text-secondary font-bold hover:underline">View Task Board</button>
          </div>
        </div>
      </div>

      {/* Task Assignment Board */}
      <div className="glass-card rounded-2xl p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-headline-sm font-headline-sm">Task Assignment Board</h4>
            <p className="text-label-md text-on-surface-variant">Real-time workflow monitoring</p>
          </div>
          <button className="material-symbols-outlined hover:rotate-180 transition-all duration-500">settings</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'To Do', count: '08', dotCls: 'bg-outline',
              cards: [
                { task: 'Update courier routes for Chittagong region', badge: 'Ops', badgeCls: 'text-on-surface-variant bg-surface-container-high', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfqHKX125E95_xdjw3pknP_RMH_N5jYH-oFenDEsvzxbvHOIt6AI_Op7aSdercW6ZOhyZ2DdzD0Do8s9BsZqHFMTiYOMQWzDGF9Y2lyTJ7_67OprPOwl-8yM7sJgrFywtmFwrPTpaeU4Oi2Bzd2paC6a7UdgVxa1lPtfV87Nhc4Aax_7bJrlklDWNIv9ncJ4sJa_Ob2tgk61OVrisEy3MNvaD01fLN3SWqXgupvcxgwCszBSJ_UeE-Ue4rGH6wQF-erW0dcXYqr4W0' },
                { task: 'Resolve payment gateway API timeout', badge: 'Critical', badgeCls: 'text-error bg-error-container/30', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsULX-juGhpgbXvy2ALYuoYywLMOyjQUJM2CfSnWZ24KRvmXzfCph1u5kHCh9qbUfxBNxdu9eGegpUtOtlVRSVsjAz_jpbqr-7wLfQa99ByTNTR7kcQiSSG_ikDt-WKTSNcnhdAPBkhJ4oyZWZv-YQRT5eLdtDd_pcz1cBAeuoxkhelQ4DL3OFUgsa-1q1eB0X9c_6Cu6KiclP5dyCOs8fhoR4buPXhoOEAyjhIGKy7tPATlMlOopKL7v6qiNfayNuoKfFryx7Cmkn' },
              ],
            },
            {
              title: 'In Progress', count: '04', dotCls: 'bg-secondary',
              cards: [
                { task: 'Finalize Eid-ul-Adha Marketing Campaign', badge: 'Growth', badgeCls: 'text-secondary bg-secondary-container/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8djRLHMWtvfEkLOPvmfIKWaBPW9rKsa0xRdX8RrYYfdYR0rL-h6-t8Q1d7nJFLtJqxmEPDYgex5fhFRG93o2IIm4-XgUkl567s7gMRpb52BvyDLEjJNBRNxInjJ_4M31ojiEn6a2SKf_LEB39mBPcXrbMa340GtXf6_EDfGnhbva3VVuz4gYG-Cw0DYEn1cD35KHD3Gl7dASnCClZhzm0DuQhM0eDlJ0qZGi67LBsGuGxec__Rxz6xQPeFbgjP4SHwyS8jypoNYez' },
              ],
            },
            {
              title: 'Done', count: '12', dotCls: 'bg-on-tertiary-container',
              done: true, cards: [{ task: 'June Payroll Processing', badge: 'Finance', badgeCls: 'text-on-surface-variant bg-surface-container-high' }],
            },
          ].map(col => (
            <div key={col.title} className="bg-surface-container-low/30 p-4 rounded-xl border border-outline-variant/50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${col.dotCls}`}></div>
                  <h5 className="text-label-md font-bold uppercase tracking-wider text-on-surface-variant">{col.title}</h5>
                </div>
                <span className="text-label-sm font-bold text-on-surface-variant">{col.count}</span>
              </div>
              <div className="space-y-3">
                {col.cards.map(card => (
                  <div key={card.task} className={`bg-white p-4 rounded-lg shadow-sm border border-outline-variant/30 ${col.done ? 'opacity-70 cursor-default' : 'hover:shadow-md transition-shadow cursor-grab'}`}>
                    <p className={`text-body-sm font-semibold mb-2 ${col.done ? 'line-through text-on-surface-variant' : ''}`}>{card.task}</p>
                    <div className="flex justify-between items-center">
                      {col.done ? (
                        <div className="flex items-center gap-1 text-emerald-600">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          <span className="text-[10px] font-bold">Verified</span>
                        </div>
                      ) : (
                        <div className="flex -space-x-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          {'img' in card && card.img && <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-white object-cover" src={card.img as string} />}
                        </div>
                      )}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${card.badgeCls}`}>{card.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
