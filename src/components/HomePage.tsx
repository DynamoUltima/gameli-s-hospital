import { Link } from 'react-router-dom';
import { Video, Building2, Home, Phone, Calendar, Shield, Users, DollarSign, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-gray-900">CareConnect</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <Link to="/doctor-dashboard" className="text-gray-700 hover:text-gray-900">My Appointments</Link>
              <Link to="/admin-dashboard" className="text-gray-700 hover:text-gray-900">Doctors</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
              <Button className="bg-cyan-500 hover:bg-cyan-600">Sign Up</Button>
              <Button variant="outline">Login</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl text-gray-900 mb-6 leading-tight">
                Quality Healthcare, Your Way
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Book your appointment online, at the hospital, or from the comfort of your home.
              </p>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                Find a Doctor
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBzbWlsaW5nfGVufDF8fHx8MTc2MTQzMzgzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Doctor"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl text-center text-gray-900 mb-12">
          Choose Your Consultation Type
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Online Consultation */}
          <Card className="bg-white border hover:shadow-lg transition-all text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Video className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Online Consultation</h3>
              <p className="text-gray-600 text-sm mb-6">
                Convenient virtual care from anywhere.
              </p>
              <Link to="/online-consultation">
                <Button className="bg-cyan-500 hover:bg-cyan-600 w-full">
                  Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* In-Person Hospital Visit */}
          <Card className="bg-white border hover:shadow-lg transition-all text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">In-Person Hospital Visit</h3>
              <p className="text-gray-600 text-sm mb-6">
                Access to our full facilities and direct care.
              </p>
              <Link to="/hospital-visit">
                <Button className="bg-cyan-500 hover:bg-cyan-600 w-full">
                  Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Home Visit */}
          <Card className="bg-white border hover:shadow-lg transition-all text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Home className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Home Visit</h3>
              <p className="text-gray-600 text-sm mb-6">
                Personalized care for those who prefer staying at home.
              </p>
              <Link to="/home-visit">
                <Button className="bg-cyan-500 hover:bg-cyan-600 w-full">
                  Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-center text-gray-900 mb-12">
            Care You Can Trust
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We are committed to providing the best care possible with our team of dedicated professionals.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <HeadphonesIcon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  Our support team is always available to assist you with your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Experienced Doctors</h3>
                <p className="text-gray-600 text-sm">
                  Consult with our board-certified and highly experienced medical staff.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Affordable Care</h3>
                <p className="text-gray-600 text-sm">
                  Transparent and affordable pricing for all our consultation services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-gray-900 mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/online-consultation">Online Consultation</Link></li>
                <li><Link to="/hospital-visit">Hospital Visit</Link></li>
                <li><Link to="/home-visit">Home Visit</Link></li>
                <li><a href="#">Find a Doctor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-4">ABOUT</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-4">LEGAL</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-4">CONTACT</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>123 Health St, Medtown</li>
                <li>contact@careconnect.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © 2024 CareConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
