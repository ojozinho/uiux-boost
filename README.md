# UI/UX BOOST

Claude Code skill that turns Figma designs into production sites — pixel-perfect, responsive, no AI-looking output.

No Figma? It walks you through building a design from scratch with live screenshots at every step.

## How it works

Give it a Figma link. It extracts fonts, colors, spacing, assets. Builds mobile-first, section by section. Takes screenshots at each breakpoint. Compares against the original. Fixes what doesn't match. Repeats until it's right.

Without Figma, it asks what you're building, proposes 2-3 visual directions, and implements the one you pick — checking each section with you via screenshots before moving on.

## Anti-slop

Every build runs through 40+ checks that catch common AI design patterns: default fonts (Inter, Roboto), purple gradients, identical card grids, emoji as icons, uniform border-radius, generic copy. If it looks like AI made it, the skill flags it.

Full list in [references/ai-slop-patterns.md](references/ai-slop-patterns.md).

## Setup

- [Claude Code](https://claude.com/claude-code)
- Figma MCP plugin (if using Figma designs)
- Chrome DevTools MCP (for screenshot comparison)
- Node.js 18+

## Usage

```
/figma-faithful
```

Or just describe what you want — the skill triggers on phrases like "implement this Figma", "build me a site", "converter esse design".

## Stacks

Next.js, Vite + React, Astro, plain HTML. All with Tailwind CSS.

## Files

```
SKILL.md              — skill instructions
references/
  visual-checklist.md — screenshot comparison checklist
  ai-slop-patterns.md — banned AI patterns
  setup-guide.md      — integration setup
site/                 — landing page (uiuxboost.vercel.app)
```
