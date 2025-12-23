import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Email invalide." }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide." }),
  productType: z.string().min(1, { message: "Veuillez sélectionner un type de produit." }),
  destination: z.string().min(2, { message: "La destination est requise." }),
  message: z.string().min(10, { message: "Votre message doit contenir au moins 10 caractères." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productType: "",
      destination: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Votre demande a été envoyée avec succès !", {
      description: "Notre équipe vous contactera sous 24h.",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
            Demandez votre devis gratuit ou posez-nous vos questions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Parlons de votre projet</h2>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Nos Coordonnées
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre équipe est disponible pour vous accompagner dans toutes vos démarches d'importation. N'hésitez pas à nous contacter pour une étude personnalisée.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-sm">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Téléphone</h4>
                    <p className="text-muted-foreground">+33 6 82 35 39 25</p>
                    <p className="text-sm text-muted-foreground mt-1">Du Lundi au Vendredi, 9h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-sm">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Email</h4>
                    <p className="text-muted-foreground">contact@logistics-sourcing.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h garantie</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-sm">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Siège Social</h4>
                    <p className="text-muted-foreground">Europe</p>
                    <p className="text-sm text-muted-foreground mt-1">Liaison directe avec l'Afrique</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-sm border border-border">
                <h4 className="font-bold text-primary mb-2 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-accent" /> Horaires d'ouverture
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>09:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-lg border-t-4 border-accent">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Envoyer un message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="+33..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="votre@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="productType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type de produit</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionner" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vehicles">Véhicules</SelectItem>
                              <SelectItem value="cosmetics">Cosmétiques</SelectItem>
                              <SelectItem value="baby">Univers Bébé</SelectItem>
                              <SelectItem value="parts">Pièces Détachées</SelectItem>
                              <SelectItem value="textile">Textile</SelectItem>
                              <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination</FormLabel>
                          <FormControl>
                            <Input placeholder="Pays / Ville" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Détails de la demande</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre besoin (quantité, spécifications...)" 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-6 h-auto">
                    Envoyer ma demande <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
