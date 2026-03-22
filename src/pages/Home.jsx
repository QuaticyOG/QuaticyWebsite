import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import TwitchSection from '@/components/home/TwitchSection';
import YouTubeSection from '@/components/home/YouTubeSection';
import SetupSection from '@/components/home/SetupSection';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection />
      <TwitchSection />
      <YouTubeSection />
      <SetupSection />
      <AboutSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quaticy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}