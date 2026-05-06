// ============================================================
// data/theme.ts
//
// Centralise la palette de couleurs et les polices du site.
// Importer ce fichier dans les composants/pages pour garantir
// une cohérence visuelle et faciliter les futures modifications
// de design. Les couleurs ont été sélectionnées pour offrir
// un contraste suffisant et une identité forte. Les polices
// utilisées sont des alternatives Web sans‑serif sûres.
// ============================================================

export const THEME = {
  colors: {
    /** Couleur principale utilisée pour les accents (rouge NOVARK) */
    primary: "#E8272A",
    /** Couleur secondaire utilisée pour les blocs foncés et titres */
    secondary: "#0D1B3E",
    /** Variante de bleu pour les éléments interactifs (liens, CTA) */
    accent: "#0B3D91",
    /** Couleur de fond claire pour les sections alternées */
    lightBg: "#f8f9fa",
    /** Couleur de texte principal foncé */
    text: "#111111",
    /** Couleur de texte muté pour les descriptions */
    muted: "#777777",
    /** Couleur de séparateur neutre */
    border: "#eeeeee",
  },
  fonts: {
    /** Police de base sans‑serif pour tout le site */
    sans: "Arial, Helvetica, sans-serif",
    /** Police monospace optionnelle (non utilisée par défaut) */
    mono: "'Courier New', monospace",
  },
};

export type Theme = typeof THEME;