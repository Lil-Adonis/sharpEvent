


import React from 'react';

interface VenueCardProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  facilities: string[];
  price: number;
  image: string;
  viewMode: 'grid' | 'list';
}

const VenueCard = ({ 
  name, 
  location, 
  rating, 
  reviews, 
  facilities, 
  price, 
  image,
  viewMode 
}: VenueCardProps) => {
  const getRatingLabel = (rating: number) => {
    if (rating >= 9.0) return 'Very good';
    if (rating >= 8.0) return 'Very good';
    return 'Good';
  };

  const getRatingColor = (rating: number) => {
    return 'text-blue-600';
  };

  if (viewMode === 'list') {
    return (
      <div className="flex bg-white rounded-[16px] overflow-hidden border border-gray-100 
      md:rounded-[24px] p-2 md:p-5 w-full scale-[0.95] md:scale-100">
      
      {/* Image Section */}
      <div className="w-[180px] h-[140px] md:w-[300px] md:h-[250px] relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 p-3 md:p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[13px] md:text-[20px] font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-400 text-[10px] md:text-sm mt-0.5">{location}</p>
          </div>
          <div className="text-right">
            <div className="text-blue-600 text-[10px] md:text-sm font-medium">
              {getRatingLabel(rating)}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[12px] md:text-[20px] font-semibold">{rating}</span>
              <span className="text-gray-400 text-[10px] md:text-sm">({reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Facilities & Price Section */}
        <div className=" flex justify-between items-center">
          <div className="flex-1">
            <h4 className="text-[12px] md:text-base font-semibold mb-1 md:mb-2">Facilities</h4>
            <div className="flex flex-wrap gap-0.2 md:flex-col">
              {facilities.map((facility) => (
                <span 
                  key={facility} 
                  className="text-gray-400 text-[10px] md:text-sm whitespace-nowrap"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>
          <div className="ml-2 md:ml-4 flex flex-col mt-10 md:mt-16 items-end justify-end">
            <div className="flex items-baseline mb-1 md:mb-3">
              <span className="text-lg md:text-2xl font-bold">₦</span>
              <span className="text-lg md:text-2xl font-bold">{price}k</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white  px-1 md:px-6 py-1.5 md:py-3 rounded-full md:rounded-xl text-[8px] md:text-sm font-medium transition-colors whitespace-nowrap">
              See booking options
            </button>
          </div>
        </div>
      </div>
    </div>
     
    );
  }

  return (
    <div className="bg-white rounded-[24px] p-6 md:p-2 overflow-hidden border border-gray-100">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[200px] object-cover rounded-2xl"
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-400 text-sm mt-0.5">{location}</p>
          </div>
          <div className="text-right">
            <div className="text-blue-600 text-sm font-medium">
              {getRatingLabel(rating)}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[20px] font-semibold">{rating}</span>
              <span className="text-gray-400 text-sm">({reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between">
          <div className="flex-1">
            <h4 className="text-base font-semibold mb-2">Facilities</h4>
            <div className="flex flex-col gap-1.5">
              {facilities.map((facility) => (
                <span 
                  key={facility} 
                  className="text-gray-400"
                >
                  {facility}
                </span>
              ))}
            </div>
          </div>
          <div className="ml-4 flex flex-col items-end justify-end">
            <div className="flex items-baseline mb-3">
              <span className="text-2xl font-bold">₦</span>
              <span className="text-2xl font-bold">{price}k</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
              See booking options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;