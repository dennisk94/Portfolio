//Images
import portfolioThumbnail from '../img/portfolio-thumbnail.png';
import portfolioBanner from '../img/portfolio-banner.png';
import portfolioCarousel1 from '../img/portfolio-carousel-1.png';
import portfolioCarousel2 from '../img/portfolio-carousel-2.png';
import portfolioCarousel3 from '../img/portfolio-carousel-3.png';
import capstoneThumbnail from '../img/capstone-thumbnail.png';
import capstoneBanner from '../img/capstone-banner.png';
import capstoneCarousel1 from '../img/capstone-carousel-1.png';
import capstoneCarousel2 from '../img/capstone-carousel-2.png';
import capstoneCarousel3 from '../img/capstone-carousel-3.png';
import cinephileBanner from '../img/cinephile-banner.png';
import cinephileThumbnail from '../img/cinephile-thumbnail.png';
import cinephileCarousel1 from '../img/cinephile-carousel-1.png';
import cinephileCarousel2 from '../img/cinephile-carousel-2.png';
import cinephileCarousel3 from '../img/cinephile-carousel-3.png';
import shoeDepotThumbnail from '../img/shoe-depot-thumbnail.png';
import shoeDepotBanner from '../img/shoe-depot-banner.png';
import shoeDepotCarousel1 from '../img/shoe-depot-carousel-1.png';
import shoeDepotCarousel2 from '../img/shoe-depot-carousel-2.png';
import shoeDepotCarousel3 from '../img/shoe-depot-carousel-3.png';
import weatherAppThumbnail from '../img/weather-app-thumbnail.png';
import todoAppThumbnail from '../img/todo-app-thumbnail.png';
import primerPropertiesThumbnail from '../img/prime-properties-thumbnail.png';

//All of the information about projects are stored here
export const projectsData = [

    {
        title: 'Capstone Project',
        slug: 'capstone-project',
        featured: true,
        category: ['All', 'Html/Css', 'WordPress'],
        moreInfo: true,
        excerpt: 'A custom WordPress website for a cabin rental service that also incorporates WooCommerce. Emphasis was placed on developing website with agile management approach.',
        overview: 'The Capstone Project is a custom WordPress website that we created with a team of 4 for a fictional vacation cabin rental service. The theme was fully customized using the Underscores starter theme. In a span of 5 weeks, our team actively took part in the researching, planning, developing, designing, and deployment of the website.',
        team: ['Steffen Neves-silva', 'Claire Kang', 'Rui Zhai', 'Dennis Kim'],
        roles: ['Development', 'Design', 'SEO'],
        tech: ['WordPress', 'Html', 'JavaScript',],
        research: 'Research was done on existing vacation cabin rentals in the areas surrounding Vancouver, BC. We also took inspiration mainly from Bowen Island in regards to their vacation activities and the amenities they have offer. Finally, we had a discovery meeting with our client to finalize design and functionality requirements for the website.', 
        design: 'Our design choices were based off of several vacation cabin rental websites. As a team, our goal was to create a modern website design using whitespace to our advantage, while maintaining the core essence of our website, which was to provide a relaxing and fun environment for our guests. In terms of colours, we chose a palette that exuded feelings of relaxation and fun. These colours consisted of light green, and orange. Low-fidelity wireframes were created for the custom WordPress site.',
        reflection: 'This particular project was a great learning experience as it allowed us to experience the dynamics of working in a team towards a larger goal.',
        thumbnail: capstoneThumbnail,
        bannerImg: capstoneBanner,
        carouselImg: [capstoneCarousel1, capstoneCarousel2, capstoneCarousel3],
        githubUrl: 'https://github.com/dennisk94/westcozy-cabins',
        liveUrl: 'https://westcozycabins.bcitwebdeveloper.ca/'
    },

    {
        title: 'Cinephile',
        slug: 'cinephile',
        featured: true,
        category: ['All', 'Html/Css', 'React', 'JavaScript'],
        moreInfo: true,
        excerpt: 'A movie database application created with React using the TMDB API. Modern techniques and methodologies were utilized.',
        overview: 'Cinephile is a single page application created with React that allows visitors to browse, learn about, and favourite movies from various categories. Users can choose from popular, top rated, now playing, and upcoming. The TMDB API was used to retrieve all the movie information.',
        team: ['Dennis Kim'],
        roles: ['Development', 'Design'],
        tech: ['Html', 'React', 'JavaScript'],
        research: 'Research was done on existing movie database websites such as IMDB and TMDB. The intention was to create an elegant and concise design that allowed the user to easily navigate the application.', 
        design: 'Low fidelity and high fidelity mockups were created using Photoshop and Adobe XD. The dark theme was used to highlight the movie posters, much like how whitespace is used to garner attention to a specific area/element on a webpage. High-fidelity mockups were created before developing the react app.',
        reflection: 'The project was a fun introduction to React allowed me the space to explore the different functionalities that exists within the framework. In a short span of time, I was able to create a dynamic application and left me wanting to dive deeper into React.',
        thumbnail: cinephileThumbnail,
        bannerImg: cinephileBanner,
        carouselImg: [cinephileCarousel1, cinephileCarousel2, cinephileCarousel3],
        githubUrl: 'https://github.com/dennisk94/Cinephile',
        liveUrl: 'https://denniskim.codes/cinephile'
    },

    {
        title: 'Portfolio',
        slug: 'portfolio',
        featured: true,
        category: ['All', 'Html/Css', 'React', 'JavaScript'],
        moreInfo: true,
        excerpt: 'A portfolio website that was built from the ground up with React to highlight a some of the projects I have worked on. Have a look and and enjoy.',
        overview: 'The portfolio website developed and designed to showcase past projects that I have completed. The website was created using React so that I may update my portfolio more efficiently in the future.',
        team: ['Dennis Kim'],
        roles: ['Development', 'Design'],
        tech: ['Html', 'React', 'JavaScript'],
        research: 'Many different versions of the portfolio that you see now were created to find the right styling and functionality that best represents what I am about.', 
        design: 'The goal in regards to design was to utilize a clean aesthetic while adding in a touch of animation to bring colour to the website.',
        reflection: 'This project helped me to get more comfortable with React and understand the importance of tailoring websites to best fit the needs of clients/users.',
        thumbnail: portfolioThumbnail,
        bannerImg: portfolioBanner,
        carouselImg: [portfolioCarousel1, portfolioCarousel2, portfolioCarousel3],
        githubUrl: 'https://github.com/dennisk94/Portfolio',
        liveUrl: 'https://denniskim.codes'
    },

    {
        title: 'Shoe Depot',
        slug: 'show-depot',
        featured: false,
        category: ['All', 'Html/Css', 'NextJs', 'JavaScript'],
        moreInfo: true,
        excerpt: 'A fully responsive full-stack E-Commerce application for running shoes built with Next.js, Redux and MongoDB. Users can add/remove items and place their orders. Orders will be sent to the MongoDB database.',
        overview: 'The inspiration for the Shoe Depot app stemmed from wanting to find a framework that would allow me to add meta data without utilizing a third party library. From there, I delved much deeper into the amazing capabilities of Next.js which eventually led to a full-fledged application. This was my first time working with a backend database in a project.',
        team: ['Dennis Kim'],
        roles: ['Development', 'Design'],
        tech: ['Html', 'Nextjs', 'JavaScript', 'Redux', ],
        research: 'Inspiration for this project was drawn from several different websites, such as Adidas, Sport Chek and Nike. Much of the app features and design was derived from each store respectively. ',
        design: 'In terms of design, I tried to take a minimalist approach with the intent of highlighting the products and checkout process. In regards to colour, I chose to go with a light theme to invoke a clean and modern feel from the website. Modern styling, HTML, and CSS were applied for this project',
        reflection: 'Overall, my experience with NextJs was great. With server-side rendering, it make working with the front and back end of the app smoother and more intuitive. I found NextJs to be a great introduction to working with a database. NextJs making calls to the database super easy since everything was in one place. In conclusion, I quite enjoyed learning NextJs and plan to utilize the framework in future projects.',
        thumbnail: shoeDepotThumbnail,
        bannerImg: shoeDepotBanner,
        carouselImg: [shoeDepotCarousel1, shoeDepotCarousel2, shoeDepotCarousel3],
        githubUrl: 'https://github.com/dennisk94/e-commerce',
        liveUrl: 'https://shoe-depot-nextjs.vercel.app/', 
    },

    {
        title: 'Weather App',
        slug: 'weather-app',
        featured: false,
        category: ['All', 'Html/Css', 'JavaScript', 'Redux', 'React' ],
        moreInfo: false,
        excerpt: 'A fully responsive weather application that allows you to search weather information about particular cities. Redux was used for state management and the Unsplash API was used for changing the background image dynamically based on the city searched.',
        tech: ['Html', 'JavaScript', 'Redux', 'React'],
        thumbnail: weatherAppThumbnail,
        githubUrl: 'https://github.com/dennisk94/Weather-app',
        liveUrl: 'https://denniskim.codes/weather-app/',
    },

    {
        title: 'TypeScript To Do App',
        slug: 'todo-app',
        featured: false,
        category: ['All', 'Html/Css', 'JavaScript', 'Redux', 'React', 'TypeScript', 'Tailwind'],
        moreInfo: false,
        excerpt: 'A responsive to do app with CRUD features using TypeScript, React JS, Redux, Local Storage and Tailwind CSS.',
        tech: ['Html', 'React', 'TypeScript', 'Redux', 'Tailwind'],
        thumbnail: todoAppThumbnail,
        githubUrl: 'https://github.com/dennisk94/Todo-App',
        liveUrl: 'https://denniskim.codes/todo-app/',
    },

    {
        title: 'Prime Properties',
        slug: 'prime-properties',
        featured: false,
        category: ['All', 'Html/Css', 'JavaScript', 'Tailwind'],
        moreInfo: false,
        excerpt: 'A responsive real estate website fully styled with Tailwind CSS. Modern HTML and CSS standards are followed.',
        tech: ['All', 'Html', 'JavaScript', 'Tailwind'],
        thumbnail: primerPropertiesThumbnail,
        githubUrl: 'https://github.com/dennisk94/Prime-Properties',
        liveUrl: 'https://denniskim.codes/prime-properties',
    },
]