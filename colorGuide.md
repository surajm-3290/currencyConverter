# Currency Converter UI Design Guide

## Color Palette

### Primary Gradient
- #1A235A (Deep Navy)
- #2E1D73 (Dark Purple)
- #5B42F3 (Primary Purple)
- #7B5CFF (Light Purple)

```css
background: linear-gradient(
    90deg,
    #1A235A 0%,
    #2E1D73 35%,
    #5B42F3 70%,
    #7B5CFF 100%
);
```

## Background Colors
- #F5F6FC (Main Background)
- #FFFFFF (Cards)
- #F8F9FF (Input Fields)

## Text Colors
- #161C3D (Main Heading)
- #3D4A6E (Secondary Text)
- #6B7280 (Muted Text)
- #9CA3AF (Footer Text)

## Success Color
- #22C55E

## Border Colors
- #E5E7EB
- #D8DDF0

## Icon Circle Colors
- Exchange Rate: #7C5CFF
- Last Updated: #10B981
- Rate Source: #3B82F6
- Update Interval: #FBBF24

## Assets

### Flags
https://flagicons.lipis.dev/

### Icons
https://lucide.dev/icons/

Suggested icons:
- Moon
- Globe
- Chevron Down
- Refresh Cw
- Arrow Left Right
- Trending Up
- Clock
- Shield
- Heart

### Fonts
- Poppins: https://fonts.google.com/specimen/Poppins
- Inter: https://fonts.google.com/specimen/Inter

## UI Structure

Navbar
- Logo
- Title
- Dark Mode Icon
- Language Selector

Hero Section
- Main Heading
- Subtitle

Converter Card
- From Currency
- Amount Input
- Swap Button
- To Currency
- Result Box
- Convert Button

Info Cards
- Exchange Rate
- Last Updated
- Source
- Refresh Interval

Footer

## Extra Features for JavaScript Practice
- Dark / Light Mode
- Currency Search Dropdown
- Swap Animation
- Conversion History (localStorage)
- Favorite Currencies
- Exchange Rate Chart
- Responsive Design
- Loading Skeleton
