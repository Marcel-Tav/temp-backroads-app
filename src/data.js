import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#about', text: 'about'},
  {id: 3, href: '#services', text: 'services'},
  {id: 4, href: '#tours', text: 'tours'}
];

export const socialMedia = [
  {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'}
]

export const services = [
  {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
  {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores, officia.'},
  {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit  Asperiores, officia.'}

]

export const tours = [
  { id: 1,
    img: tour1,
    name: 'Tibet Adventure',
    date: '26. august 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: 6,
    price: 2100
  },
  { id: 2,
    img: tour2,
    name: 'best of java',
    date: '1. oktober 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: 11,
    price: 1400
  },
  { id: 3,
    img: tour3,
    name: 'explore hong kong',
    date: '15. september 2020',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Chong kong',
    duration: 8,
    price: 1500
  },
  { id: 4,
    img: tour4,
    name: 'kenya highlights',
    date: '5. december 2019',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: 20,
    price: 3300
  },
]







