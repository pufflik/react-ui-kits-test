// @flow
import {Button} from "@blueprintjs/core";
import classnames from 'classnames';
import React from 'react';
import styles from '../assets/playground.module.css';

const
  Blueprint = (props: {
      className?: string,
  }) => <div className={classnames(styles.playground, props.className)}>
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.caption}>Native</div>
        <Button intent="primary">Button</Button>
      </div>

      <div className={styles.column}>
        <div className={styles.caption}>Styled</div>
        <Button intent="primary" className={styles.button}>Button</Button>
      </div>
    </div>
  </div>;

export default Blueprint;
