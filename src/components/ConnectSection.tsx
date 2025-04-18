
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function ConnectSection() {
  const { toast } = useToast();
  
  const handleBookConsultation = () => {
    toast({
      title: "Booking Consultation",
      description: "Redirecting to our consultation scheduling page",
    });
  };
  
  return (
    <section id="connect" className="py-16 md:py-24 bg-upxtend-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-60 h-60 bg-blue-600/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to extend your tech team?</h2>
            <p className="text-xl mb-8">
              Partner with Upxtend and get a senior offshore development team that integrates seamlessly with your business—just like having your own in-house team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/process">
                <Button 
                  size="lg" 
                  className="bg-white text-upxtend-primary hover:bg-blue-50 group transition-all"
                  onClick={handleBookConsultation}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/calculator">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Calculate Your Team Cost
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Our Team Extension Promise</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Risk-free 2-week trial with full money-back guarantee</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Flexible monthly agreements with 30-day notice period</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Dedicated team working in your timezone</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Daily communication and collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
