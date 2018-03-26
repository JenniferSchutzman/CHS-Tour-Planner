require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

db
  .bulkDocs([
    {
      _id: 'history_daytime-group-carriage-tour-residential-district',
      tourName: 'Daytime Group Carriage Tour Residential District',
      companyName: 'Palmetto Carriage',
      address: '8 Guignard Street, Charleston, SC 29401',
      phone: '859-853-6125',
      price: 26,
      duration: '1 hour',
      desc:
        'Palmetto Carriage Company is the oldest carriage tour company in town! Come tour historic downtown Charleston by mule or horse-drawn carriage with some of the most experienced personnel in the Charleston carriage industry. We are a family-owned company and pride ourselves on providing authentic carriage tours that your family and friends will remember for years to come!',
      img: '',
      linkToBookOnline: 'https://palmettocarriage.com/book-your-tour/',
      schedule: [
        {
          monday: true,
          mondayTime: '9:00AM - 5:00PM',
          tuesday: true,
          tuesdayTime: '9:00AM - 5:00PM',
          wednesday: true,
          wednesdayTime: '9:00AM - 5:00PM',
          thursday: true,
          thursdayTime: '9:00AM - 5:00PM',
          friday: true,
          fridayTime: '9:00AM - 5:00PM',
          saturday: true,
          saturdayTime: '9:00AM - 5:00PM',
          sunday: true,
          sundayTime: '9:00AM - 5:00PM'
        }
      ],
      options: ['history', 'carriage']
    },
    {
      _id: 'history_historic-charleston-carriage-tour',
      tourName: 'Historic Charleston Carriage Tour',
      companyName: 'Old South Carriage Co.',
      address: '14 Anson St. Charleston, SC 29401',
      phone: '859-723-9712',
      price: 26,
      duration: '1 hour',
      desc:
        'Our one-hour narrated carriage tour covers more than 2.5 miles and 30 blocks of historic Charleston. It really is the best way to see the “Holy City” and learn about its rich and vast historical areas and attractions.',
      img: '',
      linkToBookOnline:
        'https://www.oldsouthcarriage.com/historic-charleston-carriage-tours/',
      schedule: [
        {
          monday: true,
          mondayTime: '9:00AM - 5:00PM',
          tuesday: true,
          tuesdayTime: '9:00AM - 5:00PM',
          wednesday: true,
          wednesdayTime: '9:00AM - 5:00PM',
          thursday: true,
          thursdayTime: '9:00AM - 5:00PM',
          friday: true,
          fridayTime: '9:00AM - 5:00PM',
          saturday: true,
          saturdayTime: '9:00AM - 5:00PM',
          sunday: true,
          sundayTime: '9:00AM - 5:00PM'
        }
      ],
      options: ['history', 'carriage']
    },
    {
      _id: 'haunted_haunted-carriage-tour',
      tourName: 'Haunted Carriage Tour',
      companyName: 'Old South Carriage Co.',
      address: '14 Anson St. Charleston, SC 29401',
      phone: '859-723-9712',
      price: 26,
      duration: '40 minutes',
      type: 'carriage',
      desc:
        'On this 40-minute twilight tour, discover where spirits are reported to linger. A licensed guide will regale you with spooky tales from Charleston’s long history as you pass haunted alleys, graveyards, churches, hotels – and even a dungeon.',
      img: '',
      linkToBookOnline:
        'https://www.oldsouthcarriage.com/historic-charleston-carriage-tours/',
      schedule: [
        {
          monday: true,
          mondayTime: null,
          tuesday: true,
          tuesdayTime: null,
          wednesday: true,
          wednesdayTime: null,
          thursday: true,
          thursdayTime: null,
          friday: true,
          fridayTime: null,
          saturday: true,
          saturdayTime: null,
          sunday: true,
          sundayTime: null
        }
      ],
      options: ['history', 'haunted', 'carriage']
    },
    {
      _id: 'adventure_dolphin-safari',
      tourName: 'Dolphin Safari',
      companyName: 'Charleston SUP Safaris',
      address: '83 Center Street, Folly Beach, SC 29439',
      phone: '843-817-7877',
      price: 26,
      duration: '2 hours',
      type: 'adventure',
      desc:
        'This 2-hour introductory paddle on the Edge of America will get you into the basics of SUP, all in the calm flatwater of the Folly River. We’ll explore alongside the numerous beautiful native birds and bottlenose dolphins.  We’ll go with the flow, following the tides and wind direction for a great beginning paddle. At low tide we visit a private beach and go for a swim! Group photo is taken at the end of the tour, which will be posted on our social media pages.',
      img: '',
      linkToBookOnline: 'http://www.charlestonsupsafaris.com/tours-lesson.html',

      schedule: [
        {
          monday: true,
          mondayTime: '9:00AM, 12:00PM, 6:30PM',
          tuesday: true,
          tuesdayTime: '9:00AM, 12:00PM, 6:30PM',
          wednesday: true,
          wednesdayTime: '9:00AM, 12:00PM, 6:30PM',
          thursday: true,
          thursdayTime: '9:00AM, 12:00PM, 6:30PM',
          friday: true,
          fridayTime: '9:00AM, 12:00PM, 6:30PM',
          saturday: true,
          saturdayTime: '9:00AM, 12:00PM, 6:30PM',
          sunday: true,
          sundayTime: '9:00AM, 12:00PM, 6:30PM'
        }
      ],
      options: ['adventure', 'water']
    },
    {
      _id: 'history_historic-charlreston-walking-tour',
      tourName: 'Historic Charleston Walking Tour',
      companyName: 'Free Tours by Foot',
      address: '107 Ashley Ave., Charleston, SC 29401',
      phone: '843-580-4019',
      price: 3,
      duration: '',
      type: 'walking',
      desc:
        'Join Free Tours by Foot as we cross cobble stone streets and cut through back alleys, all while discovering the hidden gems, beautiful mansions, elegant churches not to mention a few graveyards of Charleston’s historic center.  It’s the epic story of Charleston’s role in American and world history.  It is a name-your-price tour, with a minimum $3 charge',
      img: '',
      linkToBookOnline:
        'https://freetoursbyfoot.com/charleston-sc-tours/walking-tours/historic-district/',
      schedule: [
        {
          monday: true,
          mondayTime: '9:30AM, 1:00PM',
          tuesday: true,
          tuesdayTime: '9:30AM',
          wednesday: true,
          wednesdayTime: '9:30AM',
          thursday: true,
          thursdayTime: '9:30AM',
          friday: true,
          fridayTime: '9:30AM',
          saturday: true,
          saturdayTime: '9:30AM',
          sunday: true,
          sundayTime: '9:30AM, 1:00PM'
        }
      ],
      options: ['history', 'walking']
    },
    {
      _id: 'history_civil-war-tour-of-charleston',
      tourName: 'Civil War Tour of Charleston',
      companyName: 'Free Tours by Foot',
      address: '107 Ashley Ave., Charleston, SC 29401',
      phone: '843-580-4019',
      price: 3,
      duration: '2 hours',
      type: 'walking',
      desc:
        'We will bring you far back into the history of this great city and bring to life the stories of Charlestonians who lived through four years of hellish conflict, from secession and the first shots fired until surrender, and examine the causes and consequences of this great national tragedy.  It is a name-your-price tour, with a minimum $3 charge',
      img: '',
      linkToBookOnline:
        'https://freetoursbyfoot.com/charleston-sc-tours/walking-tours/historic-district/',
      schedule: [
        {
          monday: false,
          mondayTime: null,
          tuesday: false,
          tuesdayTime: null,
          wednesday: false,
          wednesdayTime: null,
          thursday: false,
          thursdayTime: null,
          friday: false,
          fridayTime: null,
          saturday: true,
          saturdayTime: '1:00PM',
          sunday: false,
          sundayTime: null
        }
      ],
      options: ['history', 'walking']
    },
    {
      _id: 'water_harbour-sailing-tour',
      tourName: 'Harbour Sailing Tour',
      companyName: 'Charleston Sailing Charters',
      address: '',
      price: 3,
      duration: '2 hours',
      type: 'boat',
      desc:
        'Start with our basic 2 hour day sail or splurge and spend a full day lounging on your private crewed yacht on the Charleston Harbor. We can show you the sights from Ft Sumter to the Ravenel Bridge or anchor in a cove and swim, its all up to you! Most charters are 3 hours or longer in length. We sail year round in South Carolina and we are always ready to get out on the water!',
      img: '',
      linkToBookOnline:
        'https://freetoursbyfoot.com/charleston-sc-tours/walking-tours/historic-district/',
      schedule: [
        {
          monday: true,
          mondayTime: '8:30AM, 10:00AM, 2:30PM, 5:30PM',
          tuesday: true,
          tuesdayTime: '8:30AM, 11:30AM, 2:30PM, 5:30PM',
          wednesday: true,
          wednesdayTime: '8:30AM, 11:30AM, 2:30PM, 5:30PM',
          thursday: true,
          thursdayTime: '8:30AM, 11:30AM, 2:30PM, 5:30PM',
          friday: true,
          fridayTime: '8:30AM, 11:30AM, 2:30PM, 5:30PM',
          saturday: true,
          saturdayTime: '8:30AM, 10:00AM, 2:30PM, 5:30PM',
          sunday: false,
          sundayTime: '8:30AM, 11:30AM, 2:30PM, 5:30PM'
        }
      ],
      options: ['history', 'walking']
    },
    {
      _id: 'culinary_savor-the-flavors-of-charleston-tour',
      tourName: 'Savor the Flavors of Charleston Tour',
      companyName: 'Charleston Food Tours',
      address: '18 Anson Street, Charleston, SC 29401',
      phone: '843-727-1100',
      price: 60,
      duration: '2.5 hours ',
      type: 'walking',
      desc:
        'Come join us as we walk, talk and taste our way through Charleston. This 2½ hour Charleston Food Tour will immerse you in the history and culture of the Lowcountry. You will discover how our unique cuisine has evolved over the past 300+ years while sampling delicious specialties from local eateries, markets, bakeries, restaurants, and culinary landmarks.',
      img: '',
      linkToBookOnline:
        'https://charlestonfoodtours.com/food-tours/savor-the-flavors-of-charleston-tour/',
      schedule: [
        {
          monday: true,
          mondayTime: '10:00AM, 2:00PM',
          tuesday: true,
          tuesdayTime: '10:00AM, 2:00PM',
          wednesday: true,
          wednesdayTime: '10:00AM, 2:00PM',
          thursday: true,
          thursdayTime: '10:00AM, 2:00PM',
          friday: true,
          fridayTime: '10:00AM, 2:00PM',
          saturday: true,
          saturdayTime: '10:00AM, 2:00PM',
          sunday: true,
          sundayTime: '10:00AM, 2:00PM'
        }
      ],
      options: ['history', 'culinary', 'walking', 'food']
    },
    {
      _id: 'culinary_upper-king-street-culinary-tour',
      tourName: 'Upper King Street Culinary Tour',
      companyName: 'Charleston Culinary Tours',
      address: '563 King St, Charleston, SC 29403',
      phone: '843-259-2966',
      price: 60,
      duration: '2.5 hours',
      type: 'walking',
      desc:
        "This 2.5 hour tour offers insight into Charleston's historic Upper King Street neighborhood (recently named one of the top 10 food neighborhoods in America!), showcasing four of Charleston's culinary innovators who exemplify cooking in the New South!",
      img: '',
      linkToBookOnline:
        'https://charlestonculinarytours.com/activities/charleston-upper-king-street-culinary-tour/',
      schedule: [
        {
          monday: true,
          mondayTime: '3:00PM',
          tuesday: true,
          tuesdayTime: '3:00PM',
          wednesday: true,
          wednesdayTime: '3:00PM',
          thursday: true,
          thursdayTime: '3:00PM',
          friday: true,
          fridayTime: '3:00PM',
          saturday: true,
          saturdayTime: '3:00PM',
          sunday: true,
          sundayTime: '3:00PM'
        }
      ],
      options: ['history', 'culinary', 'walking', 'food', 'wine', 'pub']
    },
    {
      _id: 'culinary_downtown-charleston-culinary-tour',
      tourName: 'Downtown Charleston Culinary Tour',
      companyName: 'Charleston Culinary Tours',
      address: '563 King St, Charleston, SC 29403',
      price: 60,
      duration: '2.5 hours',
      type: 'walking',
      desc:
        "This 2 1/2 hour tour explores Charleston's Historic French Quarter, offering the best of Charleston's history and food while walking some of the oldest & most historic streets in the city! Showcasing some of Charleston's traditional favorites, as well as recent innovations, this tour highlights the cuisine of our favorite locally-owned and operated restaurants in the Holy City. It is a journey that is informative, delicious and fun!",
      img: '',
      linkToBookOnline:
        'https://charlestonculinarytours.com/activities/charleston-downtown-culinary-tour/',
      schedule: [
        {
          monday: true,
          mondayTime: '2:00PM, 3:00PM',
          tuesday: true,
          tuesdayTime: '2:00PM, 3:00PM',
          wednesday: true,
          wednesdayTime: '2:00PM, 3:00PM',
          thursday: true,
          thursdayTime: '2:00PM, 3:00PM',
          friday: true,
          fridayTime: '2:00PM, 3:00PM',
          saturday: true,
          saturdayTime: '2:00PM, 3:00PM',
          sunday: false,
          sundayTime: null
        }
      ],
      options: ['history', 'culinary', 'walking', 'food']
      // },
      // {
      //   _id: 'culinary_sippin-wadamalaw-island-tour',
      //   tourName: "Sippin' Wadamalaw Island Tour",
      //   companyName: 'Crafted Travel',
      //   address: '1529 Sam Rittenberg Blvd #2A Charleston, SC 29407',
      //   phone: '843-804-9933',
      //   price: 95,
      //   duration: '4.5 hours',
      //   type: 'private',
      //   desc:
      //     'This scenic Lowcountry drinking tour is NOT for lightweights.  First you will stop at the Angel Oak Tree for pictures then onward to your Wine Tour at Deep Water Vineyards followed by a Distillery Tour at the world famous Firefly Distillery.  Then you will finish with craft beer and food truck. Take the stress out of drinking and driving so your group can enjoy the ride with your Personal Guide as you sip your way through Wadmalaw Island in our climate controlled luxury limo fleet.',
      //   img: '',
      //   linkToBookOnline:
      //     'https://www.craftedcharlestontours.com/charleston-wine-tasting-tours',
      //   schedule: [
      //     {
      //       monday: false,
      //       mondayTime: null,
      //       tuesday: true,
      //       tuesdayTime: '10:00AM, 11:00AM, 12:00PM, 1:00PM',
      //       wednesday: true,
      //       wednesdayTime: '10:00AM, 11:00AM, 12:00PM, 1:00PM',
      //       thursday: true,
      //       thursdayTime: '10:00AM, 11:00AM, 12:00PM, 1:00PM',
      //       friday: true,
      //       fridayTime: '10:00AM, 11:00AM, 12:00PM, 1:00PM',
      //       saturday: true,
      //       saturdayTime:
      //         '10:00AM, 10:30AM, 11:00AM, 11:30AM, 12:00PM, 12:30PM, 1:00PM, 1:30PM',
      //       sunday: false,
      //       sundayTime: null
      //     }
      //   ],
      //   options: ['culinary', 'wine', 'pub']
      // },
      // {
      //   _id: 'culinary_charleston-distillery-tour',
      //   tourName: 'Charleston Distillery Tour',
      //   companyName: 'Crafted Travel',
      //   address: '1529 Sam Rittenberg Blvd #2A Charleston, SC 29407',
      //   phone: '843-804-9933',
      //   price: 85,
      //   duration: '4 hours',
      //   type: 'culinary',
      //   desc:
      //     'Join our Charleston Distillery Tour and let us be your designated driver while you keep sipping. This All-Inclusive Private Distillery Tour takes you behind the scene of 3 different distilleries to learn about the unique process involved in producing Small Batch Craft Spirits. Be sure to try the Carolina Reaper Peppered Vodka. It will sure to light a fire in you! Free Party Bus upgrade for groups 8 or more. ($700 value for FREE)',
      //   img: '',
      //   linkToBookOnline:
      //     'https://www.craftedcharlestontours.com/charleston-tours/charleston-distillery-tours',
      //   schedule: [
      //     {
      //       monday: false,
      //       mondayTime: null,
      //       tuesday: false,
      //       tuesdayTime: null,
      //       wednesday: false,
      //       wednesdayTime: null,
      //       thursday: true,
      //       thursdayTime: '11:00AM',
      //       friday: true,
      //       fridayTime: '11:00AM',
      //       saturday: true,
      //       saturdayTime: '11:00AM',
      //       sunday: false,
      //       sundayTime: null
      //     }
      //   ],
      //   options: ['history', 'walking']
      // },
      // {
      //   tourName: 'Aircraft Inside and Out',
      //   _id: 'history_aircraft-inside-and-out',
      //   companyName: "Patriot's Point",
      //   address: '40 Patriots Point Road, Mount Pleasant, SC 29464',
      //   phone: '843-884-2727',
      //   price: 34,
      //   duration: '2 hours',
      //   type: 'museum',
      //   desc:
      //     'This 120 minute guided tour centers on the history of aviation and the many pilots behind the flying machines. This peek inside some of our favorite aircraft offers a view not available to the general public. This special tour is limited to 20 max guests due to space and time.',
      //   img: '',
      //   linkToBookOnline: 'http://www.patriotspoint.org/tours/group-tours/',
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '9:00AM - 6:30AM',
      //       tuesday: true,
      //       tuesdayTime: '9:00AM - 6:30PM',
      //       wednesday: true,
      //       wednesdayTime: '9:00AM - 6:30PM',
      //       thursday: true,
      //       thursdayTime: '9:00AM - 6:30PM',
      //       friday: true,
      //       fridayTime: '9:00AM - 6:30PM',
      //       saturday: true,
      //       saturdayTime: '9:00AM - 6:30PM',
      //       sunday: true,
      //       sundayTime: '9:00AM - 6:30PM'
      //     }
      //   ],
      //   options: ['history', 'museum']
      // },
      // {
      //   tourName: 'Flight Deck and Hangar Deck',
      //   _id: 'history_flight-deck-and-hangar-deck',
      //   companyName: "Patriot's Point",
      //   address: '40 Patriots Point Road, Mount Pleasant, SC 29464',
      //   phone: '843-884-2727',
      //   price: '27',
      //   duration: '60 minutes',
      //   type: 'museum',
      //   desc:
      //     'This 60 minute guided tour covers areas of the Flight Deck and Hangar Bay accenting the history of each area and the "Fighting Lady." If not able to go to the Flight Deck due to weather or other considerations, the Medal of Honor may be added to this program as time permits. To schedule your tour, please contact Shirl Knight. This tour is also handicap accessible',
      //   img: '',
      //   linkToBookOnline: 'http://www.patriotspoint.org/tours/group-tours/',
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '9:00AM - 6:30AM',
      //       tuesday: true,
      //       tuesdayTime: '9:00AM - 6:30PM',
      //       wednesday: true,
      //       wednesdayTime: '9:00AM - 6:30PM',
      //       thursday: true,
      //       thursdayTime: '9:00AM - 6:30PM',
      //       friday: true,
      //       fridayTime: '9:00AM - 6:30PM',
      //       saturday: true,
      //       saturdayTime: '9:00AM - 6:30PM',
      //       sunday: true,
      //       sundayTime: '9:00AM - 6:30PM'
      //     }
      //   ],
      //   options: ['history', 'museum']
      // },
      // {
      //   tourName: 'Fort Sumter Tour',
      //   _id: 'history_fort-sumter-tour',
      //   companyName: 'Spirit Line Cruises',
      //   address: '340 Concord St., Charleston, SC 29401',
      //   phone: '1-800-789-3678',
      //   price: '22',
      //   duration: '2 hours',
      //   type: 'boat',
      //   desc:
      //     'Once aboard, you will experience a relaxing 30 minute narrated cruise to historic Fort Sumter. You will learn about the events which led to the outbreak of America’s most bloody war. When you arrive you will be greeted by National Park Service Rangers, who will provide further details about Fort Sumter and its pivotal role in the American Civil War. On the fort you will find a very informative museum (360 Video of Museum) with many historic artifacts and a souvenir shop. After your roughly one hour visit, you will enjoy a scenic cruise back to your departure point.',
      //   img: '',
      //   linkToBookOnline: 'https://fortsumtertours.com/tours/fort-sumter-tour/',
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime:
      //         '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM',
      //       tuesday: true,
      //       tuesdayTime:
      //         '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM',
      //       wednesday: true,
      //       wednesdayTime:
      //         '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM',
      //       thursday: true,
      //       thursdayTime:
      //         '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM',
      //       friday: true,
      //       fridayTime:
      //         '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM',
      //       saturday: true,
      //       saturdayTime:
      //         '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM',
      //       sunday: true,
      //       sundayTime: '9:30AM, 10:30am, 12:00PM, 1:00PM, 2:30PM, 3:30PM, 4:00PM'
      //     }
      //   ],
      //   options: ['history', 'boat']
      // },
      // {
      //   tourName: 'Sunset Sail',
      //   _id: 'adventure_sunset-sail',
      //   companyName: 'Schooner Pride ',
      //   address: 'Aquarium Wharf, 360 Concord St. Charleston, SC 29401',
      //   phone: '843-722-1112',
      //   price: 54,
      //   duration: '2 hours',
      //   type: 'boat',
      //   desc:
      //     'People of all walks of life can enjoy two –hour public sails! There are no set courses, she sails with the winds and tides so every cruise is unique. You will always be in the sheltered harbor area and see all the sites just closer to some than others. While this is not a narrated cruise, the crew is happy to answer any questions and point out landmarks and wildlife.',
      //   img: '',
      //   linkToBookOnline: 'https://www.schoonerpride.com/main/daily-sails',
      //
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '6:00PM',
      //       tuesday: true,
      //       tuesdayTime: '6:00PM',
      //       wednesday: true,
      //       wednesdayTime: '6:00PM',
      //       thursday: true,
      //       thursdayTime: '6:00PM',
      //       friday: true,
      //       fridayTime: '6:00PM',
      //       saturday: true,
      //       saturdayTime: '6:00PM',
      //       sunday: true,
      //       sundayTime: '6:00PM'
      //     }
      //   ],
      //   options: ['adventure', 'boat']
      // },
      // {
      //   tourName: 'Historic Charleston Harbor Tour',
      //   _id: 'history_historic-charleston-harbor-tour',
      //   companyName: 'Charleston Harbor Tours',
      //   address:
      //     'Charleston Maritime Center, 10 Wharfside Street, Charleston, SC 29401',
      //   phone: '',
      //   price: 26,
      //   duration: '1.5 hours',
      //   desc:
      //     'Climb aboard the Carolina Belle to enjoy the beauty of the Charleston Harbor and learn the rich history of the Holy City. During the scenic and relaxing 90 minute tour, you will see over 75 landmarks and points of interest!  Your professional USCG licensed captain will narrate history, sights, and facts about the Charleston Harbor as you pass locations critical to United States history.',
      //   img: '',
      //   linkToBookOnline: 'https://www.charlestonharbortours.com',
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '11:30AM, 1:30PM, 3:30PM',
      //       tuesday: true,
      //       tuesdayTime: '11:30AM, 1:30PM, 3:30PM',
      //       wednesday: true,
      //       wednesdayTime: '11:30AM, 1:30PM, 3:30PM',
      //       thursday: true,
      //       thursdayTime: '11:30AM, 1:30PM, 3:30PM',
      //       friday: true,
      //       fridayTime: '11:30AM, 1:30PM, 3:30PM',
      //       saturday: true,
      //       saturdayTime: '11:30AM, 1:30PM, 3:30PM',
      //       sunday: true,
      //       sundayTime: '11:30AM, 1:30PM, 3:30PM'
      //     }
      //   ],
      //   options: ['history', 'boat']
      // },
      // {
      //   tourName: 'Calhoun Mansion',
      //   _id: 'history_calhoun-mansion',
      //   companyName: 'Calhoun Mansion',
      //   address: '',
      //   phone: '843-722-8205',
      //   price: 75,
      //   duration: '1.5 hours',
      //   desc:
      //     'Almost a century before it was built, the ground on which George Walton Williams would build his home was hallowed in the tradition of optimistic patriotism. 14-16 Meeting Street in downtown Charleston was originally part of the Lowndes House plot owned by Governor Charles Pinckney, who hosted George Washington three times in 1791.  The New Grand Tour is an hour and half long. It covers the entire Mansion, including the Italianate tower. ',
      //   img: '',
      //   linkToBookOnline: 'http://www.calhounmansion.net/tour_schedule/',
      //
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM',
      //       tuesday: true,
      //       tuesdayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM',
      //       wednesday: true,
      //       wednesdayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM',
      //       thursday: true,
      //       thursdayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM',
      //       friday: true,
      //       fridayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM',
      //       saturday: true,
      //       saturdayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM',
      //       sunday: true,
      //       sundayTime: '11:00AM, 12:30PM, 2:00PM, 3:30pm, 5:00PM'
      //     }
      //   ],
      //   options: ['history', 'museum', 'plantation']
      // },
      // {
      //   tourName: 'Ghosts of Charleston Tour',
      //   _id: 'haunted_ghosts-of-charleston-tour',
      //   companyName: 'Tour Charleston',
      //   address:
      //     'TOUR CHARLESTON, LLC, 2A CUMBERLAND STREET, CHARLESTON, SC, 29401',
      //   phone: '843-723-1670',
      //   price: 25,
      //   duration: '1.5 hours',
      //   desc:
      //     "The highlight of Tour Charleston's Ghosts of Charleston Tour is entering the lush, spellbinding Unitarian Church Graveyard built in 1772. Real time hauntings occur only a handful of times a year. However, since 1996, when we started what is now Charleston's oldest ghost tour, spirits in the Unitarian Church Graveyard have reached out to many people on our tour in visual, tactile and auditory ways.",
      //   img: '',
      //   linkToBookOnline: 'http://www.tourcharleston.com/ghost-tours/',
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '7:30PM, 9:30PM',
      //       tuesday: true,
      //       tuesdayTime: '7:30PM, 9:30PM',
      //       wednesday: true,
      //       wednesdayTime: '7:30PM, 9:30PM',
      //       thursday: true,
      //       thursdayTime: '7:30PM, 9:30PM',
      //       friday: true,
      //       fridayTime: '7:30PM, 9:30PM',
      //       saturday: true,
      //       saturdayTime: '7:30PM, 9:30PM',
      //       sunday: true,
      //       sundayTime: '7:30PM, 9:30PM'
      //     }
      //   ],
      //   options: ['history', 'haunted', 'walking']
      // },
      //
      // {
      //   tourName: 'The Haunted Jail Tour',
      //   _id: 'haunted_the-haunted-jail-tour',
      //   companyName: 'BullDog Tours',
      //   address: '',
      //   price: '',
      //   duration: '',
      //   type: '',
      //   desc:
      //     'Join us for a behind-the-scenes tour of the Old City Jail, which housed some of Charleston’s most infamous criminals, 19th-century pirates, and Civil War prisoners. Located on Magazine Street downtown, the Old City Jail was in operation from 1802 until 1939, and most of the building’s original structures — like the cells and warden’s quarters — remain intact.  Book Your Tour!',
      //   img: '',
      //   linkToBookOnline: '',
      //   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
      //   //////////    MINUTES EVERY DAY?
      //   schedule: [
      //     {
      //       monday: true,
      //       mondayTime: '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM',
      //       tuesday: true,
      //       tuesdayTime:
      //         '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM',
      //       wednesday: true,
      //       wednesdayTime:
      //         '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM',
      //       thursday: true,
      //       thursdayTime:
      //         '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM',
      //       friday: true,
      //       fridayTime: '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM',
      //       saturday: true,
      //       saturdayTime:
      //         '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM',
      //       sunday: true,
      //       sundayTime: '7:00PM, 7:30PM, 8:00PM, 8:30PM, 9:00PM, 9:30PM, 10:00PM'
      //     }
      //   ],
      //   options: ['history', 'haunted']
      // }
    }
  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))

// {
//   tourName: 'Template',
//   _id: 'history_template',
//   companyName: 'F',
//   address: '',
//   price: '',
//   duration: '',
//   type: '',
//   desc: '',
//   img: '',
//   linkToBookOnline: '',
//   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
//   //////////    MINUTES EVERY DAY?
//   schedule: [
//     {
//       monday: false,
//       mondayTime: null,
//       tuesday: false,
//       tuesdayTime: null,
//       wednesday: false,
//       wednesdayTime: null,
//       thursday: false,
//       thursdayTime: null,
//       friday: false,
//       fridayTime: null,
//       saturday: true,
//       saturdayTime: '1:00PM',
//       sunday: false,
//       sundayTime: null
//     }
//   ],
//   options: [
//     {
//       history: true,
//       adventure: false,
//       culinary: false,
//       haunted: false,
//       museum: false,
//       carriage: false,
//       boat: false,
//       water: false,
//       walking: true,
//       bike: false,
//       plantation: false,
//       food: false,
//       wine: false,
//       pub: false
//     }
//   ]
// }
// {
//   tourName: 'Template',
//   _id: 'history_template',
//   companyName: 'F',
//   address: '',
//   price: '',
//   duration: '',
//   type: '',
//   desc: '',
//   img: '',
//   linkToBookOnline: '',
//   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
//   //////////    MINUTES EVERY DAY?
//   schedule: [
//     {
//       monday: false,
//       mondayTime: null,
//       tuesday: false,
//       tuesdayTime: null,
//       wednesday: false,
//       wednesdayTime: null,
//       thursday: false,
//       thursdayTime: null,
//       friday: false,
//       fridayTime: null,
//       saturday: true,
//       saturdayTime: '1:00PM',
//       sunday: false,
//       sundayTime: null
//     }
//   ],
//   options: [
//     {
//       history: true,
//       adventure: false,
//       culinary: false,
//       haunted: false,
//       museum: false,
//       carriage: false,
//       boat: false,
//       water: false,
//       walking: true,
//       bike: false,
//       plantation: false,
//       food: false,
//       wine: false,
//       pub: false
//     }
//   ]
// }
// {
//   tourName: 'Template',
//   _id: 'history_template',
//   companyName: 'F',
//   address: '',
//   price: '',
//   duration: '',
//   type: '',
//   desc: '',
//   img: '',
//   linkToBookOnline: '',
//   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
//   //////////    MINUTES EVERY DAY?
//   schedule: [
//     {
//       monday: false,
//       mondayTime: null,
//       tuesday: false,
//       tuesdayTime: null,
//       wednesday: false,
//       wednesdayTime: null,
//       thursday: false,
//       thursdayTime: null,
//       friday: false,
//       fridayTime: null,
//       saturday: true,
//       saturdayTime: '1:00PM',
//       sunday: false,
//       sundayTime: null
//     }
//   ],
//   options: [
//     {
//       history: true,
//       adventure: false,
//       culinary: false,
//       haunted: false,
//       museum: false,
//       carriage: false,
//       boat: false,
//       water: false,
//       walking: true,
//       bike: false,
//       plantation: false,
//       food: false,
//       wine: false,
//       pub: false
//     }
//   ]
// }
