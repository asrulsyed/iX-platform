import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Cpu, Activity } from 'lucide-react';

const GPUMarketplace = () => {
  const gpuData = [
    {
      id: '12064895',
      model: 'RTX 6000Ada',
      quantity: '1x',
      efficiency: 99.8,
      price: (0.8281/4).toFixed(4),
      dlp: 135.0,
      country: 'Finland'
    },
    {
      id: '13690985',
      model: 'H100 SXM',
      quantity: '2x',
      efficiency: 99.5,
      price: (4.8683/4).toFixed(4),
      dlp: 691.8,
      country: 'Czechia'
    },
    {
      id: '13690979',
      model: 'H100 SXM',
      quantity: '1x',
      efficiency: 99.5,
      price: (2.4350/4).toFixed(4),
      dlp: 345.9,
      country: 'Czechia'
    },
    {
      id: '11465210',
      model: 'L40S',
      quantity: '2x',
      efficiency: 99.0,
      price: (1.3345/4).toFixed(4),
      dlp: 246.7,
      country: 'Australia'
    },
    {
      id: '12431904',
      model: 'H100 NVL',
      quantity: '1x',
      efficiency: 99.8,
      price: (2.6681/4).toFixed(4),
      dlp: 308.9,
      country: 'California, US'
    }
    // Add more GPUs as needed
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-750">
          <CardTitle className="flex items-center gap-2 text-gray-100">
            <Cpu className="h-5 w-5" />
            Available GPUs Marketplace
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-750">
                <tr>
                  <th className="text-left p-2 text-gray-300">Model</th>
                  <th className="text-left p-2 text-gray-300">Quantity</th>
                  <th className="text-left p-2 text-gray-300">Efficiency</th>
                  <th className="text-left p-2 text-gray-300">Price ($/hr)</th>
                  <th className="text-left p-2 text-gray-300">DLP</th>
                  <th className="text-left p-2 text-gray-300">Location</th>
                  <th className="text-left p-2 text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {gpuData.map((gpu, idx) => (
                  <tr key={idx} className="border-t border-gray-700">
                    <td className="p-2 text-gray-100 font-medium">{gpu.model}</td>
                    <td className="p-2 text-gray-100">{gpu.quantity}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        gpu.efficiency >= 99.0 ? 'bg-green-900/50 text-green-100' : 'bg-yellow-900/50 text-yellow-100'
                      }`}>
                        {gpu.efficiency}%
                      </span>
                    </td>
                    <td className="p-2 text-gray-100">${gpu.price}</td>
                    <td className="p-2 text-gray-100">{gpu.dlp}</td>
                    <td className="p-2 text-gray-100">{gpu.country}</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-sm bg-blue-900/50 text-blue-100">
                        Available
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* GPU Performance Chart */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-100">GPU Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <ComposedChart data={gpuData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="model" 
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#F3F4F6'
                  }}
                />
                <Bar dataKey="dlp" fill="#3B82F6" name="DLP Score" />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#10B981"
                  name="Efficiency"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GPUMarketplace;
