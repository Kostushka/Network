import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    return compose(connect(mapStateToPropsRedirect))(RedirectComponent)
}