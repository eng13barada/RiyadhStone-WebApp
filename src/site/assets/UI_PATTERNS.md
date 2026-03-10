# RiyadhStone® UI Patterns

## 1. The "Stone Result" Card

- **Radius**: 2rem to 3rem.
- **Texture**: Subtle `stone-grain` overlay.
- **Interaction**: Lift on hover (TranslateY -4px) + Border-Gold-30%.

## 2. Mega Menu Grid

- **Width**: Fixed 980px.
- **Columns**: 3-column grid for taxonomy.
- **Content**: Title (Bold) + 1-2 line description (Muted).

## 3. Pinned Stacks (Protocol)

- **Behavior**: ScrollTrigger pinning.
- **Metaphor**: Each page section "stacks" over the previous one to show a sequence (Plan -> Validate -> Produce).

## 4. MotionGraphic (MG) Cards

- **Library**: MG-1 to MG-8.
- **Usage**: Use within technical sections (Engineering, Quality, HSE) as "functional micro-UIs".
- **Rule**: Must pause or simplify when off-screen.

## 5. Mask Reveal Text

- **CSS**: `overflow: hidden` + `gsap.from(target, { yPercent: 100 })`.
- **Usage**: Main page and section headings only.
