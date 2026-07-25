export const themeTokens = {
  colors: {
    bgDark: "#0b0f17",
    bgCard: "#111827",
    bgCardHover: "#1f293d",
    laravelCrimson: "#FF2D20",
    emeraldStatus: "#10B981",
    cyanAccent: "#06B6D4",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderActive: "rgba(255, 45, 32, 0.4)",
  },
  typography: {
    fontSans: "var(--font-sans, system-ui, sans-serif)",
    fontMono: "var(--font-mono, JetBrains Mono, monospace)",
  },
  shadows: {
    glowLaravel: "0 0 20px rgba(255, 45, 32, 0.25)",
    glowEmerald: "0 0 20px rgba(16, 185, 129, 0.25)",
    cardElevated: "0 8px 30px rgba(0, 0, 0, 0.4)",
  },
};

export type ThemeTokens = typeof themeTokens;
