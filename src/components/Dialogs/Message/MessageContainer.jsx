import React from 'react';
import { addMessage } from '../../../redux/dialogs-reducer';
import Message from './Message';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        message: state.dialogsPage.messageData,
    };
};

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Message);
