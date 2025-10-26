import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video, Building2, Home as HomeIcon, Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';

// Mock appointments data
const upcomingAppointments = [
  {
    id: '1',
    time: '09:00 AM',
    patient: 'Robert Fox',
    type: 'online',
    status: 'confirmed'
  },
  {
    id: '2',
    time: '11:30 AM',
    patient: 'Jane Cooper',
    type: 'hospital',
    status: 'pending'
  },
  {
    id: '3',
    time: '02:00 PM',
    patient: 'Cody Fisher',
    type: 'home',
    status: 'completed'
  },
  {
    id: '4',
    time: '04:15 PM',
    patient: 'Esther Howard',
    type: 'online',
    status: 'confirmed'
  }
];

export default function DoctorDashboard() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 9, 1)); // October 2024
  const [selectedTab, setSelectedTab] = useState('all');

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getAppointmentDots = (day: number) => {
    // Mock data - days with appointments have dots
    const daysWithAppointments = [20, 23, 26, 30];
    return daysWithAppointments.includes(day);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === 26 && currentMonth.getMonth() === 9 && currentMonth.getFullYear() === 2024;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'online': return <Video className="w-4 h-4" />;
      case 'hospital': return <Building2 className="w-4 h-4" />;
      case 'home': return <HomeIcon className="w-4 h-4" />;
      default: return null;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'online': return 'Online Consultation';
      case 'hospital': return 'In-Person Visit';
      case 'home': return 'Home Visit';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">M</span>
                </div>
                <span className="text-xl text-gray-900">MediConnect</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Patient Records</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Messages</a>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-cyan-500 text-white">DR</AvatarFallback>
              </Avatar>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">Doctor's Dashboard</h1>
            <p className="text-gray-600">View and manage all your patient appointments in one place.</p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 gap-2">
            <Plus className="w-4 h-4" />
            New Appointment
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardContent className="p-6">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="mb-6">
                    <TabsTrigger value="all">All Appointments</TabsTrigger>
                    <TabsTrigger value="online">Online Consultation</TabsTrigger>
                    <TabsTrigger value="hospital">In-Person Visit</TabsTrigger>
                    <TabsTrigger value="home">Home Visit</TabsTrigger>
                  </TabsList>

                  <TabsContent value={selectedTab}>
                    {/* Calendar Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl text-gray-900">{monthName}</h2>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={previousMonth}>
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={nextMonth}>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2">
                      {/* Day headers */}
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                        <div key={idx} className="text-center text-sm text-gray-600 py-2">
                          {day}
                        </div>
                      ))}

                      {/* Empty cells for days before month starts */}
                      {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
                        <div key={`empty-${idx}`} />
                      ))}

                      {/* Calendar days */}
                      {Array.from({ length: daysInMonth }).map((_, idx) => {
                        const day = idx + 1;
                        const today = isToday(day);
                        const hasDots = getAppointmentDots(day);

                        return (
                          <div
                            key={day}
                            className={`
                              aspect-square flex flex-col items-center justify-center rounded-lg
                              ${today ? 'bg-cyan-500 text-white' : 'hover:bg-gray-50'}
                              ${!today && 'text-gray-900'}
                              cursor-pointer transition-colors
                            `}
                          >
                            <span className="text-sm">{day}</span>
                            {hasDots && !today && (
                              <div className="flex gap-0.5 mt-1">
                                <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                                <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Appointments Sidebar */}
          <div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-4">Upcoming - Oct 26</h3>
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <div className="text-sm text-gray-600 w-16">
                          <div>{apt.time.split(' ')[0]}</div>
                          <div className="text-xs">{apt.time.split(' ')[1]}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gray-900">{apt.patient}</span>
                            <Badge className={`text-xs ${getStatusColor(apt.status)}`}>
                              {apt.status === 'confirmed' && '● Confirmed'}
                              {apt.status === 'pending' && '● Pending'}
                              {apt.status === 'completed' && '● Completed'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-gray-600">
                            {getTypeIcon(apt.type)}
                            <span>{getTypeLabel(apt.type)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
