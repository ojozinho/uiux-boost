# Figma Faithful — Setup Guide

Quick reference for setting up all integrations.

## 1. Figma MCP Plugin

The skill uses the Figma MCP plugin to read designs. You need to authenticate it before using Mode A.

**In Claude Code CLI:**
```
claude mcp
```
Find the Figma plugin and follow the OAuth flow to connect your account.

**In VS Code:**
Go to Claude Code extension settings > MCP Servers > authorize the Figma plugin.

This is OAuth-based — you don't paste a token in chat. The plugin handles auth on its own. Once connected, the skill can read any Figma file you have access to.

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
