const projectsAPI = [
  {
    '@id': '/api/projects/7',
    '@type': 'Project',
    id: 7,
    title: 'Voyage à Londres',
    description: 'Week-end à Londres entre potes pour l\'anniversaire de Florent',
    destination: 'Londres',
    projectDates: [
      {
        '@id': '/api/project_dates/1',
        '@type': 'ProjectDates',
        starDate: '2019-04-16T00:00:00+00:00',
        endDate: '2019-04-25T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/2',
        '@type': 'ProjectDates',
        starDate: '2019-05-01T00:00:00+00:00',
        endDate: '2019-05-16T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/3',
        '@type': 'ProjectDates',
        starDate: '2019-06-06T00:00:00+00:00',
        endDate: '2019-06-13T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/4',
        '@type': 'ProjectDates',
        starDate: '2019-07-03T00:00:00+00:00',
        endDate: '2019-07-18T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/3',
      '@type': 'User',
      firstname: 'Marc-Antoine',
      lastname: 'Claude',
      avatar: null
    },
    user: [
      {
        '@id': '/api/users/3',
        '@type': 'User',
        firstname: 'Marc-Antoine',
        lastname: 'Claude',
        avatar: null
      },
      {
        '@id': '/api/users/5',
        '@type': 'User',
        firstname: 'Romain',
        lastname: 'Gizmo',
        avatar: null
      },
      {
        '@id': '/api/users/6',
        '@type': 'User',
        firstname: 'Florent',
        lastname: 'Gio',
        avatar: null
      },
      {
        '@id': '/api/users/7',
        '@type': 'User',
        firstname: 'Anthony',
        lastname: 'Danielou',
        avatar: null
      }
    ],
    suggestions: [
      {
        '@id': '/api/suggestions/28',
        '@type': 'Suggestion',
        name: 'Visite de Big Ben',
        description: 'Une excursion de 2h pour visiter la célèbre horloge et le parlement.',
        url: 'https://www.londres.fr/big-ben',
        price: 30,
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/1',
          '@type': 'SuggestionGender',
          name: 'Activités'
        }
      },
      {
        '@id': '/api/suggestions/29',
        '@type': 'Suggestion',
        name: 'Balade à vélo dans la ville',
        description: 'Location de vélo durant 2 jours pour se balader dans la ville',
        url: 'https://www.onyourbike.com/london-bike-rental.php',
        price: 35,
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/1',
          '@type': 'SuggestionGender',
          name: 'Activités'
        }
      },
      {
        '@id': '/api/suggestions/30',
        '@type': 'Suggestion',
        name: 'Hôtel dans le centre ville',
        description: 'Super hôtel, bien situé, proche des lieux touristiques',
        url: '',
        price: 170,
        user: {
          '@id': '/api/users/3',
          '@type': 'User',
          firstname: 'Marc-Antoine',
          lastname: 'Claude',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/2',
          '@type': 'SuggestionGender',
          name: 'hébergement'
        }
      },
      {
        '@id': '/api/suggestions/31',
        '@type': 'Suggestion',
        name: 'AirBnb',
        description: 'Bel appartement avec 3 chambres dans le quartier d\'Oxford.',
        url: '',
        price: 150,
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/2',
          '@type': 'SuggestionGender',
          name: 'hébergement'
        }
      },
      {
        '@id': '/api/suggestions/32',
        '@type': 'Suggestion',
        name: 'Resto atypique',
        description: 'Super restaurant conseillé par un ami, de bonnes viandes, super notes sur trip Advisor.',
        url: '',
        price: 30,
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/4',
          '@type': 'SuggestionGender',
          name: 'Restaurant'
        }
      },
      {
        '@id': '/api/suggestions/33',
        '@type': 'Suggestion',
        name: 'Billets de train Eurostar',
        description: 'Super promo aux dates de nos vacances ! Checkez moi le lien ci-dessous',
        url: 'https://www.eurostar.com/fr-fr',
        price: 80,
        user: {
          '@id': '/api/users/3',
          '@type': 'User',
          firstname: 'Marc-Antoine',
          lastname: 'Claude',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/3',
          '@type': 'SuggestionGender',
          name: 'Transport'
        }
      },
      {
        '@id': '/api/suggestions/34',
        '@type': 'Suggestion',
        name: 'Avion Air-France',
        description: 'Billets pas trop chers avec des horaires intéressants',
        url: '',
        price: 90,
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/3',
          '@type': 'SuggestionGender',
          name: 'Transport'
        }
      },
      {
        '@id': '/api/suggestions/35',
        '@type': 'Suggestion',
        name: 'Nobu London',
        description: 'Restaurant classique de Londres, très réputé, parfait pour l\'anniversaire de Florent',
        url: '',
        price: 70,
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/4',
          '@type': 'SuggestionGender',
          name: 'Restaurant'
        }
      },
      {
        '@id': '/api/suggestions/36',
        '@type': 'Suggestion',
        name: 'Visite famille',
        description: 'Mes cousins habitent à Londres ils proposent de venir déjeuner chez eux !',
        url: '',
        price: 0,
        user: {
          '@id': '/api/users/3',
          '@type': 'User',
          firstname: 'Marc-Antoine',
          lastname: 'Claude',
          avatar: null
        },
        suggestionGender: {
          '@id': '/api/suggestion_genders/5',
          '@type': 'SuggestionGender',
          name: 'Autres'
        }
      }
    ],
    lat: 51.5073509,
    lng: -0.1277583
  },
  {
    '@id': '/api/projects/8',
    '@type': 'Project',
    id: 8,
    title: 'New-York pour Noël',
    description: 'Voyage à New-York en famille, pour visiter ses célèbres monuments et surtout profiter de l\'ambiance de la ville pendant les fêtes',
    destination: 'New-York',
    projectDates: [
      {
        '@id': '/api/project_dates/6',
        '@type': 'ProjectDates',
        starDate: '2019-12-20T00:00:00+00:00',
        endDate: '2019-12-31T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/7',
        '@type': 'ProjectDates',
        starDate: '2019-12-22T00:00:00+00:00',
        endDate: '2019-12-31T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou',
      avatar: null
    },
    user: [],
    suggestions: [],
    lat: 40.7127753,
    lng: -74.0059728
  },
  {
    '@id': '/api/projects/9',
    '@type': 'Project',
    id: 9,
    title: 'Trip à Stockholm',
    description: 'Visiter la ville, louer des vélos pour se balader et manger des spécialités locales',
    destination: 'Stockholm',
    projectDates: [
      {
        '@id': '/api/project_dates/8',
        '@type': 'ProjectDates',
        starDate: '2019-08-07T00:00:00+00:00',
        endDate: '2019-08-21T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/9',
        '@type': 'ProjectDates',
        starDate: '2019-07-15T00:00:00+00:00',
        endDate: '2019-07-31T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio',
      avatar: null
    },
    user: [],
    suggestions: [],
    lat: 59.32932349999999,
    lng: 18.0685808
  },
  {
    '@id': '/api/projects/10',
    '@type': 'Project',
    id: 10,
    title: 'Festival burning-man',
    description: 'Célèbre festival dans le désert Américain, bonnes musiques et ambiance incroyable !',
    destination: 'Nevada',
    projectDates: [
      {
        '@id': '/api/project_dates/12',
        '@type': 'ProjectDates',
        starDate: '2019-09-01T00:00:00+00:00',
        endDate: '2019-09-07T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo',
      avatar: null
    },
    user: [],
    suggestions: [],
    lat: 38.8026097,
    lng: -116.419389
  }
]

export default projectsAPI;
