"use client";

import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer style={{ paddingTop: 64, paddingBottom: 64, borderTop: "2px solid var(--border-heavy)" }}>
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 48 }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Logo size={60} animate={false} />
            <p style={{ color: "var(--text-secondary)", fontSize: 14, maxWidth: 260, lineHeight: 1.6 }}>
              Built for humans who design.
              <br />
              Powered by Claude who codes.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.2em", marginBottom: 8 }}>
              LINKS
            </span>
            <a href="https://github.com/ojozinho/uiux-boost" target="_blank" rel="noopener noreferrer" className="tooltip-track" data-tooltip="GitHub" style={{ color: "var(--text-secondary)", fontSize: 14, textDecoration: "none", transition: "color 0.3s" }}>
              Source Code
            </a>
            <a href="#how-it-works" className="tooltip-track" data-tooltip="Pipeline" style={{ color: "var(--text-secondary)", fontSize: 14, textDecoration: "none", transition: "color 0.3s" }}>
              How it Works
            </a>
          </div>

          {/* Quick start */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.2em", marginBottom: 8 }}>
              QUICK START
            </span>
            <div className="neo-border" style={{ background: "var(--bg-card)", padding: 16, fontFamily: "var(--font-mono)", fontSize: 13 }}>
              <span style={{ color: "var(--olive-light)" }}>$</span>{" "}
              <span style={{ color: "var(--text-primary)" }}>/figma-faithful</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
            2026 UI/UX BOOST. No rights reserved. Ship it.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--olive-light)", animation: "pulse-glow 2s infinite" }} />
            <span style={{ color: "var(--text-muted)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
              SKILL ACTIVE
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
