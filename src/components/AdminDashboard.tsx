import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Stethoscope, Settings, Search, Bell, Home as HomeIcon, Building2, Phone } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// Mock data
const newRequests = [
  {
    id: '1',
    type: 'home',
    patient: 'John Doe',
    doctor: 'Dr. Smith',
    requestedTime: '2:00 PM',
    contact: '+1 (555) 123-4567',
    avatar: 'JD'
  },
  {
    id: '2',
    type: 'hospital',
    patient: 'Jane Smith',
    doctor: 'Dr. Chen',
    requestedTime: '11:30 AM',
    contact: '+1 (555) 987-6543',
    avatar: 'JS'
  }
];

const appointments = [
  {
    id: '#C34-587',
    patient: 'Liam Johnson',
    doctor: 'Dr. Rodriguez',
    dateTime: '2023-10-27, 09:00 AM',
    mode: 'Online',
    status: 'Confirmed'
  },
  {
    id: '#C34-588',
    patient: 'Olivia Williams',
    doctor: 'Dr. Smith',
    dateTime: '2023-10-27, 10:15 AM',
    mode: 'In-Person',
    status: 'Completed'
  },
  {
    id: '#C34-589',
    patient: 'Noah Brown',
    doctor: 'Dr. Johnson',
    dateTime: '2023-10-27, 02:30 PM',
    mode: 'Home Visit',
    status: 'Pending'
  },
  {
    id: '#C34-590',
    patient: 'Emma Davis',
    doctor: 'Dr. Lee',
    dateTime: '2023-10-27, 03:45 PM',
    mode: 'Online',
    status: 'Confirmed'
  }
];

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">C</span>
            </div>
            <span className="text-xl text-gray-900">CareConnect</span>
          </div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-cyan-50 text-cyan-600 rounded-lg">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span>Appointments</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Users className="w-5 h-5" />
              <span>Patients</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Stethoscope className="w-5 h-5" />
              <span>Doctors</span>
            </a>
          </nav>
        </div>

        <div className="mt-auto p-6 border-t">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
          <div className="flex items-center gap-3 mt-4 p-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-cyan-500 text-white">ER</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate">Dr. Evelyn Reed</p>
              <p className="text-xs text-gray-500 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-gray-900">Consultation Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search appointments..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5 text-gray-600" />
              </Button>
              <Avatar className="w-9 h-9">
                <AvatarFallback className="bg-gray-200 text-gray-700">A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 mb-2">New Requests</p>
                <p className="text-3xl text-gray-900">12</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 mb-2">Confirmed Today</p>
                <p className="text-3xl text-gray-900">34</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 mb-2">Completed Today</p>
                <p className="text-3xl text-gray-900">28</p>
              </CardContent>
            </Card>
          </div>

          {/* New Requests Section */}
          <div className="mb-6">
            <h2 className="text-xl text-gray-900 mb-4">New Requests for Confirmation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {newRequests.map((request) => (
                <Card key={request.id} className="bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {request.type === 'home' ? (
                          <>
                            <HomeIcon className="w-5 h-5 text-orange-500" />
                            <span className="text-sm">Home Visit Request</span>
                          </>
                        ) : (
                          <>
                            <Building2 className="w-5 h-5 text-cyan-500" />
                            <span className="text-sm">In-Person Visit Request</span>
                          </>
                        )}
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gray-200 text-gray-700">
                          {request.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-gray-900">Patient: {request.patient}</p>
                        <p className="text-sm text-gray-600">Requested {request.doctor} at {request.requestedTime}</p>
                        <p className="text-sm text-gray-600">Contact: {request.contact}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                      Confirm via Call
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Scheduled Appointments */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl text-gray-900">All Scheduled Appointments</h2>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All Appointments</TabsTrigger>
                    <TabsTrigger value="today">Today's Schedule</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modes</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="home">Home Visit</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Doctors</SelectItem>
                    <SelectItem value="smith">Dr. Smith</SelectItem>
                    <SelectItem value="chen">Dr. Chen</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="date" placeholder="mm/dd/yyyy" />
              </div>

              {/* Appointments Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>APPT. ID</TableHead>
                    <TableHead>PATIENT</TableHead>
                    <TableHead>DOCTOR</TableHead>
                    <TableHead>DATE & TIME</TableHead>
                    <TableHead>MODE</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((apt) => (
                    <TableRow key={apt.id}>
                      <TableCell className="text-gray-600">{apt.id}</TableCell>
                      <TableCell className="text-gray-900">{apt.patient}</TableCell>
                      <TableCell className="text-gray-600">{apt.doctor}</TableCell>
                      <TableCell className="text-gray-600">{apt.dateTime}</TableCell>
                      <TableCell className="text-gray-600">{apt.mode}</TableCell>
                      <TableCell>
                        <Badge className={
                          apt.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                          apt.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }>
                          {apt.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="link" className="text-cyan-600 p-0 h-auto">View</Button>
                          {apt.status === 'Pending' && (
                            <Button variant="link" className="text-cyan-600 p-0 h-auto">Reschedule</Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
