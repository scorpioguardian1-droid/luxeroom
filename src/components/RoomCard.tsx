
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface RoomCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ id, title, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${price}/month</span>
          <Button asChild>
            <Link to={`/rooms/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
