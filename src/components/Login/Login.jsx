import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Input} from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import s from './../common/FormsControls/FormsControls.module.css'

const maxLength15 = maxLengthCreator(15);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'login'} name={'email'} component={Input}
                    validate={[required, maxLength15]}
                />
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[required, maxLength15]}
                />
            </div>
            {props.error && <span className={s.formSummarySubmit}>{props.error}</span>}
            <div>
                <Field
                    type={'checkbox'}
                    name={'rememberMe'}
                    component={Input}
                /> remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
