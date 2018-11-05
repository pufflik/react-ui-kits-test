// @flow
import {Button} from 'antd';
import classnames from 'classnames';
import React from 'react';
import styles from '../assets/playground.module.css';

const
  AntDesign = (props: {
    className?: string,
  }) => <div className={classnames(styles.playground, props.className)}>
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.caption}>Native</div>
        <Button type="primary">Primary</Button>
      </div>

      <div className={styles.column}>
        <div className={styles.caption}>Styled</div>
        <Button type="primary" className={styles.button}>Primary</Button>
      </div>
    </div>
  </div>;

export default AntDesign;
