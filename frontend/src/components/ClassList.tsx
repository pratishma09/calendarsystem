export const ClassList = ({ data }: { data: any[] }) => {
  return (
    <div className="bg-[#0f1113] p-4">
      <table className="w-full text-left text-sm">
        <thead className="text-gray-500 border-b border-gray-800">
          <tr>
            <th className="pb-4">Date</th>
            <th className="pb-4">Time</th>
            <th className="pb-4">Class Type</th>
            <th className="pb-4">Instructor</th>
            <th className="pb-4">Bookings</th>
            <th className="pb-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {data.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-900 hover:bg-[#16191d]">
              <td className="py-4 font-medium">{item.date}</td>
              <td className="py-4">{item.time}</td>
              <td className="py-4">{item.type}</td>
              <td className="py-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-900 rounded-full" /> {item.instructor}
              </td>
              <td className="py-4 text-orange-400">{item.bookings}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded text-xs ${item.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};