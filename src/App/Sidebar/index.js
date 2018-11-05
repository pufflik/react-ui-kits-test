// @flow
import React from 'react';
import classnames from 'classnames';
import './assets/component.css';
import {NavLink} from 'react-router-dom';

const
  Sidebar = (props: {
    className?: string,
  }) => <div className={classnames('sidebar', props.className)}>
    <div className="sidebar__header">
      Frameworks:
    </div>

    <NavLink
      to="/ant-design"
      className="sibebar__link"
      activeClassName="sibebar__link--active"
    >Ant Design</NavLink>

    <NavLink
      to="/blueprint"
      className="sibebar__link"
      activeClassName="sibebar__link--active"
    >Blueprint</NavLink>

    <NavLink
      to="/material-ui"
      className="sibebar__link"
      activeClassName="sibebar__link--active"
    >Material-UI</NavLink>

    <NavLink
      to="/semantic-ui"
      className="sibebar__link"
      activeClassName="sibebar__link--active"
    >Semantic UI</NavLink>
  </div>;

export default Sidebar;
