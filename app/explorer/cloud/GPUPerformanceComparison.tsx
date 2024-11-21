import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Legend
} from 'recharts';
import { Cpu, Activity, Zap } from 'lucide-react';

const GPUPerformanceComparison = () => {
  // Transform your provided data into performance metrics
  const gpuPerformanceData = [
    {
      model: 'H100 SXM',
      performance: 691.8,
      efficiency: 99.5,
      price: 4.8683/4,
      count: 2,
      powerEfficiency: 142.09,
      location: 'Czechia'
    },
    {
      model: 'RTX 6000Ada',
      performance: 135.0,
      efficiency: 99.8,
      price: 0.8281/4,
      count: 1,
      powerEfficiency: 162.97,
      location: 'Finland'
    },
    {
      model: 'L40S',
      performance: 246.7,
      efficiency: 99.0,
      price: 1.3345/4,
      count: 2,
      powerEfficiency: 184.87,
      location: 'Australia'
    },
    {
      model: 'H100 NVL',
      performance: 308.9,
      efficiency: 99.8,
      price: 2.6681/4,
      count: 1,
      powerEfficiency: 115.77,
      location: 'California'
    },
    {
      model: 'RTX 4090',
      performance: 105.9,
      efficiency: 99.7,
      price: 0.6037/4,
      count: 1,
      powerEfficiency: 175.37,
      location: 'Norway'
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-750">
          <CardTitle className="flex items-center gap-2 text-gray-100">
            <Cpu className="h-5 w-5" />
            GPU Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer>
              <ComposedChart data={gpuPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="model" 
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="#9CA3AF"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
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
                <Legend />
                <Bar 
                  yAxisId="left"
                  dataKey="performance" 
                  name="Performance Score"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  yAxisId="left"
                  dataKey="powerEfficiency" 
                  name="Power Efficiency"
                  fill="#10B981"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="efficiency"
                  name="Operational Efficiency %"
                  stroke="#F59E0B"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Performance Stats */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-100">Performance Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gpuPerformanceData.map((gpu, idx) => (
              <div key={idx} className="bg-gray-750 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-100 font-medium">{gpu.model}</h3>
                  <span className="text-sm text-gray-400">{gpu.location}</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Performance Score</span>
                      <span className="text-gray-100">{gpu.performance}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${(gpu.performance/700)*100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-gray-100">{gpu.efficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: `${gpu.efficiency}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Power Efficiency</span>
                      <span className="text-gray-100">{gpu.powerEfficiency}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-yellow-500 rounded-full"
                        style={{ width: `${(gpu.powerEfficiency/200)*100}%` }}
                      />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-700 mt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cost per Hour</span>
                      <span className="text-gray-100">${gpu.price.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Units Available</span>
                      <span className="text-gray-100">{gpu.count}x</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GPUPerformanceComparison;
