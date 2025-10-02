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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-muted-foreground text-center mb-12">
            Explore my data science projects and their impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Methodology</h4>
                      <p className="text-sm text-muted-foreground">{project.methodology}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Outcome</h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
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
