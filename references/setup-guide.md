# Figma Faithful — Setup Guide

Quick reference for setting up all integrations.

## 1. Figma Personal Access Token

1. Go to [figma.com](https://figma.com) > click your avatar > **Settings**
2. Scroll to **Personal Access Tokens**
3. Click **Generate new token**
4. Name it something like "Claude Code"
5. Scopes: **File content** (read-only is enough)
6. Copy the token immediately (you can't see it again)
7. The Figma MCP plugin in Claude Code will use this token

## 2. Vercel (Optional)

For automatic preview deploys:

1. Get a Vercel token from [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Save it in your project's env or pass it when asked
3. The skill can link your project to Vercel for continuous deployment

## 3. Project Stack Options

| Stack | Best for | Command |
|-------|----------|---------|
| Next.js + Tailwind | Full apps, SSR, Vercel-optimized | `npx create-next-app@latest` |
| Vite + React + Tailwind | SPAs, fast dev, simple deploys | `npm create vite@latest` |
| Astro + Tailwind | Static sites, landing pages, content | `npm create astro@latest` |
| HTML + CSS | Simple pages, no framework needed | Manual setup |

## 4. Useful Shortcuts

| Shortcut | What it does |
|----------|-------------|
| `Alt+V` | Paste screenshot into Claude Code terminal |
| `Ctrl+Shift+I` | Open browser DevTools |
| `Ctrl+Shift+M` | Toggle responsive mode in browser |
| Right-click in Figma > Copy as CSS | Get raw CSS values |
| `F` in Figma | Frame tool for creating artboards |

## 5. Getting Good Figma URLs

The skill needs frame-specific URLs (with `node-id`):

**Good**: `https://figma.com/design/abc123/MyDesign?node-id=123-456`
**Bad**: `https://figma.com/design/abc123/MyDesign` (no node-id)

To get the right URL:
1. Click the frame you want to implement
2. Right-click > **Copy link**
3. That link will include the node-id
