import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's in Data Science with focus on Machine Learning and Statistical Analysis",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "5+ years in data analytics and machine learning across various industries",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "TensorFlow Developer, AWS Machine Learning Specialty, and more",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-muted-foreground text-center mb-12">
            Data scientist passionate about uncovering insights
          </p>

          <div className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              I'm a data scientist with a passion for turning complex datasets into actionable insights. 
              With expertise in machine learning, statistical modeling, and data visualization, I help 
              organizations make data-driven decisions that drive real business value.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines rigorous analytical methods with creative problem-solving, ensuring 
              that every project not only delivers accurate results but also tells a compelling story 
              through data. I specialize in predictive modeling, natural language processing, and 
              building scalable data pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-card border-border"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
