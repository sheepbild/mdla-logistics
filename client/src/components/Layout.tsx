import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, MapPin, Ship } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Notre Entreprise", path: "/notre-entreprise" },
    { label: "Nos Services", path: "/nos-services" },
    { label: "Nos Produits", path: "/nos-produits" },
    { label: "Investir", path: "/investir" },
    { label: "Suivi Colis", path: "/suivi-colis" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+33 6 82 35 39 25</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@logistics-sourcing.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Europe - Afrique</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                <img src="/logo-mdla-globe.png" alt="MDLA Logo" className="h-12 w-auto" />
                <div className="flex flex-col leading-none">
                  <span className="font-heading font-bold text-xl tracking-tight text-primary">MDLA</span>
                  <span className="text-[10px] tracking-widest text-muted-foreground font-bold uppercase">International Logistics</span>
                </div>
              </div>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer uppercase tracking-wide",
                    location === item.path
                      ? "text-primary font-bold border-b-2 border-accent pb-1"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider shadow-md">
                Demander un devis
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 shadow-lg absolute w-full">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={cn(
                      "block text-base font-medium transition-colors hover:text-primary cursor-pointer py-2",
                      location === item.path ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase mt-4">
                  Demander un devis
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-sm">
                  <img src="/logo-mdla-globe.png" alt="MDLA Logo" className="h-10 w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl leading-none text-white">MDLA</span>
                  <span className="font-heading font-bold text-[10px] leading-none text-white/70 tracking-widest uppercase mt-1">International Logistics</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Votre partenaire de confiance pour le sourcing, l'achat et le transport logistique entre l'Europe et l'Afrique.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-accent pl-3">Navigation</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span className="text-white/70 hover:text-accent transition-colors cursor-pointer text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-accent pl-3">Nos Services</h3>
              <ul className="space-y-3">
                <li className="text-white/70 text-sm">Sourcing Produits</li>
                <li className="text-white/70 text-sm">Achat & Négociation</li>
                <li className="text-white/70 text-sm">Transport Maritime</li>
                <li className="text-white/70 text-sm">Douane & Logistique</li>
                <li className="text-white/70 text-sm">Groupage & Conteneurs</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-accent pl-3">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-white/70 text-sm">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Liaison Europe - Afrique<br/>Siège en Europe</span>
                </li>
                <li className="flex items-center space-x-3 text-white/70 text-sm">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <span>+33 6 82 35 39 25</span>
                </li>
                <li className="flex items-center space-x-3 text-white/70 text-sm">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <span>contact@logistics-sourcing.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Logistics Sourcing. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales"><span className="hover:text-white cursor-pointer">Mentions Légales</span></Link>
              <Link href="/contact"><span className="hover:text-white cursor-pointer">Politique de Confidentialité</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
