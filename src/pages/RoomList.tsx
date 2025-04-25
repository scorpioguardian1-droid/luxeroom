
import React from 'react';
import Layout from '../components/Layout';
import RoomCard from '../components/RoomCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const MOCK_ROOMS = [
  {
    id: 1,
    title: "Cozy Studio Apartment",
    description: "Perfect for single occupancy or couples",
    price: 800,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Luxury Two Bedroom",
    description: "Spacious apartment with modern amenities",
    price: 1200,
    image: "/placeholder.svg"
  },
];

const RoomList = () => {
  return (
    <Layout>
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Available Rooms</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_ROOMS.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RoomList;
