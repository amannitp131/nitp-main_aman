"use client"
import React from 'react';
import { Building2, UtensilsCrossed, ScrollText, Home } from 'lucide-react';
import HostelList from '@/components/hostellist';
import MessSchedule from '@/components/messschedule';
import Rules from '@/components/rules';
import AllotmentDetails from '@/components/allotmentdetails';
import HostelMap from '@/components/hostelmap';
export default function Homepage() {
  const [activeTab, setActiveTab] = React.useState('hostels');

  const renderContent = () => {
    switch (activeTab) {
      case 'hostels':
        return (
          <>
            <div className="mt-8">
              <HostelList />
            </div>
          </>
        );
      case 'mess':
        return <MessSchedule />;
      case 'rules':
        return <Rules />;
      case 'allotment':
        return <AllotmentDetails />;
      default:
        return <HostelList />;
    }
  };

  const NavButton = ({ icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <NavButton
            icon={<Building2 className="w-5 h-5" />}
            label="Hostels"
            active={activeTab === 'hostels'}
            onClick={() => setActiveTab('hostels')}
          />
          <NavButton
            icon={<UtensilsCrossed className="w-5 h-5" />}
            label="Mess Schedule"
            active={activeTab === 'mess'}
            onClick={() => setActiveTab('mess')}
          />
          <NavButton
            icon={<ScrollText className="w-5 h-5" />}
            label="Rules"
            active={activeTab === 'rules'}
            onClick={() => setActiveTab('rules')}
          />
          <NavButton
            icon={<Home className="w-5 h-5" />}
            label="Allotment"
            active={activeTab === 'allotment'}
            onClick={() => setActiveTab('allotment')}
          />
        </div>
        
        {renderContent()}
      </div>
    </div>
  );

 }