import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Avatar, AvatarFallback } from './ui/avatar';

const clinics = [
  'Gynecology',
  'Fertility',
  'Eye Care',
  'Dental',
  'General Medicine',
  'Pediatrics',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
  'ENT'
];

export default function HospitalVisit() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11, 1)); // December 2024
  const [selectedDate, setSelectedDate] = useState(4);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    patientId: '',
    patientType: 'new',
    symptoms: '',
    clinic: ''
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

  const estimatedCost = formData.patientType === 'new' ? '144' : '104';

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
              <Link to="/online-consultation" className="text-gray-600 hover:text-gray-900">
                Online Consultation
              </Link>
              <Link to="/hospital-visit" className="text-blue-600 border-b-2 border-blue-600 pb-1">
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
          <h1 className="text-4xl text-gray-900 mb-2">Book a Hospital Visit</h1>
          <p className="text-gray-500">Complete the steps below to schedule your in-person appointment.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Patient Details */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl text-gray-900 mb-6">Step 1: Patient Details</h2>
                
                {/* Patient Type */}
                <div className="mb-6">
                  <Label className="text-gray-700 mb-3 block">Patient Type</Label>
                  <RadioGroup value={formData.patientType} onValueChange={(value) => handleInputChange('patientType', value)}>
                    <div className="grid grid-cols-2 gap-4">
                      <label
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${
                          formData.patientType === 'new' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <RadioGroupItem value="new" id="new" />
                        <div>
                          <span className="block text-gray-900">New Patient</span>
                          <span className="text-xs text-gray-500">First visit (~GH₵ 144)</span>
                        </div>
                      </label>
                      <label
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer ${
                          formData.patientType === 'returning' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <RadioGroupItem value="returning" id="returning" />
                        <div>
                          <span className="block text-gray-900">Returning Patient</span>
                          <span className="text-xs text-gray-500">Have Patient ID (~GH₵ 104)</span>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </div>

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
                    <Label htmlFor="patientId" className="text-gray-700 mb-2 block">
                      Patient ID {formData.patientType === 'returning' ? '' : '(Optional)'}
                    </Label>
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
                  <Label htmlFor="symptoms" className="text-gray-700 mb-2 block">Reason for Visit</Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Briefly describe your reason for visit..."
                    rows={4}
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange('symptoms', e.target.value)}
                    className="bg-gray-50"
                  />
                  <p className="text-xs text-gray-500 mt-2">This will help us prepare for your visit.</p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Clinic Selection */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl text-gray-900 mb-6">Step 2: Select Clinic</h2>
                
                <div>
                  <Label htmlFor="clinic" className="text-gray-700 mb-2 block">Department</Label>
                  <Select value={formData.clinic} onValueChange={(value) => handleInputChange('clinic', value)}>
                    <SelectTrigger className="bg-gray-50">
                      <SelectValue placeholder="Choose the department you need" />
                    </SelectTrigger>
                    <SelectContent>
                      {clinics.map((clinic) => (
                        <SelectItem key={clinic} value={clinic.toLowerCase()}>
                          {clinic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Schedule */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <h2 className="text-xl text-gray-900 mb-6">Step 3: Preferred Date</h2>
                
                {/* Calendar */}
                <div className="mb-4">
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

                <p className="text-sm text-gray-500">
                  Note: Admin will call to confirm the exact time based on availability.
                </p>
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
                    <span className="text-gray-500">Type</span>
                    <span className="text-gray-900 capitalize">{formData.patientType} Patient</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Department</span>
                    <span className="text-gray-900 capitalize">{formData.clinic || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Preferred Date</span>
                    <span className="text-gray-900">Dec {selectedDate}, 2024</span>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-900">Estimated Cost</span>
                    <span className="text-3xl text-blue-600">{estimatedCost} GHS</span>
                  </div>
                  <p className="text-xs text-gray-500">Final cost confirmed by admin</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-xs text-yellow-800">
                    Our admin team will contact you to confirm the appointment time and exact cost. Payment is made at the hospital.
                  </p>
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 py-6">
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
