/*
 * Sources:
 * - old hdd disc, flysoft projects
 * - alex/WebstormProjects
 * - alex/WebstormProjects/promo
 * - alex/Documents/Projects
 * - alex/Documents/Projects/20xx
 * - BFG...
 */

const works = [
    {
      title: 'Fastcv',
      description: {
        common: 'Create your site swiftly with no development'
      },
      dateStart: 'Feb 2018',
      dateEnd: 'Mar 2018',
      url: 'https://github.com/ArtemGrishanov/fastcv',
      images: [
        '//grishanov.org/img/fastcv1.jpg',
        '//grishanov.org/img/fastcv2.jpg'
      ],
      url: 'https://github.com/artemgrishanov/fastcv',
      tags: ['react','es6','jsx','javascript','html','css','webpack'],
      teamSize: 2,
      role: 'Developer',
      complexity: 2
    },
    {
      featured: true,
      title: 'Testix',
      description: {
        common: 'Online interactive content creation editor. No programmers skills are needed: build a quiz or a game online in minutes and publish it!',
        benefits: 'A few companies already have created their products and increase user engagement!',
        tech: 'Many different technical decisions. Also, tricky facebook api panorama publishing process was implemented.'
      },
      dateStart: '2015',
      dateEnd: '2018',
      images: [
        '//grishanov.org/img/testix3.jpg',
        '//grishanov.org/img/testix1.jpg',
        '//grishanov.org/img/testix2.jpg',
        '//grishanov.org/img/testix4.jpg',
        '//grishanov.org/img/testix5.jpg'
      ],
      url: 'https://testix.me',
      tags: ['aws','javascript','html','css','facebook api','social','canvas'],
      teamSize: 3,
      role: 'Founder, CTO',
      complexity: 5
    },
    {
      featured: true,
      title: 'Photo colorizer',
      description: {
        common: 'Initially, it was an educational project developed by students. Then we prepared the app for production, making it available for millions of users.',
        tech: 'Neuro network allows you to restore an old photos colors.'
      },
      dateStart: 'Apr 2017',
      dateEnd: 'May 2017',
      images: [
        '//grishanov.org/img/colorizer1.jpg'
      ],
      url: '',
      tags: ['ai','html','javascript','social'],
      teamSize: 10,
      role: 'Project Manager',
      complexity: 4
    },
    {
      title: 'The Pushkin state museum of fine arts',
      description: {
        common: 'Partner project with a famous museum. I coordinated a remote developers team and partners for proper integration of different services.',
        benefits: 'Reputation grows for our company and new clients for the museum.',
        tech: 'VR service integration into our application.'
      },
      dateStart: 'Apr 10 2017',
      dateEnd: 'Apr 28 2017',
      images: [
        '//grishanov.org/img/museums1.jpg',
        '//grishanov.org/img/museums2.jpg'
      ],
      url: 'https://artsmuseum.ok.ru/',
      tags: ['html', 'javascript', 'audio'],
      complexity: 2,
      role: 'Project Manager',
      teamSize: 8
    },
    {
      title: 'Ok.ru Happy Birthday 9!',
      description: {
        common: 'How to attract users to company\'s date? Build a funny viral game! Blow a balloon large as you can.'
      },
      dateStart: 'Feb 2016',
      dateEnd: 'Mar 2016',
      images: [
        '//grishanov.org/img/ok9let_1.jpg',
        '//grishanov.org/img/ok9let_2.jpg',
        '//grishanov.org/img/ok9let_3.jpg'
      ],
      url: 'https://9.ok.ru',
      tags: ['animation', 'html', 'javascript', 'css'],
      complexity: 4,
      role: 'Developer',
      teamSize: 4
    },
    {
      title: 'Newyear 2015',
      description: {
        common: 'It is a mini-game where the user is required to collect the specific combination of gems to go through the levels.',
        tech: 'Single model for mobile and web app versions, drag-n-drop.'
      },
      dateStart: 'Nov 01 2015',
      dateEnd: 'Dec 24 2015',
      images: [
        '//grishanov.org/img/newyear2015_1.jpg',
        '//grishanov.org/img/newyear2015_2.jpg',
        '//grishanov.org/img/newyear2015_3.png',
      ],
      url: null,
      tags: ['backbone','javascript','html','game'],
      complexity: 5,
      role: 'Developer',
      teamSize: 6
    },
    {
      title: 'The School',
      description: {
        common: 'Simple viral game. Collect all items in your school room.',
        tech: 'Canvas animations, asynchronous API request pool, localization on-the-fly!'
      },
      dateStart: 'Jul 30 2014',
      dateEnd: 'Sep 01 2014',
      images: [
        '//grishanov.org/img/magic_1.jpg',
        '//grishanov.org/img/magic_2.jpg',
        '//grishanov.org/img/magic_3.jpg'
      ],
      url: null,
      tags: [],
      complexity: 4,
      role: 'Developer',
      teamSize: 3
    },
    {
      title: 'Hockey TV Show Video Quiz',
      description: {
        common: 'Video polling on the tv show where you shall answer faster than your friends. You can publish your result in the social network.',
        tech: 'JSON quiz format for fast editing.'
      },
      dateStart: 'Jul 30 2014',
      dateEnd: 'Sep 01 2014',
      images: [
        '//grishanov.org/img/molod2014.jpg'
      ],
      url: null,
      tags: [],
      complexity: 2,
      role: 'Developer',
      teamSize: 3
    },
    {
      featured: true,
      title: 'Present builder (HTML version)',
      description: {
        common: 'The present builder allows you to create a small cards (presents) users can send their friends. A user can upload the image from local disk or select one in his profile. After decoration, the user can upload the result to a social network for moderation. Admin panel for professional designers also was implemented. They upload sprites and can view a live preview.',
        benefits: 'This tool increased presents count on ok.ru portal\'s database and sales.',
        tech: 'Creating a bitmap from a bunch of canvases was an exciting task.'
      },
      dateStart: 'May 22 2014',
      dateEnd: 'Jul 25 2014',
      images: [
        '//grishanov.org/img/constructor4.jpg',
        '//grishanov.org/img/constructor3.jpg',
        '//grishanov.org/img/constructor5.jpg',
        '//grishanov.org/img/constructor1.png',
        '//grishanov.org/img/constructor2.png'
      ],
      url: 'https://ok.ru/app/constructor',
      tags: ['html', 'css', 'javascript', 'ajax', 'canvas', 'cors', 'social', 'rest', 'grunt', 'svg', 'animation'],
      complexity: 5,
      role: 'Developer',
      teamSize: 3
    },
    {
      title: 'Easter 2014',
      description: {
        common: 'Make your own Easter egg and present it to a friend.',
        tech: 'Pre-rendering all design combinations (more than 600 eggs). After that, a client should register only combination index.'
      },
      dateStart: 'Mar 11 2014',
      dateEnd: 'Mar 30 2014',
      images: [
        '//grishanov.org/img/easter2014.jpg'
      ],
      url: null,
      tags: [],
      complexity: 4,
      role: 'Developer',
      teamSize: 3
    },
    {
      title: 'Cat detector',
      description: {
        common: 'Hackathon project. Implementing new experimental features for a social network. The app detects cats on user-uploaded photos.'
      },
      images: [
        '//grishanov.org/img/catdetector1.png',
        '//grishanov.org/img/catdetector2.png',
        '//grishanov.org/img/catdetector3.png'
      ],
      dateStart: 'Jan 01 2014',
      dateEnd: 'Jan 30 2014',
      url: null,
      tags: ['AI', 'social', 'javascript'],
      complexity: 4,
      role: 'Project Manager',
      teamSize: 4
    },
    {
      featured: true,
      title: 'Olympic games 2014',
      description: {
        common: 'A user must collect coins and reach the finish. Share result with your friends!',
        benefits: 'Relation with an important event for the business.',
        tech: 'Classic game loop implementation on javascript: sprites, collisions, key handling. Designing of the infinite game world was amusing including textures and track curve.'
      },
      dateStart: 'Dec 11 2013',
      dateEnd: 'Feb 14 2014',
      images: ['//grishanov.org/img/olimp.png'],
      url: null,
      tags: ['html', 'javascript', 'jquery', 'game', 'animation', 'canvas'],
      complexity: 4,
      role: 'Developer',
      teamSize: 3
    },
    {
      title: 'Film promo',
      description: {
        common: 'The project related to the movie release. My first-time responsive experience.'
      },
      images: [
        '//grishanov.org/img/okfilm1.jpg',
        '//grishanov.org/img/okfilm2.jpg'
      ],
      dateStart: 'Nov 13 2013',
      dateEnd: 'Nov 25 2013',
      url: null,
      tags: ['html5', 'video', 'css', 'mobile'],
      complexity: 1,
      role: 'Developer',
      teamSize: 2
    },
    {
      title: 'Friends Gallery',
      description: {
        common: 'Guess the interests of your friend; collect a gallery of your friends.',
        benefits: 'Gamification helps to collect useful information about social network users.',
        tech: 'A lot of custom UI items written in pure Actionscript.'
      },
      images: [
        '//grishanov.org/img/interests1.jpg',
        '//grishanov.org/img/interests2.jpg'
      ],
      dateStart: 'Jul 30 2013',
      dateEnd: 'Oct 01 2013',
      url: null,
      tags: ['actionscript3','flash','flex','animation','rest','social'],
      complexity: 5,
      role: 'Developer',
      teamSize: 5
    },
    {
      title: 'New Year 2013',
      description: {
        common: 'In this charming game, a user must collect magic items to win virtual prizes.',
        tech: 'A lot of work with animations in abode flash studio.'
      },
      images: ['//grishanov.org/img/newyear2013.jpg'],
      dateStart: 'Sep 05 2012',
      dateEnd: 'Dec 20 2012',
      url: null,
      tags: ['flash','actionscript3','flex','animation','rest','social'],
      complexity: 4,
      role: 'Developer',
      teamSize: 6
    },
    {
      title: 'Mayor Quiz',
      description: {
        common: 'Entertaining test for the users to demolish myths about the social network. In the app, you can find questions about well-known facts of the social network.'
      },
      images: [
        '//grishanov.org/img/mayor1.jpg',
        '//grishanov.org/img/mayor2.jpg'
      ],
      dateStart: 'Sep 06 2012',
      dateEnd: 'Nov 23 2012',
      url: null,
      tags: ['actionscript3','flash','flex','animation','rest','social'],
      complexity: 3,
      role: 'Developer',
      teamSize: 3
    },
    {
      title: 'Security Quiz',
      description: {
        common: 'The application improves user security knowledge about the Internet. Real fraudsters’ methods to hack the users are shown as the questions for the quiz.'
      },
      images: [
        '//grishanov.org/img/securityquiz1.jpg'
      ],
      dateStart: 'Jul 13 2012',
      dateEnd: 'Sep 18 2012',
      url: null,
      tags: ['actionscript3','flash','flex','animation','rest','social'],
      complexity: 3,
      role: 'Developer',
      teamSize: 5
    },
    {
      title: 'Shopping School',
      description: {
        common: 'Guess the real price of the product and win a prize. Partners gained a massive number of leads.'
      },
      images: [
        '//grishanov.org/img/shoppingschool1.jpg',
        '//grishanov.org/img/shoppingschool2.jpg'
      ],
      complexity: 2,
      dateStart: 'Aug 31 2011',
      dateEnd: 'Sep 30 2011',
      tags: ['actionscript3','Flex']
    },
    {
      featured: true,
      title: 'Informer',
      description: {
        common: 'A tool for intranet use. It visualizes company KPIs, tweets, and staff photo to show on LED panels in the offices.',
        tech: 'The app grabbed data from warehouse system. Twitter API was integrated.'
      },
      images: [
        '//grishanov.org/img/informer1.jpg',
        '//grishanov.org/img/informer2.jpg',
        '//grishanov.org/img/informer3.jpg',
        '//grishanov.org/img/informer4.jpg'
      ],
      dateStart: 'Jun 30 2011',
      dateEnd: 'Aug 30 2011',
      tags: ['graphics','actionscript3','flash','twitter','rest']
    },
    {
      featured: true,
      title: 'Take 2',
      description: {
        common: 'Well-known Take2 game implemented on facebook api. Multiplayer: you can arrange words for speed in real time. The app uses bots in case free users are not available.',
        tech: 'Crossword generation based on vocabulary. Programming of a bot playing with the user on his own.'
      },
      images: [
        '//grishanov.org/img/Take2_2.jpg',
        '//grishanov.org/img/Take2_screen.png'
      ],
      dateStart: 'Jan 20 2011',
      dateEnd: 'May 30 2011',
      url: null,
      tags: ['flash','actionscript3','animation','facebook api','game','rest','social'],
      complexity: 4,
      role: 'Developer',
      teamSize: 12
    },
    // {
    //   title: 'Chess',
    //   //TODO
    // },
    {
      title: 'Facecontrol',
      description: {
        common: 'Small funny date app, mark girls photos and select the best one.'
      },
      images: ['//grishanov.org/img/Facecontrol.jpg'],
      dateStart: 'Jul 2010',
      dateEnd: 'Dec 2010'
    },
    {
      title: 'Barman',
      description: {
        common: 'Hobby project. Developed a concept, hired a designer.'
      },
      images: ['//grishanov.org/img/Barman.jpg'],
      role: 'Founder, Developer',
      dateStart: 'Aug 2010',
      dateEnd: 'Nov 2010',
      tech: ['java', 'mysql', 'php', 'actionscript3', 'animation', 'flash', 'rest', 'vk', 'social', 'gamedev']
    },
    {
      title: 'Radio',
      description: {
        common: 'The application gave personal recommendations based on user music library.',
        tech: 'Full stack development experience: PHP+MySql backend and Adobe Flex client.'
      },
      images: ['//grishanov.org/img/Radio.jpg'],
      tags: ['php','lastfm','rest','actionscript3','flex'],
      dateStart: '2010',
      dateEnd: '2010'
    },
    {
      featured: true,
      title: 'Mafia',
      description: {
        common: 'Hardcore mobile arcade. iOs? Android? Java2ME only! Go through all locations, fight with your enemies and restore the truth.',
        tech: 'We developed a new game engine with all standard features: collision detectors, animations, state management, scripting language, complex memory and performance management.'
      },
      dateStart: '2008',
      dateEnd: '2009',
      images: [
        '//grishanov.org/img/Brat2.jpg',
        '//grishanov.org/img/Brat_2.jpg',
        '//grishanov.org/img/Brat_3.jpg',
        '//grishanov.org/img/Brat_4.jpg',
        '//grishanov.org/img/Brat_5.jpg'
      ],
      tags: ['java', 'mobile', 'game'],
      complexity: 5,
      role: 'Developer',
      teamSize: 7
    },
    {
      title: 'Resource tool for mobile games',
      description: {
        common: 'The app for packing small images to sprite to minimize app size.',
        tech: 'We used a tricky genetic algorithm.'
      },
      dateStart: '2008',
      dateEnd: '2008',
      images: [], // no images here
      tags: ['c#','.net'],
      complexity: 4,
      teamSize: 2,
      role: 'Developer'
    },
    {
      featured: true,
      title: 'Tic Tac Toe',
      description: {
        common: 'Mobile game. Put five "x" in one line on the large field.',
        tech: 'Amazing AI with a level difference! Beating it was difficult.'
      },
      images: [
        '//grishanov.org/img/TicTacToe2.jpg',
        '//grishanov.org/img/TicTacToe_1.jpg'
      ],
      complexity: 5,
      dateStart: '2007',
      dateEnd: '2007',
      tags: ['java', 'ai', 'game']
    },
    {
      title: 'Numerology',
      description: {
        common: 'Input your data, and you will know your fate!',
        tech: 'Custom UI elements. We prepared the app to dozens of devices.'
      },
      images: [
        '//grishanov.org/img/numerology1.jpg',
        '//grishanov.org/img/numerology2.jpg',
        '//grishanov.org/img/numerology3.jpg',
        '//grishanov.org/img/numerology4.jpg',
      ],
      complexity: 3,
      dateStart: 'Jan 01 2006',
      dateEnd: 'Dec 01 2006',
      teamSize: 2
    },
    {
      title: 'Cheat Sheets',
      description: {
        common: 'This tiny app contains a lot of information about all high school course. My first professional experience as software engineer.'
      },
      images: [
        '//grishanov.org/img/cheatsheets.jpg'
      ],
      complexity: 3,
      dateStart: 'Jun 01 2004',
      dateEnd: 'Oct 01 2005',
      tags: ['java'],
      teamSize: 4
    }
]

export const cv = {
  name: 'Artem Grishanov',
  email: 'grishanov.artem@gmail.com',
  photoUrl: '//grishanov.org/avatar/avatar380.jpg',
  quote: 'One, learn a lot about things that matter. Two, work on problems that interest you and three, with people you like and respect. - Paul Graham',
  about: 'I am 32. Software developer and entrepreneur. Worked in different IT cultures: startups and large companies. 2004-2010 mobile app developer, since 2011 work as frontend developer mainly. Always open to new opportunities, and like to meet all challenges from "fix this old bug" to "build a team and create a new successful startup". Also I\'am interested in marketing, business, and education',
  personalStats: [
    {label: 'Experience', value: '13 years'},
    {label: 'Projects',  value: '50+'},
    {label: 'Coffee cups',  value: '4096'}
  ],
  selectedWorks: [
    works[1], // testix
    works[23], // mafia
    works[8] // present builder
  ],
  works: works,
  facebook: '//facebook.com/artem.grishanov',
  linkedin: '//www.linkedin.com/in/artem-grishanov-88b24658/',
  github: '//github.com/artemgrishanov/',
  pdfcv: '//grishanov.org/pdf/cv.pdf',
  skype: 'artemgrishanov'
}
