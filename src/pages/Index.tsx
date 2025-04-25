
import React from 'react';
import Layout from '../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-2">
        <div>
          <h1>Welcome to Your App</h1>
          <p>This is a simple, clean React application using TypeScript and CSS.</p>
        </div>
        <div>
          <img 
            src="/placeholder.svg" 
            alt="App illustration" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
