import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Mail, Phone, ExternalLink, Download, MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/fatna-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/20">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        
        <div className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    <Sparkles className="w-4 h-4" />
                    Disponible en alternance dès septembre
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-extralight tracking-tight">
                    <span className="block text-foreground/80">Bonjour, moi c'est</span>
                    <span className="gradient-text font-light">Fatna</span>
                  </h1>
                  
                  <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground">
                    Chargée d'Affaires Commerciales
                  </h2>
                  
                  <p className="text-xl text-foreground/80 leading-relaxed max-w-lg">
                    Étudiante en Bac +3, je transforme les prospects en clients et les objectifs en résultats. 
                    <strong className="text-primary"> Prête à faire décoller vos ventes.</strong>
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:d.fanna03@gmail.com">
  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
    <MessageCircle className="w-5 h-5 mr-2" />
    Discutons de votre projet
  </Button>
</a>
                  
                 <a href="https://skooleo.cvdesignr.com/p/4ro0VA2LEejvG8E" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 py-6 text-lg rounded-xl transition-all duration-300">
    <Download className="w-5 h-5 mr-2" />
    Télécharger mon CV
  </Button>
</a>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">1200€</div>
                    <div className="text-sm text-muted-foreground">Panier moyen réalisé</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Motivée</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src={heroImage} 
                    alt="Fatna - Chargée d'Affaires Commerciales" 
                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-primary">Top performer</div>
                      <div className="text-sm text-muted-foreground">Yves Rocher</div>
                    </div>
                  </div>

                  {/* Floating info card */}
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-medium">Disponible maintenant</div>
                        <div className="text-xs text-muted-foreground">4j/semaine en entreprise</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="elegant-card">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl">🎯</div>
                <h3 className="font-medium">Closing Expert</h3>
                <p className="text-sm text-muted-foreground">Spécialisée dans la conversion et la finalisation des ventes</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">🚀</div>
                <h3 className="font-medium">Growth Mindset</h3>
                <p className="text-sm text-muted-foreground">Toujours prête à relever de nouveaux défis commerciaux</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">🤝</div>
                <h3 className="font-medium">Relation Client+</h3>
                <p className="text-sm text-muted-foreground">Excellence en service client haut de gamme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Pourquoi me choisir ?</h2>
          <div className="elegant-card text-lg leading-relaxed space-y-6">
            <p>🎓 <strong>Étudiante en Bac +3 Chargée d'affaires commerciales</strong>, je recherche une alternance dans le commerce, la vente, ou le business development qui me permettra de mettre en pratique mes compétences tout en continuant d'apprendre.</p>
            
            <p>💼 <strong>Expérience terrain solide :</strong> Déjà armée d'expériences concrètes (closing, tunnel de vente, relation client haut de gamme), je maîtrise les fondamentaux et suis prête à les appliquer dans un environnement stimulant.</p>
            
            <p>💡 <strong>Profil complet :</strong> Sérieuse, motivée, avec un vrai sens du contact et une capacité d'adaptation qui me permet de m'intégrer rapidement dans une équipe.</p>

            <div className="grid md:grid-cols-2 gap-6 pt-6 bg-secondary/20 rounded-xl p-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">📅 Modalités</h4>
                <p className="text-base">4 jours en entreprise / 1 jour à l'école</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">📍 Localisation</h4>
                <p className="text-base">Île-de-France ou télétravail selon le poste</p>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <p className="text-xl font-medium text-primary">Vous recrutez ? Contactez-moi dès maintenant ! 🎯</p>
            </div>
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
