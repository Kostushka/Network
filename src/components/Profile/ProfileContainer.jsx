import React from 'react';
import Profile from './Profile';
import {
    getStatus,
    profileData,
    updateStatus,
} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.profileData(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {profileData, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
