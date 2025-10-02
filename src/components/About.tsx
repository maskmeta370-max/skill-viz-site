import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's in Data Science with focus on Machine Learning and Statistical Analysis",
      color: "text-primary",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "5+ years in data analytics and machine learning across various industries",
      color: "text-secondary",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "TensorFlow Developer, AWS Machine Learning Specialty, and more",
      color: "text-accent",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gradient">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-2xl mb-12">
            <p className="text-xl leading-relaxed mb-6 text-foreground/90">
              I'm a <span className="text-primary font-semibold">data scientist</span> with a passion for turning complex datasets into actionable insights. 
              With expertise in <span className="text-secondary font-semibold">machine learning</span>, statistical modeling, and data visualization, I help 
              organizations make data-driven decisions that drive real business value.
            </p>
            <p className="text-xl leading-relaxed text-foreground/90">
              My approach combines rigorous analytical methods with creative problem-solving, ensuring 
              that every project not only delivers accurate results but also tells a compelling story 
              through data. I specialize in <span className="text-accent font-semibold">predictive modeling</span>, natural language processing, and 
              building scalable data pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50"
              >
                <div className="mb-4 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit">
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
