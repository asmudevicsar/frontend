import React from 'react';

import Header from '@components/layoutComponents/Header';
import Footer from '@components/layoutComponents/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
