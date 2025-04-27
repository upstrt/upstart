
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-outteams-dark to-outteams-primary text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/a0e9ba12-6874-4fad-94c5-73764799514f.png" 
                alt="OutTeams Logo" 
                className="h-10"
              />
            </a>
            
            <p className="text-blue-200 mb-6">
              Your dedicated offshore tech team delivering premium development at a fraction of the cost.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#process" className="text-blue-200 hover:text-white transition-colors">Development Process</a></li>
              <li><a href="#savings" className="text-blue-200 hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#case-studies" className="text-blue-200 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#team" className="text-blue-200 hover:text-white transition-colors">Our Expertise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                <span className="text-blue-200">Sydney Office: 123 Business Ave, NSW 2000</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-300" />
                <span className="text-blue-200">+61 2 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-300" />
                <span className="text-blue-200">hello@outteams.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-blue-800/50 border-blue-700 text-white placeholder:text-blue-300"
              />
              <Button className="bg-blue-500 hover:bg-blue-400 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} OutTeams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
