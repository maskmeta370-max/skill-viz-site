import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a machine learning model to predict customer churn with 92% accuracy using Random Forest and XGBoost algorithms.",
      methodology: "Applied feature engineering, cross-validation, and hyperparameter tuning to optimize model performance.",
      tools: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      outcome: "Reduced customer churn by 15% through targeted retention strategies.",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Developed an NLP-based sentiment analysis system for social media monitoring with real-time visualization.",
      methodology: "Implemented BERT transformers for sentiment classification with custom fine-tuning on domain-specific data.",
      tools: ["Python", "PyTorch", "Transformers", "Streamlit"],
      outcome: "Processed 10M+ tweets with 89% accuracy, providing actionable insights for marketing teams.",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Sales Forecasting System",
      description: "Created time-series forecasting models to predict quarterly sales across multiple product categories.",
      methodology: "Utilized ARIMA, Prophet, and LSTM networks to capture seasonal patterns and trends.",
      tools: ["Python", "TensorFlow", "Prophet", "SQL"],
      outcome: "Improved forecast accuracy by 25%, enabling better inventory management.",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Image Classification Pipeline",
      description: "Designed and deployed a computer vision pipeline for automated product categorization.",
      methodology: "Leveraged transfer learning with ResNet50 and implemented data augmentation techniques.",
      tools: ["Python", "TensorFlow", "Keras", "Docker"],
      outcome: "Achieved 95% classification accuracy, processing 1000+ images per minute.",
      github: "https://github.com",
    },
    {
      title: "Recommendation Engine",
      description: "Built a collaborative filtering recommendation system for e-commerce platform.",
      methodology: "Implemented matrix factorization and deep learning approaches for personalized recommendations.",
      tools: ["Python", "PyTorch", "Redis", "FastAPI"],
      outcome: "Increased user engagement by 30% and average order value by 20%.",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Fraud Detection Model",
      description: "Developed anomaly detection system to identify fraudulent transactions in real-time.",
      methodology: "Applied ensemble methods and neural networks with class imbalance handling techniques.",
      tools: ["Python", "Scikit-learn", "Apache Kafka", "PostgreSQL"],
      outcome: "Detected 98% of fraudulent activities with only 0.5% false positive rate.",
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gradient">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-xl">
              Explore my data science projects and their impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="flex flex-col glass-card hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/50 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground/80">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="h-1 w-1 bg-primary rounded-full"></span>
                        Methodology
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.methodology}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-secondary mb-2 flex items-center gap-2">
                        <span className="h-1 w-1 bg-secondary rounded-full"></span>
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="bg-muted/50 hover:bg-primary/20 transition-colors">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-accent mb-2 flex items-center gap-2">
                        <span className="h-1 w-1 bg-accent rounded-full"></span>
                        Outcome
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button variant="outline" size="sm" className="hover:bg-primary/10" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" className="hover:bg-secondary/10" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
