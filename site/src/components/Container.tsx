"use client";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: 1320,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(24px, 5vw, 64px)",
        paddingRight: "clamp(24px, 5vw, 64px)",
      }}
    >
      {children}
    </div>
  );
}
