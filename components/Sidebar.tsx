'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', icon: 'dashboard', label: 'Dashboard', exact: true },
  { href: '/orders', icon: 'shopping_cart', label: 'Orders' },
  { href: '/customers', icon: 'group', label: 'Customers' },
  { href: '/inventory', icon: 'inventory_2', label: 'Inventory' },
  { href: '/products', icon: 'inventory', label: 'Products' },
  { href: '/courier', icon: 'local_shipping', label: 'Courier' },
  { href: '/marketing', icon: 'campaign', label: 'Marketing' },
  { href: '/finance', icon: 'payments', label: 'Finance' },
  { href: '/employees', icon: 'badge', label: 'Employees' },
  { href: '/ai-advisor', icon: 'auto_awesome', label: 'AI Advisor', fill: true },
  { href: '/settings', icon: 'settings', label: 'Settings' },
]

const activeRouteMap: Record<string, string> = {
  '/expenses': '/finance',
  '/merchant': '/',
  '/reporting': '/ai-advisor',
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  const effectivePath = activeRouteMap[pathname] ?? pathname

  const isActive = (itemHref: string, exact?: boolean) => {
    if (exact) return effectivePath === itemHref
    return effectivePath === itemHref || effectivePath.startsWith(itemHref + '/')
  }

  return (
    <>
      <aside
        className={`fixed left-0 top-0 h-full w-[280px] bg-surface-container-lowest border-r border-outline-variant z-50 flex flex-col p-4 gap-2 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 mb-6">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>package_2</span>
          </div>
          <div>
            <h1 className="text-headline-lg font-headline-lg font-black text-on-surface">BongoERP</h1>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Premium Merchant OS</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg active:scale-[0.98] ${
                  active
                    ? 'bg-secondary-container text-on-secondary-container font-bold transition-all'
                    : 'text-on-surface-variant hover:bg-surface-container-low transition-colors'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  {...(item.fill ? { style: { fontVariationSettings: "'FILL' 1" } } : {})}
                >
                  {item.icon}
                </span>
                <span className="font-label-md text-label-md">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant pt-4">
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md text-label-md">Help Center</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  )
}
