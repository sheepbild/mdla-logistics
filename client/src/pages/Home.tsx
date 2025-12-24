import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Globe, Package, Ship, Truck, Phone, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [trackingInput, setTrackingInput] = useState("");

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingInput.trim()) {
      setLocation("/suivi-colis");
    }
  };
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Transport maritime Europe Afrique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl text-white space-y-8 animate-in slide-in-from-left-10 duration-1000 fade-in">
            <div className="inline-block bg-red-600 text-white px-4 py-1.5 text-sm font-bold tracking-widest uppercase mb-2">
              EXPERT SOURCING & LOGISTIQUE
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight">
              Votre pont commercial entre <span className="text-accent">l'Europe</span> et <span className="text-accent">l'Afrique</span>
            </h1>
            <p className="text-xl text-white/90 font-light leading-relaxed max-w-xl">
              Nous gérons l'intégralité de votre chaîne d'approvisionnement : du sourcing de produits en Europe jusqu'à la livraison sécurisée en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg hover:translate-y-[-2px] transition-transform">
                  Demander un devis
                </Button>
              </Link>
              <Link href="/nos-services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  Découvrir nos services
                </Button>
              </Link>
            </div>

            {/* Quick Tracking Widget */}
            <div className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-sm border border-white/20 max-w-md animate-in slide-in-from-bottom-10 duration-1000 delay-300 fade-in">
              <h3 className="text-white font-bold mb-3 flex items-center">
                <Package className="h-5 w-5 mr-2 text-accent" /> Suivre un colis
              </h3>
              <form onSubmit={handleQuickTrack} className="flex gap-2">
                <div className="relative flex-1">
                  <Input 
                    placeholder="N° de suivi..." 
                    className="bg-white/90 border-0 text-primary placeholder:text-muted-foreground focus-visible:ring-accent"
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hidden md:block">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Notre Mission</h2>
                <h3 className="text-4xl font-heading font-bold text-primary leading-tight">
                  Simplifier vos importations depuis l'Europe
                </h3>
                <div className="w-20 h-1.5 bg-accent"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous nous engageons à réaliser vos achats en Europe, dans le respect de vos spécifications, de votre budget et des réglementations douanières applicables à l'import-export.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La volonté de notre équipe est de contribuer à votre rentabilité, votre réputation et à votre entière satisfaction. Notre qualité de service nous engage à respecter vos cahiers des charges, tant pour le choix des produits, la logistique, que pour le suivi et le transport maritime.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Sourcing sur mesure",
                  "Contrôle qualité rigoureux",
                  "Optimisation logistique",
                  "Expertise douanière"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/notre-entreprise">
                <Button variant="link" className="text-primary font-bold p-0 h-auto hover:text-accent mt-4 group">
                  En savoir plus sur nous <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Réunion de sourcing"
                className="relative z-10 rounded-sm shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl rounded-sm z-20 max-w-xs hidden md:block border-l-4 border-accent">
                <p className="font-heading font-bold text-primary text-lg mb-1">Partenaire de confiance</p>
                <p className="text-sm text-muted-foreground">Un réseau étendu de fournisseurs européens qualifiés à votre service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 skew-x-12 transform translate-x-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Nos Expertises</h2>
            <h3 className="text-4xl font-heading font-bold text-primary">Une solution globale de A à Z</h3>
            <p className="text-muted-foreground text-lg">
              Nous prenons en charge l'ensemble du processus pour vous permettre de vous concentrer sur votre cœur de métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-border hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Globe className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-3">Sourcing & Achat</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Identification des meilleurs fournisseurs européens, négociation des prix et achat selon votre cahier des charges précis.
              </p>
              <Link href="/nos-services">
                <span className="text-accent font-bold text-sm uppercase tracking-wide flex items-center cursor-pointer group-hover:underline">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-border hover:shadow-xl hover:border-accent/30 transition-all duration-300 group relative transform md:-translate-y-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              <div className="w-16 h-16 bg-primary/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Package className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-3">Logistique & Stockage</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Réception, contrôle qualité, consolidation de vos marchandises et stockage sécurisé dans nos entrepôts avant expédition.
              </p>
              <Link href="/nos-services">
                <span className="text-accent font-bold text-sm uppercase tracking-wide flex items-center cursor-pointer group-hover:underline">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-border hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Ship className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-3">Transport International</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Organisation du transport maritime (conteneurs complets ou groupage) vers l'Afrique avec gestion des formalités douanières.
              </p>
              <Link href="/nos-services">
                <span className="text-accent font-bold text-sm uppercase tracking-wide flex items-center cursor-pointer group-hover:underline">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Nos Produits Phares</h2>
              <h3 className="text-4xl font-heading font-bold leading-tight">
                Des solutions adaptées à tous les secteurs
              </h3>
            </div>
            <Link href="/nos-produits">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary mt-6 md:mt-0">
                Voir tous nos produits
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Véhicules", img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Neufs et occasions" },
              { title: "Cosmétiques", img: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Marques et produits de soin" },
              { title: "Pièces Détachées", img: "https://images.pexels.com/photos/4488662/pexels-photo-4488662.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Auto et industrie" },
              { title: "Matériel Industriel", img: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Équipements professionnels" }
            ].map((product, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold mb-1">{product.title}</h4>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-muted/30 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-border">
            <div className="space-y-6 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Prêt à importer depuis l'Europe ?
              </h3>
              <p className="text-lg text-muted-foreground">
                Contactez-nous dès aujourd'hui pour discuter de votre projet. Nous vous fournirons un devis personnalisé sous 24h.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg">
                  Obtenir un devis gratuit
                </Button>
              </Link>
              <div className="flex items-center justify-center space-x-2 text-primary font-bold bg-white px-6 py-4 rounded-md border border-border shadow-sm">
                <Phone className="h-5 w-5 text-accent" />
                <span>+33 6 82 35 39 25</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
