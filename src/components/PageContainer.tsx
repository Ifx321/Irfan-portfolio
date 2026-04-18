import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => (
  <div className="w-full min-h-screen pt-20 pb-32">
    <div className="container mx-auto max-w-5xl px-6 lg:px-8">
      {children}
    </div>
  </div>
);
