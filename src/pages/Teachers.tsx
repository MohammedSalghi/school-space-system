
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { BookUser, Mail, Phone, Plus, Edit, Eye } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      id: 'TCH001',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@school.edu',
      phone: '(555) 123-4567',
      department: 'Mathematics',
      subjects: ['Algebra II', 'Calculus', 'Statistics'],
      classes: 4,
      students: 98,
      experience: '12 years',
      status: 'Active'
    },
    {
      id: 'TCH002',
      name: 'Ms. Emily Davis',
      email: 'emily.davis@school.edu',
      phone: '(555) 234-5678',
      department: 'English',
      subjects: ['Literature', 'Creative Writing', 'ESL'],
      classes: 3,
      students: 75,
      experience: '8 years',
      status: 'Active'
    },
    {
      id: 'TCH003',
      name: 'Dr. Michael Johnson',
      email: 'michael.johnson@school.edu',
      phone: '(555) 345-6789',
      department: 'Science',
      subjects: ['Chemistry', 'Biology', 'Physics'],
      classes: 5,
      students: 120,
      experience: '15 years',
      status: 'Active'
    },
    {
      id: 'TCH004',
      name: 'Mr. Robert Brown',
      email: 'robert.brown@school.edu',
      phone: '(555) 456-7890',
      department: 'Social Studies',
      subjects: ['World History', 'Geography', 'Civics'],
      classes: 3,
      students: 80,
      experience: '6 years',
      status: 'On Leave'
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Teacher Management</h1>
            <p className="text-gray-600 mt-1">Manage faculty members and their assignments</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Teacher
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Teachers</p>
                  <p className="text-2xl font-bold text-gray-900">87</p>
                </div>
                <BookUser className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Teachers</p>
                  <p className="text-2xl font-bold text-gray-900">82</p>
                </div>
                <BookUser className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Departments</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <BookUser className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Experience</p>
                  <p className="text-2xl font-bold text-gray-900">9.5 yrs</p>
                </div>
                <BookUser className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {getInitials(teacher.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <p className="text-sm text-gray-600">{teacher.department}</p>
                  </div>
                  <Badge className={teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                    {teacher.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{teacher.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{teacher.phone}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Subjects:</p>
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-semibold text-blue-600">{teacher.classes}</p>
                    <p className="text-xs text-gray-600">Classes</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-600">{teacher.students}</p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-purple-600">{teacher.experience}</p>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>

                <div className="flex space-x-2 pt-3 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Teachers;
