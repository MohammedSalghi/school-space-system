
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, Plus } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      id: 'CLS001',
      name: 'Mathematics - Algebra II',
      teacher: 'Dr. Sarah Wilson',
      students: 28,
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      room: 'Room 101',
      grade: '10th Grade',
      status: 'Active'
    },
    {
      id: 'CLS002',
      name: 'English Literature',
      teacher: 'Ms. Emily Davis',
      students: 25,
      schedule: 'Tue, Thu - 10:30 AM',
      room: 'Room 205',
      grade: '11th Grade',
      status: 'Active'
    },
    {
      id: 'CLS003',
      name: 'Chemistry Lab',
      teacher: 'Dr. Michael Johnson',
      students: 20,
      schedule: 'Wed - 2:00 PM',
      room: 'Lab 301',
      grade: '12th Grade',
      status: 'Active'
    },
    {
      id: 'CLS004',
      name: 'World History',
      teacher: 'Mr. Robert Brown',
      students: 30,
      schedule: 'Mon, Fri - 1:00 PM',
      room: 'Room 150',
      grade: '9th Grade',
      status: 'Inactive'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Class Management</h1>
            <p className="text-gray-600 mt-1">Manage courses, schedules, and class assignments</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Create New Class
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Classes</p>
                  <p className="text-2xl font-bold text-gray-900">32</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Classes</p>
                  <p className="text-2xl font-bold text-gray-900">28</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Students</p>
                  <p className="text-2xl font-bold text-gray-900">26</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Classes</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <Card key={classItem.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{classItem.name}</CardTitle>
                  <Badge className={classItem.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                    {classItem.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{classItem.teacher}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{classItem.schedule}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{classItem.room}</span>
                  <span className="text-gray-600">{classItem.grade}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-lg font-semibold text-blue-600">{classItem.students} Students</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Classes;
