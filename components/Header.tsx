'use client'

import { useState } from 'react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-surface h-16 px-6 flex justify-between items-center border-b border-outline-variant">
      <div className="flex items-center gap-3 flex-1">
        <button
          className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-colors"
          onClick={onMenuClick}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className={`relative flex-1 max-w-xl focus-within:ring-2 focus-within:ring-secondary-container rounded-full overflow-hidden transition-all ${searchFocused ? 'max-w-2xl' : ''}`}>
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input
            className="w-full bg-surface-container-low border-none pl-12 pr-4 py-2 text-body-md font-body-md focus:ring-0"
            placeholder="Search orders, products, or customers..."
            type="text"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        <button className="hover:bg-surface-container-low rounded-full p-2 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
        </button>
        <button className="hover:bg-surface-container-low rounded-full p-2 transition-colors">
          <span className="material-symbols-outlined">business_center</span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-label-md text-on-surface font-bold">Tanvir Ahmed</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Owner, Galaxy Shop</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-outline-variant group-hover:border-primary transition-colors"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWILf9AHrNiIU2TLlsz980KxcUUoReFq6tu1k6i43UAH2trJfnXK4I51dhRstk57MTtGXIC3dK1OoRC99HAuV2mHXyKHKuY38Juib_q6wOqMDhJ4gVH_Gm49xs9QbUJol9evtlg9dvMtl_VFYiaFEOTpLaZFlnfsjLymXn5mCQ29HACmVaj1llAO-JUNE0Z-1N4sSel_hEm3_r294YSMlHrTKtGggCz3M7I5ll-tCDRr0Ip5tujybWsfT2gb98pSAzGxcnIjh9wwcl"
          />
        </div>
      </div>
    </header>
  )
}
