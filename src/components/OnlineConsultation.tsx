import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

const doctors = [
  {
    id: 'dr-okoro',
    name: 'Dr. Amina Okoro',
    specialty: 'Gynecologist',
    image: 'https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEzNTQ5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    clinics: ['gynecology']
  },
  {
    id: 'dr-carter',
    name: 'Dr. Ben Carter',
    specialty: 'Gynecologist',
    image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTM3MzAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    clinics: ['gynecology', 'fertility']
  }
];

const timeSlots = [
  '8:00 AM - 9:00 AM',
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM'
];

export default function OnlineConsultation() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11, 1)); // December 2024
  const [selectedDate, setSelectedDate] = useState(4);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    patientId: '',
    symptoms: '',
    clinic: 'gynecology',
    doctor: 'dr-okoro',
    timeSlot: '9:00 AM - 10:00 AM'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const availableDoctors = doctors.filter(d => d.clinics.includes(formData.clinic));
  const selectedDoctor = doctors.find(d => d.id === formData.doctor);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded transform rotate-45"></div>
              <span className="text-xl text-gray-900">HealthBridge</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/online-consultation" className="text-blue-600 border-b-2 border-blue-600 pb-1">
                Online Consultation
              </Link>
              <Link to="/hospital-visit" className="text-gray-600 hover:text-gray-900">
                Hospital Visit
              </Link>
              <Link to="/home-visit" className="text-gray-600 hover:text-gray-900">
                Home Visit
              </Link>
              <Link to="/doctor-dashboard" className="text-gray-600 hover:text-gray-900">
                My Appointments
              </Link>
              <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
              <Avatar className="w-9 h-9">
                <AvatarFallback className="bg-orange-400 text-white">
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl text-gray-900 mb-2">Book an Online Consultation</h1>
          <p className="text-gray-500">Complete the steps below to schedule your virtual appointment.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Patient Details */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl text-gray-900 mb-6">Step 1: Patient Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 mb-2 block">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 mb-2 block">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="age" className="text-gray-700 mb-2 block">Age</Label>
                    <Input
                      id="age"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="patientId" className="text-gray-700 mb-2 block">Patient ID (Optional)</Label>
                    <Input
                      id="patientId"
                      placeholder="Enter your patient ID"
                      value={formData.patientId}
                      onChange={(e) => handleInputChange('patientId', e.target.value)}
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="symptoms" className="text-gray-700 mb-2 block">Symptoms</Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Briefly describe your symptoms..."
                    rows={4}
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e.target.value)}
                    className="bg-gray-50"
                  />
                  <p className="text-xs text-gray-500 mt-2">This will help the doctor prepare for your consultation.</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Clinic & Doctor */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl text-gray-900 mb-6">Step 2: Clinic & Doctor</h2>
                
                <div className="mb-6">
                  <Label className="text-gray-700 mb-3 block">Select Clinic</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleInputChange('clinic', 'gynecology')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.clinic === 'gynecology'
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Gynecology
                    </button>
                    <button
                      onClick={() => handleInputChange('clinic', 'fertility')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        formData.clinic === 'fertility'
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Fertility
                    </button>
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700 mb-3 block">Select Doctor</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {availableDoctors.map((doctor) => (
                      <button
                        key={doctor.id}
                        onClick={() => handleInputChange('doctor', doctor.id)}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                          formData.doctor === doctor.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <ImageWithFallback
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-gray-900">{doctor.name}</p>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Schedule */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl text-gray-900 mb-6">Step 3: Schedule</h2>
                
                {/* Calendar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-gray-900">{monthName}</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={previousMonth}>
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={nextMonth}>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {/* Day headers */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center text-sm text-gray-500 py-2">
                        {day}
                      </div>
                    ))}

                    {/* Empty cells */}
                    {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
                      <div key={`empty-${idx}`} />
                    ))}

                    {/* Calendar days */}
                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const day = idx + 1;
                      const isSelected = day === selectedDate;
                      const isPastMonth = day < 3;

                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          disabled={isPastMonth}
                          className={`
                            aspect-square rounded-lg flex items-center justify-center text-sm
                            ${isSelected ? 'bg-blue-500 text-white' : ''}
                            ${!isSelected && !isPastMonth ? 'hover:bg-gray-100 text-gray-900' : ''}
                            ${isPastMonth ? 'text-gray-300 cursor-not-allowed' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <Label className="text-gray-700 mb-3 block">
                    Available Time Slots for Dec {selectedDate}, 2024
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => handleInputChange('timeSlot', slot)}
                        className={`p-3 rounded-lg border-2 text-sm transition-all ${
                          formData.timeSlot === slot
                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Appointment Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white sticky top-6">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-6">Your Appointment</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Clinic</span>
                    <span className="text-gray-900 capitalize">{formData.clinic}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Doctor</span>
                    <span className="text-gray-900">{selectedDoctor?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Date & Time</span>
                    <div className="text-right">
                      <p className="text-gray-900">Dec {selectedDate}, 2024</p>
                      <p className="text-gray-900">{formData.timeSlot}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-900">Total Cost</span>
                    <span className="text-3xl text-blue-600">45 GHS</span>
                  </div>
                  <p className="text-xs text-gray-500">1-hour maximum session</p>
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 py-6">
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
