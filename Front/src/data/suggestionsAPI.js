const suggestionsAPI = [
  {
    '@id': '/api/suggestions/28',
    '@type': 'Suggestion',
    id: 28,
    name: 'Visite de Big Ben',
    description: 'Une excursion de 2h pour visiter la célèbre horloge et le parlement.',
    url: 'https://www.londres.fr/big-ben',
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
    name: 'Balade à vélo dans la ville',
    description: 'Location de vélo durant 2 jours pour se balader dans la ville',
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
    vote: 3
  },
  {
    '@id': '/api/suggestions/30',
    '@type': 'Suggestion',
    id: 30,
    name: 'Hôtel dans le centre ville',
    description: 'Super hôtel, bien situé, proche des lieux touristiques',
    url: '',
    price: 170,
    project: {
      '@id': '/api/projects/7',
      '@type': 'Project',
      id: 7
    },
    user: {
      '@id': '/api/users/3',
      '@type': 'User',
      firstname: 'Marc-Antoine',
      lastname: 'Claude'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/2',
      '@type': 'SuggestionGender',
      id: 2
    },
    vote: 3
  },
  {
    '@id': '/api/suggestions/31',
    '@type': 'Suggestion',
    id: 31,
    name: 'AirBnb',
    description: 'Bel appartement avec 3 chambres dans le quartier d\'Oxford.',
    url: '',
    price: 150,
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
    name: 'Resto atypique',
    description: 'Super restaurant conseillé par un ami, de bonnes viandes, super notes sur trip Advisor.',
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
      '@id': '/api/users/3',
      '@type': 'User',
      firstname: 'Marc-Antoine',
      lastname: 'Claude'
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
    vote: 3
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
      '@id': '/api/users/3',
      '@type': 'User',
      firstname: 'Marc-Antoine',
      lastname: 'Claude'
    },
    suggestionGender: {
      '@id': '/api/suggestion_genders/5',
      '@type': 'SuggestionGender',
      id: 5
    },
    vote: 3
  }
]

export default suggestionsAPI;
