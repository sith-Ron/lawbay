

import Blog from '@/pages/blog/page';
import HeroSection from '@/pages/hero/hero';
import Hero from '@/pages/hero/page';

import Team from '@/pages/team/page';
import React from 'react';
function App() {
  return (
    <div >
      <HeroSection />
      <Hero />
      <Team />
      <Blog />
    </div>
  );
}

export default App;