var appConfig = {
    commentOpenHour: 7,
    commentClosingHour: 24,
    commentWelcome: 'Kom med dine kommentarer nedenfor. Eller deltag i debatten på vores <a href="https://www.facebook.com/stiftstidende">Facebook-side</a>.',
    maxStarRating: 6,
    itemsInSection: 30,
    editorialId: 64925,
    frontpageQueueId: 1011,
    frontpageItems: 21,
    searchDomain: 'stiften.dk',
    canonicalDomain: 'http://stiften.dk',
    chartbeatApikey: 'c3624866ca79af3601812dbe1eb517f4',
    defaultImageSize: '866x487-c',
    defaultMetaTitle: 'Stiften - mobil',
    timeAgoNowThreshold: 2,
    timeAgoMinuteThreshold: 59,
    timeAgoHourThreshold: 119,
    timeAgoDayThreshold: 119,
    weatherCacheTTLinSecs: 500,
    weatherCity: 'Aarhus',
    weatherIcons: {
            'day': {
              '200': 'thunderstorm',
              '300': 'showers',
              '500': 'rain',
              '520': 'showers',
              '600': 'snow',
              '800': 'day-sunny',
              '801': 'day-cloudy',
              '802': 'day-cloudy',
              '803': 'day-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            },
            'night': {
              '200': 'night-alt-thunderstorm',
              '300': 'night-alt-showers',
              '500': 'night-alt-rain',
              '520': 'night-alt-showers',
              '600': 'night-alt-snow',
              '800': 'night-clear',
              '801': 'night-alt-cloudy',
              '802': 'night-alt-cloudy',
              '803': 'night-alt-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            }
          },
    emediate: {
        "G1": {
            cu: "0",
            w: "930",
            h: "180"
        },
        "G2": {
            cu: "0",
            w: "930",
            h: "180"
        }
    },
    sectionsWithSubsectionsById: {
        1036: 'sport', //sport
        1037: 'sport', // AGF
        0: 'sport', // Aarhus fremad
        1040: 'sport', // Bears
        1039: 'sport', // Aarhus håndbold
        1038: 'sport', // SK Århus
        5415: 'sport', // Skanderborg H
        5778: 'sport', // Odder Håndbold
        331535: 'sport', // Fodbold
        331537: 'sport', // Basketball
        331536: 'sport', // Håndbold
        1024: 'oestjylland', //Østjylland
        64954: 'oestjylland', //Århus
        64928: 'oestjylland', //Skanderborg
        64939: 'oestjylland', //Odder
        64930: 'oestjylland', //Favrskov
        64944: 'oestjylland', //Syddjurs
        64938: 'oestjylland', //Norddjurs
    },
    sections: {
      sport: {
        name: 'Sport',
        id: 1036,
        subsections: [
          {slug: 'sport', name: 'Sport'},
          {slug: 'fodbold', name: 'Fodbold'},
          {slug: 'haandbold', name: 'Håndbold'},
          {slug: 'basketball', name: 'Basketball'}
        ]
      },
      oestjylland: {
        name: 'Østjylland',
        id: 1024,
        subsections: [
          {slug: 'oestjylland', name: 'Østjylland'},
          {slug: 'aarhus', name: 'Aarhus'},
          {slug: 'skanderborg', name: 'Skanderborg'},
          {slug: 'norddjurs', name: 'Norddjurs'},
          {slug: 'odder', name: 'Odder'},
          {slug: 'syddjurs', name: 'Syddjurs'},
          {slug: 'favrskov', name: 'Favrskov'},

        ]
      },
      indland: {
        name: 'Indland',
        id: 1031
      },
      udland: {
        name: 'Udland',
        id: 1032
      },
      kultur: {
        name: 'Kultur',
        id: 1044
      },
      erhverv: {
        name: 'Erhverv',
        id: 1033
      },
      navne: {
        name: 'Navne',
        id: 1059
      },
      fodbold: {
        name: 'Fodbold',
        id: 6142
      },
      basketball: {
        name: 'Basketball',
        id: 6143
      },
      haandbold: {
        name: 'Håndbold',
        id: 6143
      },
      alarm112: {
        name: 'Alarm 112',
        id: 1035
      },
      debat: {
        name: 'Debat',
        id: 1056
      },
      aarhus: {
        name: 'Aarhus',
        id: 1023
      },
      skanderborg: {
        name: 'Skanderborg',
        id: 1025
      },
      odder: {
        name: 'Odder',
        id: 1026
      },
      favrskov: {
        name: 'Favrskov',
        id: 1027
      },
      syddjurs: {
        name: 'Syddjurs',
        id: 1028
      },
      norddjurs: {
        name: 'Norddjurs',
        id: 1029
      },
      agf: {
        name: 'AGF',
        id: 1037,
      },
      'bakken-bears': {
        name: 'Bakken Bears',
        id: 1040,
      },
      'aarhus-haandbold': {
        name: 'Aarhus Håndbold',
        id: 1039,
      },
      'sk-aarhus': {
        name: 'SK Aarhus',
        id: 1038,
      },
      'skanderborg-haandbold': {
        name: 'Skanderborg Håndbold',
        id: 5415,
      },
      'odder-haandbold': {
        name: 'Odder Håndbold',
        id: 5778,
      }
    },
    sportsTeams: [
        {
            name: 'AGF',
            id: 1037,
            image: 'agf',
            slug: 'agf',
        },
        {
            name: 'Bakken Bears',
            id: 1040,
            image: 'bakken-bears',
            slug: 'bakken-bears',
        },
        {
            name: 'Aarhus Håndbold',
            id: 1039,
            image: 'aarhus-haandbold',
            slug: 'aarhus-haandbold'
        },
        {
            name: 'SK Aarhus',
            id: 1038,
            image: 'skaarhus',
            slug: 'sk-aarhus'
        },
        {
            name: 'Skanderborg Håndbold',
            id: 5415,
            image: 'skanderborg-haandbold',
            slug: 'skanderborg-haandbold'
        },
        {
            name: 'Odder Håndbold',
            id: 5778,
            image: 'odder-haandbold',
            slug: 'odder-haandbold'
        }

    ],
    socials: {
        facebook: 'https://www.facebook.com/stiftstidende',
        twitter: 'https://twitter.com/stiftendk',
        instagram: 'http://instagram.com/stiftendk',
        google: 'https://google.com/stiftendk'
    },
    footer: {
        copyright: "2016 Jysk Fynske Medier",
        policies: {
            copyright: {
                text: 'Ophavsret og vilkår',
                link: 'http://www.berlingskemedia.dk/ophavsret-og-vilkaar/'
            },
            privacy: {
                text: 'Cookie-og Privatlivspolitik',
                link: 'http://www.berlingskemedia.dk/cookie-og-privatlivspolitik/'
            },
            terms: {
                text: 'Generelle handelsbetingelser',
                link: 'http://www.berlingskemedia.dk/generelle-handelsbetingelser/'
            }
        },
        business: {
            subscription: {
                text: 'Abonnement',
                link: 'http://abonnement.stiften.dk'
            },
            ads: {
                text: 'Annoncering',
                link: 'http://midtjyskemedier.dk/prislister.html'
            },
            service: {
                text: 'Kundeservice',
                link: ' https://stiften.kundeunivers.dk/kontakt'
            }
        },
    }
}

