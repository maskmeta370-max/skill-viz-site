const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Data Science Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
