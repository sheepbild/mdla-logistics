import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Package, Truck, Ship, CheckCircle2, MapPin, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error("Veuillez entrer un numéro de suivi valide.");
      return;
    }

    setIsLoading(true);
    setTrackingResult(null);

    // Simulation d'un appel API
    setTimeout(() => {
      setIsLoading(false);
      // Simulation de données de suivi
      setTrackingResult({
        id: trackingNumber,
        status: "En transit",
        origin: "Le Havre, France",
        destination: "Abidjan, Côte d'Ivoire",
        estimatedDelivery: "28 Décembre 2025",
        steps: [
          { date: "23 Déc 2025 - 09:30", status: "Arrivée au port de transit", location: "Tanger Med, Maroc", icon: Ship, completed: true },
          { date: "20 Déc 2025 - 14:00", status: "Départ du port d'origine", location: "Le Havre, France", icon: Ship, completed: true },
          { date: "18 Déc 2025 - 10:15", status: "Dédouanement export terminé", location: "Le Havre, France", icon: FileText, completed: true },
          { date: "17 Déc 2025 - 16:45", status: "Réception à l'entrepôt", location: "Paris, France", icon: Package, completed: true },
          { date: "15 Déc 2025 - 09:00", status: "Commande enregistrée", location: "En ligne", icon: CheckCircle2, completed: true },
        ]
      });
      toast.success("Informations de suivi récupérées.");
    }, 1500);
  };

  // Icône temporaire pour FileText qui n'est pas importée
  const FileText = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
  );

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Suivi de Colis</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Suivez l'acheminement de vos marchandises en temps réel.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-background -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-sm shadow-xl border-t-4 border-accent">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="tracking" className="sr-only">Numéro de suivi</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    id="tracking"
                    placeholder="Entrez votre numéro de suivi (ex: LS-123456789)" 
                    className="pl-10 h-14 text-lg border-2 focus-visible:ring-accent"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                  />
                </div>
              </div>
              <Button type="submit" className="h-14 px-8 bg-accent hover:bg-accent/90 text-white font-bold text-lg" disabled={isLoading}>
                {isLoading ? "Recherche..." : "Suivre"}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
              <AlertCircle className="inline h-4 w-4 mr-1 relative -top-0.5" />
              Entrez le numéro fourni sur votre confirmation d'expédition.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {trackingResult && (
        <section className="pb-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Status Card */}
              <div className="bg-white border border-border rounded-sm shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6 mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-primary">Colis #{trackingResult.id}</h2>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-green-200 mr-3">
                        {trackingResult.status}
                      </span>
                      <span className="text-sm">Estimé : {trackingResult.estimatedDelivery}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <span className="font-bold mr-2">De :</span> {trackingResult.origin}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-bold mr-2">Vers :</span> {trackingResult.destination}
                    </div>
                  </div>
                </div>

                {/* Progress Bar (Visual) */}
                <div className="relative px-4 py-8 hidden md:block">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                  <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-accent -translate-y-1/2 z-0"></div>
                  <div className="flex justify-between relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-sm">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold mt-2 text-primary">Commande</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-sm">
                        <Package className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold mt-2 text-primary">Prise en charge</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-md border-4 border-white -mt-1">
                        <Ship className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold mt-2 text-accent">En Transit</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold mt-2 text-gray-400">Arrivée</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold mt-2 text-gray-400">Livré</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white border border-border rounded-sm shadow-sm p-6">
                <h3 className="text-lg font-bold text-primary mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-accent" /> Historique d'acheminement
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {trackingResult.steps.map((step: any, index: number) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-accent text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <step.icon className="w-5 h-5" />
                      </div>
                      
                      {/* Content */}
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow-sm bg-white">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-slate-900">{step.status}</div>
                          <time className="font-caveat font-medium text-accent text-xs whitespace-nowrap">{step.date}</time>
                        </div>
                        <div className="text-slate-500 text-sm flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> {step.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
