
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

interface RoomCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({ id, title, description, price, image, amenities }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.map((amenity) => (
            <span 
              key={amenity} 
              className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-2xl font-bold">${price}/month</span>
        <Button asChild>
          <Link to={`/rooms/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
