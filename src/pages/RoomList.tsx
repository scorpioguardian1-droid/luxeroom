
import React from 'react';
import Layout from '../components/Layout';
import RoomCard from '../components/RoomCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const MOCK_ROOMS = [
  {
    id: 1,
    title: "Cozy Studio Apartment",
    description: "Modern studio apartment with full kitchen, high-speed WiFi, and a comfortable workspace. Perfect for digital nomads and young professionals.",
    price: 800,
    image: "/placeholder.svg",
    amenities: ["WiFi", "Kitchen", "Workspace"]
  },
  {
    id: 2,
    title: "Luxury Two Bedroom",
    description: "Spacious two-bedroom apartment with modern amenities, including a balcony with city views, in-unit laundry, and parking space.",
    price: 1200,
    image: "/placeholder.svg",
    amenities: ["Balcony", "Parking", "Laundry"]
  },
  {
    id: 3,
    title: "Garden View Suite",
    description: "Peaceful one-bedroom suite overlooking a private garden. Features include a fully equipped kitchen and outdoor seating area.",
    price: 950,
    image: "/placeholder.svg",
    amenities: ["Garden", "Kitchen", "Patio"]
  },
  {
    id: 4,
    title: "Downtown Loft",
    description: "Industrial-style loft in the heart of downtown. High ceilings, exposed brick, and modern furnishings make this space unique.",
    price: 1100,
    image: "/placeholder.svg",
    amenities: ["High Ceilings", "Central Location", "Modern Design"]
  }
];

const RoomList = () => {
  return (
    <Layout>
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Available Rooms</h1>
            <p className="text-gray-600 mt-2">Find your perfect space among our carefully selected properties</p>
          </div>
          <Button asChild variant="outline">
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
