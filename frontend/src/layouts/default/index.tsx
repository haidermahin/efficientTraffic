import Header from './Header';
import Footer from './Footer';
import { Suspense } from 'react';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Footer />
    </main>
  );
};

export default DefaultLayout;
