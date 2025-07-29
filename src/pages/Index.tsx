import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Mail, Phone, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl font-extralight tracking-tight mb-6">
              <span className="gradient-text">Fatna</span>
            </h1>
            <h2 className="text-2xl font-light text-muted-foreground mb-8">
              Chargée d'Affaires Commerciales
            </h2>
          </div>
          
          <div className="elegant-card max-w-3xl mx-auto text-left space-y-4 text-lg leading-relaxed">
            <p className="text-xl font-medium mb-4">✨ Moi, c'est Fatna. Et je suis prête à faire décoller vos ventes.</p>
            <p>📢 <strong>À la recherche d'une alternance dès septembre !</strong></p>
            <p>🎓 Étudiante en Bac +3 Chargée d'affaires commerciales, je suis à la recherche d'une alternance dans le commerce, la vente, ou le business development.</p>
            <p>💼 Déjà armée d'expériences concrètes sur le terrain (closing, tunnel de vente, relation client haut de gamme…), je veux continuer à apprendre au contact du réel, dans une entreprise ambitieuse et stimulante.</p>
            <p>💡 Sérieuse, motivée, avec un vrai sens du contact — je suis prête à m'investir et à faire la différence.</p>
            <div className="grid md:grid-cols-2 gap-4 pt-4 text-base">
              <p>📅 <strong>Rythme :</strong> 4 jours en entreprise / 1 jour à l'école</p>
              <p>📍 <strong>Zone :</strong> Île-de-France (ou à distance selon le poste)</p>
            </div>
            <p className="text-center pt-4 text-lg">📩 <strong>Vous recrutez ? Écrivez-moi ou partagez ce profil autour de vous</strong> 🙌</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Compétences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="elegant-card">
              <h3 className="text-xl font-medium mb-6 text-primary">Hard Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Développement commercial</h4>
                  <p className="text-sm text-muted-foreground">prospection, closing, vente-conseil</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Négociation & relation client</h4>
                  <p className="text-sm text-muted-foreground">techniques de vente, fidélisation</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Pilotage opérationnel</h4>
                  <p className="text-sm text-muted-foreground">gestion encaissements, litiges, SAV</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Outils & logiciels</h4>
                  <p className="text-sm text-muted-foreground">CRM, Excel, PowerPoint, ERP</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Analyse & reporting</h4>
                  <p className="text-sm text-muted-foreground">KPIs, objectifs, synthèse</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="elegant-card">
              <h3 className="text-xl font-medium mb-6 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm py-1 px-3">Esprit d'analyse</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Adaptabilité</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Sens du résultat</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Dynamisme</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Sens du contact</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Organisation</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Rigueur</Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">Autonomie</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Expériences</h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="elegant-card relative pl-8">
              <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-medium">Business Developer</h3>
                <span className="text-sm text-muted-foreground">Mars 2025 – Aujourd'hui</span>
              </div>
              <p className="text-primary font-medium mb-2">Velvet & Co – Toronto, Canada (télétravail)</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>→ Acquisition B2B via scraping, cold emailing & messaging</li>
                <li>→ Closing de contrats premium</li>
                <li>→ Stratégie commerciale & automatisation CRM</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="elegant-card relative pl-8">
              <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-medium">Négociatrice Technico-Commerciale</h3>
                <span className="text-sm text-muted-foreground">Sept 2024 – Mars 2025</span>
              </div>
              <p className="text-primary font-medium mb-2">La Maison Contemporaine – Créteil</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>→ Vente de mobilier design (panier moyen 1200 €)</li>
                <li>→ Cycle de vente complet & suivi via CRM</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="elegant-card relative pl-8">
              <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-medium">Conseillère Experte</h3>
                <span className="text-sm text-muted-foreground">2023 – 2024</span>
              </div>
              <p className="text-primary font-medium mb-2">Yves Rocher – Créteil</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>→ Top vendeuse du point de vente</li>
                <li>→ Stratégies de fidélisation & reporting quotidien</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Languages & Interests */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="elegant-card">
              <h2 className="text-xl font-medium mb-6 text-primary">Formation</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Bachelor Chargée d'Affaires Commerciales</h4>
                  <p className="text-sm text-muted-foreground">2025–2026</p>
                </div>
                <div>
                  <h4 className="font-medium">BTS NDRC</h4>
                  <p className="text-sm text-muted-foreground">Négociation & Digitalisation de la Relation Client</p>
                  <p className="text-sm text-muted-foreground">2024–2025</p>
                </div>
                <div>
                  <h4 className="font-medium">BUT Chimie</h4>
                  <p className="text-sm text-muted-foreground">Université Paris-Est</p>
                  <p className="text-sm text-muted-foreground">2022–2024</p>
                </div>
                <div>
                  <h4 className="font-medium">Baccalauréat Scientifique</h4>
                  <p className="text-sm text-muted-foreground">2020–2021</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="elegant-card">
              <h2 className="text-xl font-medium mb-6 text-primary">Langues</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Français</span>
                  <Badge>Natif</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Arabe</span>
                  <Badge variant="secondary">Courant (C1)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Anglais</span>
                  <Badge variant="secondary">Intermédiaire (B2)</Badge>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="elegant-card">
              <h2 className="text-xl font-medium mb-6 text-primary">Centres d'intérêt</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cinéma</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Intelligence Artificielle</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Lecture</span>
                </div>
                <div className="mt-6 p-3 bg-secondary/30 rounded-lg">
                  <p className="text-sm"><strong>Permis de conduire :</strong> Permis B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-border/30">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-4">Prête à rejoindre votre équipe</p>
          <div className="flex justify-center items-center gap-6 text-sm">
            <a href="mailto:contact@fatna.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              contact@fatna.com
            </a>
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
