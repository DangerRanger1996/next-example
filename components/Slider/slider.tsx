/* eslint-env browser */
import React from 'react';
import styles from './styles.scss';

class Slider extends React.Component {

  componentDidMount() {
    const el = document.querySelector('.react-slider');

    el.addEventListener('change', () => {
      console.log(el.value);
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <input className={`react-slider ${styles.Slider}`} type="range" />
      </div>
    );
  }
}

export default Slider;
