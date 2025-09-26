import { Camera, Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    window.open(`https://${platform}.com`, '_blank');
  };
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-sunset p-2 rounded-full">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold retro-heading bg-gradient-sunset bg-clip-text text-transparent">
                Memories
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preserving your college fest moments in a vintage-inspired digital album. 
              Relive the magic, one photo at a time.
            </p>
            <div className="flex space-x-3">
              <div 
                onClick={() => handleSocialClick('instagram')}
                className="bg-gradient-vintage p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
              >
                <Instagram className="h-4 w-4 text-white" />
              </div>
              <div 
                onClick={() => handleSocialClick('twitter')}
                className="bg-gradient-retro p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
              >
                <Twitter className="h-4 w-4 text-white" />
              </div>
              <div 
                onClick={() => handleSocialClick('facebook')}
                className="bg-gradient-sunset p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
              >
                <Facebook className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@memories.college</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>Campus Digital Hub</span>
              </div>
            </div>

            {/* Retro Badge */}
            <div className="mt-6 p-4 bg-gradient-warm rounded-lg">
              <div className="retro-handwritten text-retro-purple text-sm">
                "Capturing moments,<br />creating memories"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <span>© 2024 Memories. Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>for college communities</span>
            </div>
            <div className="retro-handwritten text-vintage-teal mt-2 md:mt-0">
              ~ Vintage vibes, modern memories ~
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;