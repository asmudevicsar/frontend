import React from 'react';

import Header from '@components/layoutComponents/Header';
import Footer from '@components/layoutComponents/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="max-w-full mx-auto py-4 pb-0">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
