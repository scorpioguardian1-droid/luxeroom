
import React from 'react';
import '../styles/global.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <header>
        {/* Optional header content */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Optional footer content */}
      </footer>
    </div>
  );
};

export default Layout;
