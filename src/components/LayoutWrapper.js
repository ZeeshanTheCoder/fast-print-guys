'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isPublic = pathname === '/login' || pathname === '/signup';

  return (
    <>
      {!isPublic && <Header />}
      {children}
      {!isPublic && <Footer />}
    </>
  );
}