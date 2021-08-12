import './App.css';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux-store';
import React from 'react';
const ProfileContainer = React.lazy(() =>
    import('./components/Profile/ProfileContainer')
);
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

class App extends Component {
    catchAllUnhandledErrors = (PromiseRejectionEvent) => {
        alert('Some error occured');
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener(
            'unhandledrejection',
            this.catchAllUnhandledErrors
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            'unhandledrejection',
            this.catchAllUnhandledErrors
        );
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Nav />
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Route path='/dialogs' render={() => <Dialogs />} />
                            <Route
                                path='/profile/:userId?'
                                render={() => <ProfileContainer />}
                            />
                        </Switch>
                    </React.Suspense>

                    <Route
                        exact
                        path='/'
                        render={() => <Redirect to='/profile' />}
                    />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/login' render={() => <Login />} />
                </div>
                <SidebarContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

const NetworkApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};
export default NetworkApp;
