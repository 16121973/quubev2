# QUUBE·IA Santé

Cabinet indépendant de conseil et formation en IA pour les organisations de santé et médico-sociales.

## 🌐 URLs

- **Preview Sandbox:** https://3000-iykmf9q8i3qnvhy0ib05f-de59bda9.sandbox.novita.ai
- **Production:** (À configurer après déploiement Cloudflare Pages)

## 📋 Description

Site web vitrine pour QUUBE·IA Santé présentant :
- Services de conseil et formation IA pour le secteur santé
- Cas d'usage par métier (Direction, Services Administratifs, Cœur de métier)
- Présentation de l'entreprise et du fondateur Samuel Bottaro
- Formulaire de contact

## 🎨 Design

- **Charte graphique:** QUUBE 2024 (Guide des normes graphiques mai 2024)
- **Typographie:** Inter (fallback TWK Everett)
  - H1 jusqu'à 8rem (clamp responsive)
  - H2 jusqu'à 6rem
  - Font-weight 900 pour titres, 400 pour body
- **Palette couleurs:**
  - Noir `#000000`
  - Gris `#F1F1F1` (background principal)
  - Blanc `#FFFFFF`
  - Violet `#7E71C4`
  - Bleu `#95CFFF`
  - Vert `#37CAB0`
  - Jaune `#FCF474`
  - Rouge `#F96566`
- **Logo:** QUUBE·IA Santé (typographique avec point médian)
- **Formes géométriques:** Grandes formes en background (style Marie-Louise)
- **Inspiration:** Design basé sur quube.fr

## 📄 Pages

1. **Accueil** `/` - Hero, Services, Valeurs, Cas d'usage, CTA
2. **Nos services** `/services` - 3 offres détaillées, Méthodologie 5 phases
3. **Cas d'usage** `/cas-usage` - 3 accordions (Direction, Admin, Cœur métier)
4. **Qui sommes-nous** `/a-propos` - Fondateur, Vision 4 piliers, Méthodologie, 10 secteurs
5. **Contact** `/contact` - Formulaire + Coordonnées

## 🛠️ Stack Technique

- **Framework:** Hono v4 (Cloudflare Workers/Pages)
- **Runtime:** Cloudflare Workers
- **Build:** Vite v6
- **Langage:** TypeScript
- **CSS:** Vanilla CSS (1115 lignes)
- **Package Manager:** npm
- **Déploiement:** Cloudflare Pages

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/VOTRE-USERNAME/webapp.git
cd webapp

# Installer les dépendances
npm install

# Lancer en développement local
npm run dev

# Build pour production
npm run build
```

## 🚀 Déploiement

### **Local (développement)**

```bash
# Build
npm run build

# Lancer avec PM2 (sandbox)
pm2 start ecosystem.config.cjs

# Ou avec Wrangler
npm run dev:sandbox
```

### **Cloudflare Pages (production)**

```bash
# 1. Créer le projet Cloudflare
npx wrangler pages project create webapp --production-branch main

# 2. Build
npm run build

# 3. Déployer
npm run deploy:prod
# ou
npx wrangler pages deploy dist --project-name webapp
```

## 📊 Statistiques

- **Fichiers source:** 
  - `src/index.tsx` : 52 KB (contenu des pages)
  - `src/renderer.tsx` : 4 KB (layout général)
  - `public/static/styles.css` : 21 KB (1115 lignes)
  - `public/static/app.js` : 7.6 KB
- **Bundle produit:** 95.35 kB (dist/_worker.js)
- **Build time:** ~1 seconde
- **Git commits:** 29
- **Pages:** 5
- **Responsive:** Mobile/Tablet/Desktop ✓

## 📝 Scripts

```json
{
  "dev": "vite",
  "dev:sandbox": "wrangler pages dev dist --ip 0.0.0.0 --port 3000",
  "build": "vite build",
  "preview": "wrangler pages dev dist",
  "deploy": "npm run build && wrangler pages deploy dist",
  "deploy:prod": "npm run build && wrangler pages deploy dist --project-name webapp",
  "cf-typegen": "wrangler types --env-interface CloudflareBindings"
}
```

## 🎯 Fonctionnalités

- ✅ Design QUUBE.FR avec grandes formes géométriques
- ✅ Typographie massive responsive (H1 8rem, H2 6rem)
- ✅ Palette QUUBE 2024 officielle
- ✅ Logo typographique QUUBE·IA Santé (point médian)
- ✅ Navigation fixe en haut
- ✅ 5 pages fonctionnelles
- ✅ Accordions HTML5 natifs (Cas d'usage)
- ✅ Animations fade-in progressives
- ✅ Hover effects sur cards et boutons
- ✅ Footer 3 colonnes avec réseaux sociaux
- ✅ Formulaire de contact
- ✅ 100% responsive

## 📚 Documentation

- **Charte graphique:** `QUUBE_charte.pdf` (Hub)
- **Logo officiel:** `QUUBE_Logo_Noir@2x.png` (Hub)
- **Symbole:** `QUUBE_symbole_Noir@2x.png` (Hub)

## 🔗 Contact

- **Email:** contact@quube.fr
- **Adresse:** 10 rue du Colisée, 75008 Paris
- **LinkedIn:** https://www.linkedin.com/company/quube-ia-sante

## 📅 Historique

- **17 février 2026** - Nouveau logo QUUBE·IA Santé avec point médian
- **16 février 2026** - Page Cas d'usage réparée (accordions natifs)
- **16 février 2026** - Design inspiré quube.fr appliqué
- **16 février 2026** - Pages intérieures premium
- **16 février 2026** - Intégration charte graphique QUUBE 2024

## 📄 Licence

© 2026 QUUBE·IA Santé. Tous droits réservés.

---

**Version:** 1.0.0  
**Dernière mise à jour:** 17 février 2026  
**Status:** ✅ Production Ready
