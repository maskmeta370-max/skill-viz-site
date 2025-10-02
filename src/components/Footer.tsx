const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-muted-foreground">
          <div className="flex justify-center gap-2 items-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg mb-2">© {new Date().getFullYear()} Data Science Portfolio. All rights reserved.</p>
          <p className="text-sm">Built with <span className="text-primary">React</span>, <span className="text-secondary">TypeScript</span>, and <span className="text-accent">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
