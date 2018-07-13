import React from 'react';
import Slider from '../../components/Slider/slider';
import Maps from '../../components/Maps/maps';
import styles from './styles.scss';

const Component = () => (
  <div className={styles.ComponentsWrapper}>
    <h1>
      Components Example
    </h1>
    <div>
      <h2>
        Slider Component
      </h2>
      <Slider />
      <Maps city="Bern" />
    </div>
  </div>
);

export default Component;
