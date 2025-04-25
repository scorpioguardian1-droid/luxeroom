
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const RoomDetail = () => {
  const { id } = useParams();
  
  const handleBooking = () => {
    toast.info("PayPal integration coming soon!");
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Room Details</h1>
            <Button asChild variant="outline">
              <Link to="/rooms">Back to Rooms</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Room" 
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Cozy Studio Apartment</h2>
              <p className="text-gray-600 mb-4">
                A beautiful and comfortable room perfect for your stay. This room includes all basic amenities
                and is conveniently located near popular attractions.
              </p>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">$800/month</p>
                    <p className="text-sm text-gray-500">Utilities included</p>
                  </div>
                  <Button onClick={handleBooking}>Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetail;
