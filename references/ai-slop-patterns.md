# AI Design Slop — Complete Pattern Reference

Comprehensive list of patterns that make websites look obviously AI-generated.
The agent must avoid ALL of these in its output and flag them in user-provided designs.

## Typography Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| Inter, Roboto, Open Sans, Montserrat, Poppins as default | Most common in AI training data, so they're the default output | Use distinctive typefaces: Satoshi, General Sans, Cabinet Grotesk, Clash Display, or specific brand fonts |
| Same font for everything | No typographic hierarchy = no design thinking | Pair display + body fonts with contrasting styles |
| Eyebrow labels on every section ("ABOUT US", "OUR SERVICES") | Formulaic structure with decorative labels before headings | Use eyebrows sparingly and only when they add information |
| Monospace captions everywhere | AI loves decorating with code-style type | Use monospace only for actual code or intentional brutalist effect |
| Em-dashes scattered in headlines | Stylistic padding the AI sprinkles everywhere | Use em-dashes only where grammar requires them |

## Color Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| Purple-to-cyan/blue gradient | The #1 most common AI palette, from Tailwind tutorials | Build palettes from color theory with intentional choices |
| Dark background + neon cyan/purple accent | "Tech startup" cliche that AI defaults to | Use unexpected color combinations with proper contrast |
| Single accent color on monochrome | Lazy palette that requires no design decisions | Use 60-30-10 rule with harmonious multi-color palettes |
| Rainbow gradient buttons | AI trying to be "creative" without understanding restraint | Solid colors or subtle, intentional gradients |
| #7C3AED (Tailwind purple-600) everywhere | Direct copy from Tailwind's default palette | Define custom colors derived from brand or mood |

## Layout Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| Three identical cards in a row | The most predictable AI layout pattern | Vary card sizes, use asymmetric grids, or different layouts |
| Perfect bilateral symmetry | Everything centered and mirrored = no visual tension | Introduce asymmetry, off-center elements, unexpected alignment |
| Hero → 3 cards → testimonial → CTA → footer | Cookie-cutter section ordering | Design each page's narrative flow uniquely |
| Colored left border on cards/sections | Most reliable single AI tell in web design | Use borders intentionally or not at all |
| Uniform padding everywhere (p-8, p-6) | Everything feels the same because it IS the same | Vary spacing to create rhythm and hierarchy |

## Component Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| Icon + title + 2-line description card | The default AI component, repeated infinitely | Design components specific to the content they hold |
| Glassmorphism/frosted glass on everything | AI's go-to "modern" effect | Use glassmorphism sparingly and with purpose |
| Uniform 16px border-radius on all elements | No thought to which shapes are round vs sharp | Mix radii intentionally (0px AND 24px in same design) |
| Emoji as feature icons (rocket, lightbulb, sparkles) | Lazy substitute for actual iconography | Use a consistent icon set or custom illustrations |
| Generic stock photo of diverse team smiling | AI can't source real imagery, defaults to description | Use real photography, illustrations, or no imagery |
| "Get Started" CTA button on every section | Repetitive call-to-action without context | Vary CTAs based on what the section is actually offering |

## Animation Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| Identical fade-in on every element | Same animation applied uniformly = no choreography | Stagger timing, vary direction, use different animations for different purposes |
| Same easing for everything | No thought to motion personality | Ease-out for entrances, ease-in for exits, spring for interactions |
| Bounce on every hover | The AI default "fun" interaction | Use subtle transforms appropriate to the element type |
| Everything animates at once on scroll | No sequencing or priority | Choreograph: primary elements first, secondary staggered |

## Content/Copy Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| "Build the future of [X]" | Generic headline that fits any company | Write specific, opinionated copy |
| "Delivering exceptional solutions" | Describes literally nothing | Say what the product actually does, specifically |
| "[Adjective] [noun] that helps you [verb]" | Template sentence structure | Vary sentence structure, use concrete examples |
| Lorem ipsum left in production | AI sometimes forgets to replace placeholder text | Use real content or clearly marked placeholders |

## Structural Tells

| Pattern | Why it's slop | What to do instead |
|---------|---------------|-------------------|
| Every section has the same internal structure | No adaptation to content needs | Design each section for its specific content |
| Exact same spacing between all sections | Uniform rhythm = monotonous | Vary section spacing based on content relationship |
| Footer with 4 identical columns | Column-count repetition pattern | Design footer for actual content needs |
| Navigation with exactly 5 links | Suspiciously round number | Include exactly the links needed, no more |

---

## Quick Self-Test

Count how many of these are present in your output:

- 0-1: Clean. Ship it.
- 2-3: Warning zone. Review and replace the offending patterns.
- 4+: Full slop. Rewrite with intentional design decisions.

The goal isn't to avoid ALL common patterns — it's to ensure every choice is INTENTIONAL, not default.
