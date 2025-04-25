
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';

// Mock data for the room details
// data/rooms.ts
const ROOMS = [
  {
    id: "1",
    title: "Cozy Studio Apartment",
    description: "A beautiful and comfortable studio apartment...",
    price: 800,
    image: "/images/room1.jpg",
    amenities: [
      "High-speed WiFi",
      "Fully equipped kitchen",
      "Air conditioning",
      "Smart TV",
      "Washer/Dryer",
      "24/7 Security",
      "Parking space",
      "Gym access"
    ],
    location: "Downtown - 123 Main Street",
    size: "45m²",
    availableFrom: "Immediate",
    minStay: "6 months",
    policies: [
      "No smoking",
      "No pets",
      "Quiet hours 10 PM - 7 AM",
      "Security deposit required"
    ]
  },
  {
    id: "2",
    title: "Modern One Bedroom",
    description: "Spacious and stylish one-bedroom apartment...",
    price: 950,
    image: "/images/room2.jpg",
    amenities: ["WiFi", "Kitchen", "TV", "Balcony"],
    location: "West End - 456 Elm Street",
    size: "60m²",
    availableFrom: "May 1st",
    minStay: "3 months",
    policies: ["No pets", "No parties", "Deposit required"]
  },
  {
    id: "3",
    title: "Luxury Two Bedroom Suite",
    description: "Perfect for families or roommates...",
    price: 1400,
    image: "/images/room3.jpg",
    amenities: ["WiFi", "2 Bathrooms", "Security", "Elevator access"],
    location: "Uptown - 789 Pine Avenue",
    size: "90m²",
    availableFrom: "June 15th",
    minStay: "12 months",
    policies: ["No smoking", "No loud music", "Must sign lease"]
  },
  {
    id: "4",
    title: "Budget Single Room",
    description: "Affordable option for students...",
    price: 500,
    image: "/images/room4.jpg",
    amenities: ["WiFi", "Shared bathroom", "Study desk"],
    location: "Near University - 321 College Lane",
    size: "25m²",
    availableFrom: "Now",
    minStay: "1 month",
    policies: ["Quiet hours", "Shared space rules apply"]
  }
];

export default ROOMS;
