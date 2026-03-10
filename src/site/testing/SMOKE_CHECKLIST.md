# RiyadhStone® Site Smoke Checklist

## 1. Visual & Motion (GSAP / NotebookLM)

- [ ] Navbar reactive: Transparent at top, glassmorphism after scroll (50px).
- [ ] Quick Zoom: Hero background scales down on page load.
- [ ] Mask Reveal: Section headings reveal through overflow:hidden masks on scroll.
- [ ] Reveal: Cards stagger fade-up when entering viewport.
- [ ] Parallax: Background stone textures move at a slower rate than foreground.
- [ ] Global Noise: Subtle grain overlay is visible site-wide.

## 2. Navigation & Layout

- [ ] Header links route to correct pages.
- [ ] MegaMenu displays correct taxonomy for all 4 primary links.
- [ ] Anchors: Scrollspy highlights active section in sidebar (on relevant pages).
- [ ] Footer: All 6 main links repeat correctly; Operational Status pulses.

## 3. Data & Widgets

- [ ] E-Factory Bridge: Displays "Demo Data" if local dev server is not running.
- [ ] Widgets: Production Summary, Quality, and Delivery trackers animate values.
- [ ] Downloads: At least 10 demo PDFs are mapped and clickable in Project Supports.

## 4. Interactive Tools

- [ ] "How I Choose?": Multi-step selection logic pre-fills "Recommended System".
- [ ] PDF Export: "Export Recommendation" generates a client-side summary.
- [ ] RFQ Form: Submissions are saved to localStorage (MEETING_REQUESTS / RFQ_REQUESTS).

## 5. Performance

- [ ] `?lite=1`: Verify continuous MG loops and pinned stacks are disabled.
- [ ] Reduced Motion: Verify site yields to OS-level preference.
