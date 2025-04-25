
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Room</h1>
            <p className="text-xl text-gray-600 mb-6">Browse through our selection of quality rooms and find your next home.</p>
            <Button asChild size="lg">
              <Link to="/rooms">View Available Rooms</Link>
            </Button>
          </div>
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Room illustration" 
              className="w-full max-w-lg mx-auto" 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
