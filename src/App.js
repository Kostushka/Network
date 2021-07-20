import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer'
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <SidebarContainer/>
        </div>

    );
};

export default App;
