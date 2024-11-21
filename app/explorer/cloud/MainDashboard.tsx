'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area,
  ComposedChart, Bar, Legend
} from 'recharts';
import {
  Globe, Sun, Moon, Cpu, Activity,
  BarChart2, TrendingUp, Zap, Boxes
} from 'lucide-react';
import RegionalDashboard from './RegionalDashboard';
import ClusterDashboard from './ClusterDashboard';

// Base Components
const MetricCard = ({ title, value, change, icon: Icon, subtitle }: any) => (
  <Card className="flex-1 hover:shadow-lg transition-all duration-200 bg-gray-800 border-gray-700">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-100">{title}</CardTitle>
      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-700">
        <Icon className="h-4 w-4 text-gray-100" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-gray-100">{value}</div>
      <p className="text-xs text-gray-400 mt-1">
        {change && (
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${change > 0 ? 'bg-green-900/50 text-green-100' : 'bg-red-900/50 text-red-100'
            }`}>
            {change > 0 ? "↑" : "↓"} {Math.abs(change)}%
          </span>
        )} {subtitle}
      </p>
    </CardContent>
  </Card>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-3 border border-gray-700 rounded-lg shadow-lg">
        <p className="text-gray-100 font-medium">{label}</p>
        {payload.map(({entry, index}: any) => (
          <p key={index} className="text-sm text-gray-300">
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MainDashboard = () => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const overviewMetrics = {
    totalPower: { value: '12.5 PH/s', change: 23.5, subtitle: 'Total compute power' },
    activeGPUs: { value: '45,847', change: 32.5, subtitle: 'Across all regions' },
    clusters: { value: '234', change: 15.8, subtitle: 'Active clusters' },
    efficiency: { value: '94.5%', change: 5.2, subtitle: 'Network efficiency' }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="space-y-6 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              iOC Network Analytics
            </h2>
            <p className="text-gray-400 mt-1">Decentralized GPU Cluster Management</p>
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Computing Power"
            value={overviewMetrics.totalPower.value}
            change={overviewMetrics.totalPower.change}
            icon={Zap}
            subtitle={overviewMetrics.totalPower.subtitle}
          />
          <MetricCard
            title="Active GPUs"
            value={overviewMetrics.activeGPUs.value}
            change={overviewMetrics.activeGPUs.change}
            icon={Cpu}
            subtitle={overviewMetrics.activeGPUs.subtitle}
          />
          <MetricCard
            title="Active Clusters"
            value={overviewMetrics.clusters.value}
            change={overviewMetrics.clusters.change}
            icon={Boxes}
            subtitle={overviewMetrics.clusters.subtitle}
          />
          <MetricCard
            title="Network Efficiency"
            value={overviewMetrics.efficiency.value}
            change={overviewMetrics.efficiency.change}
            icon={Activity}
            subtitle={overviewMetrics.efficiency.subtitle}
          />
        </div>

        {/* Placeholder for Regional and Cluster components */}
        <div id="regional-content" className="space-y-6">
          {/* Regional components will be added here */}
          <RegionalDashboard />
        </div>

        <div id="cluster-content" className="space-y-6">
          {/* Cluster components will be added here */}
          <ClusterDashboard />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
