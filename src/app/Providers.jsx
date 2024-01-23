"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ResponsiveProvider } from "@/context/ResponsiveContext";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ResponsiveProvider>{children}</ResponsiveProvider>
    </QueryClientProvider>
  );
}
