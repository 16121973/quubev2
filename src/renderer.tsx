import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | QUUBE·IA Santé` : 'QUUBE·IA Santé'}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body class="site-container">
        {/* Header - Charte QUUBE officielle */}
        <header>
          <div class="container">
            <a href="/" class="logo">
              <span class="logo-main">QUUBE·IA</span>
              <span class="logo-sub">Santé</span>
            </a>
            <nav>
              <a href="/">Accueil</a>
              <a href="/services">Nos services</a>
              <a href="/cas-usage">Cas d'usage</a>
              <a href="/a-propos">Qui sommes-nous</a>
              <a href="/contact" class="btn-contact">Contact</a>
            </nav>
            <button class="mobile-menu-toggle" aria-label="Menu">☰</button>
          </div>
        </header>

        {/* Contenu principal */}
        <main>
          {children}
        </main>

        {/* Footer - Charte QUUBE officielle */}
        <footer>
          <div class="container">
            <div class="footer-content">
              {/* Colonne 1 - Identité */}
              <div class="footer-section">
                <h4>QUUBE·IA Santé</h4>
                <p>
                  Cabinet indépendant de conseil et formation en IA pour les organisations de santé et médico-sociales.
                </p>
                <p>
                  <strong>10 rue du Colisée</strong><br />
                  75008 Paris
                </p>
                <p>
                  <a href="mailto:contact@quube.fr">contact@quube.fr</a>
                </p>
              </div>

              {/* Colonne 2 - Navigation */}
              <div class="footer-section">
                <h4>Navigation</h4>
                <a href="/">Accueil</a>
                <a href="/services">Nos services</a>
                <a href="/cas-usage">Cas d'usage</a>
                <a href="/a-propos">Qui sommes-nous</a>
                <a href="/contact">Contact</a>
              </div>

              {/* Colonne 3 - Contact & Social */}
              <div class="footer-section">
                <h4>Contactez-nous</h4>
                <p>
                  Échangeons sur vos projets IA en santé.
                </p>
                <a href="/contact" class="btn-primary" style="margin-top: 16px; display: inline-block;">Prendre rendez-vous</a>
                <div class="footer-social">
                  <a href="https://www.linkedin.com/company/quube-ia-sante" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div class="footer-bottom">
              © {new Date().getFullYear()} QUUBE·IA Santé. Tous droits réservés.
            </div>
          </div>
        </footer>

        {/* JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
