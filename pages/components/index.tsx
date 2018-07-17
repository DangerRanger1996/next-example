import React from 'react';
import Slider from '../../components/Slider/slider';
import Maps from '../../components/Maps/maps';
import Loading from '../../components/Loading/loading';
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
      <Loading />
    </div>
  </div>
);

export default Component;
