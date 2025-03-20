"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { type ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<IProvidersProps> = ({ children }) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};

export default Providers;
