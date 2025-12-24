import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const categories = [
    {
      id: "vehicles",
      title: "Véhicules",
      desc: "Exportation de véhicules neufs et d'occasion (tourisme, utilitaires, camions) depuis l'Europe.",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200",
      items: ["Voitures de tourisme", "Utilitaires légers", "Poids lourds", "Engins de chantier"]
    },
    {
      id: "cosmetics",
      title: "Cosmétiques & Beauté",
      desc: "Large gamme de produits de beauté, parfumerie et soins corporels de grandes marques européennes.",
      image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1200",
      items: ["Parfums", "Soins du visage", "Produits capillaires", "Maquillage"]
    },
    {
      id: "baby",
      title: "Univers Bébé",
      desc: "Produits d'hygiène et d'équipement pour la petite enfance, conformes aux normes européennes.",
      image: "https://images.pexels.com/photos/6787933/pexels-photo-6787933.jpeg?auto=compress&cs=tinysrgb&w=1200",
      items: ["Couches bébé", "Lait infantile", "Vêtements", "Puériculture"]
    },
    {
      id: "parts",
      title: "Pièces Détachées",
      desc: "Pièces de rechange d'origine ou adaptables pour l'automobile et l'industrie.",
      image: "https://images.pexels.com/photos/4488662/pexels-photo-4488662.jpeg?auto=compress&cs=tinysrgb&w=1200",
      items: ["Pièces auto", "Pièces poids lourds", "Composants industriels", "Outillage"]
    },
    {
      id: "textile",
      title: "Textile & Habillement",
      desc: "Vêtements neufs, déstockage de marques et friperie de qualité triée.",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200",
      items: ["Vêtements homme/femme", "Vêtements enfants", "Chaussures", "Linge de maison"]
    },
    {
      id: "other",
      title: "Autres Produits",
      desc: "Nous sourçons tout autre type de produit selon votre demande spécifique.",
      image: "https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1200",
      items: ["Électroménager", "Matériaux de construction", "Produits alimentaires secs", "Équipement informatique"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Nos Produits</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Une sélection rigoureuse de produits de qualité pour le marché africain.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col bg-white rounded-sm shadow-sm border border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-3 border-b border-border pb-2">Exemples</h4>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/contact?product=${category.id}`}>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
                        Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Notre force réside dans notre capacité à sourcer n'importe quel produit en Europe. Envoyez-nous votre cahier des charges, nous nous occupons du reste.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-10 py-6 h-auto shadow-lg border-2 border-transparent hover:border-white/20">
              Faire une demande spécifique
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
