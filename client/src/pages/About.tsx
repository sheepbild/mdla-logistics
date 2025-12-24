import { CheckCircle2, Award, Users, Globe2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Notre Entreprise</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Votre partenaire stratégique pour le commerce international entre l'Europe et l'Afrique.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-sm z-0"></div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Notre mission"
                className="relative z-10 rounded-sm shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Notre Mission</h2>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Faciliter vos échanges commerciaux
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous nous engageons à **réaliser vos achats en Europe**, dans le respect de vos **spécifications**, de votre **budget** et des **réglementations douanières** applicables à l'import-export.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  La volonté de notre équipe est de contribuer à **votre rentabilité, votre réputation et à votre entière satisfaction**. Notre **qualité de service** nous engage à respecter **vos cahiers des charges**, tant pour le **choix des produits**, la **logistique**, que pour le **suivi et le transport maritime** (conteneurs 20’ ou 40’).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-4 rounded-sm border border-border">
                  <Award className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-bold text-primary mb-2">Qualité Garantie</h4>
                  <p className="text-sm text-muted-foreground">Contrôle rigoureux de chaque produit avant expédition.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-sm border border-border">
                  <Users className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-bold text-primary mb-2">Équipe Experte</h4>
                  <p className="text-sm text-muted-foreground">Des spécialistes du sourcing et de la logistique à votre écoute.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Leadership</h2>
            <h3 className="text-3xl font-heading font-bold text-primary">Notre Équipe de Fondateurs</h3>
            <p className="text-muted-foreground mt-4">
              Une direction visionnaire alliant expertise logistique et rigueur opérationnelle pour garantir le succès de vos échanges commerciaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm shadow-lg aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Co-Fondateur"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-2xl font-heading font-bold text-white mb-1">Co-Fondateur</h4>
                  <p className="text-accent font-medium uppercase tracking-wider text-sm">Direction Commerciale</p>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm shadow-lg aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Co-Fondateur"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-2xl font-heading font-bold text-white mb-1">Co-Fondateur</h4>
                  <p className="text-accent font-medium uppercase tracking-wider text-sm">Direction Opérationnelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Nos Valeurs</h2>
            <h3 className="text-3xl font-heading font-bold text-primary">Nos Engagements Qualité</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Respect du Cahier des Charges",
                desc: "Nous suivons scrupuleusement vos demandes précises : produits, quantités, délais et budget."
              },
              {
                title: "Contrôle Qualité",
                desc: "Vérification systématique des marchandises avant tout chargement ou expédition."
              },
              {
                title: "Sécurisation du Transport",
                desc: "Assurance, tracking en temps réel et gestion complète de la documentation maritime."
              },
              {
                title: "Communication Fluide",
                desc: "Un interlocuteur dédié vous tient informé régulièrement durant tout le processus."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-accent hover:shadow-lg transition-shadow">
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-lg font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points Forts Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold">Pourquoi nous choisir ?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Connaissance des marchés européens",
                    desc: "Une expertise approfondie des fournisseurs et des tendances du marché européen."
                  },
                  {
                    title: "Réseau de fournisseurs fiables",
                    desc: "Des partenariats établis avec des fabricants et distributeurs de confiance."
                  },
                  {
                    title: "Gestion intégrée",
                    desc: "Une solution clé en main, du sourcing initial jusqu'à la livraison finale."
                  },
                  {
                    title: "Expertise douanière",
                    desc: "Maîtrise parfaite des procédures d'exportation et d'importation."
                  }
                ].map((point, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-full mt-1">
                      <Globe2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{point.title}</h4>
                      <p className="text-white/70">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Transport maritime"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
