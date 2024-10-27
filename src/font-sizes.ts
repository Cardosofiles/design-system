/**
 * Objeto que define tamanhos de fonte padrão para a aplicação.
 * Cada propriedade representa um tamanho de fonte descrito em unidades `rem` (convertidos em pixels assumindo que `1rem = 16px`).
 *
 * Tamanhos de fonte disponíveis:
 * - `xxs`: 0.625rem (10px) - Extra extra pequeno.
 * - `xs`: 0.75rem (12px) - Extra pequeno.
 * - `sm`: 0.875rem (14px) - Pequeno.
 * - `md`: 1rem (16px) - Médio (padrão em muitos navegadores).
 * - `lg`: 1.125rem (18px) - Grande.
 * - `xl`: 1.25rem (20px) - Extra grande.
 * - `2xl`: 1.5rem (24px) - Duplo extra grande.
 * - `4xl`: 2rem (32px) - Quádruplo extra grande.
 * - `5xl`: 2.25rem (36px) - Quíntuplo extra grande.
 * - `6xl`: 3rem (48px) - Séxtuplo extra grande.
 * - `7xl`: 4rem (64px) - Sétuplo extra grande.
 * - `8xl`: 4.5rem (72px) - Oitavo extra grande.
 * - `9xl`: 6rem (96px) - Nono extra grande.
 *
 * Estes valores podem ser usados diretamente no CSS-in-JS ou bibliotecas de estilização
 * para manter consistência no design da aplicação.
 */
export const fontSizes = {
  xxs: "0.625rem", // 10px
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "4xl": "2rem", // 32px
  "5xl": "2.25rem", // 36px
  "6xl": "3rem", // 48px
  "7xl": "4rem", // 64px
  "8xl": "4.5rem", // 72px
  "9xl": "6rem", // 96px
};
