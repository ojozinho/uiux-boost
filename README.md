```
██╗   ██╗██╗   ██╗██╗  ██╗██╗  ██╗
██║   ██║██║   ██║╚██╗██╔╝╚██╗██╔╝
██║   ██║██║   ██║ ╚███╔╝  ╚███╔╝
██║   ██║██║   ██║ ██╔██╗  ██╔██╗
╚██████╔╝██║██╗██║██╔╝ ██╗██╔╝ ██╗
 ╚═════╝ ╚═╝╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
          B O O S T
```

# UI/UX BOOST

**Pixel-perfect. Fully responsive. Zero AI slop.**

A Claude Code skill that turns Figma designs into production websites that actually look like the design — not "kinda close" — identical. Or, if you don't have a Figma file, it guides you through building one from scratch with live visual feedback.

---

## What makes this different

| Traditional | UI/UX BOOST |
|---|---|
| Code it, hope it looks right | Code it, screenshot it, compare it, fix it |
| "Looks close enough" | Pixel-perfect at design width, fluid between |
| Generic AI output | Anti-slop rules ban 40+ AI design patterns |
| One resolution | Responsive from 320px to 1920px+ |
| "Add animations later" | Animations proposed and implemented as part of the flow |

## How it works

```
FIGMA DESIGN ──→ EXTRACT ──→ IMPLEMENT ──→ SCREENSHOT ──→ COMPARE
                                  ↑                          │
                                  └────── FIX ◄──────────────┘
```

1. **Extract** — Pulls every detail from your Figma: fonts, colors, spacing, layout, assets
2. **Implement** — Builds mobile-first, section by section
3. **Screenshot** — Takes browser screenshots at multiple viewports
4. **Compare** — Visually compares against the Figma design
5. **Fix** — Corrects any discrepancies
6. **Repeat** — Until every section is faithful

## No Figma? No problem.

Mode B guides you through design decisions with live implementations:
- Describe your project and vibe
- Get 2-3 aesthetic directions described vividly
- Pick one, then approve each section via screenshots
- End up with a complete, intentional design

## Anti-AI Slop

This skill actively bans patterns that make sites look AI-generated:

- **Typography**: No Inter, Roboto, Open Sans defaults
- **Colors**: No purple-to-cyan gradients
- **Layout**: No three identical cards in a row
- **Components**: No emoji icons, no uniform border-radius
- **Animation**: No identical fade-in on everything
- **Copy**: No "Build the future of [anything]"

Full pattern reference in [`references/ai-slop-patterns.md`](references/ai-slop-patterns.md)

## Requirements

- [Claude Code](https://claude.com/claude-code) with skill support
- Figma MCP plugin (for Mode A — design-to-code)
- Chrome DevTools MCP (for screenshot comparison)
- Node.js 18+ (for dev server)

## Quick Start

```bash
# In Claude Code, just say:
/figma-faithful

# Or naturally:
"implement this Figma design pixel-perfect"
"build me a landing page, no Figma"
"converter esse design do Figma"
```

## Stack Support

- Next.js + Tailwind CSS
- Vite + React + Tailwind CSS
- Astro + Tailwind CSS
- Plain HTML + CSS

## File Structure

```
figma-faithful/
├── SKILL.md                          # Main skill instructions
└── references/
    ├── visual-checklist.md           # Screenshot comparison checklist
    ├── ai-slop-patterns.md           # Anti-AI pattern reference
    └── setup-guide.md                # Integration setup docs
```

---

**Built for humans who design. Powered by Claude who codes.**
