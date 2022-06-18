import { IconGenerator } from '../utilities/IconGenerator';

const TechStack = () => {
  return (
    <div className="about-page__svgs">
      { IconGenerator('Html') }
      { IconGenerator('css') }
      { IconGenerator('JavaScript') }
      { IconGenerator('sass') }     
      { IconGenerator('React') }
      { IconGenerator('php') }
      { IconGenerator('WordPress') }
      { IconGenerator('NextJs') }
      { IconGenerator('Redux') }
      { IconGenerator('TypeScript') }
    </div>
  )
}

export default TechStack;