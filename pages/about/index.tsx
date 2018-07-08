import css from './style.scss'
import Slider from '../../components/Slider/slider'

const Component = () => {
  return (
    <div>
      <h1 className={css.Title}>About Page</h1>
        <Slider />
    </div>
  )
};

export default Component
