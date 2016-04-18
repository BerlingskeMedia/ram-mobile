var appConfig = {
    commentOpenHour: 7,
    commentClosingHour: 24,
    commentWelcome: 'Kom med dine kommentarer nedenfor. Eller deltag i debatten på vores <a href="https://www.facebook.com/stiftstidende">Facebook-side</a>.',
    maxStarRating: 6,
    itemsInSection: 30,
    editorialId: 1418,
    frontpageQueueId: 1375,
    frontpageItems: 21,
    searchDomain: 'amtsavisen.dk',
    canonicalDomain: 'http://amtsavisen.dk',
    chartbeatApikey: 'befae81db2c9f044dad601e8f43f6080',
    chartbeatHost: 'amtsavisen.dk',
    defaultImageSize: '866x487-c',
    defaultMetaTitle: 'Randers Amtsavis - mobil',
    contactPage: 'ram_kontakt',
    timeAgoNowThreshold: 2,
    timeAgoMinuteThreshold: 59,
    timeAgoHourThreshold: 119,
    timeAgoDayThreshold: 119,
    weatherCacheTTLinSecs: 500,
    weatherCity: 'Randers',
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
        67014: 'sport', // Randers FC
        67015: 'sport', // Randers HK
        329558: 'sport', // Randers HH
        70487: 'sport', // Randers Cimbria
        329435: 'sport', // Hobro IK

        65042: 'oestjylland', //Østjylland
        65030: 'oestjylland', //Randers
        65026: 'oestjylland', //Mariagerfjord
        65020: 'oestjylland', //Favrskov
        65034: 'oestjylland', //Syddjurs
        65028: 'oestjylland', //Norddjurs
    },
    sections: {
      sport: {
        name: 'Sport',
        id: 64964
      },
      oestjylland: {
        name: 'Østjylland',
        id: 65042,
        subsections: [
          {slug: 'oestjylland', name: 'Østjylland'},
          {slug: 'randers', name: 'Randers'},
          {slug: 'mariagerfjord', name: 'Mariagerfjord'},
          {slug: 'favrskov', name: 'Favrskov'},
          {slug: 'norddjurs', name: 'Norddjurs'},
          {slug: 'syddjurs', name: 'Syddjurs'},
        ]
      },
      indland: {
        name: 'Danmark',
        id: 65004
      },
      verden: {
        name: 'Verden',
        id: 65006
      },
      kultur: {
        name: 'Kultur',
        id: 64987
      },
      erhverv: {
        name: 'Erhverv',
        id: 65003
      },
      navne: {
        name: 'Navne',
        id: 65007
      },
      alarm112: {
        name: 'Alarm 112',
        id: 64998
      },
      debat: {
        name: 'Debat',
        id: 65014
      },
      randers: {
        name: 'Randers',
        id: 65030
      },
      mariagerfjord: {
        name: 'Mariagerfjord',
        id: 65026
      },
      favrskov: {
        name: 'Favrskov',
        id: 65020
      },
      syddjurs: {
        name: 'Syddjurs',
        id: 65034
      },
      norddjurs: {
        name: 'Norddjurs',
        id: 65028
      },
    },
    sportsTeams: [
        {
            name: 'Randers FC',
            id: 67014,
            image: 'randersfc'
        },
        {
            name: 'Randers HK',
            id: 67015,
            image: 'randershk2'
        },
        {
            name: 'Randers HH',
            id: 329558,
            image: 'randershh'
        },
        {
            name: 'Randers Cimbria',
            id: 70487,
            image: 'randers-cimbria'
        },
        {
            name: 'Hobro IK',
            id: 329435,
            image: 'hik'
        }
    ],
    socials: {
        facebook: 'https://www.facebook.com/amtsavisen',
        twitter: 'https://twitter.com/Amtsavisendk',
        instagram: 'http://instagram.com/amtsavisen',
        google: 'https://plus.google.com/115329460845330231424/about'
    },
    footer: {
        copyright: "2016 Jysk Fynske Medier",
        tipmail: 'redaktion@amtsavisen.dk',
        logo: '/assets/images/ram_footer.svg',
        phoneNum: 'tel:+4587122000',
        phoneNumDisplay: '+45 8712 2000',
        maplink: 'https://www.google.dk/maps/place/Amtsavisen+-+Randers+Amtsavis/@56.4618659,10.0333604,17z/data=!3m1!4b1!4m2!3m1!1s0x464c1cd07e8dc1d9:0xdca291422097b172',
        postalAddress: 'Nørregade 7 · 8900 Randers',
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
                link: 'http://abonnement.amtsavisen.dk/'
            },
            ads: {
                text: 'Annoncering',
                link: 'http://midtjyskemedier.dk/prislister.html'
            },
            service: {
                text: 'Kundeservice',
                link: 'https://amtsavisen.kundeunivers.dk/kontakt'
            }
        },
    }
}

