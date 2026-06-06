export default function AIAdvisorPage() {
  return (
    <div className="p-8 bg-background w-full">
      {/* Command Center Hero */}
      <section className="mb-10 relative overflow-hidden rounded-3xl p-8 ai-gradient shadow-sm border border-outline-variant">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="text-label-md font-label-md text-secondary-container tracking-wider uppercase">Bongo AI Assistant</span>
          </div>
          <h2 className="font-headline-lg text-display-lg text-primary mb-6">Ask Bongo AI anything about your business.</h2>
          <div className="relative group">
            <input
              className="w-full h-14 pl-6 pr-16 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg focus:ring-2 focus:ring-secondary-container text-body-lg focus:outline-none transition-all group-hover:border-secondary-container"
              placeholder="e.g., 'What was my highest selling category last week?'"
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 bg-primary text-on-primary rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
            <button className="px-3 py-1.5 bg-white border border-outline-variant rounded-full text-label-md whitespace-nowrap hover:bg-secondary-fixed transition-colors">Forecasting</button>
            <button className="px-3 py-1.5 bg-white border border-outline-variant rounded-full text-label-md whitespace-nowrap hover:bg-secondary-fixed transition-colors">Profit Audit</button>
            <button className="px-3 py-1.5 bg-white border border-outline-variant rounded-full text-label-md whitespace-nowrap hover:bg-secondary-fixed transition-colors">Stock Alerts</button>
          </div>
        </div>
      </section>

      {/* Bento Grid Insights */}
      <div className="grid grid-cols-12 gap-6">
        {/* Demand Forecasting */}
        <div className="col-span-12 lg:col-span-8 bento-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">Eid Season Forecasting</h3>
              <p className="text-body-sm text-on-surface-variant">Demand predictions for next month (April 2024)</p>
            </div>
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> 94% Confidence
            </span>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <p className="text-label-md text-on-surface-variant mb-1">Expected Revenue</p>
              <p className="text-headline-lg font-bold">৳ 1,450,000</p>
              <div className="mt-2 text-label-sm text-green-600 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">expand_less</span> 28% vs last Eid
              </div>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <p className="text-label-md text-on-surface-variant mb-1">Top Category</p>
              <p className="text-headline-lg font-bold">Panjabi</p>
              <div className="mt-2 text-label-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">inventory_2</span> 1,200 units needed
              </div>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <p className="text-label-md text-on-surface-variant mb-1">Logistics Load</p>
              <p className="text-headline-lg font-bold">Critical</p>
              <div className="mt-2 text-label-sm text-error flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">warning</span> Hire extra rider
              </div>
            </div>
          </div>
          <div className="h-48 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 p-4 flex items-end justify-between gap-2">
              <div className="w-full bg-secondary-fixed rounded-t h-[30%] opacity-20"></div>
              <div className="w-full bg-secondary-fixed rounded-t h-[35%] opacity-20"></div>
              <div className="w-full bg-secondary-fixed rounded-t h-[45%] opacity-30"></div>
              <div className="w-full bg-secondary-fixed rounded-t h-[40%] opacity-20"></div>
              <div className="w-full bg-secondary-container rounded-t h-[75%] shimmer"></div>
              <div className="w-full bg-secondary-container rounded-t h-[90%] shimmer"></div>
              <div className="w-full bg-secondary-fixed rounded-t h-[60%] opacity-30"></div>
            </div>
            <div className="absolute bottom-2 left-4 text-label-sm text-on-surface-variant">Historical</div>
            <div className="absolute bottom-2 right-4 text-label-sm font-bold text-secondary-container">AI Predicted Peak</div>
          </div>
        </div>

        {/* Profitability Audit */}
        <div className="col-span-12 lg:col-span-4 bento-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
              <span className="material-symbols-outlined">trending_down</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Profitability Audit</h3>
              <p className="text-label-md text-error">Down 5.2% last week</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-error-container/20 border border-error/10">
              <p className="font-bold text-body-md text-error-container mb-2 text-on-error-container">The Root Cause</p>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                Facebook Ad CPA increased from ৳140 to ৳195. Marketing spend is eating into net margins on low-ticket items.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Marketing Cost</span>
                <span className="font-bold text-error">+৳14,200</span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div className="bg-error h-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Shipping Delays</span>
                <span className="font-bold text-on-surface-variant">+৳2,100</span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary-container h-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <button className="w-full mt-2 py-2 bg-primary text-on-primary rounded-lg text-label-md font-bold hover:opacity-90 active:scale-95 transition-all">Adjust Ad Budget</button>
          </div>
        </div>

        {/* Inventory Optimization */}
        <div className="col-span-12 bento-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">Inventory Optimization</h3>
              <p className="text-body-sm text-on-surface-variant">Recommended actions for slow-moving stock.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-label-md hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-[18px]">bolt</span> Automate Clearance
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Classic Blue Polo', days: '90+ days in stock (42 units)', badge: 'Slow', badgeClass: 'bg-amber-100 text-amber-800', action: 'Bundle with Khaki Chinos', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbV8Zx4fjxlD23b23zIvvAGKAOccxerwHJsPXTgv6ZukQiGVw8fmIUAuft-hwiFuRo8dwL8QPzonW5l9bKd1Vd03B4GiWWs01tmKOM1RoUHdpe5iYpv3rjx7yhALZ6lEEKJ4HOqsQRBW00BPIfA8KcVf9GdcpZ2bR0CRHRSE_SGaMCFxoVLKij0dJjq9-KVbst8Qk3tRbbuBoVjeo9K2Ek9gfyiBwYZ60tAcdpkM5stG-w2mqwY_R-axpRVykrXyYhSh22NcDcTNtj' },
              { name: 'Handmade Loafers', days: '120+ days in stock (12 units)', badge: 'Stagnant', badgeClass: 'bg-red-100 text-red-800', action: 'Launch 15% Clearance Flash', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5GCgJ7gs_oOcPSxEX08r8wrSh3Go9InqmaD4fXYUD5KYgP6p42Cm_ZY7MrnLbY-8z6YFPVry3_ifF6fEecqEHMGFdQOX2zYUOo9o0daxmBcTPy-6APu1OJjgRmY0NgXFw3D223knPNfUKKrfeOXS7Hqg0MPNDYWQel20aRquFhREt27S4uPYOtzqk0fkd-WvX45ejs3LT1F01IG9WUhX6xejswny0GI_vqnU3HhSWTmkQcZbAJMT8PnWV1BG1oRCVL5z2wzIF82-R' },
              { name: 'Organic T-Shirt Pack', days: '75+ days in stock (150 units)', badge: 'Slow', badgeClass: 'bg-amber-100 text-amber-800', action: 'BOGO on size XL/XXL', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVfENQAf9tGTN6PQqaKFiaReME1lwKzF6RG4RwcHtl8qyTB0XwmIsXeXsxwC3OZ0_AiaDqHAIlwxZaBp31BaUta21x-sRjWyE2FNKJ2XgoaGcbC6Fgv3qWIlMj4M5BaH0sS6WLuc6PdJQ8vEsQ_5i8VM2huussEsodIBTkaYyszX3Mc2otKG3z_w0ubm-KF0-8-BLplXhmFLG5hHu5n0D6gIUrwKdpf20FRmkR0SvrWZeNuN9RXRSyKRWqc7Ru3jxhSOphaQe-lhr7' },
            ].map((item) => (
              <div key={item.name} className="flex gap-4 p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
                <div className="h-16 w-16 bg-white rounded-lg border border-outline-variant overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.img} alt={item.name} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-bold text-body-md">{item.name}</p>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${item.badgeClass}`}>{item.badge}</span>
                  </div>
                  <p className="text-label-sm text-on-surface-variant mb-2">{item.days}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-label-sm font-bold text-secondary-container">AI Action:</span>
                    <span className="text-label-sm">{item.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 flex flex-col items-center justify-center gap-4 text-on-surface-variant/40">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">verified</span>
          <span className="text-label-md">Insights generated by Bongo Intelligence Engine v4.2</span>
        </div>
        <p className="text-label-sm">Real-time data synced 2 minutes ago</p>
      </footer>
    </div>
  )
}
