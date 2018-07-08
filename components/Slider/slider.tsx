import React from 'react'
import styles from './styles.scss'

class Slider extends React.Component {
    render() {
        return <input className={styles.Slider} type="range" />;
    }
}

export default Slider;