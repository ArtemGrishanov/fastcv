/*
 * Sources:
 * - old hdd disc, flysoft projects
 * - alex/WebstormProjects
 * - alex/WebstormProjects/promo
 * - alex/Documents/Projects
 * - alex/Documents/Projects/20xx
 * -
 * - BFG...
 * - Flysoft...
 * - catofott
 * - Barman game for vk
 */


export const works = [
    {
      featured: true,
      title: 'Testix',
      description: {
        common: 'Online interactive content creation editor. No programmers skills are needed: build a quiz or a game online in minutes and publish it!',
        benefits: 'A few companies already have created their products and increase user engagement!',
        tech: 'Many different technical decisions. Also tricky facebook panorama publishing process was implemented.'
      },
      dateStart: '2015',
      dateEnd: '2018',
      images: [],//TODO
      url: 'https://testix.me',
      tags: ['aws','javascript','html','css','facebook','social','canvas'],
      teamSize: 3,
      role: 'Founder, CTO',
      complexity: 5
    },
    {
      featured: true,
      title: 'Photo colorizer',
      description: {
        common: 'Initially it was an educational project developed by students. Then we prepared the project for production, making it available for millions of users',
        tech: 'Neuro network allows you to restore an old photos colors.'
      },
      dateStart: 'Apr 2017',
      dateEnd: 'May 2017',
      images: [], //TODO
      url: '',
      tags: ['ai','html','javascript','social'],
      teamSize: 10,
      role: 'Project Manager',
      complexity: 4
    },
    {
      title: 'The Pushkin state museum of fine arts',
      description: {
        common: 'Partner project with famous museum. The project implied integration of different services. Also coordinating remote team.',
        benefits: 'Reputation grows for our company and new clients for museum.',
        tech: 'VR service integration into our application'
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
      featured: true,
      title: 'Present builder (html version)',
      description: {
        common: 'Present builder allows you to create a small graphic cards (presents) users can send their friends.'+
          ' A user can upload the image from local disk or select one in his profile. After decoration user can upload result to social network for moderation.'+
          ' Admin panel for professional designers also was implemented. They upload sprites and show live present preview.',
        benefits: 'This tool increased presents count on ok.ru portal\'s database and sails',
        tech: 'Creating bitmap from a bunch of canvases was a very interesting task.'
      },
      dateStart: 'May 22 2014',
      dateEnd: 'Jul 25 2014',
      images: [
        '//grishanov.org/img/constructor4.jpg',
        '//grishanov.org/img/constructor3.jpg',
        '//grishanov.org/img/constructor5.jpg',
        '//grishanov.org/img/constructor1.jpg',
        '//grishanov.org/img/constructor2.jpg'
      ],
      url: 'https://ok.ru/app/constructor',
      tags: ['html', 'css', 'javascript', 'ajax', 'canvas', 'cors', 'social', 'rest', 'grunt', 'svg', 'animation'],
      complexity: 5,
      role: 'Developer',
      teamSize: 3
    },
    {
      title: 'Newyear 2015',
      description: {
        common: 'New project where the user is required to collect the specific combination of gems to go through the levels',
        tech: 'Single model for mobile and web app versions, Drag-n-drop'
      },
      dateStart: 'Nov 01 2015',
      dateEnd: 'Dec 24 2015',
      images: [
        '//grishanov.org/img/newyear2015_1.jpg',
        '//grishanov.org/img/newyear2015_2.jpg',
        '//grishanov.org/img/newyear2015_3.png',
      ],
      url: null,
      tags: ['html','javascript','game'],
      complexity: 5,
      role: 'Developer',
      teamSize: 6
    },
    {
      title: 'Hockey TV Show Video Quiz',
      description: {
        common: 'Video polling on the tv show where you shall give an answer faster than your friends. You can publish your result in the social network',
        tech: 'JSON quiz format for fast edition'
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
      title: 'Ok.ru Happy Birthday 9!',
      description: {
        common: 'How to attract users for company\'s date? Build a funny viral game! Blow a balloon large as you can.'
      },
      dateStart: '',//TODO
      dateEnd: '',//TODO
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
      featured: true,
      title: 'Easter 2014',
      description: {
        common: 'Make your own Easter egg and present it to a friend',
        tech: 'Pre-rendering all design combinations (more than 600 eggs). After that, a client should register only combination index'
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
      featured: true,
      title: 'Olympic games 2014',
      description: {
        common: 'User must collect coins and reach finish. Share result with your friends!',
        benefits: 'Relation with important event for the business',
        tech: 'Classic game loop implementation on javascript: sprites, collisions, key handling. Designing of infinite game world was amusing including textures and track curve'
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
      title: 'Cat detector',
      description: {
        common: 'Hackaton project. Implementing new experimantal features for social network. The app detects cats on user uploaded photos.'
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
      title: 'Film promo',
      description: {
        common: 'The project related to the movie release. My first time responsive experience'
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
      title: 'Mayor Quiz',
      description: {
        common: 'Entertaining test for the users to demolish myths about the social network'
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
        common: 'The application that develops the skills of user’s secure activity in the Internet. Real fraudsters’ methods to hack the users are given as the questions for the test'
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
      title: 'Friends Gallery',
      description: {
        common: 'Guess the interests of your friend; collect a gallery of your friends',
        benefits: 'Gamification helps collecting useful information about social network users',
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
        common: ''
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
      title: 'Barman',
      description: {
        common: 'Hobby project. Develop a concept, hire a designer.'
      },
      images: ['//grishanov.org/img/Barman.jpg'],
      role: 'Founder, Developer',
      dateStart: 'Aug 2010',
      dateEnd: 'Nov 2010',
      tech: ['java', 'mysql', 'php', 'actionscript3', 'animation', 'flash', 'rest', 'vk', 'social', 'gamedev']
    },
    {
      title: 'Facecontrol',
      description: {
        common: ''
      },
      images: ['//grishanov.org/img/Facecontrol.jpg'],
      dateStart: 'Jul 2010',
      dateEnd: 'Dec 2010'
    },
    {
      title: 'Radio',
      description: {
        common: '',
        tech: ''
      },
      images: ['//grishanov.org/img/Radio.jpg'],
      tags: ['php','lastfm','rest','actionscript3','flex'],
      dateStart: '2010',
      dateEnd: '2010'
    },
    {
      title: 'Mafia',
      description: {
        common: 'Hardcore mobile action. iOs? Android? Java2ME only! Full English localization',
        tech: 'Scripting language. Complex memory management and bitmap data.'
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
      role: 'Developer'
    },
    {
      title: 'Resource tool for mobile games',
      description: {
        common: 'Tool for packing small images to sprite to minimize app size.',
        tech: 'Genetic algorithm was used'
      },
      dateStart: '2008',
      dateEnd: '2008',
      images: [],//TODO
      tags: ['c#','.net'],
      complexity: 4,
      teamSize: 2,
      role: 'Developer'
    },
    {
      title: 'Shopping School',
      description: {
        common: 'Guess the real price of the product and win a prize. KupiVIP brand gained a huge number of registrations',
        tech: ''
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
        common: 'A tool for intranet using. Visualizing company KPIs, tweets and staff photo to show on LED panels in the offices',
        tech: 'Grabbing data from CSV-like files. Twitter API integration.'
      },
      images: [
        '//grishanov.org/img/informer1.jpg',
        '//grishanov.org/img/informer2.jpg',
        '//grishanov.org/img/informer3.jpg',
        '//grishanov.org/img/informer4.jpg'
      ],
      dateStart: 'Jun 30 2011',
      dateEnd: 'Aug 30 2011',
      tags: ['graphics','actionscript3','flash','twitter','csv','rest']
    },
    {
      featured: true,
      title: 'Take 2',
      description: {
        common: 'Popular Take2 game implemented in Facebook. Multiplayer: you can arrange words for speed in real time. Bots are used in case free users are not available',
        tech: 'Crossword generation based on vocabulary. Programming of a bot playing with the user on his own'
      },
      images: [
        '//grishanov.org/img/Take2_2.jpg',
        '//grishanov.org/img/Take2_screen.png'
      ],
      dateStart: 'Jan 20 2011',
      dateEnd: 'May 30 2011',
      url: null,
      tags: ['flash','actionscript3','animation','facebook','game','rest','social'],
      complexity: 4,
      role: 'Developer',
      teamSize: 12
    },
    {
      title: 'Chess',
      //TODO
    },
    {
      featured: true,
      title: 'Tic Tac Toe',
      description: {
        common: '',
        tech: 'Amazing AI with level difference! It was very hard to beat it'
      },
      images: [
        '//grishanov.org/img/TicTacToe2.jpg',
        '//grishanov.org/img/TicTacToe_1.jpg'
      ],
      complexity: 5,
      dateStart: '2006',
      dateEnd: '2006',
      tags: ['java', 'ai', 'game']
    },
    {
      title: 'Numerology',
      description: {
        common: '',
        tech: 'Custom UI elements. Porting to tens of models'
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
        common: '',
        tech: 'CMS for manager. Building apps'
      },
      images: [
        '//grishanov.org/img/cheatsheets.jpg'
      ],
      complexity: 3,
      dateStart: 'Jun 01 2004',
      dateEnd: 'Oct 01 2005',
      tags: ['java'],
      teamSize: 4
    },
    {
      title: 'Fastcv',
      description: {
        common: 'Create your site simply with no development'
      },
      url: 'https://github.com/ArtemGrishanov/fastcv',
      images: [

      ]
    }
]
