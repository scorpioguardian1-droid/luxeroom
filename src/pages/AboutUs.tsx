
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Our Housing Solutions</h1>
          <div className="grid gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Founded in 2024, we've been dedicated to providing comfortable and affordable housing solutions. Our mission is to create living spaces that feel like home, whether you're staying for a month or a year.
              </p>
              <p className="text-lg text-gray-600">
                We carefully select and maintain all our properties to ensure they meet our high standards of comfort and quality. Each room is thoughtfully furnished and equipped with modern amenities to make your stay as comfortable as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Building exterior" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                alt="Modern architecture" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link to="/rooms">View Our Rooms</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
