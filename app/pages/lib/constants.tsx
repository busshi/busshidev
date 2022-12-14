import { css } from "styled-components";

export interface Color {
  start: string;
  stop: string;
}

/**
 * Color constants
 *
 * @example
 * ```
 * const Button = styled.div`
 *   color: ${COLORS[0].start};
 * `
 * ```
 */

export const colors = [
  { start: "var(--NTCVAR-design-start)", stop: "var(--NTCVAR-design-stop)" },
  { start: "var(--NTCVAR-develop-start)", stop: "var(--NTCVAR-develop-stop)" },
  { start: "var(--NTCVAR-deploy-start)", stop: "var(--NTCVAR-deploy-stop)" },
  { start: "var(--NTCVAR-boost-start)", stop: "var(--NTCVAR-boost-stop)" },
];
