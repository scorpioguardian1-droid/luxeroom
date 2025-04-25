
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">RoomRental</Link>
            <div className="space-x-4">
              <Button asChild variant="ghost">
                <Link to="/">Home</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/rooms">Rooms</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/services">Services</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/about-us">About Us</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4">{children}</main>
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 RoomRental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
