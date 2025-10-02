import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "Julia", "Scala", "Java"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["Apache Spark", "Airflow", "Kafka", "Hadoop", "ETL Pipelines", "Docker"],
    },
    {
      icon: BarChart3,
      title: "Visualization & BI",
      skills: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn", "D3.js"],
    },
  ];

  const additionalSkills = [
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Time Series Analysis",
    "A/B Testing",
    "Statistical Modeling",
    "MLOps",
    "Cloud Computing (AWS, Azure, GCP)",
    "Git & Version Control",
    "Agile Methodologies",
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-xl">
              My technical expertise and proficiencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                      <category.icon className="h-7 w-7 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-sm bg-muted/50 hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-card border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="h-2 w-2 bg-accent rounded-full animate-pulse"></div>
                Additional Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-sm hover:bg-accent/20 hover:scale-105 transition-all cursor-default border-accent/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
