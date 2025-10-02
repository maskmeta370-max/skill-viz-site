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
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-center mb-12">
            My technical expertise and proficiencies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Additional Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
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
