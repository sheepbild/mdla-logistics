import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { TrendingUp, Users, PieChart, ShieldCheck, ArrowRight, BarChart3, Lock } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Invest() {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [duration, setDuration] = useState(3); // months

  // Simulation logic
  const estimatedRoiPercent = 15; // 15% per rotation
  const estimatedGain = Math.round(investmentAmount * (estimatedRoiPercent / 100));
  const totalReturn = investmentAmount + estimatedGain;

  const handleInvestClick = () => {
    toast.success("Votre intérêt a été enregistré !", {
      description: "Un conseiller en investissement vous contactera sous peu.",
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wall-4-light.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent text-white px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-4">
              Nouveau
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Investissez dans le Commerce International
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Participez au financement de conteneurs sécurisés et bénéficiez d'un retour sur investissement attractif grâce à notre modèle de co-investissement participatif.
            </p>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Opportunités</h2>
              <h3 className="text-3xl font-heading font-bold text-primary">Conteneurs Ouverts à l'Investissement</h3>
              <p className="text-muted-foreground mt-4">
                Rejoignez ces opérations en cours de financement. Clôture des souscriptions imminente.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="outline" className="mt-6 md:mt-0 border-primary text-primary hover:bg-primary hover:text-white">
                Voir toutes les offres
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Opportunity Card 1 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden border border-border group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/product-cars.jpg" alt="Véhicules" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  ROI Est. 18%
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-2">Véhicules d'Occasion</h4>
                <p className="text-sm text-muted-foreground mb-4">Exportation de 3 véhicules utilitaires vers Abidjan.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ticket d'entrée</span>
                    <span className="font-bold text-primary">3 500 €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Durée</span>
                    <span className="font-bold text-primary">45 Jours</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="text-xs text-right text-muted-foreground">4/5 Investisseurs</div>
                </div>
                
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Investir</Button>
              </div>
            </div>

            {/* Opportunity Card 2 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden border border-border group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/product-cosmetics.jpg" alt="Cosmétiques" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  ROI Est. 22%
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-2">Produits de Beauté</h4>
                <p className="text-sm text-muted-foreground mb-4">Lot de cosmétiques et parfumerie pour distribution locale.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ticket d'entrée</span>
                    <span className="font-bold text-primary">2 000 €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Durée</span>
                    <span className="font-bold text-primary">60 Jours</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <div className="text-xs text-right text-muted-foreground">2/5 Investisseurs</div>
                </div>
                
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Investir</Button>
              </div>
            </div>

            {/* Opportunity Card 3 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden border border-border group hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/warehouse-logistics.jpg" alt="Matériel BTP" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  ROI Est. 15%
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary mb-2">Matériel BTP</h4>
                <p className="text-sm text-muted-foreground mb-4">Outillage professionnel et petit équipement de chantier.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ticket d'entrée</span>
                    <span className="font-bold text-primary">5 000 €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Durée</span>
                    <span className="font-bold text-primary">90 Jours</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="text-xs text-right text-muted-foreground">1/5 Investisseurs</div>
                </div>
                
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Investir</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Notre Modèle</h2>
            <h3 className="text-3xl font-heading font-bold text-primary">Comment ça marche ?</h3>
            <p className="text-muted-foreground mt-4">
              Nous démocratisons l'accès à l'import-export en divisant le coût d'un conteneur entre 5 investisseurs qualifiés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">1. Co-Investissement</h4>
              <p className="text-muted-foreground text-sm">
                Chaque conteneur est financé par un groupe exclusif de <strong>5 investisseurs</strong> maximum. Vous achetez une "part" du stock.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">2. Sécurité & Gestion</h4>
              <p className="text-muted-foreground text-sm">
                Nous gérons tout : sourcing, achat, transport, douane et vente. L'entreprise prend une commission fixe sur la vente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-border text-center group hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">3. ROI & Transparence</h4>
              <p className="text-muted-foreground text-sm">
                Suivez votre investissement en temps réel. Dès la vente des marchandises, vous récupérez votre capital + plus-value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-border flex flex-col lg:flex-row">
            <div className="p-10 lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Simulateur de Gains</h3>
                <p className="text-muted-foreground">Estimez votre retour sur investissement pour une rotation (achat-vente) moyenne de 3 mois.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="font-bold text-primary">Montant investi</label>
                    <span className="font-bold text-accent text-lg">{investmentAmount.toLocaleString()} €</span>
                  </div>
                  <Slider 
                    defaultValue={[5000]} 
                    max={50000} 
                    min={1000} 
                    step={500} 
                    onValueChange={(vals) => setInvestmentAmount(vals[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 000 €</span>
                    <span>50 000 €</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-sm border border-blue-100">
                  <div className="flex items-start space-x-3">
                    <Lock className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm text-primary/80">
                      <span className="font-bold">Note :</span> Ce simulateur est basé sur une performance historique moyenne. Les performances passées ne préjugent pas des performances futures.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-10 lg:w-1/2 text-white flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <p className="text-white/70 uppercase tracking-widest text-sm font-bold">Retour Estimé (Net)</p>
                <div className="text-5xl font-bold text-accent">
                  +{estimatedGain.toLocaleString()} €
                </div>
                <p className="text-white/50 text-sm">Basé sur un ROI moyen de {estimatedRoiPercent}% par opération</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Capital Initial</span>
                  <span className="font-bold">{investmentAmount.toLocaleString()} €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Durée Moyenne</span>
                  <span className="font-bold">3 - 4 Mois</span>
                </div>
                <div className="flex justify-between items-center text-xl pt-4 border-t border-white/10">
                  <span className="font-bold text-white">Total Récupéré</span>
                  <span className="font-bold text-white">{totalReturn.toLocaleString()} €</span>
                </div>
              </div>

              <Button onClick={handleInvestClick} className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 h-auto text-lg shadow-lg mt-4">
                Commencer à Investir <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Transparence Totale</h2>
              <h3 className="text-3xl font-heading font-bold text-primary">Suivez vos fonds en temps réel</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Notre plateforme technologique vous donne accès à un tableau de bord investisseur complet.
              </p>
              <ul className="space-y-4">
                {[
                  "Localisation GPS du conteneur en temps réel",
                  "État des ventes et du stock restant",
                  "Calcul automatique de vos gains latents",
                  "Documents douaniers et factures accessibles"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="bg-accent/10 p-1 rounded-full">
                      <BarChart3 className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              {/* Abstract Dashboard Mockup */}
              <div className="bg-white rounded-lg shadow-2xl border border-border p-6 relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase">Portefeuille</div>
                    <div className="text-2xl font-bold text-primary">12 450,00 €</div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    +12.5%
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-sm border border-border">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">Conteneur #CN-8842 (Cosmétiques)</span>
                      <span className="text-xs text-accent font-bold">En Vente</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-accent h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>65% Vendu</span>
                      <span>Reste: 35%</span>
                    </div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-sm border border-border">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">Conteneur #CN-9921 (Pièces Auto)</span>
                      <span className="text-xs text-blue-600 font-bold">En Transit</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Arrivée: 12 Jours</span>
                      <span>Position: Atlantique</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Prêt à diversifier vos revenus ?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Rejoignez notre club d'investisseurs privés et participez à la croissance des échanges Europe-Afrique.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 h-auto shadow-lg">
              Devenir Investisseur
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
