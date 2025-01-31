import React, { useState } from 'react';
import { Grid, LayoutList } from 'lucide-react';
import VenueCard from './VenueCard';

const venues = [
  {
    id: 1,
    name: 'Oniru Event Center',
    location: '0.4 km from Oniru Beach',
    rating: 9.2,
    reviews: 832,
    facilities: ['Free parking space', 'Changing Room', 'Toilet', '1000 Seat and Table', 'Air-Condition', 'Audio-Visual Equipment'],
    price: 35,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Oniru Event Center',
    location: '0.4 km from Oniru Beach',
    rating: 8.2,
    reviews: 1200,
    facilities: ['Free parking space', 'Changing Room', 'Toilet', '1000 Seat and Table', 'Air-Condition', 'Audio-Visual Equipment'],
    price: 40,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Oniru Event Center',
    location: '0.4 km from Oniru Beach',
    rating: 8.3,
    reviews: 1520,
    facilities: ['Free parking space', 'Changing Room', 'Toilet', '1000 Seat and Table', 'Air-Condition', 'Audio-Visual Equipment'],
    price: 22,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Oniru Event Center',
    location: '0.4 km from Oniru Beach',
    rating: 4.6,
    reviews: 1920,
    facilities: ['Free parking space', 'Changing Room', 'Toilet', '1000 Seat and Table', 'Air-Condition', 'Audio-Visual Equipment'],
    price: 39,
    image: 'https://images.unsplash.com/photo-1478070531059-3db579c041d5?auto=format&fit=crop&q=80'
  }
];

const MainContent = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <main className="flex-1 ">
      <div className="max-w-[23rem] md:max-w-7xl mx-auto lg:px-20 ">
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-1 p-6">
            <p className="text-sm text-gray-600">140 search results for</p>
            <h2 className="text-xl font-semibold">Wedding, Lagos ₦20k - ₦40k, Excellent</h2>
          </div>
          <div className="flex gap-2 pr-4">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            >
              <LayoutList className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-14 mt-[4rem]' : 'space-y-4 mt-[4rem]' }>
          {venues.map((venue) => (
            <VenueCard 
              key={venue.id} 
              {...venue} 
              viewMode={viewMode}
            />
          ))}
        </div>

        <div className=" flex justify-center gap-2 mb-[5rem] mt-[5rem]">
          {[1, 2, 3, 4, '...', 25].map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                page === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;