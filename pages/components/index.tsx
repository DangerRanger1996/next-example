import React from 'react';
import Slider from '../../components/Slider/slider';
import Maps from '../../components/Maps/maps';
import Loading from '../../components/Loading/loading';
import styles from './styles.scss';
import Counter from "../../components/Counter/counter";

// component example page ...
// add your component here to test it

const Component = () => (
    <div className={styles.ComponentsWrapper}>
        <h1>
            Components Example
        </h1>
        <div>
            <h2>
                Slider examples
            </h2>
            <Slider/>
            <h2>
                Map examples
            </h2>
            <Maps city="Bern"/>
            <h2>
                Loading examples
            </h2>
            <Loading color={"red"}/>
            <h2>
                State Counter examples
            </h2>
            <Counter/>
        </div>
    </div>
);

export default Component;
