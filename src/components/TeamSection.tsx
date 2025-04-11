
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Maya Patel",
      role: "Senior Full-Stack Developer",
      expertise: ["React", "Node.js", "AWS", "GraphQL"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Raj Sharma",
      role: "DevOps Engineer",
      expertise: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sophia Chen",
      role: "UI/UX Designer",
      expertise: ["Figma", "User Research", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      expertise: ["Python", "Django", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];
  
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our senior developers aren't just skilled professionals—they're your dedicated team members
            who understand Australian business needs and deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-upstart-purple font-medium mb-3">{member.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-upstart-lightBlue text-upstart-blue text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-upstart-lightPurple rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to meet your perfect tech team?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a no-obligation technical consultation to discuss your project needs
            and see how our team can help you achieve your goals.
          </p>
          
          <Button size="lg" className="bg-upstart-purple hover:bg-upstart-darkBlue text-white flex items-center gap-2 mx-auto">
            <Calendar className="w-5 h-5" />
            Schedule Technical Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
