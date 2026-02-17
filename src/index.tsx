import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all routes
app.use(renderer)

// ============================================================================
// PAGE D'ACCUEIL - CONTENU EXACT du prompt utilisateur
// ============================================================================
app.get('/', (c) => {
  return c.render(
    <>
      {/* Section 1 - HERO (fond sombre gradient, 100vh) */}
      <section class="hero">
        <div class="hero-content">
          <h1 class="fade-in">L'IA en Santé,<br />En Toute Confiance</h1>
          <p class="hero-subtitle fade-in">
            Cabinet indépendant de conseil et formation en IA pour les organisations de santé et médico-sociales. 
            De la stratégie aux usages concrets, nous vous guidons sans jargon, au service des soignants et des patients.
          </p>
          <div class="hero-cta fade-in">
            <a href="/services" class="btn btn-primary btn-large">Découvrir nos services</a>
            <a href="/contact" class="btn btn-secondary btn-large">Prendre rendez-vous</a>
          </div>
          {/* SUPPRIMÉ: ligne "Claude • ChatGPT • Gemini..." du hero (à déplacer vers pages intérieures uniquement) */}
        </div>
      </section>

      {/* Section 2 - 3 OFFRES (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Comment pouvons-nous vous aider ?</h2>
            <p class="section-subtitle">Trois approches complémentaires pour réussir votre transformation IA</p>
          </div>
          <div class="cards-grid">
            {/* Offre 1 - Formation */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 class="card-title">Formation & Montée en compétences</h3>
              <p class="card-description">Vos équipes deviennent autonomes sur l'IA. Du dirigeant au professionnel de terrain, des programmes progressifs 100% santé.</p>
              <a href="/services#formation" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 2 - Conseil */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 class="card-title">Conseil & Stratégie IA</h3>
              <p class="card-description">Construisons ensemble votre feuille de route IA : diagnostic de maturité, choix de solutions, pilotage de projet, conduite du changement.</p>
              <a href="/services#conseil" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 3 - Accélération (SIGNATURE) */}
            <div class="card card-signature fade-in">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="card-title">Accélération de Projet</h3>
              <p class="card-description">L'IA comme outil de production. Nous co-créons avec vous et livrons vos livrables plus rapidement avec un transfert de compétences intégré.</p>
              <a href="/services#acceleration" class="card-link">Découvrir l'offre →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - 4 PILIERS (fond légèrement teinté) */}
      <section class="section-alt">
        <div class="container">
          <div class="values-grid fade-in">
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h4 class="value-title">100% Santé × IA</h4>
              <p class="value-description">Expertise terrain sanitaire + intelligence artificielle</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 class="value-title">Neutres & Indépendants</h4>
              <p class="value-description">Aucun partenariat éditeur, conseil objectif</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 class="value-title">Concrets & Humains</h4>
              <p class="value-description">Co-construction pragmatique avec vos équipes</p>
            </div>
            <div class="value-item">
              <svg class="value-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
              <h4 class="value-title">Gardez la Main</h4>
              <p class="value-description">L'IA augmente, elle ne remplace pas vos équipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - 10 MÉTIERS CARDS (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Explorez des cas d'usage par métier</h2>
            <p class="section-subtitle">Que vous soyez directeur, manager ou professionnel de terrain, découvrez comment l'IA répond à vos défis</p>
          </div>
          <div class="use-cases-grid use-cases-grouped">
            <a href="/cas-usage#direction" class="use-case-card use-case-card-large fade-in">
              <span class="use-case-tag">Direction Générale</span>
              <h3 class="use-case-title">Stratégie, pilotage et transformation organisationnelle</h3>
              <p class="use-case-description">Pilotage stratégique, CPOM, EPRD, conseils d'administration, communication interne</p>
            </a>
            <a href="/cas-usage#administratif" class="use-case-card use-case-card-large fade-in">
              <span class="use-case-tag">Services Administratifs & Support</span>
              <h3 class="use-case-title">Finances, RH, Qualité, Achats, SI, Communication</h3>
              <p class="use-case-description">CPOM & EPRD, recrutement, HAS, appels d'offres, RGPD, valorisation projets</p>
            </a>
            <a href="/cas-usage#coeur-metier" class="use-case-card use-case-card-large fade-in">
              <span class="use-case-tag">Cœur de Métier Santé</span>
              <h3 class="use-case-title">Médical-soignant, Accompagnement, Direction des soins</h3>
              <p class="use-case-description">Projets personnalisés, transmissions, supports FALC, protocoles, audits de pratiques</p>
            </a>
          </div>
          <div class="section-cta fade-in">
            <a href="/cas-usage" class="btn btn-primary">Voir tous les cas d'usage →</a>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA FINAL (fond sombre) */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Prêt à engager votre transformation IA ?</h2>
            <p class="cta-subtitle">Échangeons 30 minutes sur vos enjeux. Sans engagement.</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Accueil' }
  )
})

// ============================================================================
// ============================================================================
// PAGE CAS D'USAGE - 3 CATÉGORIES ACCORDÉON
// ============================================================================
app.get('/cas-usage', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Cas d'usage IA par métier</h1>
          <p class="hero-subtitle fade-in">Des exemples concrets et des bénéfices mesurés pour chaque fonction</p>
        </div>
      </section>

      {/* Accordéons par catégorie métier */}
      <section class="section-light">
        <div class="container">
          <div class="accordion-wrapper">
            {/* Catégorie 1 - Direction Générale */}
            <details class="accordion-item accordion-category fade-in" open>
              <summary class="accordion-header accordion-category-header">
                <span class="accordion-category-title">Direction Générale</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Piloter la stratégie globale de l'établissement, préparer les instances de gouvernance (Conseil d'Administration, CVS), rédiger des rapports d'activité conformes aux exigences réglementaires (ARS, Département), et conduire la transformation digitale dans un contexte de ressources contraintes.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA synthétise les données de multiples services pour préparer des rapports d'activité structurés et conformes, génère des présentations stratégiques pour les instances de gouvernance, aide à la rédaction de notes de cadrage pour les projets d'établissement, et facilite l'analyse de données pour le pilotage de la performance.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Diagnostic des besoins stratégiques et analyse des processus de pilotage actuels</li>
                    <li>Formation personnalisée aux outils IA de synthèse, structuration et pilotage</li>
                    <li>Co-création de templates IA pour rapports, présentations et notes stratégiques</li>
                    <li>Accompagnement sur un cycle de gouvernance complet (préparation CA, CVS, rapport d'activité)</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Catégorie 2 - Services Administratifs & Support */}
            <details class="accordion-item accordion-category fade-in" open>
              <summary class="accordion-header accordion-category-header">
                <span class="accordion-category-title">Services Administratifs & Support</span>
                <p class="accordion-category-subtitle">Finances, RH, Qualité, Achats, SI, Communication</p>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Les services supports doivent :</p>
                  <ul>
                    <li><strong>Finances :</strong> Rédiger CPOM et EPRD conformes, préparer les dialogues de gestion avec les autorités</li>
                    <li><strong>RH :</strong> Attirer et retenir des talents dans un secteur en tension, gérer GPEC et formations</li>
                    <li><strong>Qualité :</strong> Préparer les évaluations HAS, rédiger procédures et rapports d'audit</li>
                    <li><strong>Achats :</strong> Rédiger cahiers des charges, analyser les offres, gérer marchés publics</li>
                    <li><strong>SI :</strong> Assurer sécurité HDS, conformité RGPD, habilitations et formations utilisateurs</li>
                    <li><strong>Communication :</strong> Produire contenus réseaux sociaux, communiqués de presse, newsletters internes</li>
                  </ul>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA apporte une aide concrète sur chaque fonction :</p>
                  <ul>
                    <li><strong>Finances :</strong> Structuration CPOM/EPRD, analyse commentée des écarts budgétaires, argumentaires financiers</li>
                    <li><strong>RH :</strong> Rédaction offres d'emploi attractives, grilles d'entretien, supports de formation GPEC</li>
                    <li><strong>Qualité :</strong> Auto-évaluations HAS structurées, procédures conformes, plans d'action qualité</li>
                    <li><strong>Achats :</strong> Rédaction cahiers des charges, analyse comparative offres, rapports de coûts</li>
                    <li><strong>SI :</strong> Procédures de sécurité, supports formation cybersécurité, documentation RGPD/HDS</li>
                    <li><strong>Communication :</strong> Génération de contenus multicanaux, posts engageants, communiqués et supports visuels</li>
                  </ul>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Diagnostic des processus métiers spécifiques à chaque service support</li>
                    <li>Formations ciblées par fonction (finances, RH, qualité, achats, SI, communication)</li>
                    <li>Co-création de templates IA adaptés aux documents métiers (CPOM, fiches de poste, procédures, cahiers des charges, etc.)</li>
                    <li>Accompagnement sur cycle complet (budget, recrutement, certification, appel d'offres, etc.)</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Catégorie 3 - Cœur de Métier Santé */}
            <details class="accordion-item accordion-category fade-in" open>
              <summary class="accordion-header accordion-category-header">
                <span class="accordion-category-title">Cœur de Métier Santé</span>
                <p class="accordion-category-subtitle">Soins, Accompagnement Éducatif, Direction des Soins</p>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Les professionnels du soin et de l'accompagnement font face à :</p>
                  <ul>
                    <li><strong>Soins & Accompagnement :</strong> Rédiger des projets personnalisés de qualité, assurer transmissions efficaces, coordonner prises en charge pluridisciplinaires</li>
                    <li><strong>Accompagnement Éducatif :</strong> Créer supports pédagogiques adaptés (FALC, pictogrammes), concevoir activités éducatives personnalisées, documenter projets individuels</li>
                    <li><strong>Direction des Soins :</strong> Élaborer protocoles conformes aux bonnes pratiques HAS, piloter projets de soins, former équipes, réaliser audits de pratiques</li>
                  </ul>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA soutient le cœur de métier sans jamais remplacer l'expertise professionnelle :</p>
                  <ul>
                    <li><strong>Soins & Accompagnement :</strong> Structuration projets personnalisés, synthèse transmissions, comptes rendus coordination, supports d'information familles</li>
                    <li><strong>Accompagnement Éducatif :</strong> Génération supports FALC, propositions activités adaptées aux profils, aide rédaction projets éducatifs</li>
                    <li><strong>Direction des Soins :</strong> Rédaction protocoles basés sur recommandations HAS, synthèse retours audits, supports formation, suivi pratiques</li>
                  </ul>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse des besoins spécifiques des équipes de terrain (soins, éducatif, direction)</li>
                    <li>Formations adaptées aux professionnels de terrain (langage métier, respect des pratiques)</li>
                    <li>Co-création de templates IA pour projets personnalisés, supports FALC, protocoles de soins</li>
                    <li>Accompagnement respectueux des référentiels métier et des pratiques professionnelles</li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Prêt à transformer votre métier avec l'IA ?</h2>
            <p class="cta-subtitle">Échangeons sur vos cas d'usage spécifiques et vos défis quotidiens</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Cas d\'usage' }
  )
})

// PAGE NOS SERVICES - 3 SECTIONS DÉTAILLÉES
// ============================================================================
app.get('/services', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Nos services</h1>
          <p class="hero-subtitle fade-in">Trois approches complémentaires pour réussir votre transformation IA</p>
        </div>
      </section>

      {/* Section Formation */}
      <section class="section-light" id="formation">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Formation & Montée en compétences</h2>
            <p class="section-subtitle">Vos équipes deviennent autonomes sur l'IA. Programmes progressifs 100% santé.</p>
          </div>
          
          <div class="offer-cards-grid">
            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Niveau 1 : Sensibilisation</h3>
              <p class="offer-duration">Durée : 2 heures</p>
              <p class="offer-description">Conférence ou atelier découverte pour lever les craintes, montrer des exemples concrets du secteur santé et identifier les premiers cas d'usage.</p>
              <ul class="offer-list">
                <li>Qu'est-ce que l'IA générative ?</li>
                <li>Opportunités et risques en santé</li>
                <li>Exemples de cas d'usage par métier</li>
                <li>Éthique, RGPD et AI Act</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Niveau 2 : Initiation</h3>
              <p class="offer-duration">Durée : 1 jour</p>
              <p class="offer-description">Formation pratique pour prendre en main les outils IA (ChatGPT, Claude, etc.), maîtriser les prompts et intégrer l'IA dans son quotidien professionnel.</p>
              <ul class="offer-list">
                <li>Choisir le bon outil selon l'usage</li>
                <li>Rédiger des prompts efficaces</li>
                <li>Cas pratiques métier (CPOM, fiches de poste, protocoles)</li>
                <li>Bonnes pratiques de sécurité des données</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Niveau 3 : Expertise</h3>
              <p class="offer-duration">Durée : 2 à 3 jours</p>
              <p class="offer-description">Programme avancé pour les power-users : automatisation de processus, création de GPTs personnalisés, pilotage de projets IA.</p>
              <ul class="offer-list">
                <li>Techniques avancées de prompting</li>
                <li>Création de GPTs métier personnalisés</li>
                <li>Intégration IA dans les workflows existants</li>
                <li>Accompagnement de la transformation IA</li>
              </ul>
            </div>
          </div>
          
          <div class="section-cta fade-in">
            <a href="/contact" class="btn btn-primary">Demander un devis formation</a>
          </div>
        </div>
      </section>

      {/* Section Conseil */}
      <section class="section-alt" id="conseil">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Conseil & Stratégie IA</h2>
            <p class="section-subtitle">Construisons ensemble votre feuille de route IA</p>
          </div>
          
          <div class="offer-cards-grid">
            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Diagnostic de maturité IA</h3>
              <p class="offer-description">Audit complet de votre organisation pour identifier le niveau de maturité IA, les freins et les opportunités.</p>
              <ul class="offer-list">
                <li>Cartographie des usages potentiels</li>
                <li>Analyse des compétences existantes</li>
                <li>Évaluation de la gouvernance et des risques</li>
                <li>Recommandations priorisées</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Feuille de route IA</h3>
              <p class="offer-description">Co-construction d'une stratégie IA adaptée à vos enjeux, avec un plan d'action opérationnel sur 12 à 24 mois.</p>
              <ul class="offer-list">
                <li>Définition des objectifs et KPIs</li>
                <li>Roadmap par métier et par usage</li>
                <li>Budgétisation et ROI attendu</li>
                <li>Plan de formation et de conduite du changement</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Choix de solutions IA</h3>
              <p class="offer-description">Accompagnement neutre et indépendant pour sélectionner les outils IA adaptés à vos besoins (aucun partenariat éditeur).</p>
              <ul class="offer-list">
                <li>Benchmark des solutions du marché</li>
                <li>Grille d'analyse multicritères</li>
                <li>Tests et POC avec vos équipes</li>
                <li>Support au cahier des charges</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Pilotage de projet IA</h3>
              <p class="offer-description">Assistance à maîtrise d'ouvrage pour piloter vos projets de transformation IA de bout en bout.</p>
              <ul class="offer-list">
                <li>Cadrage et gouvernance projet</li>
                <li>Coordination des parties prenantes</li>
                <li>Suivi des jalons et livrables</li>
                <li>Mesure du ROI et ajustements</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Conduite du changement</h3>
              <p class="offer-description">Accompagnement humain de vos équipes pour faire de l'IA un levier d'épanouissement professionnel.</p>
              <ul class="offer-list">
                <li>Analyse des impacts et résistances</li>
                <li>Plan de communication interne</li>
                <li>Formation des ambassadeurs IA</li>
                <li>Suivi et évaluation post-déploiement</li>
              </ul>
            </div>
          </div>
          
          <div class="section-cta fade-in">
            <a href="/contact" class="btn btn-primary">Échanger sur votre projet</a>
          </div>
        </div>
      </section>

      {/* Section Accélération */}
      <section class="section-light" id="acceleration">
        <div class="container">
          <div class="section-header fade-in">
            <div class="offer-badge-large">Offre signature</div>
            <h2 class="section-title">Accélération de Projet</h2>
            <p class="section-subtitle">L'IA comme outil de production. Nous co-créons avec vous et livrons vos livrables plus rapidement.</p>
          </div>
          
          <div class="offer-intro fade-in">
            <p>Dans cette offre, nous ne nous contentons pas de vous conseiller : nous travaillons en binôme avec vous, l'IA à la main, pour produire vos livrables. Vous gagnez du temps, vous apprenez en faisant, et vous gardez la main sur le contenu.</p>
          </div>

          <div class="offer-cards-grid">
            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Stratégie & feuilles de route</h3>
              <ul class="offer-list">
                <li>Schéma directeur des systèmes d'information</li>
                <li>Plan stratégique d'établissement</li>
                <li>Roadmap transformation numérique</li>
                <li>Stratégie de communication</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Documents financiers & pilotage</h3>
              <ul class="offer-list">
                <li>CPOM (Contrat Pluriannuel d'Objectifs et de Moyens)</li>
                <li>EPRD (État Prévisionnel des Recettes et Dépenses)</li>
                <li>Business plans et dossiers de financement</li>
                <li>Tableaux de bord et reportings</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Appels d'offres & cahiers des charges</h3>
              <ul class="offer-list">
                <li>Cahiers des charges SI, achats, travaux</li>
                <li>Analyse et comparaison d'offres</li>
                <li>Grilles d'évaluation multicritères</li>
                <li>Support à la négociation</li>
              </ul>
            </div>

            <div class="offer-card fade-in">
              <h3 class="offer-card-title">Qualité, certification & conformité</h3>
              <ul class="offer-list">
                <li>Auto-évaluations HAS</li>
                <li>Procédures qualité et protocoles</li>
                <li>Registres RGPD et analyses d'impact</li>
                <li>Rapports d'audit et plans d'action</li>
              </ul>
            </div>
          </div>
          
          <div class="section-cta fade-in">
            <a href="/contact" class="btn btn-primary">Accélérer votre prochain projet</a>
          </div>
        </div>
      </section>

      {/* Méthodologie 5 phases */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre méthodologie en 5 phases</h2>
            <p class="section-subtitle">Un accompagnement structuré et itératif</p>
          </div>
          
          <div class="methodology-timeline fade-in">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <h3 class="timeline-title">Cadrage</h3>
              <p class="timeline-description">Compréhension de vos enjeux, objectifs et contraintes. Définition du périmètre et des livrables attendus.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <h3 class="timeline-title">Diagnostic</h3>
              <p class="timeline-description">Analyse de l'existant, identification des opportunités IA et des points de vigilance (RGPD, éthique, faisabilité).</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <h3 class="timeline-title">Co-création</h3>
              <p class="timeline-description">Ateliers collaboratifs pour concevoir les solutions, rédiger les premiers livrables et former vos équipes en pratique.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <h3 class="timeline-title">Livraison</h3>
              <p class="timeline-description">Remise des livrables finalisés (documents, outils, procédures) et transfert de compétences complet.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">5</div>
              <h3 class="timeline-title">Suivi</h3>
              <p class="timeline-description">Accompagnement post-livraison, mesure des impacts, ajustements et consolidation de l'autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Quelle offre vous correspond ?</h2>
            <p class="cta-subtitle">Échangeons 30 minutes sur vos enjeux</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Nos services' }
  )
})

// ============================================================================
// PAGE QUI SOMMES-NOUS
// ============================================================================
app.get('/a-propos', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Qui sommes-nous ?</h1>
          <p class="hero-subtitle fade-in">Expertise santé et intelligence artificielle au service de votre transformation</p>
        </div>
      </section>

      {/* Section Fondateur */}
      <section class="section-founder">
        <div class="container">
          <div class="founder-content fade-in">
            <div class="founder-image">
              <img src="https://cdn.prod.website-files.com/6693d568b935c546e51f1b34/66acd25a39ef72c39238a511_samuel_bottaro.webp" alt="Samuel Bottaro, Fondateur" />
            </div>
            <div class="founder-bio">
              <h2>Samuel Bottaro</h2>
              <h3>Fondateur QUUBE IA Santé</h3>
              <p>Consultant indépendant depuis 2000, j'accompagne les acteurs de la santé et du médico-social dans leurs transformations stratégiques et opérationnelles.</p>
              <p>En 2023, j'ai décidé de créer QUUBE IA Santé pour répondre à une conviction forte : l'intelligence artificielle peut être un levier majeur d'efficience et d'épanouissement professionnel dans le secteur de la santé, à condition d'être maîtrisée avec méthode et éthique.</p>
              <p>Fort d'une expérience de plus de 25 ans dans le secteur, je connais les réalités du terrain, la complexité des organisations et l'importance de l'humain dans toute démarche de transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision - 4 Piliers */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre vision</h2>
            <p class="section-subtitle">Quatre piliers pour un accompagnement réussi</p>
          </div>
          
          <div class="vision-grid">
            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3>100% Santé</h3>
              <p>Nous ne travaillons qu'avec le secteur sanitaire, social et médico-social. Cette spécialisation garantit une compréhension fine de vos enjeux (CPOM, HAS, RGPD santé, AI Act...) et un langage commun.</p>
            </div>

            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3>Indépendance & Neutralité</h3>
              <p>Nous n'avons aucun partenariat avec des éditeurs de logiciels ou fournisseurs d'IA. Nos conseils sont objectifs et guidés uniquement par vos intérêts.</p>
            </div>

            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>Approche Terrain</h3>
              <p>Pas de jargon technique ni de promesses marketing. Nous travaillons en co-construction avec vos équipes, dans le respect de vos contraintes et de vos valeurs.</p>
            </div>

            <div class="vision-card fade-in">
              <svg class="vision-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3>Autonomie & Transfert</h3>
              <p>Notre objectif est de vous rendre autonome. Chaque mission intègre un transfert de compétences pour que vos équipes maîtrisent l'IA sur la durée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Notre méthodologie</h2>
            <p class="section-subtitle">Un accompagnement structuré en 5 phases</p>
          </div>
          
          <div class="methodology-timeline fade-in">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <h3 class="timeline-title">Cadrage</h3>
              <p class="timeline-description">Compréhension de vos enjeux, objectifs et contraintes. Définition du périmètre et des livrables attendus.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <h3 class="timeline-title">Diagnostic</h3>
              <p class="timeline-description">Analyse de l'existant, identification des opportunités IA et des points de vigilance (RGPD, éthique, faisabilité).</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <h3 class="timeline-title">Co-création</h3>
              <p class="timeline-description">Ateliers collaboratifs pour concevoir les solutions, rédiger les premiers livrables et former vos équipes en pratique.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <h3 class="timeline-title">Livraison</h3>
              <p class="timeline-description">Remise des livrables finalisés (documents, outils, procédures) et transfert de compétences complet.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">5</div>
              <h3 class="timeline-title">Suivi</h3>
              <p class="timeline-description">Accompagnement post-livraison, mesure des impacts, ajustements et consolidation de l'autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terrains d'intervention */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Nos terrains d'intervention</h2>
            <p class="section-subtitle">Une expertise reconnue dans 10 secteurs du système de santé français</p>
          </div>
          
          <div class="sectors-list fade-in">
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Établissements et services médico-sociaux (ESSMS)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Établissements de santé (hôpitaux, cliniques, EHPAD)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Services d'aide et de soins à domicile (SAAD, SSIAD, SPASAD)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Centres hospitaliers universitaires (CHU)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Groupements hospitaliers de territoire (GHT)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Agences régionales de santé (ARS) et organismes de santé publique</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Fédérations et têtes de réseau du secteur santé/social</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Organismes de formation secteur santé</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Collectivités territoriales (volet santé/social)</span>
            </div>
            <div class="sector-item">
              <svg class="sector-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cabinets de conseil spécialisés santé</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Envie d'en savoir plus ?</h2>
            <p class="cta-subtitle">Échangeons sur votre contexte et vos ambitions</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Qui sommes-nous' }
  )
})

// ============================================================================
// PAGE CONTACT
// ============================================================================
app.get('/contact', (c) => {
  return c.render(
    <>
      {/* Hero */}
      <section class="hero-interior">
        <div class="container">
          <h1 class="fade-in">Parlons de votre projet</h1>
          <p class="hero-subtitle fade-in">Nous vous répondons sous 48h</p>
        </div>
      </section>

      {/* Section Contact */}
      <section class="section-light">
        <div class="container">
          <div class="contact-grid">
            {/* Formulaire de contact */}
            <div class="contact-form-wrapper fade-in">
              <h2 class="form-title">Envoyez-nous un message</h2>
              <form class="contact-form" method="post" action="/api/contact">
                <div class="form-group">
                  <label for="nom">Nom et prénom *</label>
                  <input type="text" id="nom" name="nom" required />
                </div>
                
                <div class="form-group">
                  <label for="email">Email professionnel *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div class="form-group">
                  <label for="organisation">Organisme / Établissement *</label>
                  <input type="text" id="organisation" name="organisation" required />
                </div>
                
                <div class="form-group">
                  <label for="fonction">Fonction</label>
                  <input type="text" id="fonction" name="fonction" />
                </div>
                
                <div class="form-group">
                  <label for="besoin">Votre besoin *</label>
                  <select id="besoin" name="besoin" required>
                    <option value="">-- Sélectionnez --</option>
                    <option value="formation">Formation & Montée en compétences</option>
                    <option value="conseil">Conseil & Stratégie IA</option>
                    <option value="acceleration">Accélération de Projet</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="message">Votre message *</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                
                <div class="form-group">
                  <label class="checkbox-label">
                    <input type="checkbox" name="rgpd" required />
                    <span>J'accepte que mes données soient traitées dans le cadre de cette demande (conformément au RGPD)*</span>
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary btn-large">Envoyer le message</button>
              </form>
            </div>

            {/* Coordonnées */}
            <div class="contact-info-wrapper fade-in">
              <h2 class="info-title">Coordonnées</h2>
              
              <div class="info-item">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:contact@quube-ia-sante.fr">contact@quube-ia-sante.fr</a>
                </div>
              </div>
              
              <div class="info-item">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4>Adresse</h4>
                  <p>Paris & Île-de-France<br />Interventions sur toute la France</p>
                </div>
              </div>
              
              <div class="info-item">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4>Prendre rendez-vous</h4>
                  <a href="https://calendly.com/samuel-bottaro/30min" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Calendly - 30 minutes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="section-alt">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Questions fréquentes</h2>
          </div>
          
          <div class="faq-wrapper">
            <details class="faq-item fade-in">
              <summary class="faq-question">
                Combien coûte un accompagnement QUUBE IA Santé ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Nos tarifs varient selon la nature de la mission (formation, conseil, accélération), la durée et la complexité. Une formation Sensibilisation (2h) démarre à partir de 1 200€ HT. Un accompagnement stratégique sur-mesure se construit en fonction de vos besoins.</p>
                <p>Nous vous proposons systématiquement un devis détaillé après un premier échange pour comprendre vos enjeux.</p>
              </div>
            </details>

            <details class="faq-item fade-in">
              <summary class="faq-question">
                Intervenez-vous partout en France ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Oui, nous intervenons sur l'ensemble du territoire français. Basé en Île-de-France, je me déplace régulièrement en région pour des missions de formation, de conseil ou d'accompagnement terrain.</p>
                <p>Certaines prestations (diagnostics, ateliers, suivi) peuvent également être réalisées à distance en visioconférence pour optimiser les coûts et les délais.</p>
              </div>
            </details>

            <details class="faq-item fade-in">
              <summary class="faq-question">
                Travaillez-vous avec des éditeurs de logiciels IA ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Non. QUUBE IA Santé est totalement indépendant et n'a aucun partenariat commercial avec des éditeurs de logiciels ou fournisseurs d'IA.</p>
                <p>Cette indépendance garantit un conseil objectif et guidé uniquement par vos intérêts. Si nous devons vous aider à choisir une solution, nous réalisons un benchmark neutre et transparent.</p>
              </div>
            </details>

            <details class="faq-item fade-in">
              <summary class="faq-question">
                Quels sont les délais pour démarrer une mission ?
                <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="faq-answer">
                <p>Pour une formation : entre 2 et 4 semaines selon la disponibilité de vos équipes et la complexité du programme.</p>
                <p>Pour un accompagnement stratégique : nous pouvons démarrer sous 2 à 3 semaines après validation du devis.</p>
                <p>Pour l'offre Accélération : le délai dépend du projet, mais nous sommes réactifs et pouvons démarrer rapidement si besoin.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Une autre question ?</h2>
            <p class="cta-subtitle">Parlons-en directement</p>
            <a href="https://calendly.com/samuel-bottaro/30min" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Contact' }
  )
})

export default app
