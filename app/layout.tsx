import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BongoERP | Premium Merchant OS',
  description: 'BongoERP - Premium Merchant Operating System',
}

const tailwindConfig = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#001a42",
        "on-primary-fixed-variant": "#3f465c",
        "error": "#ba1a1a",
        "tertiary-fixed": "#6ffbbe",
        "primary-container": "#131b2e",
        "secondary": "#0058be",
        "on-background": "#0b1c30",
        "on-error": "#ffffff",
        "outline-variant": "#c6c6cd",
        "inverse-primary": "#bec6e0",
        "tertiary-container": "#002113",
        "secondary-fixed-dim": "#adc6ff",
        "surface-container-high": "#dce9ff",
        "on-secondary-container": "#fefcff",
        "inverse-on-surface": "#eaf1ff",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "primary": "#000000",
        "surface-tint": "#565e74",
        "on-surface-variant": "#45464d",
        "background": "#f8f9ff",
        "tertiary": "#000000",
        "secondary-container": "#2170e4",
        "outline": "#76777d",
        "secondary-fixed": "#d8e2ff",
        "surface-variant": "#d3e4fe",
        "on-primary": "#ffffff",
        "surface-container": "#e5eeff",
        "on-secondary": "#ffffff",
        "inverse-surface": "#213145",
        "on-surface": "#0b1c30",
        "on-error-container": "#93000a",
        "on-primary-fixed": "#131b2e",
        "surface-container-highest": "#d3e4fe",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#4edea3",
        "on-primary-container": "#7c839b",
        "on-tertiary-fixed": "#002113",
        "surface-bright": "#f8f9ff",
        "on-tertiary-container": "#009668",
        "surface-dim": "#cbdbf5",
        "surface": "#f8f9ff",
        "surface-container-low": "#eff4ff",
        "primary-fixed": "#dae2fd",
        "on-tertiary-fixed-variant": "#005236",
        "primary-fixed-dim": "#bec6e0",
        "on-secondary-fixed-variant": "#004395"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "container-padding-mobile": "16px",
        "stack-lg": "24px",
        unit: "4px",
        "stack-md": "16px",
        "stack-sm": "8px",
        gutter: "16px",
        "container-padding-desktop": "32px"
      },
      fontFamily: {
        "headline-sm": ["Geist"],
        "headline-lg": ["Geist"],
        "headline-md": ["Geist"],
        "body-md": ["Inter"],
        "label-md": ["Geist"],
        "label-sm": ["Geist"],
        "display-lg": ["Geist"],
        "body-lg": ["Inter"],
        "body-sm": ["Inter"],
        "currency-display": ["Inter"]
      },
      fontSize: {
        "headline-sm": ["16px", {"lineHeight": "24px", "fontWeight": "600"}],
        "headline-lg": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "headline-md": ["20px", {"lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
        "label-sm": ["11px", {"lineHeight": "14px", "fontWeight": "600"}],
        "display-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "body-sm": ["13px", {"lineHeight": "18px", "fontWeight": "400"}],
        "currency-display": ["24px", {"lineHeight": "32px", "fontWeight": "500"}]
      }
    }
  }
}
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:wght@100..900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      </head>
      <body className="bg-background text-on-surface antialiased overflow-hidden">
        {children}
      </body>
    </html>
  )
}
