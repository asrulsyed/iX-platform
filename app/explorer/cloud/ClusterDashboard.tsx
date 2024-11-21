import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { Boxes, Activity, Zap } from 'lucide-react';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

// Sample cluster data
const clusterData = [
  {
    id: 'CL-001',
    type: 'Mining Farm',
    gpus: 324,
    region: 'North America',
    efficiency: 95,
    health: 'Healthy',
    load: 87,
    revenue: 58400,
    powerUsage: '125 kW',
    taskSuccess: 99.8,
    uptime: '99.9%'
  },
  {
    id: 'CL-002',
    type: 'Data Center',
    gpus: 256,
    region: 'Europe',
    efficiency: 92,
    health: 'Healthy',
    load: 91,
    revenue: 45200,
    powerUsage: '98 kW',
    taskSuccess: 99.5,
    uptime: '99.8%'
  },
  {
    id: 'CL-003',
    type: 'Gaming Pool',
    gpus: 128,
    region: 'Asia Pacific',
    efficiency: 88,
    health: 'Warning',
    load: 78,
    revenue: 28400,
    powerUsage: '45 kW',
    taskSuccess: 98.9,
    uptime: '99.5%'
  },
  {
    id: 'CL-004',
    type: 'Mining Farm',
    gpus: 412,
    region: 'North America',
    efficiency: 94,
    health: 'Healthy',
    load: 92,
    revenue: 67800,
    powerUsage: '156 kW',
    taskSuccess: 99.7,
    uptime: '99.9%'
  }
];

const clusterTypes = [
  { name: 'Mining Farms', value: 45, gpus: 15420 },
  { name: 'Data Centers', value: 30, gpus: 12850 },
  { name: 'Gaming Pools', value: 15, gpus: 5280 },
  { name: 'Individual Miners', value: 10, gpus: 3580 }
];

const ClusterDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Cluster Performance Table */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-750">
          <CardTitle className="flex items-center gap-2 text-gray-100">
            <Boxes className="h-5 w-5" />
            Cluster Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-750">
                <tr>
                  <th className="text-left p-2 text-gray-300">Cluster ID</th>
                  <th className="text-left p-2 text-gray-300">Type</th>
                  <th className="text-left p-2 text-gray-300">GPUs</th>
                  <th className="text-left p-2 text-gray-300">Region</th>
                  <th className="text-left p-2 text-gray-300">Efficiency</th>
                  <th className="text-left p-2 text-gray-300">Health</th>
                  <th className="text-left p-2 text-gray-300">Load</th>
                  <th className="text-left p-2 text-gray-300">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {clusterData.map((cluster, idx) => (
                  <tr key={idx} className="border-t border-gray-700">
                    <td className="p-2 text-gray-100 font-medium">{cluster.id}</td>
                    <td className="p-2 text-gray-100">{cluster.type}</td>
                    <td className="p-2 text-gray-100">{cluster.gpus.toLocaleString()}</td>
                    <td className="p-2 text-gray-100">{cluster.region}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        cluster.efficiency >= 90 ? 'bg-green-900/50 text-green-100' : 'bg-yellow-900/50 text-yellow-100'
                      }`}>
                        {cluster.efficiency}%
                      </span>
                    </td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        cluster.health === 'Healthy' ? 'bg-green-900/50 text-green-100' : 'bg-yellow-900/50 text-yellow-100'
                      }`}>
                        {cluster.health}
                      </span>
                    </td>
                    <td className="p-2">
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${cluster.load}%` }}
                        />
                      </div>
                    </td>
                    <td className="p-2 text-gray-100">${cluster.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Cluster Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cluster Type Distribution */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Cluster Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={clusterTypes}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {clusterTypes.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      color: '#F3F4F6'
                    }}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cluster Metrics */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Cluster Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {clusterData.map((cluster, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-100 font-medium">{cluster.id} - {cluster.type}</span>
                    <span className="text-gray-400">{cluster.uptime} Uptime</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Power Usage</span>
                      <div className="text-gray-100 font-medium">{cluster.powerUsage}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Task Success</span>
                      <div className="text-gray-100 font-medium">{cluster.taskSuccess}%</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${cluster.efficiency}%` }}
                    />
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

export default ClusterDashboard;
