import { Outlet } from 'react-router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
