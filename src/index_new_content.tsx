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
            <a href="/offres" class="btn btn-primary btn-large">Découvrir nos offres</a>
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
              <a href="/offres#formation" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 2 - Conseil */}
            <div class="card fade-in">
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 class="card-title">Conseil & Stratégie IA</h3>
              <p class="card-description">Construisons ensemble votre feuille de route IA : diagnostic de maturité, choix de solutions, pilotage de projet, conduite du changement.</p>
              <a href="/offres#conseil" class="card-link">Découvrir →</a>
            </div>

            {/* Offre 3 - Accélération (SIGNATURE) */}
            <div class="card card-signature fade-in">
              <div class="card-badge">Offre signature</div>
              <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="card-title">Accélération de Projet</h3>
              <p class="card-description">L'IA comme outil de production. Nous co-créons avec vous et livrons vos livrables plus rapidement avec un transfert de compétences intégré.</p>
              <a href="/offres#acceleration" class="card-link">Découvrir l'offre →</a>
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

          {/* CHIFFRES CLÉS (sans pourcentages/timelines fictifs) */}
          <div class="stats-grid fade-in">
            <div class="stat-item">
              <div class="stat-number" data-count="25">25</div>
              <div class="stat-label">ans d'expertise santé<br />et médico-social</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-count="10">10</div>
              <div class="stat-label">secteurs du système<br />de santé français</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-count="7">7</div>
              <div class="stat-label">métiers-types accompagnés<br />en formation IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - CITATION FONDATEUR (fond sombre) */}
      <section class="section-founder">
        <div class="container">
          <div class="founder-content fade-in">
            <div class="founder-image">
              {/* Photo réelle du fondateur (à remplacer par l'URL correcte) */}
              <img src="https://cdn.prod.website-files.com/6693d568b935c546e51f1b34/66acd25a39ef72c39238a511_samuel_bottaro.webp" alt="Samuel Bottaro, Fondateur" />
            </div>
            <div class="founder-quote">
              <blockquote>
                « J'ai créé QUUBE IA Santé avec une conviction : l'intelligence artificielle est un levier majeur pour transformer le secteur de la santé. Accompagner les dirigeants et les équipes dans la maîtrise de l'IA, c'est leur donner les moyens de répondre aux défis de demain — efficience des organisations, qualité de l'accompagnement, et épanouissement des professionnels. »
              </blockquote>
              <div class="founder-name">Samuel Bottaro</div>
              <div class="founder-title">Fondateur QUUBE IA Santé</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - 10 MÉTIERS CARDS (fond clair) */}
      <section class="section-light">
        <div class="container">
          <div class="section-header fade-in">
            <h2 class="section-title">Explorez des cas d'usage par métier</h2>
            <p class="section-subtitle">Que vous soyez directeur, manager ou professionnel de terrain, découvrez comment l'IA répond à vos défis</p>
          </div>
          <div class="use-cases-grid">
            <a href="/cas-usage#direction" class="use-case-card fade-in">
              <span class="use-case-tag">Direction générale</span>
              <h3 class="use-case-title">Stratégie & pilotage</h3>
            </a>
            <a href="/cas-usage#finance" class="use-case-card fade-in">
              <span class="use-case-tag">Finances & contrôle</span>
              <h3 class="use-case-title">CPOM & EPRD augmentés</h3>
            </a>
            <a href="/cas-usage#rh" class="use-case-card fade-in">
              <span class="use-case-tag">Ressources humaines</span>
              <h3 class="use-case-title">Recrutement & rétention</h3>
            </a>
            <a href="/cas-usage#qualite" class="use-case-card fade-in">
              <span class="use-case-tag">Qualité & certification</span>
              <h3 class="use-case-title">HAS, évaluation interne</h3>
            </a>
            <a href="/cas-usage#soins" class="use-case-card fade-in">
              <span class="use-case-tag">Soins & accompagnement</span>
              <h3 class="use-case-title">Projets personnalisés</h3>
            </a>
            <a href="/cas-usage#educatif" class="use-case-card fade-in">
              <span class="use-case-tag">Éducatif & pédagogie</span>
              <h3 class="use-case-title">Supports FALC</h3>
            </a>
            <a href="/cas-usage#direction-soins" class="use-case-card fade-in">
              <span class="use-case-tag">Direction des soins</span>
              <h3 class="use-case-title">Protocoles & audits</h3>
            </a>
            <a href="/cas-usage#systeme-info" class="use-case-card fade-in">
              <span class="use-case-tag">Systèmes d'information</span>
              <h3 class="use-case-title">RGPD, HDS, interopérabilité</h3>
            </a>
            <a href="/cas-usage#communication" class="use-case-card fade-in">
              <span class="use-case-tag">Communication</span>
              <h3 class="use-case-title">Valorisation de projets</h3>
            </a>
            <a href="/cas-usage#achats" class="use-case-card fade-in">
              <span class="use-case-tag">Achats & logistique</span>
              <h3 class="use-case-title">Appels d'offres</h3>
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
// PAGE CAS D'USAGE - 10 ONGLETS ACCORDÉON
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

      {/* Accordéon 10 métiers */}
      <section class="section-light">
        <div class="container">
          <div class="accordion-wrapper">
            
            {/* Métier 1 - Direction Générale */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Direction générale</span>
                <span class="accordion-title">Stratégie, pilotage et transformation organisationnelle</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Piloter une organisation complexe, anticiper les réformes réglementaires, optimiser l'allocation des ressources, et accompagner les équipes dans le changement.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA vous aide à synthétiser les rapports d'activité, à simuler des scénarios budgétaires (CPOM, EPRD), à préparer les conseils d'administration et à rédiger les communications stratégiques.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Diagnostic de maturité IA de la direction</li>
                    <li>Identification des cas d'usage prioritaires</li>
                    <li>Formation des cadres dirigeants à l'utilisation d'outils IA (ChatGPT, Claude, etc.)</li>
                    <li>Accompagnement sur projet pilote (ex: préparation CPOM assistée par IA)</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 2 - Finances & contrôle de gestion */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Finances & contrôle</span>
                <span class="accordion-title">CPOM, EPRD, tableaux de bord et analyse financière</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Construire des documents financiers complexes (CPOM, EPRD), analyser les écarts budgétaires, répondre aux demandes de financeurs, et produire des rapports d'activité détaillés.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA automatise la création de narratifs financiers, génère des tableaux de bord dynamiques, détecte des anomalies dans les données budgétaires et accélère la rédaction de réponses aux tutelles.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse des besoins spécifiques du service financier</li>
                    <li>Formation à l'utilisation d'IA pour la rédaction financière</li>
                    <li>Co-création de templates IA pour CPOM/EPRD</li>
                    <li>Accompagnement sur un cycle budgétaire complet</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 3 - Ressources Humaines */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Ressources humaines</span>
                <span class="accordion-title">Recrutement, formation et fidélisation des talents</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Attirer et retenir des talents dans un secteur en tension, gérer les processus RH (fiches de poste, entretiens, formations), et piloter la GPEC.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA rédige des offres d'emploi attractives, prépare des grilles d'entretien, génère des supports de formation personnalisés et aide à l'analyse des besoins en compétences.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Audit des processus RH actuels</li>
                    <li>Formation des équipes RH aux outils IA (génération de contenu, analyse de CVs)</li>
                    <li>Co-création de templates IA pour fiches de poste et communications RH</li>
                    <li>Accompagnement sur un cycle de recrutement complet</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 4 - Qualité & certification */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Qualité & certification</span>
                <span class="accordion-title">HAS, évaluation interne, procédures et audits</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Préparer les évaluations HAS, rédiger des procédures qualité conformes, analyser les non-conformités et produire des rapports d'audit détaillés.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA aide à structurer les auto-évaluations HAS, à rédiger des procédures conformes aux référentiels, à analyser les écarts de pratiques et à générer des plans d'action.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse du référentiel HAS applicable à votre structure</li>
                    <li>Formation à l'utilisation d'IA pour la rédaction de procédures</li>
                    <li>Co-création de templates IA pour auto-évaluations et procédures</li>
                    <li>Accompagnement sur un cycle de certification complet</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 5 - Soins & accompagnement */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Soins & accompagnement</span>
                <span class="accordion-title">Projets personnalisés, transmissions et coordination</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Rédiger des projets personnalisés de qualité, assurer des transmissions efficaces, coordonner les prises en charge pluridisciplinaires, tout en respectant la charge de travail des équipes.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA structure les projets personnalisés, synthétise les transmissions, aide à la rédaction de comptes rendus de réunions de coordination et génère des supports d'information pour les familles.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse des besoins spécifiques des équipes de soins</li>
                    <li>Formation adaptée aux professionnels de terrain</li>
                    <li>Co-création de templates IA pour projets personnalisés</li>
                    <li>Accompagnement respectueux des pratiques professionnelles</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 6 - Éducatif & pédagogie */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Éducatif & pédagogie</span>
                <span class="accordion-title">Supports FALC, activités adaptées et projets éducatifs</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Créer des supports pédagogiques adaptés (FALC, pictogrammes), concevoir des activités éducatives personnalisées et documenter les projets individuels.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA génère des supports en Facile à Lire et à Comprendre (FALC), propose des idées d'activités adaptées aux profils des usagers et aide à la rédaction de projets éducatifs.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Formation spécifique aux professionnels de l'éducatif</li>
                    <li>Co-création de prompts IA pour génération de supports FALC</li>
                    <li>Accompagnement sur la création d'activités adaptées</li>
                    <li>Respect des principes d'accessibilité et d'inclusion</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 7 - Direction des soins */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Direction des soins</span>
                <span class="accordion-title">Protocoles, référentiels et audits de pratiques</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Élaborer des protocoles de soins conformes aux bonnes pratiques, piloter les projets de soins, former les équipes et réaliser des audits de pratiques professionnelles.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA aide à la rédaction de protocoles basés sur les recommandations HAS, synthétise les retours d'audits, génère des supports de formation et facilite le suivi des pratiques.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse des besoins de la direction des soins</li>
                    <li>Formation à l'utilisation d'IA pour la documentation clinique</li>
                    <li>Co-création de templates IA pour protocoles et procédures</li>
                    <li>Accompagnement respectueux des référentiels métier</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 8 - Systèmes d'information */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Systèmes d'information</span>
                <span class="accordion-title">RGPD, HDS, interopérabilité et sécurité</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Assurer la conformité RGPD et HDS, gérer l'interopérabilité des systèmes, documenter les architectures techniques et piloter les projets de transformation numérique.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA aide à la rédaction de documentation technique, à l'analyse de conformité RGPD, à la génération de registres de traitement et à la préparation de cahiers des charges.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Audit de maturité IA du service informatique</li>
                    <li>Formation aux enjeux éthiques et réglementaires de l'IA en santé</li>
                    <li>Accompagnement sur la sélection de solutions IA conformes</li>
                    <li>Support sur l'intégration d'IA dans les SI existants</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 9 - Communication */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Communication</span>
                <span class="accordion-title">Valorisation de projets, communication interne et externe</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Valoriser les actions de l'établissement, produire des newsletters, gérer les réseaux sociaux, créer des supports de communication attractifs, tout en respectant l'identité de l'organisation.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA génère des contenus adaptés aux différents canaux (newsletters, posts LinkedIn, communiqués), crée des visuels, rédige des articles de valorisation et optimise les messages.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse de la stratégie de communication actuelle</li>
                    <li>Formation aux outils IA de création de contenu</li>
                    <li>Co-création d'une charte éditoriale IA</li>
                    <li>Accompagnement sur un cycle de communication complet</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Métier 10 - Achats & logistique */}
            <details class="accordion-item fade-in">
              <summary class="accordion-header">
                <span class="accordion-tag">Achats & logistique</span>
                <span class="accordion-title">Appels d'offres, gestion des contrats et optimisation</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="accordion-content">
                <div class="use-case-detail">
                  <h4>Challenge</h4>
                  <p>Rédiger des cahiers des charges complexes, analyser des offres fournisseurs, gérer les contrats et optimiser les coûts d'achat dans un contexte budgétaire contraint.</p>
                  
                  <h4>Bénéfice IA</h4>
                  <p>L'IA accélère la rédaction de cahiers des charges, synthétise les offres fournisseurs pour faciliter la comparaison, génère des tableaux d'analyse et aide à la négociation.</p>
                  
                  <h4>Notre approche</h4>
                  <ul>
                    <li>Analyse des processus achats actuels</li>
                    <li>Formation à l'utilisation d'IA pour la rédaction d'appels d'offres</li>
                    <li>Co-création de templates IA pour cahiers des charges</li>
                    <li>Accompagnement sur un cycle d'achat complet</li>
                  </ul>
                </div>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section class="section-cta-final">
        <div class="container">
          <div class="cta-content fade-in">
            <h2 class="cta-title">Un cas d'usage vous parle ?</h2>
            <p class="cta-subtitle">Échangeons sur vos besoins spécifiques</p>
            <a href="/contact" class="btn btn-primary btn-large">Prendre rendez-vous</a>
          </div>
        </div>
      </section>
    </>,
    { title: 'Cas d\'usage' }
  )
})

export default app
