# Visual Fidelity Checklist

Reference for the screenshot comparison loop. Check every item before approving a section.

## Typography
- [ ] Font family matches exactly (no substitutions without noting)
- [ ] Font size matches at Figma artboard width
- [ ] Font weight matches (400, 500, 600, 700, etc.)
- [ ] Line height matches
- [ ] Letter spacing matches
- [ ] Text color matches (check hex, not just "looks close")
- [ ] Text alignment matches (left, center, right, justify)
- [ ] Text transform matches (uppercase, capitalize, none)
- [ ] No text overflow, clipping, or orphaned words

## Colors
- [ ] Background colors match exactly
- [ ] Text colors match exactly
- [ ] Border colors match
- [ ] Gradient directions, stops, and colors match
- [ ] Opacity values match
- [ ] Overlay/blend mode colors match

## Spacing
- [ ] Section padding matches (top, right, bottom, left)
- [ ] Element margins match
- [ ] Gap between items in flex/grid matches
- [ ] Container max-width matches artboard width
- [ ] Content centering is correct
- [ ] Spacing between sections is consistent

## Layout
- [ ] Element order matches
- [ ] Flex/Grid direction matches
- [ ] Alignment (start, center, end, stretch) matches
- [ ] Distribution (space-between, space-around, etc.) matches
- [ ] Elements wrap correctly at smaller widths
- [ ] No unintended horizontal scroll at any viewport

## Images & Icons
- [ ] Correct image/icon rendered (not a placeholder)
- [ ] Dimensions match (width AND height)
- [ ] Aspect ratio preserved
- [ ] Object-fit behavior correct (cover, contain, fill)
- [ ] Border radius on images matches
- [ ] No pixelation, stretching, or distortion
- [ ] Icons sized consistently (usually 24px or as spec'd)

## Effects
- [ ] Box shadows match (x-offset, y-offset, blur, spread, color)
- [ ] Text shadows match (if any)
- [ ] Border radius matches (check each corner if different)
- [ ] Blur/backdrop-filter effects match
- [ ] Hover states implemented where designed
- [ ] Focus states visible for keyboard navigation

## Responsive Integrity
- [ ] Mobile layout matches Figma mobile frame at exact width
- [ ] Desktop layout matches Figma desktop frame at exact width
- [ ] No layout breaks at ANY width between breakpoints
- [ ] Font sizes scale appropriately (clamp or media queries)
- [ ] Touch targets >= 44px on mobile viewports
- [ ] Images don't overflow containers on small screens
- [ ] Navigation adapts properly (hamburger, stack, etc.)
- [ ] No content hidden unintentionally on any viewport

## Anti-Slop Final Check
- [ ] No banned fonts used (Inter, Roboto, etc.) unless explicitly in design
- [ ] No purple-to-cyan gradients
- [ ] No three identical cards in a row without design intention
- [ ] No colored left borders on sections
- [ ] No emoji used as icons
- [ ] No uniform 16px border-radius everywhere
- [ ] No generic hero with vague headline
- [ ] Animations are varied, not uniform fade-in on everything
