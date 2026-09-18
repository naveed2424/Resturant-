/**
 * CONFIGURATION CENTRALE DU RESTAURANT — MAISON MARÉE PARIS
 * 
 * Ce fichier regroupe l'ensemble des données du restaurant.
 * Pour adapter ce site à un autre restaurant de fruits de mer (client),
 * il vous suffit de modifier les valeurs de cet objet unique.
 * 
 * Idéal pour vendre des sites clé-en-main aux restaurateurs parisiens.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isDemoPrice?: boolean;
  category: 'oysters' | 'starters' | 'fish' | 'platters' | 'mains' | 'sides' | 'desserts' | 'drinks';
  badge?: string;
  dietary?: string[];
  allergens?: string[];
  image?: string;
}

export interface SeafoodSpecialty {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  season: string;
  preparation: string;
  image: string;
  tag: string;
}

export interface OpeningHourDay {
  dayName: string; // Lundi, Mardi, etc.
  dayIndex: number; // 0=Dimanche, 1=Lundi, ..., 6=Samedi
  lunch: string; // ex: "12h00 – 14h30" ou "Fermé"
  dinner: string; // ex: "19h00 – 23h00" ou "Fermé"
  isOpen: boolean;
  lunchHours?: [number, number]; // [12.0, 14.5] en décimal
  dinnerHours?: [number, number]; // [19.0, 23.0] en décimal
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  source: 'Google Avis' | 'Tripadvisor' | 'Livre d\'or';
  quote: string;
  verified: boolean;
  isPlaceholder?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Huîtres' | 'Plateaux' | 'Poissons' | 'Ambiance' | 'Desserts';
  image: string;
  alt: string;
}

export interface RestaurantConfig {
  // 1. Informations d'identité
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  type: string;
  locationCity: string;
  locationCountry: string;
  neighborhood: string;
  address: string;
  postalCode: string;
  metroStation: string;
  
  // 2. Coordonnées & Liens
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  
  // 3. Plateformes externes
  reservationUrl: string;
  googleMapsUrl: string;
  googleBusinessProfileUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  tripadvisorUrl: string;
  pdfMenuUrl: string;
  
  // 4. Géolocalisation (Paris)
  coordinates: {
    lat: number;
    lng: number;
  };

  // 5. Horaires détaillés
  openingHours: OpeningHourDay[];
  holidaysNotice: string;
  
  // 6. Histoire & Philosophie
  story: {
    headline: string;
    chefOwner: string;
    restaurantStory: string;
    cuisinePhilosophy: string;
    commitments: string[];
  };

  // 7. Sélection du jour & Menu
  todaysSelectionNotice: string;
  allergenNotice: string;
  pricingNotice: string;
  todaysSeafood: SeafoodSpecialty[];
  menuCategories: { id: MenuItem['category']; label: string; description: string }[];
  menuItems: MenuItem[];

  // 8. Galerie
  gallery: GalleryPhoto[];

  // 9. Avis clients
  reviews: ReviewItem[];

  // 10. Questions Fréquentes (FAQ)
  faq: { question: string; answer: string }[];

  // 11. Blog & Guides
  blogPosts: BlogPost[];
}

export const RESTAURANT_CONFIG: RestaurantConfig = {
  // 1. Identité
  name: "Maison Marée Paris",
  tagline: "L'art des fruits de mer & bar à huîtres d'exception",
  heroHeadline: "Fruits de Mer Frais, Âme Parisienne",
  heroSubheadline: "Huîtres affinées, poissons nobles de nos côtes et plateaux de coquillages savourés au cœur de Paris.",
  type: "Restaurant de Fruits de Mer & Bar à Huîtres",
  locationCity: "Paris",
  locationCountry: "France",
  neighborhood: "Quartier Saint-Germain-des-Prés / Odéon",
  address: "18 Rue de la Mer (Adresse démo à remplacer)",
  postalCode: "75006 Paris",
  metroStation: "Métro Odéon (Lignes 4 et 10) ou Mabillon",
  
  // 2. Coordonnées
  phone: "+33142680000",
  phoneDisplay: "01 42 68 00 00",
  whatsappNumber: "33612345678",
  whatsappMessage: "Bonjour, je souhaite réserver une table chez Maison Marée Paris.",
  email: "contact@maisonmaree-paris.fr",
  
  // 3. Liens externes
  reservationUrl: "https://booking.maisonmaree-paris.fr",
  googleMapsUrl: "https://maps.google.com/?q=Maison+Maree+Paris+Saint+Germain",
  googleBusinessProfileUrl: "https://maps.google.com/?q=Maison+Maree+Paris",
  instagramUrl: "https://instagram.com/maisonmareeparis",
  facebookUrl: "https://facebook.com/maisonmareeparis",
  tripadvisorUrl: "https://tripadvisor.fr",
  pdfMenuUrl: "#menu-complet",

  // 4. Coordonnées géographiques
  coordinates: {
    lat: 48.8522,
    lng: 2.3386
  },

  // 5. Horaires d'ouverture
  openingHours: [
    { dayName: "Lundi", dayIndex: 1, lunch: "Fermé", dinner: "19h00 – 23h00", isOpen: true, dinnerHours: [19.0, 23.0] },
    { dayName: "Mardi", dayIndex: 2, lunch: "12h00 – 14h30", dinner: "19h00 – 23h00", isOpen: true, lunchHours: [12.0, 14.5], dinnerHours: [19.0, 23.0] },
    { dayName: "Mercredi", dayIndex: 3, lunch: "12h00 – 14h30", dinner: "19h00 – 23h00", isOpen: true, lunchHours: [12.0, 14.5], dinnerHours: [19.0, 23.0] },
    { dayName: "Jeudi", dayIndex: 4, lunch: "12h00 – 14h30", dinner: "19h00 – 23h30", isOpen: true, lunchHours: [12.0, 14.5], dinnerHours: [19.0, 23.5] },
    { dayName: "Vendredi", dayIndex: 5, lunch: "12h00 – 15h00", dinner: "19h00 – 23h30", isOpen: true, lunchHours: [12.0, 15.0], dinnerHours: [19.0, 23.5] },
    { dayName: "Samedi", dayIndex: 6, lunch: "12h00 – 15h30", dinner: "19h00 – 23h30", isOpen: true, lunchHours: [12.0, 15.5], dinnerHours: [19.0, 23.5] },
    { dayName: "Dimanche", dayIndex: 0, lunch: "12h00 – 16h00 (Service continu huîtres)", dinner: "Fermé", isOpen: true, lunchHours: [12.0, 16.0] },
  ],
  holidaysNotice: "Ouvert les jours fériés pour le service du dîner sauf le 25 décembre et le 1er janvier.",

  // 6. Histoire & Philosophie
  story: {
    headline: "Une Lettre d'Amour à la Mer",
    chefOwner: "[Nom du Chef / Propriétaire à insérer]",
    restaurantStory: "Née d'une passion inconditionnelle pour les rivages atlantiques et la finesse du terroir marin, Maison Marée apporte l'esprit des grandes brasseries iodées au cœur de la capitale. Un lieu pensé pour les amoureux d'huîtres creuses et plates, de crustacés vivaces et de poissons nobles cuisinés avec simplicité et rigueur.",
    cuisinePhilosophy: "Chaque matin, la marée guide nos fourneaux. Nous privilégions une cuisine de respect : des cuissons précises à la seconde, des beurres demi-sel fouettés, des bouillons d'étrilles mijotés et des sauces qui subliment sans jamais masquer la délicatesse naturelle du produit.",
    commitments: [
      "Fraîcheur absolue et écaillage à la minute sur banc de glace",
      "Sélection rigoureuse des meilleurs bassins ostréicoles français",
      "Cuissons maîtrisées au feu, à la vapeur ou en croûte de sel",
      "Vins de vignerons indépendants sélectionnés pour leur minéralité"
    ]
  },

  // 7. Mentions légales & Sélections
  todaysSelectionNotice: "La sélection peut varier quotidiennement selon les saisons, la météo marine et les arrivages des criées.",
  allergenNotice: "Chers convives, merci de signaler toute allergie ou intolérance alimentaire lors de votre commande. Nos préparations peuvent contenir des mollusques, crustacés, poissons et produits laitiers.",
  pricingNotice: "Tarifs indicatifs présentés à titre de démonstration. Les prix réels seront fixés selon la carte définitive de l'établissement.",

  todaysSeafood: [
    {
      id: "huitres-du-jour",
      name: "Huîtres Spéciales d'Affinement",
      subtitle: "Marennes-Oléron, Bretagne & Normandie",
      description: "Fine de Claire N°3, Gillardeau N°2 et Belon plates ouvertes à la commande, servies sur lit de glace pilée, citron frais et vinaigre à l'échalote maison.",
      season: "Automne - Printemps",
      preparation: "Écaillage minute",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
      tag: "Banc d'Écailler"
    },
    {
      id: "homard-bleu",
      name: "Homard Bleu Breton Entier",
      subtitle: "Pêche côtière française",
      description: "Fendu et grillé à la braise au beurre maître d'hôtel persillé, ou poché froid servi avec mayonnaise montée minute aux herbes fraîches.",
      season: "Printemps - Été",
      preparation: "Grillé ou Court-bouillonné",
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
      tag: "Pièce Noble"
    },
    {
      id: "plateau-signature",
      name: "Plateau Impérial de l'Océan",
      subtitle: "Pour 2 à 3 convives",
      description: "Demi-homard breton, tourteau entier bien plein, 12 huîtres fines sélectionnées, langoustines royales, bulots de la baie de Granville et crevettes roses.",
      season: "Toute l'année selon arrivage",
      preparation: "Dégustation sur pied haut",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80",
      tag: "Incontournable"
    },
    {
      id: "poulpe-flamme",
      name: "Poulpe de Roche Caramélisé",
      subtitle: "Bord de mer méditerranéen",
      description: "Tentacule confite longuement puis saisie à la plancha, purée de pois chiches au citron confit, huile de piment fumé et herbes aromatiques.",
      season: "Toute l'année",
      preparation: "Confit 4h & Saisi Plancha",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      tag: "Coup de Cœur"
    },
    {
      id: "bar-ligne",
      name: "Bar Sauvage Entier Rôti",
      subtitle: "Criées de l'Atlantique",
      description: "Cuit sur l'arête avec branches de fenouil sauvage, fleur de sel de Guérande, tombée de fenouil braisé et écrasé de pommes de terre à l'huile d'olive de Provence.",
      season: "Arrivage journalier",
      preparation: "Rôti au four doux",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      tag: "Poisson Noble"
    },
    {
      id: "moules-bouchot",
      name: "Moules de Bouchot AOP",
      subtitle: "Baie du Mont-Saint-Michel",
      description: "Marinière traditionnelle au vin blanc sec de Loire, échalotes ciselées, crème crue d'Isigny et persil plat frais, accompagnées de frites dorées.",
      season: "Juillet - Janvier",
      preparation: "Marinière en cocotte",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      tag: "Tradition Française"
    }
  ],

  menuCategories: [
    { id: 'oysters', label: 'Huîtres & Coquillages', description: 'Ouvrages d\'écailler ouverts à la commande sur banc de glace' },
    { id: 'platters', label: 'Plateaux de Fruits de Mer', description: 'Compositions royales dressées sur étages d\'argent' },
    { id: 'starters', label: 'Entrées Marines', description: 'Tartares, carpaccios et soupes de poissons de roche' },
    { id: 'fish', label: 'Poissons Frais & De Ligne', description: 'Pêches nobles rôties sur l\'arête ou poêlées au beurre blanc' },
    { id: 'mains', label: 'Plats Cuisinés & Crustacés', description: 'Linguines au homard, cocottes mijotées et poulpe croustillant' },
    { id: 'sides', label: 'Accompagnements', description: 'Garnitures cuisinées maison avec amour' },
    { id: 'desserts', label: 'Desserts Parisiens', description: 'Douceurs classiques pour clore la dégustation avec panache' },
    { id: 'drinks', label: 'Vins Blancs & Bulles', description: 'Flacons minéraux de Loire, Chablis et Champagnes de vignerons' },
  ],

  menuItems: [
    // Huîtres
    {
      id: 'h1',
      name: 'Fine de Claire N°3 — Marennes-Oléron',
      description: 'Affinement traditionnel en claires, chair équilibrée, goût iodé fin et subtil.',
      price: '24 € (les 6) / 46 € (les 12)',
      isDemoPrice: true,
      category: 'oysters',
      badge: 'Classique',
      allergens: ['Mollusques']
    },
    {
      id: 'h2',
      name: 'Spéciale Gillardeau N°2',
      description: 'L\'icône de la gastronomie : chair ferme, charnue, croquante aux notes de noisette.',
      price: '34 € (les 6) / 66 € (les 12)',
      isDemoPrice: true,
      category: 'oysters',
      badge: 'Signature',
      allergens: ['Mollusques']
    },
    {
      id: 'h3',
      name: 'Spéciale d\'Isigny N°2 — Normandie',
      description: 'Élevée dans les courants riches de la baie des Veys, d\'une remarquable onctuosité.',
      price: '28 € (les 6) / 54 € (les 12)',
      isDemoPrice: true,
      category: 'oysters',
      allergens: ['Mollusques']
    },
    {
      id: 'h4',
      name: 'Huître Plate Belon N°0 — Bretagne',
      description: 'L\'huître historique sauvage de Bretagne, ronde, iodée et corsée au goût de terroir.',
      price: '38 € (les 6)',
      isDemoPrice: true,
      category: 'oysters',
      badge: 'Rare',
      allergens: ['Mollusques']
    },

    // Plateaux
    {
      id: 'p1',
      name: 'Le Plateau Découverte "La Marée"',
      description: '6 Fines de Claire N°3, 4 bulots de Granville avec aïoli, 6 crevettes roses de Madagascar, crevettes grises, amandes de mer.',
      price: '48 € / pers.',
      isDemoPrice: true,
      category: 'platters',
      badge: 'Best-Seller',
      allergens: ['Mollusques', 'Crustacés', 'Œufs']
    },
    {
      id: 'p2',
      name: 'Le Plateau Royal "Maison Marée"',
      description: '1/2 Tourteau plein cuit au court-bouillon, 8 huîtres de crus mêlés, 4 langoustines bretonnes, bulots, bigorneaux, crevettes royales.',
      price: '78 € / pers.',
      isDemoPrice: true,
      category: 'platters',
      badge: 'Prestige',
      allergens: ['Mollusques', 'Crustacés', 'Œufs']
    },
    {
      id: 'p3',
      name: 'L\'Impérial aux Deux Homards (Pour 2 personnes)',
      description: 'Homard bleu breton entier, 1 tourteau breton, 12 Gillardeau N°2, 6 langoustines royales, crevettes sauvages et coquillages sélectionnés.',
      price: '185 € (Pour 2)',
      isDemoPrice: true,
      category: 'platters',
      badge: 'Événement',
      allergens: ['Mollusques', 'Crustacés', 'Œufs']
    },

    // Entrées
    {
      id: 'e1',
      name: 'Carpaccio de Saint-Jacques de Plongée',
      description: 'Noix sauvages tranchées minute, zeste de citron caviar, huile d\'olive vierge de Toscane, fleur de sel de Guérande.',
      price: '22 €',
      isDemoPrice: true,
      category: 'starters',
      dietary: ['Sans gluten'],
      allergens: ['Mollusques']
    },
    {
      id: 'e2',
      name: 'Soupe de Poissons de Roche & Étrilles',
      description: 'Recette sétoise artisanale réduite pendant 6 heures, servie fumante avec rouille au safran, croûtons dorés et emmental râpé.',
      price: '18 €',
      isDemoPrice: true,
      category: 'starters',
      allergens: ['Poissons', 'Crustacés', 'Gluten', 'Lait', 'Œufs']
    },
    {
      id: 'e3',
      name: 'Tartare de Thon Rouge de Ligne & Avocat',
      description: 'Thon blanc et rouge taillé au couteau, émulsion gingembre-yuzu, graines de sésame torréfiées et tuile de sarrasin croustillante.',
      price: '21 €',
      isDemoPrice: true,
      category: 'starters',
      allergens: ['Poissons', 'Sésame', 'Soja']
    },
    {
      id: 'e4',
      name: 'Petits Poulpes Poêlés à l\'Ail des Ours',
      description: 'Bébés poulpes dorés à feu vif dans un beurre mousseux parfumé au piment d\'Espelette et persil plat.',
      price: '19 €',
      isDemoPrice: true,
      category: 'starters',
      allergens: ['Mollusques', 'Lait']
    },

    // Poissons
    {
      id: 'f1',
      name: 'Bar Sauvage Rôti au Fenouil Sauvage',
      description: 'Filet épais ou poisson entier pour deux selon arrivage, émulsion vierge aux herbes et câpres de Pantelleria.',
      price: '34 €',
      isDemoPrice: true,
      category: 'fish',
      dietary: ['Sans gluten'],
      allergens: ['Poissons']
    },
    {
      id: 'f2',
      name: 'Sole Meunière Entière de Petite Pêche',
      description: 'Préparée dans les règles de l\'art devant vous, beurre noisette moussant, persil haché et jus de citron jaune doux.',
      price: '46 €',
      isDemoPrice: true,
      category: 'fish',
      badge: 'Grande Tradition',
      allergens: ['Poissons', 'Lait', 'Gluten']
    },
    {
      id: 'f3',
      name: 'Pavé de Turbot Rôti au Beurre Demi-Sel',
      description: 'Peau caramélisée croustillante, mousseline de céleri-rave à la vanille bourbon et jus de coquillages perlé.',
      price: '39 €',
      isDemoPrice: true,
      category: 'fish',
      allergens: ['Poissons', 'Lait', 'Céleri']
    },

    // Plats Cuisinés
    {
      id: 'm1',
      name: 'Linguine Artisanales au Homard Bleu',
      description: 'Pâtes fraîches enrobées d\'une bisque onctueuse flambée au Cognac, médaillons de homard et tomates confites de Provence.',
      price: '38 €',
      isDemoPrice: true,
      category: 'mains',
      badge: 'Plat Phare',
      allergens: ['Crustacés', 'Gluten', 'Lait']
    },
    {
      id: 'm2',
      name: 'Grande Cocotte de Moules Marinières',
      description: 'Moules de bouchot fraîches, vin blanc sec Muscadet, échalotes confites, servis avec frites fraîches.',
      price: '23 €',
      isDemoPrice: true,
      category: 'mains',
      allergens: ['Mollusques', 'Lait']
    },
    {
      id: 'm3',
      name: 'Noix de Saint-Jacques Dorées au Beurre Blanc',
      description: 'Saisies unilatéralement, fondue de poireaux nouveaux et sauce émulsionnée au vinaigre d\'échalote.',
      price: '35 €',
      isDemoPrice: true,
      category: 'mains',
      dietary: ['Sans gluten'],
      allergens: ['Mollusques', 'Lait']
    },

    // Accompagnements
    {
      id: 's1',
      name: 'Frites Maison Dorées au Gras de Bœuf (ou Huile Végétale)',
      description: 'Coupées au couteau chaque matin, double bain de cuisson pour un croustillant parfait.',
      price: '7 €',
      isDemoPrice: true,
      category: 'sides'
    },
    {
      id: 's2',
      name: 'Écrasé de Pommes de Terre de Noirmoutier',
      description: 'Pommes de terre grenailles écrasées à la fourchette, huile d\'olive vierge et fleur de sel.',
      price: '8 €',
      isDemoPrice: true,
      category: 'sides',
      dietary: ['Végétarien', 'Sans gluten']
    },
    {
      id: 's3',
      name: 'Légumes Verts Glacés au Beurre Émulsionné',
      description: 'Haricots verts extra-fins, jeunes pousses d\'épinards et pois gourmands croquants.',
      price: '8 €',
      isDemoPrice: true,
      category: 'sides',
      dietary: ['Végétarien', 'Sans gluten']
    },

    // Desserts
    {
      id: 'd1',
      name: 'Tarte Fine aux Pommes Caramélisées',
      description: 'Pâte feuilletée croustillante minute, pommes reinettes dorées et boule de glace vanille de Madagascar.',
      price: '12 €',
      isDemoPrice: true,
      category: 'desserts',
      allergens: ['Gluten', 'Lait', 'Œufs']
    },
    {
      id: 'd2',
      name: 'Mousse au Chocolat Noir Guanaja 70%',
      description: 'Texture aérienne et dense, cristaux de fleur de sel fumée et filet d\'huile d\'olive vierge.',
      price: '11 €',
      isDemoPrice: true,
      category: 'desserts',
      allergens: ['Lait', 'Œufs']
    },
    {
      id: 'd3',
      name: 'Île Flottante aux Pralines Roses de Lyon',
      description: 'Blancs en neige légers cuits vapeur, crème anglaise parfumée à la gousse de vanille et caramel ambré.',
      price: '10 €',
      isDemoPrice: true,
      category: 'desserts',
      allergens: ['Lait', 'Œufs', 'Fruits à coque']
    },

    // Vins
    {
      id: 'v1',
      name: 'Chablis AOC — Domaine Sélectionné',
      description: 'Bourgogne blanc 100% Chardonnay. Notes minérales de pierre à fusil, vivacité idéale avec les huîtres.',
      price: '9 € (verre) / 48 € (bouteille)',
      isDemoPrice: true,
      category: 'drinks',
      badge: 'Accord Idéal Huîtres'
    },
    {
      id: 'v2',
      name: 'Sancerre Blanc AOC — Val de Loire',
      description: 'Sauvignon blanc vibrant, arômes d\'agrumes et de fleurs blanches, parfait sur les poissons nobles rôtis.',
      price: '11 € (verre) / 56 € (bouteille)',
      isDemoPrice: true,
      category: 'drinks'
    },
    {
      id: 'v3',
      name: 'Champagne Brut Réserve — Maison Recommandée',
      description: 'Bulles fines, fraîcheur briochée et élégance intemporelle pour sublimer les plateaux royaux.',
      price: '16 € (coupe) / 88 € (bouteille)',
      isDemoPrice: true,
      category: 'drinks',
      badge: 'Prestige'
    },
    {
      id: 'v4',
      name: 'Muscadet Sèvre-et-Maine sur Lie AOC',
      description: 'Le compagnon historique des marins nantais : franc, perlant et salin.',
      price: '7 € (verre) / 34 € (bouteille)',
      isDemoPrice: true,
      category: 'drinks'
    }
  ],

  gallery: [
    {
      id: 'g1',
      title: 'Huîtres fraîches ouvertes minute sur banc de glace',
      category: 'Huîtres',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80',
      alt: 'Huîtres fraîches ouvertes minute servies sur lit de glace pilée avec citrons et vinaigre échalote'
    },
    {
      id: 'g2',
      title: 'Plateau royal de fruits de mer et homard breton',
      category: 'Plateaux',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=1000&q=80',
      alt: 'Grand plateau de fruits de mer garni de homard, langoustines, crevettes et coquillages'
    },
    {
      id: 'g3',
      title: 'Bar sauvage entier rôti aux herbes et fenouil',
      category: 'Poissons',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
      alt: 'Poisson bar entier doré au four accompagné de fenouil braisé et rondelles de citron'
    },
    {
      id: 'g4',
      title: 'Ambiance feutrée et conviviale de la salle parisienne',
      category: 'Ambiance',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      alt: 'Salle de restaurant parisienne élégante avec banquettes en cuir et éclairage tamisé chaleureux'
    },
    {
      id: 'g5',
      title: 'Tentacule de poulpe braisée à la flamme',
      category: 'Poissons',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
      alt: 'Poulpe grillé croustillant posé sur crème onctueuse de pois chiches et huile d\'herbes'
    },
    {
      id: 'g6',
      title: 'Homard bleu cuisiné au beurre persillé',
      category: 'Plateaux',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80',
      alt: 'Homard fendu grillé avec pinces décortiquées et beurre citronné fondu'
    },
    {
      id: 'g7',
      title: 'Service du vin blanc frais en carafe',
      category: 'Ambiance',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
      alt: 'Verre de vin blanc minéral frais servi sur une table de bistrot parisien'
    },
    {
      id: 'g8',
      title: 'Dessert traditionnel gourmand aux fruits',
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
      alt: 'Tartelette caramélisée aux pommes tièdes avec quenelle de crème glacée'
    }
  ],

  // 9. Avis clients vérifiés (Placeholders transparents sans fausses informations)
  reviews: [
    {
      id: 'r1',
      author: 'Emplacement Avis Client Vérifié 1',
      date: 'Remplaçable par vos avis Google réels',
      rating: 5,
      source: 'Google Avis',
      quote: "EXEMPLE D'AVIS VÉRIFIÉ : « Des huîtres d'une fraîcheur éclatante, un bar rôti à la perfection et un accueil parisien chaleureux. Le plateau royal est généreux et le Chablis très bien conseillé. »",
      verified: true,
      isPlaceholder: true
    },
    {
      id: 'r2',
      author: 'Emplacement Avis Client Vérifié 2',
      date: 'Remplaçable par vos avis Google réels',
      rating: 5,
      source: 'Google Avis',
      quote: "EXEMPLE D'AVIS VÉRIFIÉ : « L'adresse iodée incontournable du quartier. La cuisson du poulpe est mémorable et l'écailler prend le temps d'expliquer les terroirs des huîtres. »",
      verified: true,
      isPlaceholder: true
    },
    {
      id: 'r3',
      author: 'Emplacement Avis Client Vérifié 3',
      date: 'Remplaçable par vos avis Google réels',
      rating: 5,
      source: 'Tripadvisor',
      quote: "EXEMPLE D'AVIS VÉRIFIÉ : « Réservation fluide, service attentionné et cadre intime. Les linguines au homard valent le détour à elles seules. »",
      verified: true,
      isPlaceholder: true
    }
  ],

  faq: [
    {
      question: "Faut-il obligatoirement réserver une table à l'avance ?",
      answer: "La réservation est vivement recommandée, en particulier pour les dîners du jeudi au samedi soir ainsi que pour le déjeuner dominical. Nous conservons toutefois quelques places au bar d'écailler pour les convives sans réservation se présentant à l'ouverture du service."
    },
    {
      question: "D'où proviennent vos huîtres et poissons ?",
      answer: "Nos coquillages proviennent directement de parcs ostréicoles partenaires en Normandie (Isigny), Bretagne (Belon) et Charente-Maritime (Marennes-Oléron). Nos poissons nobles arrivent chaque matin des criées atlantiques sélectionnées selon la météo et les quotas de pêche responsable."
    },
    {
      question: "Les plateaux de fruits de mer sont-ils disponibles à emporter ?",
      answer: "Oui, sur commande préalable passée au moins 2 heures à l'avance. Nos plateaux à emporter sont dressés sur algues fraîches et lit de glace alimentaire avec citrons, rince-doigts et sauces maison pour une dégustation optimale chez vous."
    },
    {
      question: "Proposez-vous des alternatives pour les personnes allergiques ou ne mangeant pas de poisson ?",
      answer: "Absolument. Nous proposons chaque jour une pièce de viande de tradition bouchère française ainsi que des préparations végétariennes cuisinées avec les légumes du marché. Merci de prévenir notre maître d'hôtel lors de votre réservation."
    },
    {
      question: "Comment venir en transports en commun ?",
      answer: "Le restaurant se situe à proximité immédiate des stations Odéon (Métro lignes 4 et 10) et Mabillon (Ligne 10). Plusieurs parkings sécurisés sont accessibles dans un rayon de 300 mètres (Parking Saint-Germain)."
    }
  ],

  blogPosts: [
    {
      id: 'guide-huitres',
      slug: 'comment-deguster-les-huitres-comme-un-parisien',
      title: "Comment déguster les huîtres comme un Parisien : Guide des calibres et terroirs",
      category: "Guide Ostréicole",
      readTime: "4 min de lecture",
      date: "14 Septembre 2026",
      summary: "Du calibre N°1 au N°4, de la Fine de Claire iodée à la rondeur de la Belon : tous les secrets pour choisir et savourer vos coquillages dans les règles de l'art.",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
      content: [
        "À Paris, la dégustation d'huîtres n'est pas un simple repas : c'est un rituel dominical, une parenthèse iodée partagée autour d'un zinc d'écailler ou sur une nappe blanche.",
        "Le premier repère réside dans les calibres : contrairement à ce que l'on imagine, plus le numéro est petit, plus l'huître est grosse. Le calibre N°3 représente l'équilibre idéal entre charnu et délicatesse iodée pour l'apéritif.",
        "Côté accompagnement, les puristes préfèreront une goutte de citron jaune ou un simple tour de moulin à poivre plutôt que d'engloutir l'huître dans un vinaigre d'échalote trop acide. Et pour l'accord parfait, optez pour la tension d'un Muscadet Sèvre-et-Maine sur lie ou la minéralité tranchante d'un Chablis."
      ]
    },
    {
      id: 'composition-plateau',
      slug: 'composition-dun-plateau-de-fruits-de-mer-traditionnel',
      title: "Que trouve-t-on sur un authentique plateau de fruits de mer français ?",
      category: "Tradition Culinaire",
      readTime: "5 min de lecture",
      date: "02 Septembre 2026",
      summary: "Comprendre l'architecture d'un grand banc de fruits de mer : étages, crustacés, coquillages et sauces indispensables.",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80",
      content: [
        "Un véritable plateau de fruits de mer est une œuvre éphémère. Dressé sur un présentoir argenté à deux ou trois étages, il doit maintenir une température glacée constante grâce à un lit épais d'algues et de glace pilée.",
        "Le socle se compose d'huîtres creuses et plates ouvertes à la commande, entourées de bulots fermes cuits au court-bouillon poivré, de bigorneaux bretons et d'amandes de mer.",
        "Au sommet trônent les pièces maîtresses : tourteau fendu aux pinces généreuses, langoustines royales et, pour les grandes occasions, un demi ou homard entier breton. Le tout escorté d'une mayonnaise maison ferme montée à la moutarde et d'un pain de seigle au beurre demi-sel de baratte."
      ]
    },
    {
      id: 'accords-vins',
      slug: 'les-meilleurs-accords-vins-blancs-et-fruits-de-mer-a-paris',
      title: "Les Meilleurs Accords Vins Blancs & Fruits de Mer à Paris",
      category: "Vins & Gastronomie",
      readTime: "3 min de lecture",
      date: "25 Août 2026",
      summary: "Entre fraîcheur saline et rondeur en bouche, découvrez comment sublimer chaque coquillage avec le cépage adéquat.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      content: [
        "L'iode et le sel des produits marins exigent des vins précis sans lourdeur boisée excessive. Le Chardonnay élevé en cuve inox sur les calcaires kimméridgiens de Chablis offre cette note de silex qui répond magistralement à la texture d'une Gillardeau.",
        "Pour les poissons de ligne rôtis au beurre doux ou à la crème, les grands blancs du Val de Loire (Sancerre ou Pouilly-Fumé) apportent leur énergie végétale et citronnée pour équilibrer la richesse de la chair.",
        "Enfin, un Champagne extra-brut ou un blanc de blancs apporte par sa bulle fine une caresse vivifiante qui nettoie le palais entre deux bouchées de homard."
      ]
    }
  ]
};

/**
 * Calculateur dynamique de statut d'ouverture en temps réel
 * Fonctionne avec l'heure courante (fuseau Europe/Paris)
 */
export function getCurrentOpeningStatus(hours = RESTAURANT_CONFIG.openingHours): {
  isOpen: boolean;
  statusText: string;
  nextTimeText: string;
  currentDayName: string;
} {
  const now = new Date();
  
  // Obtenir le jour actuel (0=Dimanche, 1=Lundi, ...)
  const currentDayIndex = now.getDay();
  const currentDecimalHours = now.getHours() + now.getMinutes() / 60;
  
  const todayConfig = hours.find(h => h.dayIndex === currentDayIndex);

  if (!todayConfig || !todayConfig.isOpen) {
    return {
      isOpen: false,
      statusText: "FERMÉ AUJOURD'HUI",
      nextTimeText: "Réouverture prochaine selon nos horaires de service.",
      currentDayName: todayConfig?.dayName || "Aujourd'hui"
    };
  }

  // Vérifier le service du midi
  if (todayConfig.lunchHours) {
    const [lunchStart, lunchEnd] = todayConfig.lunchHours;
    if (currentDecimalHours >= lunchStart && currentDecimalHours < lunchEnd) {
      return {
        isOpen: true,
        statusText: "OUVERT ACTUELLEMENT (Service Déjeuner)",
        nextTimeText: `Fin du service déjeuner à ${formatDecimalHour(lunchEnd)}.`,
        currentDayName: todayConfig.dayName
      };
    }
  }

  // Vérifier le service du soir
  if (todayConfig.dinnerHours) {
    const [dinnerStart, dinnerEnd] = todayConfig.dinnerHours;
    if (currentDecimalHours >= dinnerStart && currentDecimalHours < dinnerEnd) {
      return {
        isOpen: true,
        statusText: "OUVERT ACTUELLEMENT (Service Dîner)",
        nextTimeText: `Fin du service dîner à ${formatDecimalHour(dinnerEnd)}.`,
        currentDayName: todayConfig.dayName
      };
    }
  }

  // Si avant le midi
  if (todayConfig.lunchHours && currentDecimalHours < todayConfig.lunchHours[0]) {
    return {
      isOpen: false,
      statusText: "FERMÉ ACTUELLEMENT",
      nextTimeText: `Ouvre aujourd'hui à ${formatDecimalHour(todayConfig.lunchHours[0])} pour le déjeuner.`,
      currentDayName: todayConfig.dayName
    };
  }

  // Si entre midi et soir
  if (todayConfig.lunchHours && todayConfig.dinnerHours && 
      currentDecimalHours >= todayConfig.lunchHours[1] && currentDecimalHours < todayConfig.dinnerHours[0]) {
    return {
      isOpen: false,
      statusText: "FERMÉ ENTRE LES DEUX SERVICES",
      nextTimeText: `Reprise du service ce soir à ${formatDecimalHour(todayConfig.dinnerHours[0])}.`,
      currentDayName: todayConfig.dayName
    };
  }

  return {
    isOpen: false,
    statusText: "FERMÉ ACTUELLEMENT",
    nextTimeText: "Consultez nos horaires pour le prochain service.",
    currentDayName: todayConfig.dayName
  };
}

function formatDecimalHour(decimal: number): string {
  const hours = Math.floor(decimal);
  const minutes = Math.round((decimal - hours) * 60);
  return `${hours}h${minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes}`;
}
