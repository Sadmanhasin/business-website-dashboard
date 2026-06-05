---
name: BongoERP
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  currency-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-mobile: 16px
  container-padding-desktop: 32px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system is built for the modern Bangladeshi merchant, balancing enterprise-grade power with a clean, approachable interface. The brand personality is **trustworthy, efficient, and sophisticated**, designed to feel like a high-performance tool rather than a generic utility.

The aesthetic follows a **Modern Minimalist** movement, heavily influenced by the high-density layouts of industry leaders like Stripe and Linear. It prioritizes clarity and data-driven decision-making, using ample white space to organize complex information. The visual language conveys stability through a structured grid and a sophisticated color palette that feels premium yet functional.

**Target Audience:**
*   Tech-savvy online merchants in Bangladesh.
*   Operations managers requiring high data density.
*   Finance and logistics professionals who value precision and speed.

**Emotional Response:**
*   **Confidence:** The UI feels solid and reliable.
*   **Clarity:** Even complex inventory or financial data is easy to parse.
*   **Momentum:** The interface feels fast, responsive, and ready for growth.

## Colors

The color palette is anchored in a deep, authoritative navy to establish trust, supported by functional colors that guide the merchant's attention toward growth and action.

*   **Primary (Deep Navy):** Used for primary typography, navigation sidebars, and core brand elements. It provides the "weight" required for an enterprise system.
*   **Secondary (Royal Blue):** Reserved for primary actions, links, and selection states. It adds a "premium tech" feel.
*   **Success (Emerald Green):** Crucial for highlighting profits, successful shipments, and positive stock levels.
*   **Neutral & Surfaces:** We use a refined scale of cool grays. The background is pure white to maximize contrast, while `#F9FAFB` is used for containers and sidebars to create subtle depth.
*   **Borders:** A consistent `#E2E8F0` is used for all structural lines, ensuring boundaries are visible but never distracting.

## Typography

This design system utilizes a dual-font strategy to balance technical precision with extreme legibility.

*   **Geist** is used for headlines and labels. Its technical, geometric nature suits the ERP's data-driven focus.
*   **Inter** is used for body text and numbers. Its neutrality and high x-height make it perfect for long tables and inventory lists.

**Data Density:** We utilize tight line-heights (1.4x to 1.5x) for body text to allow more information to be visible above the fold without sacrificing readability.

**Localization:**
*   **Currency:** The Taka symbol (৳) should always match the weight and color of the adjacent numerical value.
*   **Numbers:** Use tabular lining figures for all numeric data in tables to ensure columns align perfectly.

## Layout & Spacing

The layout uses a **4px base unit** to ensure mathematical harmony across all components.

*   **Grid:** A 12-column fluid grid is used for the main content area. Sidebars are fixed at 240px or 280px depending on the screen size.
*   **Data Density:** In complex views (like Order Management), vertical spacing is reduced to `stack-sm` (8px) between rows to maximize visible data.
*   **Breakpoints:**
    *   **Mobile (<768px):** Single column, 16px margins, hidden sidebar (drawer).
    *   **Tablet (768px - 1280px):** Condensed sidebar, 24px margins.
    *   **Desktop (>1280px):** Full sidebar, 32px margins, max-content width of 1600px for ultra-wide displays.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Shadows** rather than heavy color blocks.

*   **Base Level:** `#FFFFFF` background.
*   **Tier 1 (Cards/Containers):** White background with a 1px border in `#E2E8F0` and a "Soft Ambient" shadow (0px 1px 3px rgba(15, 23, 42, 0.08)).
*   **Tier 2 (Modals/Popovers):** White background with a slightly more pronounced shadow (0px 10px 15px -3px rgba(15, 23, 42, 0.1)) to indicate focus.
*   **Active States:** High-contrast blue shadows (0px 0px 0px 2px rgba(59, 130, 246, 0.2)) are used for keyboard focus and active input states.

## Shapes

The design system uses a **Rounded** shape language to soften the industrial nature of an ERP.

*   **Standard Components:** Buttons, inputs, and small widgets use a `0.5rem` (8px) radius.
*   **Large Containers:** Main dashboard cards and content areas use `rounded-lg` (16px) to create a clear visual distinction between the page background and content blocks.
*   **Status Badges:** Use a pill-shaped (full-round) radius to distinguish them from interactive buttons.

## Components

### Buttons
*   **Primary:** Solid `#0F172A` with white text. High-contrast.
*   **Secondary:** White background, `#E2E8F0` border, `#0F172A` text.
*   **Ghost:** Transparent background, visible only on hover. Used for secondary navigation actions.

### Cards
*   White fill, 1px border in `#E2E8F0`. 16px border-radius.
*   Header sections within cards should have a subtle bottom border to separate titles from content.

### Inputs & Selects
*   Height of 40px for standard density.
*   Background: `#FFFFFF`. Border: `#E2E8F0`.
*   Focus state: Border changes to `#3B82F6` with a soft blue glow.

### Data Tables
*   **Header:** Light gray background (`#F9FAFB`), uppercase labels in `label-md` Geist font.
*   **Rows:** Subtle hover state change to `#F9FAFB`. 
*   **Localization:** Taka symbol (৳) should be prefixed to all amount columns. Use `body-sm` for secondary info (like SKU under a Product Name).

### Chips/Badges
*   Used for order status (e.g., "Pending", "Shipped").
*   Soft background tints (e.g., light green for Success) with high-contrast text of the same hue.

### Key Metrics (KPIs)
*   Large `headline-lg` numbers.
*   Trend indicators: Emerald Green for up-ticks, Crimson for down-ticks.