import React from 'react';
import { FloatingNav } from './FloatingNav';

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-[#09090b] relative overflow-x-hidden">
      {/* Video Background — fixed behind all pages */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Subtle Overlay */}
      <div className="fixed inset-0 bg-black/20 z-0"></div>

      {/* Page Content */}
      <main className="relative z-10 w-full h-full">
        {children}
      </main>

      {/* Floating Island Navigation */}
      <FloatingNav />
    </div>
  );
};

