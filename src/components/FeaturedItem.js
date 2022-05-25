import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconGenerator } from './IconGenerator';

const FeaturedItem = (props) => {

    const {
            title,
            slug,
            excerpt,
            tech,
            thumbnail,
            githubUrl,
            liveUrl

    } = props;

    const item = {
        hidden: { y: '50px', opacity: 0 },
        show: { y: '0px', 
                opacity: 1, 
                transition: { 
                                delay: 0,
                                x: { type: 'spring', stiffness: 50 },
                                default: { duration: 1 }  }},
    }

  return (
    
        <motion.div 
            variants={item}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true }}
            className="featured-item">
            <img src={thumbnail} alt="placehoder" className="featured-item__thumbnail" />
            <div className="featured-item__info">
                <h3>
                    { title }
                </h3>
                <p>
                    { excerpt }
                </p>
                <div className="featured-item__tech">
                    <ul>
                        {
                            tech.map( (item, i) => <li key={i}>{IconGenerator(item)}</li>)
                        }
                    </ul>
                </div>
                <div className="featured-item__links">
                    <a href={liveUrl}>Live Site</a>
                    <a href={githubUrl}>GitHub</a>
                    <Link to={`/project/${slug}`}>Learn More</Link>
                </div>
            </div>
        </motion.div>
  )
}

export default FeaturedItem;