import React from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar.friends
    }
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;