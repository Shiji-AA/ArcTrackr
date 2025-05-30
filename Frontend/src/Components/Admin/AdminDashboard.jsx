import { useState, useEffect } from "react";
import LineChart from "../Admin/LineChart";
import { FaChartLine,FaUsers,FaSignOutAlt,FaClock } from "react-icons/fa";

function AdminDashboard() {
  const [siteVisitsMonthlyData, setSiteVisitsMonthlyData] = useState();
  const [uniqueVisitorsMonthlyData, setUniqueVisitorsMonthlyData] = useState();

  useEffect(() => {
    // Example data for a site visit dashboard
    const dummySiteVisitsMonthlyData = [3200, 4500, 4900, 4100, 5200, 6100, 5800, 6200, 6400, 7000, 7300, 7100];
    const dummyUniqueVisitorsMonthlyData = [1800, 2100, 2300, 1900, 2500, 2700, 2600, 2800, 3000, 3300, 3400, 3200];

    setSiteVisitsMonthlyData(dummySiteVisitsMonthlyData);
    setUniqueVisitorsMonthlyData(dummyUniqueVisitorsMonthlyData);
  }, []);

  return (
    <section>

   <section>
  {/* Main Content Section */}
  <div className="bg-gray-100 p-10 flex-grow">
    {/* Dashboard Header */}
    <h1 className="text-3xl font-bold text-center text-navy mb-10">
      SiteVisit Analytics Dashboard
    </h1>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-5 pr-5">
      {/* Total Site Visits */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy">Total Site Visits</h2>
            <p className="text-3xl font-semibold text-white">85,200</p>
          </div>
          <FaChartLine className="text-6xl text-white" />
        </div>
      </div>

      {/* Unique Visitors */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-400 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy">Unique Visitors</h2>
            <p className="text-3xl font-semibold text-white">43,700</p>
          </div>
          <FaUsers className="text-6xl text-white" />
        </div>
      </div>

      {/* Bounce Rate */}
      <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy">Bounce Rate</h2>
            <p className="text-3xl font-semibold text-white">42%</p>
          </div>
          <FaSignOutAlt className="text-6xl text-white" />
        </div>
      </div>

      {/* Avg. Session Duration */}
      <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy">Avg. Session Duration</h2>
            <p className="text-3xl font-semibold text-white">3m 25s</p>
          </div>
          <FaClock className="text-6xl text-white" />
        </div>
      </div>
    </div>
  </div>
</section>




        <section>
              <div className="bg-gray-100 flex justify-center pb-20 pt-10">
      <div className="flex justify-center items-center bg-blue-100 border-2 border-blue-500 p-4">
        <div
          id="chart"
          className="bg-white p-8 rounded-lg shadow-md"
          style={{ height: "550px", width: "900px" }}
        >
          <LineChart
            label1="Site Visits"
            label2="Unique Visitors"
            data1={siteVisitsMonthlyData}
            data2={uniqueVisitorsMonthlyData}
          />
        </div>
      </div>
    </div>
    
        </section>
       

    </section>
  
  );
}

export default AdminDashboard;
