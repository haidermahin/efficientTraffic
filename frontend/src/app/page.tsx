import Hero from '@components/LandingPage/HeroSection';
import TestimonialCarousel from '@components/LandingPage/TestimonialCarousel';
import TrafficControls from '@components/LandingPage/TrafficControls';
import TrafficSafety from '@components/LandingPage/TrafficSafety';
import VideoBanner from '@components/LandingPage/VideoBanner';
import WorkZoneSection from '@components/LandingPage/WorkZoneSection';
import React from 'react';

function page() {
  return (
    <div>
      <VideoBanner />
      <WorkZoneSection />
      <TrafficSafety />
      <TrafficControls />
      <TestimonialCarousel />
    </div>
  );
}

export default page;
