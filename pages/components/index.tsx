import Slider from '../../components/Slider/slider'
import styles from './styles.scss'

const Component = () => {
    return (
        <div className={styles.ComponentsWrapper}>
            <h1>Components Example</h1>
            <div>
                <h2>Slider Component</h2>
                <Slider />
            </div>
        </div>
    )
};

export default Component
