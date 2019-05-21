const projectsData = [
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
        startDate: '2019-04-16T00:00:00+00:00',
        endDate: '2019-04-25T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/2',
        '@type': 'ProjectDates',
        startDate: '2019-05-01T00:00:00+00:00',
        endDate: '2019-05-16T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/3',
        '@type': 'ProjectDates',
        startDate: '2019-06-06T00:00:00+00:00',
        endDate: '2019-06-13T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/4',
        '@type': 'ProjectDates',
        startDate: '2019-07-03T00:00:00+00:00',
        endDate: '2019-07-18T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio',
      avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
    },
    user: [
      {
        '@id': '/api/users/3',
        '@type': 'User',
        firstname: 'Marc-Antoine',
        lastname: 'Claude',
        avatar: 'http://localhost/Nova/Apotheose/avatar/marc_antoine_avatar.jpg'
      },
      {
        '@id': '/api/users/5',
        '@type': 'User',
        firstname: 'Romain',
        lastname: 'Gizmo',
        avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
      },
      {
        '@id': '/api/users/6',
        '@type': 'User',
        firstname: 'Florent',
        lastname: 'Gio',
        avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
      },
      {
        '@id': '/api/users/7',
        '@type': 'User',
        firstname: 'Anthony',
        lastname: 'Danielou',
        avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
      }
    ],
    suggestions: [
      {
        '@id': '/api/suggestions/28',
        '@type': 'Suggestion',
        id: 28,
        name: 'TATE Modern - South Bank',
        description: 'Musée d’art moderne et contemporain de Londres, situé dans une ancienne centrale électrique de la Bankside',
        url: 'https://www.tate.org.uk/fr/visite/tate-modern',
        price: 10,
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
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
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
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
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
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
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
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
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
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
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
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
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
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
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
        },
        vote: 2
      },
      {
        '@id': '/api/suggestions/56',
        '@type': 'Suggestion',
        id: 56,
        name: ' Park Grand London Hyde Park',
        description: 'Prés de Hyde Park et du subway\r\nPrix correct pour la qualité et les avis sont bons sur Trip-Advisor.',
        url: 'https://www.tripadvisor.fr/Hotel_Review-g186338-d3164384-Reviews-Park_Grand_London_Hyde_Park-London_England.html',
        price: 110,
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
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
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
        },
        vote: 3
      },
      {
        '@id': '/api/suggestions/59',
        '@type': 'Suggestion',
        id: 59,
        name: 'Visite du Chelsea Football Club',
        description: 'Visite du célèbre stade de Stamford Bridge.\r\nAccès au musée et aux espaces normalement réservés aux joueurs et staff.\r\n\r\nDurée 1h - Horaires 10h / 15h',
        url: 'https://www.tripadvisor.fr/AttractionProductDetail-g186338-d11463542-Chelsea_Football_Club_Tour_and_Museum_Entrance_Ticket-London_England.html',
        price: 25,
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
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
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
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
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
        },
        vote: 3
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
        startDate: '2019-12-20T00:00:00+00:00',
        endDate: '2019-12-31T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/7',
        '@type': 'ProjectDates',
        startDate: '2019-12-22T00:00:00+00:00',
        endDate: '2019-12-31T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/19',
        '@type': 'ProjectDates',
        startDate: '2019-01-01T00:00:00+00:00',
        endDate: '2019-01-02T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/7',
      '@type': 'User',
      firstname: 'Anthony',
      lastname: 'Danielou',
      avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
    },
    user: [
      {
        '@id': '/api/users/6',
        '@type': 'User',
        firstname: 'Florent',
        lastname: 'Gio',
        avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
      },
      {
        '@id': '/api/users/7',
        '@type': 'User',
        firstname: 'Anthony',
        lastname: 'Danielou',
        avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
      },
      {
        '@id': '/api/users/3',
        '@type': 'User',
        firstname: 'Marc-Antoine',
        lastname: 'Claude',
        avatar: 'http://localhost/Nova/Apotheose/avatar/marc_antoine_avatar.jpg'
      }
    ],
    suggestions: [
      {
        '@id': '/api/suggestions/45',
        '@type': 'Suggestion',
        id: 45,
        name: 'Billets American Airlines',
        description: 'Billets d\'avion pas cher avec de bons horaires',
        url: '',
        price: 780,
        user: {
          '@id': '/api/users/7',
          '@type': 'User',
          firstname: 'Anthony',
          lastname: 'Danielou',
          avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
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
        user: {
          '@id': '/api/users/3',
          '@type': 'User',
          firstname: 'Marc-Antoine',
          lastname: 'Claude',
          avatar: 'http://localhost/Nova/Apotheose/avatar/marc_antoine_avatar.jpg'
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
        user: {
          '@id': '/api/users/6',
          '@type': 'User',
          firstname: 'Florent',
          lastname: 'Gio',
          avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
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
        user: {
          '@id': '/api/users/5',
          '@type': 'User',
          firstname: 'Romain',
          lastname: 'Gizmo',
          avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
        },
        vote: 3
      }
    ],
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
        startDate: '2019-08-07T00:00:00+00:00',
        endDate: '2019-08-21T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/9',
        '@type': 'ProjectDates',
        startDate: '2019-07-15T00:00:00+00:00',
        endDate: '2019-07-31T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/6',
      '@type': 'User',
      firstname: 'Florent',
      lastname: 'Gio',
      avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
    },
    user: [
      {
        '@id': '/api/users/3',
        '@type': 'User',
        firstname: 'Marc-Antoine',
        lastname: 'Claude',
        avatar: 'http://localhost/Nova/Apotheose/avatar/marc_antoine_avatar.jpg'
      },
      {
        '@id': '/api/users/6',
        '@type': 'User',
        firstname: 'Florent',
        lastname: 'Gio',
        avatar: 'http://localhost/Nova/Apotheose/avatar/florent_avatar.jpg'
      },
      {
        '@id': '/api/users/7',
        '@type': 'User',
        firstname: 'Anthony',
        lastname: 'Danielou',
        avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
      }
    ],
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
        '@id': '/api/project_dates/17',
        '@type': 'ProjectDates',
        startDate: '2019-09-01T00:00:00+00:00',
        endDate: '2019-09-07T00:00:00+00:00'
      },
      {
        '@id': '/api/project_dates/18',
        '@type': 'ProjectDates',
        startDate: '2019-09-08T00:00:00+00:00',
        endDate: '2019-09-14T00:00:00+00:00'
      }
    ],
    owner: {
      '@id': '/api/users/5',
      '@type': 'User',
      firstname: 'Romain',
      lastname: 'Gizmo',
      avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
    },
    user: [
      {
        '@id': '/api/users/3',
        '@type': 'User',
        firstname: 'Marc-Antoine',
        lastname: 'Claude',
        avatar: 'http://localhost/Nova/Apotheose/avatar/marc_antoine_avatar.jpg'
      },
      {
        '@id': '/api/users/5',
        '@type': 'User',
        firstname: 'Romain',
        lastname: 'Gizmo',
        avatar: 'http://localhost/Nova/Apotheose/avatar/romain_avatar.jpg'
      },
      {
        '@id': '/api/users/7',
        '@type': 'User',
        firstname: 'Anthony',
        lastname: 'Danielou',
        avatar: 'http://localhost/Nova/Apotheose/avatar/anthony_avatar.jpg'
      }
    ],
    suggestions: [],
    lat: 38.8026097,
    lng: -116.419389
  }
]

export default projectsData;
