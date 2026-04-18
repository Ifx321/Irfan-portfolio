import { ReactNode } from "react";

export const HeroBackgroundWrapper = ({ children }: { children: ReactNode }) => {
  const VIDEO_URL =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Subtle Overlay to ensure text pops over the bright purple video */}
      <div className="fixed inset-0 bg-black/20 z-0"></div>

      {/* Existing Content Injection */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center px-6">
        {children}
      </div>
    </section>
  );
};
