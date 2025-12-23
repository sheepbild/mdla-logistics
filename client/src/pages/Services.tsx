import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, ShoppingCart, CheckSquare, Package, FileText, Ship, Map } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Sourcing de Produits",
      desc: "Recherche ciblée de fournisseurs pour tous types de produits : couches bébé, cosmétiques, pièces détachées, voitures, vêtements, etc.",
      details: ["Identification des fournisseurs", "Comparaison des offres", "Échantillonnage"]
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "Négociation & Achat",
      desc: "Négociation des meilleurs tarifs et conditions d'achat auprès des fournisseurs européens grâce à notre volume d'affaires.",
      details: ["Optimisation des coûts", "Gestion des commandes", "Paiements sécurisés"]
    },
    {
      icon: <CheckSquare className="h-10 w-10" />,
      title: "Contrôle Qualité",
      desc: "Inspection physique des marchandises sur place avant expédition pour garantir la conformité avec votre commande.",
      details: ["Vérification conformité", "Rapport photo/vidéo", "Tests fonctionnels"]
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Emballage & Chargement",
      desc: "Préparation professionnelle des marchandises et optimisation du chargement en conteneurs (20’ ou 40’) pour sécuriser le transport.",
      details: ["Palettisation", "Sécurisation", "Optimisation volume"]
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Gestion Documentaire",
      desc: "Prise en charge complète des formalités administratives et douanières (factures, certificats d'origine, EUR1, etc.).",
      details: ["Douane export", "Certificats", "Documentation complète"]
    },
    {
      icon: <Ship className="h-10 w-10" />,
      title: "Transport Maritime",
      desc: "Organisation du transport maritime sécurisé vers l'Afrique avec les meilleures compagnies maritimes.",
      details: ["Fret maritime", "Assurance", "Suivi tracking"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Nos Services</h1>
          <p className="text-xl max-w-2xl font-light">
            Une gamme complète de services pour sécuriser et simplifier vos importations.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/10 skew-x-12 transform translate-x-20"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[80px]">
                  {service.desc}
                </p>
                <ul className="space-y-2 border-t border-border pt-4">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Notre Méthodologie</h2>
            <h3 className="text-3xl font-heading font-bold">Comment nous travaillons</h3>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Demande", desc: "Vous nous transmettez vos besoins précis." },
                { step: "02", title: "Sourcing", desc: "Nous trouvons les meilleurs produits et prix." },
                { step: "03", title: "Validation", desc: "Vous validez l'offre et les échantillons." },
                { step: "04", title: "Livraison", desc: "Nous gérons l'expédition jusqu'au port." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-white font-bold text-2xl flex items-center justify-center mb-6 shadow-lg border-4 border-primary">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">
            Un projet spécifique ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Notre équipe est capable de répondre à des demandes sur-mesure pour tous types de marchandises.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
