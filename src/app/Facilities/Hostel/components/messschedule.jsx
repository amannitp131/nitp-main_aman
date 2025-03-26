"use client"
import React, { useState } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const weeklyMessSchedule = {
  Monday: {
    breakfast: {
      time: '7:30 AM - 9:30 AM',
      items: ['Poha', 'Bread & Butter', 'Boiled Eggs', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Dal Fry', 'Mix Vegetables', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Samosa', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal Tadka', 'Paneer Butter Masala', 'Chapati', 'Kheer']
    }
  },
  Tuesday: {
    breakfast: {
      time: '7:30 AM - 9:30 AM',
      items: ['Upma', 'Bread & Jam', 'Banana', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Dal Makhani', 'Aloo Gobi', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Pakora', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal', 'Chicken Curry', 'Chapati', 'Gulab Jamun']
    }
  },
  Wednesday: {
    breakfast: {
      time: '7:30 AM - 9:30 AM',
      items: ['Idli Sambar', 'Coconut Chutney', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Rajma', 'Bhindi Fry', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Vada Pav', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal', 'Egg Curry', 'Chapati', 'Fruit Custard']
    }
  },
  Thursday: {
    breakfast: {
      time: '7:30 AM - 9:30 AM',
      items: ['Puri Bhaji', 'Bread & Butter', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Chana Dal', 'Matar Paneer', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Bread Pakora', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal', 'Mix Veg', 'Chapati', 'Ice Cream']
    }
  },
  Friday: {
    breakfast: {
      time: '7:30 AM - 9:30 AM',
      items: ['Aloo Paratha', 'Curd', 'Pickle', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Dal', 'Chole', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Noodles', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal', 'Chicken/Paneer', 'Chapati', 'Rasgulla']
    }
  },
  Saturday: {
    breakfast: {
      time: '7:30 AM - 9:30 AM',
      items: ['Dosa', 'Sambar', 'Chutney', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Dal', 'Kadai Vegetables', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Cutlet', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal', 'Malai Kofta', 'Chapati', 'Halwa']
    }
  },
  Sunday: {
    breakfast: {
      time: '8:00 AM - 10:00 AM',
      items: ['Chole Bhature', 'Pickle', 'Tea/Coffee']
    },
    lunch: {
      time: '12:30 PM - 2:30 PM',
      items: ['Rice', 'Dal', 'Paneer Butter Masala', 'Chapati', 'Salad']
    },
    snacks: {
      time: '4:30 PM - 5:30 PM',
      items: ['Pav Bhaji', 'Tea']
    },
    dinner: {
      time: '7:30 PM - 9:30 PM',
      items: ['Rice', 'Dal', 'Special Veg', 'Chapati', 'Sweet']
    }
  }
};

const MessSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = Object.keys(weeklyMessSchedule);

  const handlePrevDay = () => {
    const currentIndex = days.indexOf(selectedDay);
    const prevIndex = currentIndex === 0 ? days.length - 1 : currentIndex - 1;
    setSelectedDay(days[prevIndex]);
  };

  const handleNextDay = () => {
    const currentIndex = days.indexOf(selectedDay);
    const nextIndex = currentIndex === days.length - 1 ? 0 : currentIndex + 1;
    setSelectedDay(days[nextIndex]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Mess Schedule</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevDay}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold text-lg min-w-[100px] text-center">
            {selectedDay}
          </span>
          <button
            onClick={handleNextDay}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {Object.entries(weeklyMessSchedule[selectedDay]).map(([meal, details]) => (
          <div key={meal} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 capitalize mb-2">
              {meal}
            </h3>
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="w-5 h-5 mr-2" />
              {details.time}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {details.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 text-center text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessSchedule;