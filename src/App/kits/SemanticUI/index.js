// @flow
import {Button} from 'semantic-ui-react'
import classnames from 'classnames';
import React from 'react';
import styles from '../assets/playground.module.css';

const
  SemanticUI = (props: {
    className?: string,
  }) => <div className={classnames(styles.playground, props.className)}>
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.caption}>Native</div>
        <Button primary>Primary</Button>
      </div>

      <div className={styles.column}>
        <div className={styles.caption}>Styled</div>
        <Button primary className={styles.button}>Primary</Button>
      </div>
    </div>
  </div>;

export default SemanticUI;
