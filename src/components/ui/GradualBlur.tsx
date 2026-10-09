"use client";

import GradualBlurMemo, { type GradualBlurProps } from "@/components/vendor/react-bits/GradualBlur";

export type { GradualBlurProps };

// AMORA wrapper for React Bits GradualBlur.
// Softens edges with a progressive backdrop-filter blur gradient.
export function GradualBlur(props: GradualBlurProps) {
  return <GradualBlurMemo {...props} />;
}
