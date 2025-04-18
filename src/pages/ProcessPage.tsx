
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Clock, Users, Building, CheckCircle,
  MessageSquare, Mail, Phone, Video, ArrowRight, 
  FileText, Briefcase
} from "lucide-react";
import { useState } from "react";

const ProcessPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [meetingType, setMeetingType] = useState("video");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  
  const availableDates = [
    "2023-04-22", "2023-04-23", "2023-04-24", 
    "2023-04-25", "2023-04-26", "2023-04-29", "2023-04-30"
  ];
  
  const availableTimes = [
    "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // In a real app, this would submit the form
      alert("Consultation booked! We'll confirm shortly.");
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const steps = [
    { title: "Select Time", icon: <Calendar className="w-5 h-5" /> },
    { title: "Your Details", icon: <Users className="w-5 h-5" /> },
    { title: "Meeting Preferences", icon: <Video className="w-5 h-5" /> }
  ];
  
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We start with a free consultation to understand your business needs and explore how we can help.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Team Formation",
      description: "We assemble your dedicated tech team with the specific skills and expertise your project requires.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Risk-Free Trial",
      description: "Experience working with your team during a trial period with no commitments.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Seamless Integration",
      description: "Your team integrates with your tools, processes, and schedule for maximum efficiency.",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Ongoing Collaboration",
      description: "Enjoy long-term collaboration with your dedicated team that scales with your needs.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Regular Review & Optimization",
      description: "We continuously improve our collaboration based on feedback and changing requirements.",
      icon: <FileText className="w-6 h-6" />
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">How We Work</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We follow a simple, transparent process to ensure your extended tech team integrates seamlessly with your business and delivers exceptional results.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="mb-4 bg-upxtend-light/40 p-4 rounded-full inline-block">
                    <div className="text-upxtend-primary">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-upxtend-primary flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Book Your Free Consultation</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Schedule a no-obligation consultation to discuss your technology needs and discover how our extended tech team can help your business.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8">
                <div className="flex mb-8">
                  {steps.map((s, idx) => (
                    <div key={idx} className={`flex-1 flex flex-col items-center ${idx < step ? "text-upxtend-primary" : "text-gray-400"}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${idx < step ? "bg-upxtend-primary text-white" : "bg-gray-100"}`}>
                        {s.icon}
                      </div>
                      <span className="text-sm font-medium">{s.title}</span>
                      {idx < steps.length - 1 && (
                        <div className={`h-0.5 w-full mt-3 ${idx < step - 1 ? "bg-upxtend-primary" : "bg-gray-100"}`} />
                      )}
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold mb-6">Select a Date & Time</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Available Dates</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {availableDates.map((date) => (
                            <button
                              key={date}
                              type="button"
                              onClick={() => setSelectedDate(date)}
                              className={`px-3 py-2 border rounded-lg text-sm ${
                                selectedDate === date
                                  ? "bg-upxtend-primary text-white border-upxtend-primary"
                                  : "bg-white border-gray-200 hover:bg-gray-50"
                              }`}
                            >
                              {formatDate(date)}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`px-3 py-2 border rounded-lg text-sm ${
                                selectedTime === time
                                  ? "bg-upxtend-primary text-white border-upxtend-primary"
                                  : "bg-white border-gray-200 hover:bg-gray-50"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-upxtend-light/20 p-4 rounded-lg border border-upxtend-primary/10">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-upxtend-primary mr-3" />
                          <p className="text-sm text-gray-700">
                            All consultations are approximately <span className="font-medium">30 minutes</span> and are completely free.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold mb-6">Your Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-upxtend-primary/20"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-upxtend-primary/20"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-upxtend-primary/20"
                          placeholder="Your Company"
                          required
                        />
                      </div>
                      
                      <div className="bg-upxtend-light/20 p-4 rounded-lg border border-upxtend-primary/10">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-upxtend-primary mr-3" />
                          <p className="text-sm text-gray-700">
                            We respect your privacy. Your information will only be used for scheduling your consultation.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold mb-6">Meeting Preferences</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Type</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            {value: "video", label: "Video Call", icon: <Video className="w-5 h-5" />},
                            {value: "phone", label: "Phone Call", icon: <Phone className="w-5 h-5" />},
                            {value: "email", label: "Email Only", icon: <Mail className="w-5 h-5" />}
                          ].map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => setMeetingType(type.value)}
                              className={`flex items-center justify-center gap-2 px-4 py-2 border rounded-lg ${
                                meetingType === type.value
                                  ? "bg-upxtend-primary text-white border-upxtend-primary"
                                  : "bg-white border-gray-200 hover:bg-gray-50"
                              }`}
                            >
                              {type.icon}
                              {type.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Tell us about your project or requirements
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-upxtend-primary/20"
                          rows={4}
                          placeholder="Please share any specific details that would help us prepare for the consultation..."
                        />
                      </div>
                      
                      <div className="bg-upxtend-light/20 p-4 rounded-lg border border-upxtend-primary/10">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-upxtend-primary" />
                          Your Consultation Summary
                        </h4>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Date:</span> {selectedDate && formatDate(selectedDate)}
                          </div>
                          <div>
                            <span className="text-gray-500">Time:</span> {selectedTime}
                          </div>
                          <div>
                            <span className="text-gray-500">Meeting Type:</span> {meetingType.charAt(0).toUpperCase() + meetingType.slice(1)}
                          </div>
                          <div>
                            <span className="text-gray-500">Duration:</span> 30 minutes
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handlePrevious}
                      >
                        Back
                      </Button>
                    )}
                    <div className={step > 1 ? "" : "ml-auto"}>
                      <Button 
                        type="submit"
                        className="bg-upxtend-primary hover:bg-upxtend-dark text-white"
                      >
                        {step < 3 ? "Continue" : "Book Consultation"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do I need to commit to a long-term contract?",
                answer: "No, we offer flexible engagement models without lengthy contracts. Start with a risk-free trial period to ensure we're the right fit for your business."
              },
              {
                question: "How quickly can you assemble a team?",
                answer: "We can typically have your dedicated team ready within 1-2 weeks, depending on the specific skills required and the size of the team."
              },
              {
                question: "What if I need to scale my team up or down?",
                answer: "Our model is designed for flexibility. You can easily scale your team up or down as your business needs change, with just 2 weeks' notice."
              },
              {
                question: "Will the team work during our business hours?",
                answer: "Yes, all our teams work during your local business hours to ensure seamless communication and collaboration."
              },
              {
                question: "Who owns the intellectual property?",
                answer: "You retain 100% ownership of all code and intellectual property developed by your Upxtend team."
              },
              {
                question: "How do you ensure quality and security?",
                answer: "We employ strict code reviews, comprehensive testing, and follow industry-standard security practices to ensure the highest quality and security of your code."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProcessPage;
