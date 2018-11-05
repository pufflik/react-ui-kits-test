// @flow
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import React from 'react';
import styles from '../assets/playground.module.css';

const
  MaterialUI = (props: {
    className?: string,
  }) => <div className={classnames(styles.playground, props.className)}>
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.caption}>Native</div>
        <Button variant="contained" color="primary">Button</Button>
      </div>

      <div className={styles.column}>
        <div className={styles.caption}>Styled</div>
        <Button variant="contained" color="primary" className={styles.button}>Button</Button>
      </div>
    </div>
  </div>;

export default MaterialUI;
