export default function Legal() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading font-bold text-primary">Mentions Légales</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground">
                Ce site est édité par Logistics Sourcing.<br />
                Siège social : Europe<br />
                Email : contact@logistics-sourcing.com<br />
                Téléphone : +33 6 82 35 39 25
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Hébergement</h2>
              <p className="text-muted-foreground">
                Ce site est hébergé sur les infrastructures de Manus.<br />
                Le stockage des données est assuré conformément aux normes de sécurité en vigueur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Protection des données personnelles</h2>
              <p className="text-muted-foreground">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter par email.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
              <p className="text-muted-foreground">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
