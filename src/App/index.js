// @flow
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AntDesign from './kits/AntDesign';
import Blueprint from './kits/Blueprint';
import MaterialUI from './kits/MaterialUI';
import SemanticUI from './kits/SemanticUI';
import Sidebar from './Sidebar';
import React from 'react';
import styles from './assets/component.module.css';

const
  App = (props: {
    className?: string,
  }) => <Router>
    <div className={styles.app}>
      <Sidebar className={styles.sidebar} />

      <Switch>
        <Route path="/blueprint" component={() => <Blueprint className={styles.playground} />} />
        <Route path="/material-ui" component={() => <MaterialUI className={styles.playground} />} />
        <Route path="/ant-design" component={() => <AntDesign className={styles.playground} />} />
        <Route path="/semantic-ui" component={() => <SemanticUI className={styles.playground} />} />
        <Redirect to="/ant-design" />
      </Switch>
    </div>
  </Router>;

export default App;
