
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, TrendingUp, Users, BookOpen, Calendar } from 'lucide-react';

const Reports = () => {
  // Sample data for various charts
  const gradeDistribution = [
    { grade: 'A', count: 156, percentage: 25 },
    { grade: 'B', count: 218, percentage: 35 },
    { grade: 'C', count: 156, percentage: 25 },
    { grade: 'D', count: 62, percentage: 10 },
    { grade: 'F', count: 31, percentage: 5 }
  ];

  const attendanceData = [
    { month: 'Jan', attendance: 94 },
    { month: 'Feb', attendance: 92 },
    { month: 'Mar', attendance: 96 },
    { month: 'Apr', attendance: 91 },
    { month: 'May', attendance: 95 },
    { month: 'Jun', attendance: 93 }
  ];

  const subjectPerformance = [
    { subject: 'Math', average: 85 },
    { subject: 'English', average: 88 },
    { subject: 'Science', average: 82 },
    { subject: 'History', average: 86 },
    { subject: 'Art', average: 91 },
    { subject: 'PE', average: 94 }
  ];

  const enrollmentByGrade = [
    { grade: '9th', students: 320, color: '#3b82f6' },
    { grade: '10th', students: 295, color: '#10b981' },
    { grade: '11th', students: 310, color: '#f59e0b' },
    { grade: '12th', students: 320, color: '#ef4444' }
  ];

  const reportTypes = [
    {
      title: 'Academic Performance Report',
      description: 'Comprehensive analysis of student grades and performance trends',
      icon: TrendingUp,
      color: 'bg-blue-500',
      lastGenerated: '2024-06-20'
    },
    {
      title: 'Attendance Summary',
      description: 'Detailed attendance records and patterns analysis',
      icon: Users,
      color: 'bg-green-500',
      lastGenerated: '2024-06-19'
    },
    {
      title: 'Enrollment Report',
      description: 'Student enrollment statistics and demographic breakdown',
      icon: BookOpen,
      color: 'bg-purple-500',
      lastGenerated: '2024-06-18'
    },
    {
      title: 'Monthly Summary',
      description: 'Complete monthly overview of all school activities',
      icon: Calendar,
      color: 'bg-orange-500',
      lastGenerated: '2024-06-15'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600 mt-1">Comprehensive insights into school performance</p>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Download className="h-4 w-4 mr-2" />
            Export All Reports
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall GPA</p>
                  <p className="text-2xl font-bold text-gray-900">3.4</p>
                  <p className="text-sm text-green-600">+0.2 from last semester</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                  <p className="text-2xl font-bold text-gray-900">94.2%</p>
                  <p className="text-sm text-green-600">+1.5% from last month</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Graduation Rate</p>
                  <p className="text-2xl font-bold text-gray-900">96.8%</p>
                  <p className="text-sm text-green-600">+2.1% from last year</p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Course Completion</p>
                  <p className="text-2xl font-bold text-gray-900">89.5%</p>
                  <p className="text-sm text-green-600">+3.2% from last semester</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Grade Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={gradeDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="grade" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Attendance Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="subject" type="category" />
                  <Tooltip />
                  <Bar dataKey="average" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Enrollment by Grade */}
          <Card>
            <CardHeader>
              <CardTitle>Enrollment by Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={enrollmentByGrade}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="students"
                    label={({ grade, students }) => `${grade}: ${students}`}
                  >
                    {enrollmentByGrade.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Report Generation */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportTypes.map((report, index) => {
                const Icon = report.icon;
                return (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`${report.color} p-3 rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            Last: {report.lastGenerated}
                          </Badge>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Preview
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Generate
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
