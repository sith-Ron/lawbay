import Footer from '@/pages/footer/page';
import Hero from '@/pages/hero/page';
import Navbar from '@/pages/nav/page';
import Team from '@/pages/team/page';
import React from 'react';
function App() {
  return (
    <div >
      <Navbar />
      <Team />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;