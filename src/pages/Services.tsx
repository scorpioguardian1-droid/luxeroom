
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Flexible Leasing",
      description: "Choose from monthly or yearly leasing options that suit your needs, with easy renewal processes."
    },
    {
      title: "Furnished Rooms",
      description: "All rooms come fully furnished with quality furniture and essential appliances."
    },
    {
      title: "Maintenance Support",
      description: "24/7 maintenance support to ensure your comfort and peace of mind."
    },
    {
      title: "High-Speed Internet",
      description: "Complimentary high-speed WiFi in all our properties for seamless connectivity."
    },
    {
      title: "Regular Cleaning",
      description: "Optional cleaning services available for common areas and private spaces."
    },
    {
      title: "Security Systems",
      description: "Modern security systems and surveillance for your safety."
    }
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover the range of services we offer to make your stay comfortable and worry-free.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/rooms">Browse Available Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
