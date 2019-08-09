import React from "react";
import Aux from "../../hoc/Auxillary";

const layout = props => (
  <Aux>
    <div><p>ToolBar, SideDrawer, Backdrop</p></div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;