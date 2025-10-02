import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gradient">Get in Touch</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-xl">
              Let's discuss how data science can drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">Fill out the form and I'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-base">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 glass-card"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 glass-card"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 glass-card"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full glow-effect hover:scale-105 transition-all">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass-card border-2 border-secondary/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                  <CardDescription className="text-base">Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-all hover:translate-x-2 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Github className="h-6 w-6" />
                    </div>
                    <span className="text-base">github.com/yourusername</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-all hover:translate-x-2 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <span className="text-base">linkedin.com/in/yourprofile</span>
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-all hover:translate-x-2 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <span className="text-base">your.email@example.com</span>
                  </a>
                </CardContent>
              </Card>

              <Card className="glass-card border-2 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Collaboration Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                      Machine Learning Projects
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                      Data Analytics Consulting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-accent rounded-full"></span>
                      Research Collaborations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                      Speaking Engagements
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                      Open Source Contributions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
