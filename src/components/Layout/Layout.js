import React from "react";
import Aux from "../../hoc/Auxillary";
import styles from './layout.module.css';

const layout = props => (
  <Aux>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className = {styles.component}>{props.children}</main>
  </Aux>
);

export default layout;