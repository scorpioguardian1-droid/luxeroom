import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';

// Mock data for multiple rooms
const ROOMS = [
  {
    id: "1",
    title: "Cozy Studio Apartment",
    description: "A beautiful and comfortable studio apartment perfect for your stay...",
    price: 800,
    image: "/images/room1.jpg",
    amenities: [
      "High-speed WiFi", "Fully equipped kitchen", "Air conditioning", "Smart TV",
      "Washer/Dryer", "24/7 Security", "Parking space", "Gym access"
    ],
    location: "Downtown - 123 Main Street",
    size: "45m²",
    availableFrom: "Immediate",
    minStay: "6 months",
    policies: ["No smoking", "No pets", "Quiet hours 10 PM - 7 AM", "Security deposit required"]
  },
  {
    id: "2",
    title: "Modern One Bedroom Apartment",
    description: "Spacious one-bedroom with modern finishes, great for professionals...",
    price: 1000,
    image: "/images/room2.jpg",
    amenities: ["WiFi", "Kitchen", "Balcony", "Washer"],
    location: "Midtown - 456 Market Street",
    size: "60m²",
    availableFrom: "1st May",
    minStay: "3 months",
    policies: ["No parties", "No smoking"]
  },
  {
    id: "3",
    title: "Luxury Penthouse Suite",
    description: "Top-floor suite with skyline views and premium amenities...",
    price: 2000,
    image: "/images/room3.jpg",
    amenities: ["Pool access", "Private elevator", "High-speed internet", "Concierge"],
    location: "Uptown - 789 Elite Avenue",
    size: "120m²",
    availableFrom: "15th May",
    minStay: "1 year",
    policies: ["No pets", "No smoking", "Security check required"]
  }
];

const RoomDetail = () => {
  const { id } = useParams();
  const room = ROOMS.find(r => r.id === id);

  const handleBooking = () => {
    toast.info("PayPal integration coming soon!");
  };

  if (!room) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold mb-4">Room not found</h1>
          <Button asChild>
            <Link to="/rooms">Back to Rooms</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">{room.title}</h1>
              <p className="text-gray-600">{room.location}</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/rooms">Back to Rooms</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <img
                  src={room.image}
                  alt="Room"
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">About this space</h2>
                  <p className="text-gray-600 mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2">Size</h3>
                      <p className="text-gray-600">{room.size}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Available From</h3>
                      <p className="text-gray-600">{room.availableFrom}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Minimum Stay</h3>
                      <p className="text-gray-600">{room.minStay}</p>
                    </div>
                  </div>

                  <h3 className="font-semibold mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-3">House Rules & Policies</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {room.policies.map((policy) => (
                      <li key={policy}>{policy}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold">${room.price}</p>
                    <p className="text-gray-600">per month</p>
                  </div>
                  <Button onClick={handleBooking} className="w-full mb-4">
                    Book Now
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Secure your room today - PayPal integration coming soon
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetail;
