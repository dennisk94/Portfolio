import { motion } from "framer-motion";
import { filterValues } from "../data/projectsFilterValues";

const ProjectFilters = ({ setFilter }) => {

  const filters = {
    hidden: { y: '50px', opacity: 0 },
    show: { y: '0px', 
            opacity: 1, 
            transition: { 
                            delay: .8,
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: .5 }  }},
  }
  
    const filterHandler = (value) => {
        setFilter(value);
    }

  return (
    <motion.div 
      variants={filters}
      initial='hidden'
      whileInView="show"
      viewport={{ once: true }}
      className="project-filters">
        {
            filterValues.map( (filterValue) => <button className="project-filters__button" onClick={ () => filterHandler(filterValue) } key={filterValue}>{filterValue}</button>)
        }
    </motion.div>
  )
}

export default ProjectFilters;