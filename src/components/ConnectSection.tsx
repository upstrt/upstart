
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ConnectSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-upstart-purple to-upstart-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to reduce development costs by up to 65%?</h2>
            <p className="text-xl mb-8">
              Partner with Upstart and get a senior offshore development team that feels like an extension of your business—at a fraction of the cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-upstart-purple hover:bg-upstart-gold hover:text-upstart-blue">
                Calculate Your Savings
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-md">
              <h3 className="text-xl font-semibold mb-4">Our Guarantee</h3>
              <p className="mb-4">
                If you're not completely satisfied with our team's performance in the first 2 weeks,
                we'll provide a full refund—no questions asked.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Risk-free trial period with money-back guarantee</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>No long-term contracts—monthly agreements with 30-day notice</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Transparent pricing with no hidden fees</span>
                </div>
              </div>
              
              <Button 
                variant="link" 
                className="text-white hover:text-upstart-gold mt-4 p-0 flex items-center"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
