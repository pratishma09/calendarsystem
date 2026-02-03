import React, { useState } from 'react';
import { X, Plus, Clock } from 'lucide-react';

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

export const CreateScheduleModal: React.FC<Props> = ({ onClose, onSuccess }) => {
  const [isRecurring, setIsRecurring] = useState(false); // [cite: 244]
  const [recurrenceType, setRecurrenceType] = useState('Weekly'); // [cite: 14, 282]

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#121212] w-full max-w-2xl rounded-xl border border-gray-800 overflow-hidden">
        {/* Header [cite: 226, 250] */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">Create Class Schedule</h2>
            <p className="text-gray-400 text-sm">Schedule a new class, either as a one-off event or a recurring series.</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white"><X /></button>
        </div>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Basic Info: Instructor, Capacity, etc. [cite: 236-242] */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase">Instructor</label>
              <input type="text" placeholder="Instructor name" className="w-full bg-[#1a1d21] border border-gray-800 p-2 rounded" />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400 uppercase">Capacity</label>
              <input type="number" defaultValue={20} className="w-full bg-[#1a1d21] border border-gray-800 p-2 rounded" />
            </div>
          </div>

          {/* Recurrence Toggle [cite: 243, 244] */}
          <div className="flex justify-between items-center p-4 bg-[#1a1d21] rounded-lg border border-gray-800">
            <div>
              <p className="font-medium text-white">Recurring Schedule</p>
              <p className="text-xs text-gray-400">Enable to create a repeating class schedule</p>
            </div>
            <button 
              onClick={() => setIsRecurring(!isRecurring)}
              className={`w-12 h-6 rounded-full transition-colors ${isRecurring ? 'bg-green-500' : 'bg-gray-600'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isRecurring ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          {/* Dynamic Recurrence Settings [cite: 9, 23-27] */}
          {isRecurring && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
              <div className="grid grid-cols-2 gap-4">
                <select 
                  value={recurrenceType}
                  onChange={(e) => setRecurrenceType(e.target.value)}
                  className="bg-[#1a1d21] border border-gray-800 p-2 rounded text-white"
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <input type="text" placeholder="DD/MM/YYYY - DD/MM/YYYY" className="bg-[#1a1d21] border border-gray-800 p-2 rounded" />
              </div>
              {/* Daily/Weekly/Monthly time slot rows would go here [cite: 10-21] */}
            </div>
          )}
        </div>

        {/* Footer Actions [cite: 247, 248] */}
        <div className="p-6 border-t border-gray-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
          <button className="px-6 py-2 bg-[#ffcc99] text-black font-bold rounded-md hover:bg-[#ffbd7a]">
            + Create Schedule
          </button>
        </div>
      </div>
    </div>
  );
};