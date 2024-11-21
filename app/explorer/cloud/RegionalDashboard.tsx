import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { Globe, Activity } from 'lucide-react';

// Sample data
const regionalData = [
  {
    name: 'North America',
    gpus: 15420,
    clusters: 45,
    revenue: 285000,
    efficiency: 94,
    growth: 32,
    health: 98,
    latency: 12,
    taskSuccess: 99.8,
    reliability: 99.2
  },
  {
    name: 'Europe',
    gpus: 12850,
    clusters: 38,
    revenue: 245000,
    efficiency: 92,
    growth: 28,
    health: 97,
    latency: 15,
    taskSuccess: 99.5,
    reliability: 98.8
  },
  {
    name: 'Asia Pacific',
    gpus: 10580,
    clusters: 32,
    revenue: 198000,
    efficiency: 89,
    growth: 45,
    health: 95,
    latency: 18,
    taskSuccess: 99.2,
    reliability: 98.5
  },
  {
    name: 'South America',
    gpus: 4280,
    clusters: 15,
    revenue: 82000,
    efficiency: 87,
    growth: 58,
    health: 94,
    latency: 22,
    taskSuccess: 98.9,
    reliability: 98.1
  }
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const RegionalDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Regional Performance Table */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-750">
          <CardTitle className="flex items-center gap-2 text-gray-100">
            <Globe className="h-5 w-5" />
            Regional Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-750">
                <tr>
                  <th className="text-left p-2 text-gray-300">Region</th>
                  <th className="text-left p-2 text-gray-300">Active GPUs</th>
                  <th className="text-left p-2 text-gray-300">Clusters</th>
                  <th className="text-left p-2 text-gray-300">Revenue</th>
                  <th className="text-left p-2 text-gray-300">Efficiency</th>
                  <th className="text-left p-2 text-gray-300">Growth</th>
                  <th className="text-left p-2 text-gray-300">Health</th>
                </tr>
              </thead>
              <tbody>
                {regionalData.map((region, idx) => (
                  <tr key={idx} className="border-t border-gray-700">
                    <td className="p-2 text-gray-100 font-medium">{region.name}</td>
                    <td className="p-2 text-gray-100">{region.gpus.toLocaleString()}</td>
                    <td className="p-2 text-gray-100">{region.clusters}</td>
                    <td className="p-2 text-gray-100">${region.revenue.toLocaleString()}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${region.efficiency >= 90 ? 'bg-green-900/50 text-green-100' : 'bg-yellow-900/50 text-yellow-100'
                        }`}>
                        {region.efficiency}%
                      </span>
                    </td>
                    <td className="p-2 text-green-400">↑{region.growth}%</td>
                    <td className="p-2">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${region.health}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Regional Distribution and Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribution Chart */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer>
                <ComposedChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="name"
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
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="gpus" fill="#3B82F6" name="GPUs">
                    {regionalData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
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

        {/* Health Metrics */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Regional Health Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              {regionalData.map((region, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-100 font-medium">{region.name}</span>
                    <span className="text-gray-400">{region.health}% Health</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Network Latency</span>
                      <span className="text-gray-100">{region.latency}ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Task Success Rate</span>
                      <span className="text-gray-100">{region.taskSuccess}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Reliability</span>
                      <span className="text-gray-100">{region.reliability}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full mt-2">
                      <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${region.health}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegionalDashboard;
