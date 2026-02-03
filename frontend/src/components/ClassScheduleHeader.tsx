import React from 'react';
import { Calendar, List, Plus, Search, Moon } from 'lucide-react';

export const DashboardHeader = ({ onAddClick }: { onAddClick: () => void }) => {
  return (
    <div className="bg-[#0f1113] p-6 text-white border-b border-gray-800">

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold">Class Schedule</h1>
          <p className="text-gray-400 text-sm">Manage recurring schedules and one-off classes.</p>
        </div>
        <button 
          onClick={onAddClick}
          className=" bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2 font-medium"
        >
          <Plus size={18} /> Schedule Class
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        <button className="flex items-center gap-2 px-4 py-1.5 bg-[#1a1d21] rounded-l border border-gray-800 text-blue-400 border-b-2 border-b-blue-500">
          <Calendar size={16} /> Calendar
        </button>
        <button className="flex items-center gap-2 px-4 py-1.5 bg-[#1a1d21] rounded-r border border-gray-800 text-gray-400">
          <List size={16} /> List
        </button>
      </div>
    </div>
  );
};