/* 
    Project Fields

    slug: string [REQUIRED]
    title: string [REQUIRED]
    featured: boolean [REQUIRED]
    excerpt: string [REQUIRED]
    technologies: string[]
    roles: string[]
    category: string[]
    thumbnailImg: string [REQUIRED]
    bannerImg: string 
    liveUrl: string
    githubUrl: string
    moreInfo: boolean [REQUIRED]
    overview: string
    development: string
    reflection: string
    screenshots: string[]
    prevLink: string [REQUIRED]
    nextLink: string [REQUIRED]
*/

// Cinephile
import cinephileThumbnailImg from '../Assets/asset-cinephile/featured-cinephile.webp';
import cinephileBannerImg from '../Assets/asset-cinephile/banner-cinephile.webp';
import cinephileScreenshot1 from '../Assets/asset-cinephile/screenshots/cinephile-carousel-1.png';
import cinephileScreenshot2 from '../Assets/asset-cinephile/screenshots/cinephile-carousel-2.png';
import cinephileScreenshot3 from '../Assets/asset-cinephile/screenshots/cinephile-carousel-3.png';

// TypeScript To Do App
import typeScriptToDoThumbnailImg from '../Assets/asset-typescript-to-do-app/featured-typescript-to-do-app.webp';

// Westcozy Cabins
import westCozyCabinsThumbnailImg from '../Assets/asset-westcozy-cabins/featured-westcozy-cabins.webp';
import westCozyCabinsBannerImg from '../Assets/asset-westcozy-cabins/banner-westcozy-cabins.webp';

// DT Global
import dtGlobalThumbnailImg from '../Assets/asset-dt-global/featured-dt-global.webp';

// Hi Low
import hiLowThumbnailImg from '../Assets/asset-hi-low-game/featured-hi-low-game.webp';

// Portfolio
import portfolioThumbnailImg from '../Assets/asset-portfolio/featured-portfolio.webp';
import portfolioBannerImg from '../Assets/asset-portfolio/banner-portfolio.webp';

// Weather App
import weatherAppThumbnailImg from '../Assets/asset-weather-app/featured-weather-app.webp';

export const projectData = [
    {
        slug: 'cinephile',
        title: 'Cinephile',
        featured: true,
        excerpt:
            'A single page application created with React that allows visitors to browse, learn about, and favourite movies from various categories.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Redux'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        category: [
            'All',
            'Featured',
        ],
        thumbnailImg: cinephileThumbnailImg,
        bannerImg: cinephileBannerImg,
        liveUrl: 'https://denniskimweb.ca/cinephile/',
        githubUrl: 'https://github.com/dennisk94/Cinephile',
        moreInfo: true,
        overview: "Cinephile is a single page application created with React that allows visitors to browse, learn about, and favourite movies from various categories. Users can choose from popular, top rated, now playing, and upcoming. This application uses the TMDb API to fetch movie data and outputs the content dynamically to the webpage. Users can also save movies to their favourites.",
        design: "The design goal for this app was to create a modern, clean and intuitive interface that allows the user to conveniently learn about the movies they are interested in. A dark theme along with accent colours such as vivid blue and neon violet were used to invoke a calm yet enticing web experience. High-fidelity mockups were created through Adobe Photoshop as a starting point for the design phase. After that, an interactive prototype was created using Adobe XD in order to provide a clear interactive guidance for the development phase.",
        development: "A movies filter was used to allow users to view products according to popular, top-rated, now-playing and upcoming. This feature required the manipulation of the TMDB API with the use of the React useState and useEffect hooks. The banner carousel changes periodically to showcase some of the most popular movies in the catalogue. The Add to Favourites feature allows a user to add their favourite movies by storing them in the local storage of their browsers. A global state was created and used to keep track of favourited movies across different React components. The favourited movies will display on the favourites page and also has a button that allows users to add/remove favourites on every page.",
        reflection: "The project was a fun introduction to ReactJs that allowed me the space to explore the different functionalities and foundational concepts that exists within the framework. In a short span of time, I was able to create a dynamic application and left me wanting to dive deeper into React.",
        screenshots: [
            cinephileScreenshot1,
            cinephileScreenshot2,
            cinephileScreenshot3
        ],
        prevLink: '/portfolio',
        nextLink: '/westcozy-cabins'
    },
    {
        slug: 'typescript-to-do-app',
        title: 'TypeScript To Do App',
        featured: true,
        excerpt:
            'A responsive to do app with CRUD features using TypeScript, React JS, Redux, Local Storage and Tailwind CSS.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Redux',
            'TypeScript'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        category: [
            'All',
            'Fun'
        ],
        thumbnailImg: typeScriptToDoThumbnailImg,
        bannerImg: '',
        liveUrl: 'https://denniskimweb.ca/todo-app/',
        githubUrl: 'https://github.com/dennisk94/Todo-App',
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
    {
        slug: 'westcozy-cabins',
        title: 'Westcozy Cabins',
        featured: true,
        excerpt:
            'Westcozy Cabins is an fictional e-commerce website for a cabin rental business.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'jQuery',
            'WordPress',
            'WooCommerce'
        ],
        roles: [
            "Development",
            "Architecture",
        ],
        category: [
            'All',
            'Featured',
        ],
        thumbnailImg: westCozyCabinsThumbnailImg,
        bannerImg: westCozyCabinsBannerImg,
        liveUrl: '',
        githubUrl: 'https://github.com/dennisk94/Westcozy-Cabins',
        moreInfo: true,
        overview: "Westcozy Cabins is fictional e-commerce website project for a cabin rental business. This is a collaborative project that was designed and developed from scratch with 3 other team members. We built a fully custom WordPress theme based on the Underscores starter theme. The project involved project management principles, UI/UX design, content planning and a customized WordPress development with the WooCommerce plugin. I mainly focused on WordPress design and SEO, such as creating high-fidelity mockups and customizing Yoast SEO.",
        design: "The design of this site is to convey relaxation. The primary colour for the website was light green and orange to invoke feelings of relaxation and fun while representing the natural beauty of Tofino, BC.",
        development: "We used the WooCommerce plugin and adjusted the booking settings according to our client's requirements. The booking feature allows users to select and reserve bookable dates. We started with configuring the back-end of WordPress then dived into template and plugin files. To have better control of the content, we created custom fields using the ACF(Advanced Custom Fields) plugin and output the content of the fields using appropriate template files. We also used action hooks and filter hooks to organize the content based on the wireframes. We made sure our clients can easily update the content on their own and display them properly without touching the template files.",
        reflection: "This particular project was a great learning experience as it allowed us to experience the dynamics of working in a team towards a larger goal. Being able to experience designing and developing a website from beginning to end provided an awesome environment to learn what it would be like working within a company in the future.",
        prevLink: '/cinephile',
        nextLink: '/portfolio'
    },
    {
        slug: 'dt-global',
        title: 'DT Global',
        featured: false,
        excerpt:
            'A custom WordPress website for a profit-for-purpose organization.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'jQuery',
            'WordPress',
            'ACF'
        ],
        roles: [
            "Development",
            "Architecture",
        ],
        category: [
            'All',
        ],
        thumbnailImg: dtGlobalThumbnailImg,
        bannerImg: '',
        liveUrl: 'https://dt-global.com/',
        githubUrl: '',
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
    {
        slug: 'hi-low-game',
        title: 'Hi-Low Game',
        featured: false,
        excerpt:
            'A number guessing game developed with HTML, CSS/Bootstrap and JavaScript. This was my first attempt at a JavaScript game.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        category: [
            'All',
            'Fun'
        ],
        thumbnailImg: hiLowThumbnailImg,
        bannerImg: '',
        liveUrl: 'https://denniskimweb.ca/hi-low-game/',
        githubUrl: 'https://github.com/dennisk94/Hi-Low',
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        featured: false,
        excerpt:
            'A portfolio website that was built from the ground up with React to highlight some of the projects I have worked on. Have a look and and enjoy.',
        technologies: [
            'HTML5',
            'CSS3',
            'Sass',
            'JavaScript',
            'React'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        category: [
            'All',
            'Featured',
        ],
        thumbnailImg: portfolioThumbnailImg,
        bannerImg: portfolioBannerImg,
        liveUrl: 'https://denniskimweb.ca/',
        githubUrl: 'https://github.com/dennisk94/Portfolio',
        moreInfo: true,
        overview: "A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer. As I want my portfolio to be more manageable in the future, I decided to build my portfolio using React so that I can update my projects easier with React's reusable components",
        design: "",
        development: "To make the projects more manageable, I created an array so store all the projects. I created reusable React components and utilized the useState and useEffect hooks to retrieve projects data. It makes updating/adding/deleting projects really convenient and efficient. In order to increase the visibility of the portfolio website in search engines, I used React Helmet to optimize the SEO. Therefore, it allowed me to have every page have its own custom meta tags. The React useState hook along with local storage was used to implement dark/light theme toggle functionality to create a better user experience.",
        reflection: "This portfolio project gave me an opportunity to try out new skills and get more familiar with React. It also allowed me to realize how React components are useful when building templates to serve project data. I spent a lot of time planning before the design and development phase. Breaking down the project into small pieces, following the plan allowed me to make the workflow smoother and more efficient. One thing that I learned during this project is to put myself in the user’s shoes. Only when we have learnt more about the target users, we can create a website that has the features/design that is most suitable to their needs. In the middle of the development phase, I realized React, as a single-page application, has limited capabilities of improving SEO. Although I have used React Helmet to get around the issue, I think using a static site generator such as Gatsby or NextJs to build a portfolio site will be a more SEO-friendly solution.",
        prevLink: '/westcozy-cabins',
        nextLink: '/cinephile'
    },
    {
        slug: 'weather-app',
        title: 'Weather App',
        featured: false,
        excerpt:
            'A fully responsive weather application that allows you to search weather information about particular cities. Redux was used for state management and the Unsplash API was used for changing the background image dynamically based on the city searched.',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'Redux'
        ],
        roles: [
            "Development",
            "Architecture",
            "Design"
        ],
        category: [
            'All',
            'Fun'
        ],
        thumbnailImg: weatherAppThumbnailImg,
        bannerImg: '',
        liveUrl: 'https://denniskimweb.ca/weather-app/',
        githubUrl: 'https://github.com/dennisk94/Weather-app',
        moreInfo: false,
        overview: "",
        design: "",
        development: "",
        reflection: "",
        prevLink: '',
        nextLink: ''
    },
];