const suggestionsAPI = [
  {
    '@id': '/api/suggestions/28',
    '@type': 'Suggestion',
    id: 28,
    name: 'TATE Modern - South Bank',
    description: 'Musée d’art moderne et contemporain de Londres, situé dans une ancienne centrale électrique de la Bankside',
    url: 'https://www.tate.org.uk/fr/visite/tate-modern',
    price: 10,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/29',
    '@type': 'Suggestion',
    id: 29,
    name: 'Location de vélo',
    description: 'Location de vélo durant 2 jours pour visiter la ville à vélo si le temps le permet',
    url: 'https://www.onyourbike.com/london-bike-rental.php',
    price: 35,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 2
  },
  {
    '@id': '/api/suggestions/30',
    '@type': 'Suggestion',
    id: 30,
    name: 'Hôtel dans le centre ville',
    description: 'Super hôtel, bien situé, proche des lieux touristiques',
    url: '',
    price: 100,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/2',
      '@type': 'SuggestionGender',
      id: 2
    },
    vote: 2
  },
  {
    '@id': '/api/suggestions/31',
    '@type': 'Suggestion',
    id: 31,
    name: 'AirBnb',
    description: 'Bel appartement avec 3 chambres dans le quartier d\'Oxford.',
    url: 'https://www.airbnb.fr/rooms/2354700?guests=1&adults=1',
    price: 75,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/2',
      '@type': 'SuggestionGender',
      id: 2
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/32',
    '@type': 'Suggestion',
    id: 32,
    name: 'The Blacksmith\'s Arms',
    description: 'Restaurant atypique conseillé par un ami, de bonnes viandes, super notes sur Trip-Advisor.',
    url: '',
    price: 30,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/4',
      '@type': 'SuggestionGender',
      id: 4
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/33',
    '@type': 'Suggestion',
    id: 33,
    name: 'Billets de train Eurostar',
    description: 'Super promo aux dates de nos vacances ! Checkez moi le lien ci-dessous',
    url: 'https://www.eurostar.com/fr-fr',
    price: 80,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/3',
      '@type': 'SuggestionGender',
      id: 3
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/34',
    '@type': 'Suggestion',
    id: 34,
    name: 'Avion Air-France',
    description: 'Billets pas trop chers avec des horaires intéressants',
    url: '',
    price: 90,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/3',
      '@type': 'SuggestionGender',
      id: 3
    },
    vote: 2
  },
  {
    '@id': '/api/suggestions/35',
    '@type': 'Suggestion',
    id: 35,
    name: 'Nobu London',
    description: 'Restaurant classique de Londres, très réputé, parfait pour l\'anniversaire de Florent',
    url: '',
    price: 70,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/4',
      '@type': 'SuggestionGender',
      id: 4
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/36',
    '@type': 'Suggestion',
    id: 36,
    name: 'Visite famille',
    description: 'Mes cousins habitent à Londres ils proposent de venir déjeuner chez eux !',
    url: '',
    price: 0,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/5',
      '@type': 'SuggestionGender',
      id: 5
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/42',
    '@type': 'Suggestion',
    id: 42,
    name: 'Visite de l\'empire state building',
    description: 'L’Empire State Building est le gratte-ciel le plus connu aux Etats-Unis et le plus emblématique de New York.',
    url: 'test',
    price: 30,
    project: {
      '@id': '/api/projects/8',
      '@type': 'Project',
      id: 8
    },
    user: {
      '@id': '/api/users/3',
      '@type': 'User',
      firstname: 'Marc-Antoine',
      lastname: 'Claude'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/43',
    '@type': 'Suggestion',
    id: 43,
    name: 'Central Park',
    description: 'Balade dans central Park, location d\'une barque ou de vélo, à définir',
    url: 'test',
    price: 15,
    project: {
      '@id': '/api/projects/8',
      '@type': 'Project',
      id: 8
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/44',
    '@type': 'Suggestion',
    id: 44,
    name: 'Hôtel New Yorker',
    description: 'Hôtel élégant avec éléments Art déco, restaurant italien convivial et restaurant rétro ouvert 24h/24.',
    url: '',
    price: 250,
    project: {
      '@id': '/api/projects/8',
      '@type': 'Project',
      id: 8
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/2',
      '@type': 'SuggestionGender',
      id: 2
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/45',
    '@type': 'Suggestion',
    id: 45,
    name: 'Billets American Airlines',
    description: 'Billets d\'avion pas cher avec de bons horaires',
    url: '',
    price: 780,
    project: {
      '@id': '/api/projects/8',
      '@type': 'Project',
      id: 8
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/3',
      '@type': 'SuggestionGender',
      id: 3
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/46',
    '@type': 'Suggestion',
    id: 46,
    name: 'Concert de hip-hop',
    description: 'Concert de George the Poet, il monte pas mal récemment, je vous met le lien d\'une de ses musiques pour voir si vous aimez !',
    url: 'https://www.youtube.com/watch?v=LYG1Waliqbw&list=RDLYG1Waliqbw&start_radio=1',
    price: 25,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 2
  },
  {
    '@id': '/api/suggestions/51',
    '@type': 'Suggestion',
    id: 51,
    name: 'Generator Hostel',
    description: 'Situé en plein cœur de Londres, dans le quartier de Bloomsbury, cette auberge de jeunesse Generator Hostel London se trouve à proximité de la station de métro Russell Square.',
    url: 'https://staygenerator.com/destinations/london?lang=fr-FR',
    price: 40,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/2',
      '@type': 'SuggestionGender',
      id: 2
    },
    vote: 2
  },
  {
    '@id': '/api/suggestions/52',
    '@type': 'Suggestion',
    id: 52,
    name: 'The Dove',
    description: 'Pub historique de Londres, top pour passer une bonne soirée ! ',
    url: 'https://www.dovehammersmith.co.uk/',
    price: 15,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 1
  },
  {
    '@id': '/api/suggestions/55',
    '@type': 'Suggestion',
    id: 55,
    name: 'The Golden Fish',
    description: 'Excellent Fish & Chips à Londres, très bons avis sur Trip-Advisor',
    url: 'https://www.tripadvisor.fr/Restaurant_Review-g186338-d5244301-Reviews-The_Golden_Chippy-London_England.html',
    price: 15,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/4',
      '@type': 'SuggestionGender',
      id: 4
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/56',
    '@type': 'Suggestion',
    id: 56,
    name: ' Park Grand London Hyde Park',
    description: 'Prés de Hyde Park et du subway\r\nPrix correct pour la qualité et les avis sont bons sur Trip-Advisor.',
    url: 'https://www.tripadvisor.fr/Hotel_Review-g186338-d3164384-Reviews-Park_Grand_London_Hyde_Park-London_England.html',
    price: 110,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/2',
      '@type': 'SuggestionGender',
      id: 2
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/57',
    '@type': 'Suggestion',
    id: 57,
    name: 'Quartier de Camden Town',
    description: 'Quartier mythique de Londres avec son célèbre food market.\r\nPleins de pubs et cafés pour sortir le soir',
    url: 'https://www.camdenmarket.com/',
    price: 15,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/58',
    '@type': 'Suggestion',
    id: 58,
    name: 'Musée d\'histoire naturel',
    description: 'Natural History Museum of London fondé en 1754.\r\n\r\nHoraires d\'ouverture 10h - 17h50',
    url: 'http://www.nhm.ac.uk/',
    price: 10,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 2
  },
  {
    '@id': '/api/suggestions/59',
    '@type': 'Suggestion',
    id: 59,
    name: 'Visite du Chelsea Football Club',
    description: 'Visite du célèbre stade de Stamford Bridge.\r\nAccès au musée et aux espaces normalement réservés aux joueurs et staff.\r\n\r\nDurée 1h - Horaires 10h / 15h',
    url: 'https://www.tripadvisor.fr/AttractionProductDetail-g186338-d11463542-Chelsea_Football_Club_Tour_and_Museum_Entrance_Ticket-London_England.html',
    price: 25,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/60',
    '@type': 'Suggestion',
    id: 60,
    name: 'Brixton Village',
    description: 'Situé sur la rive sud de la Tamise, Brixton est le quartier de la communauté jamaicaine, africaine et caraibéenne de Londres.\r\nPleins de restaurant, de petit café et d\'endroits posé pour écouter de la musique',
    url: 'http://www.lespetitesjoiesdelavielondonienne.com/brixton-village',
    price: 0,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/1',
      '@type': 'SuggestionGender',
      id: 1
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/61',
    '@type': 'Suggestion',
    id: 61,
    name: 'Visitor Oyster Card',
    description: 'Carte à puce prépayée de la somme souhaitée pour les transports urbains (métro, bus, DLR et tram).',
    url: 'https://www.visitbritainshop.com/france/london-visitor-oyster-card/',
    price: 20,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/3',
      '@type': 'SuggestionGender',
      id: 3
    },
    vote: 3
  }
]

export default suggestionsAPI;
