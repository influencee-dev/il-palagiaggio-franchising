/* ==========================================================================
   CONFIGURAZIONE CENTRALIZZATA DELLE IMMAGINI
   Per sostituire un segnaposto basta copiare la foto definitiva in
   /public/images con il nome indicato in `src`. Se il file non esiste,
   la pagina mostra automaticamente il segnaposto con la sua etichetta.

   - focal: punto focale (CSS object-position) per desktop e, se serve, mobile
   - ratio: proporzione consigliata della foto da fornire (solo documentazione)
   ========================================================================== */

export interface LandingImage {
  src: string;
  /** Etichetta mostrata nel segnaposto finché la foto non è disponibile. */
  label: string;
  /** Testo alternativo per screen reader e SEO. */
  alt: string;
  focal?: string;
  focalMobile?: string;
  ratio: string;
  /** Lato lungo minimo consigliato, in pixel. */
  minWidth: number;
  /** Facoltativo: varianti responsive, es. "/images/hero-1200.jpg 1200w, /images/hero-2000.jpg 2000w". */
  srcSet?: string;
}

export const landingImages = {
  hero: {
    src: '/images/hero-bottega.jpg',
    label: 'Hero — Bottega Il Palagiaccio',
    alt: 'Interno di una Bottega Il Palagiaccio con il banco formaggi e salumi',
    focal: '50% 50%',
    focalMobile: '50% 62%',
    ratio: '4:5 (desktop) / 4:3 (mobile)',
    minWidth: 2000,
  },
  history: {
    src: '/images/storia-fattoria-mugello.jpg',
    label: 'Storia — Fattoria nel Mugello',
    alt: 'Veduta aerea della Fattoria Il Palagiaccio nel Mugello',
    focal: '50% 55%',
    ratio: '4:5',
    minWidth: 1600,
  },
  historyDetail: {
    src: '/images/storia-lavorazione-casearia.jpg',
    label: 'Storia — Lavorazione casearia',
    alt: 'Formaggi freschi a riposo sulle griglie del caseificio',
    focal: '50% 50%',
    ratio: '1:1',
    minWidth: 1000,
  },
  formatRetail: {
    src: '/images/format-vendita-dettaglio.jpg',
    label: 'Format — Interno bottega',
    alt: 'Banco della bottega con formaggi, salumi e specialità toscane',
    focal: '50% 50%',
    ratio: '4:5',
    minWidth: 1200,
  },
  formatTasting: {
    src: '/images/format-degustazioni.jpg',
    label: 'Degustazioni — Tagliere gastronomico',
    alt: 'Ricotta e proposte gastronomiche servite in tavola',
    focal: '50% 50%',
    ratio: '4:5',
    minWidth: 1200,
  },
  formatGifts: {
    src: '/images/format-confezioni-regalo.jpg',
    label: 'Format — Confezioni regalo e corporate',
    alt: 'Cesto regalo con formaggi, vini, pasta e conserve Il Palagiaccio',
    focal: '50% 50%',
    ratio: '4:5',
    minWidth: 1200,
  },
  products: {
    src: '/images/prodotti-formaggi.jpg',
    label: 'Prodotti — Formaggi Il Palagiaccio',
    alt: 'Selezione di formaggi Il Palagiaccio a diverse stagionature',
    focal: '62% 50%',
    ratio: '4:5',
    minWidth: 1600,
  },
  productsDairy: {
    src: '/images/prodotti-latticini.jpg',
    label: 'Prodotti — Latte, yogurt e ricotte',
    alt: 'Bottiglie di latte fresco e bidone del latte',
    focal: '50% 50%',
    ratio: '1:1',
    minWidth: 1000,
  },
  productsPantry: {
    src: '/images/prodotti-specialita-toscane.jpg',
    label: 'Prodotti — Specialità toscane',
    alt: 'Formaggi sott’olio e confezioni artigianali Il Palagiaccio',
    focal: '50% 50%',
    ratio: '2:3',
    minWidth: 1200,
  },
  formatCompact: {
    src: '/images/format-ridotto.jpg',
    label: 'Format ridotto — Bottega compatta',
    alt: 'Ingresso di una bottega Il Palagiaccio',
    focal: '50% 30%',
    ratio: '16:10',
    minWidth: 1200,
  },
  formatStandard: {
    src: '/images/format-standard.jpg',
    label: 'Format standard — Bottega con degustazione',
    alt: 'Cantina di stagionatura con forme di formaggio sugli scaffali',
    focal: '50% 50%',
    ratio: '16:10',
    minWidth: 1200,
  },
  support: {
    src: '/images/supporto-attivita-bottega.jpg',
    label: 'Supporto — Attività in bottega',
    alt: 'Addetta al banco con una forma di formaggio stagionato',
    focal: '50% 50%',
    ratio: '4:5',
    minWidth: 1600,
  },
  finalCta: {
    src: '/images/cta-franchising-mugello.jpg',
    label: 'CTA — Paesaggio del Mugello',
    alt: 'Colline e campi del Mugello al tramonto',
    focal: '50% 55%',
    ratio: '21:9',
    minWidth: 2400,
  },
} satisfies Record<string, LandingImage>;

export type LandingImageKey = keyof typeof landingImages;
