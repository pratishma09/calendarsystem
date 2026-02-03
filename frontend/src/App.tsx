import React, { useState, useEffect } from 'react';
import { DashboardHeader } from './components/ClassScheduleHeader';
import { ClassList } from './components/ClassList';
import { CreateScheduleModal } from './components/CreateSchedulerModal';
import type { ApiResponse } from './types/api';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/classes');
      const result: ApiResponse<any[]> = await response.json();
      
      if (response.ok) {
        setClasses(result.data);
      }
    } catch (error) {
      console.error("Failed to load classes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1113] text-white font-sans">
      <DashboardHeader onAddClick={() => setIsModalOpen(true)} />

      <main className=" mx-auto">
        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading schedule...</div>
        ) : (
          <ClassList data={classes} />
        )}
      </main>

      {isModalOpen && (
        <CreateScheduleModal 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={() => {
            setIsModalOpen(false);
            fetchClasses();
          }}
        />
      )}
    </div>
  );
};

export default App;