
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';

const Index: React.FC = () => {
  const features = [
    {
      title: "Prime Locations",
      description: "All our properties are situated in convenient, safe neighborhoods with easy access to public transportation."
    },
    {
      title: "Quality Furnishings",
      description: "Every room is equipped with comfortable, modern furniture and essential amenities."
    },
    {
      title: "Flexible Terms",
      description: "Choose from various rental periods that suit your needs, from monthly to yearly stays."
    }
  ];

  return (
    <Layout>
      <div className="space-y-16 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Room</h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover comfortable, fully-furnished rooms in prime locations. 
              Whether you're staying for a month or a year, we have the perfect space for you.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/rooms">View Available Rooms</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
              alt="Modern living space" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover" 
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gray-50 rounded-lg">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Explore More</h2>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about-us">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
