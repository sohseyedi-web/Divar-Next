"use client";

import { DivarProvider } from "@/context/DivarProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <DivarProvider>{children}</DivarProvider>
    </QueryClientProvider>
  );
}
