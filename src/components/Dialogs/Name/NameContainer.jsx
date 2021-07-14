import React from "react";
import {connect} from "react-redux";
import Name from "./Name";

let mapStateToProps = (state) => {
    return {
        name: state.dialogsPage.nameData,
        img: state.dialogsPage.imgData
    }
};

const NameContainer = connect(mapStateToProps)(Name);

export default NameContainer;