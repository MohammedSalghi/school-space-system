
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, UserCheck, TrendingUp, Calendar, Bell } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Sample data for charts
  const enrollmentData = [
    { month: 'Jan', students: 850 },
    { month: 'Feb', students: 870 },
    { month: 'Mar', students: 890 },
    { month: 'Apr', students: 875 },
    { month: 'May', students: 920 },
    { month: 'Jun', students: 940 },
  ];

  const gradeDistribution = [
    { grade: 'A', value: 25, color: '#22c55e' },
    { grade: 'B', value: 35, color: '#3b82f6' },
    { grade: 'C', value: 25, color: '#f59e0b' },
    { grade: 'D', value: 10, color: '#ef4444' },
    { grade: 'F', value: 5, color: '#6b7280' },
  ];

  const recentActivities = [
    { action: 'New student enrolled', student: 'John Smith', time: '2 hours ago', type: 'enrollment' },
    { action: 'Assignment submitted', student: 'Emma Johnson', time: '4 hours ago', type: 'assignment' },
    { action: 'Grade updated', student: 'Michael Brown', time: '6 hours ago', type: 'grade' },
    { action: 'Attendance marked', student: 'Sarah Davis', time: '8 hours ago', type: 'attendance' },
  ];

  const stats = [
    {
      title: 'Total Students',
      value: '1,245',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Classes',
      value: '32',
      change: '+3%',
      changeType: 'positive',
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      title: 'Teachers',
      value: '87',
      change: '+1%',
      changeType: 'positive',
      icon: UserCheck,
      color: 'bg-purple-500'
    },
    {
      title: 'Average Grade',
      value: '85.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  // Modal state
  const [modal, setModal] = useState('');
  const [studentForm, setStudentForm] = useState({ name: '', age: '', className: '' });
  const [classForm, setClassForm] = useState({ className: '', teacher: '' });
  const [meetingForm, setMeetingForm] = useState({ topic: '', time: '' });
  const [report, setReport] = useState(null);
  const [message, setMessage] = useState('');

  // Handlers
  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const res = await fetch('http://localhost:5001/api/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentForm)
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setModal('');
  };
  const handleClassSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const res = await fetch('http://localhost:5001/api/class', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(classForm)
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setModal('');
  };
  const handleMeetingSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const res = await fetch('http://localhost:5001/api/meeting', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meetingForm)
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setModal('');
  };
  const handleReport = async () => {
    setMessage('');
    const res = await fetch('http://localhost:5001/api/report');
    const data = await res.json();
    setReport(data);
    setModal('report');
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Administrator</h1>
        <p className="text-blue-100">Here's what's happening at Springfield High School today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Student Enrollment Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="students" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Grade Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              <span>Grade Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ grade, value }) => `${grade}: ${value}%`}
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-orange-600" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'enrollment' ? 'bg-green-500' :
                    activity.type === 'assignment' ? 'bg-blue-500' :
                    activity.type === 'grade' ? 'bg-purple-500' : 'bg-orange-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.student}</p>
                  </div>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors duration-200" onClick={() => setModal('student')}>
              Add New Student
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-200" onClick={() => setModal('class')}>
              Create Class
            </button>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors duration-200" onClick={handleReport}>
              Generate Report
            </button>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg transition-colors duration-200" onClick={() => setModal('meeting')}>
              Schedule Meeting
            </button>
            {/* Modals */}
            {modal === 'student' && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleStudentSubmit}>
                  <h2 className="text-xl font-bold mb-4">Add New Student</h2>
                  <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" value={studentForm.name} onChange={e => setStudentForm(f => ({ ...f, name: e.target.value }))} required />
                  <input type="number" placeholder="Age" className="w-full mb-2 p-2 border rounded" value={studentForm.age} onChange={e => setStudentForm(f => ({ ...f, age: e.target.value }))} required />
                  <input type="text" placeholder="Class Name" className="w-full mb-2 p-2 border rounded" value={studentForm.className} onChange={e => setStudentForm(f => ({ ...f, className: e.target.value }))} required />
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Add</button>
                  <button type="button" className="ml-2 text-gray-600" onClick={() => setModal('')}>Cancel</button>
                  {message && <div className="mt-2 text-green-600">{message}</div>}
                </form>
              </div>
            )}
            {modal === 'class' && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleClassSubmit}>
                  <h2 className="text-xl font-bold mb-4">Create Class</h2>
                  <input type="text" placeholder="Class Name" className="w-full mb-2 p-2 border rounded" value={classForm.className} onChange={e => setClassForm(f => ({ ...f, className: e.target.value }))} required />
                  <input type="text" placeholder="Teacher" className="w-full mb-2 p-2 border rounded" value={classForm.teacher} onChange={e => setClassForm(f => ({ ...f, teacher: e.target.value }))} required />
                  <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Create</button>
                  <button type="button" className="ml-2 text-gray-600" onClick={() => setModal('')}>Cancel</button>
                  {message && <div className="mt-2 text-green-600">{message}</div>}
                </form>
              </div>
            )}
            {modal === 'meeting' && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleMeetingSubmit}>
                  <h2 className="text-xl font-bold mb-4">Schedule Meeting</h2>
                  <input type="text" placeholder="Topic" className="w-full mb-2 p-2 border rounded" value={meetingForm.topic} onChange={e => setMeetingForm(f => ({ ...f, topic: e.target.value }))} required />
                  <input type="datetime-local" placeholder="Time" className="w-full mb-2 p-2 border rounded" value={meetingForm.time} onChange={e => setMeetingForm(f => ({ ...f, time: e.target.value }))} required />
                  <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded">Schedule</button>
                  <button type="button" className="ml-2 text-gray-600" onClick={() => setModal('')}>Cancel</button>
                  {message && <div className="mt-2 text-green-600">{message}</div>}
                </form>
              </div>
            )}
            {modal === 'report' && report && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                  <h2 className="text-xl font-bold mb-4">Report</h2>
                  <pre className="bg-gray-100 p-2 rounded text-xs max-h-60 overflow-auto">{JSON.stringify(report, null, 2)}</pre>
                  <button type="button" className="mt-2 text-gray-600" onClick={() => setModal('')}>Close</button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
