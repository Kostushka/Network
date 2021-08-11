import {Field, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button>save</button>
            {props.error && (
                <span className={s.formSummarySubmit}>{props.error}</span>
            )}
            <div className={s.descBlock}>
                <div>
                    <b>Full name</b>:
                    <Field
                        placeholder={'Full name'}
                        name={'fullName'}
                        component={Input}
                    />
                </div>
                <div>
                    <b>Looking for a job</b>:
                    <Field
                        name={'lookingForAJob'}
                        component={Input}
                        type={'checkbox'}
                    />
                </div>
                <div>
                    <b>My skills</b>:
                    <Field
                        placeholder={'My skills'}
                        name={'lookingForAJobDescription'}
                        component={Textarea}
                    />
                </div>
                <div>
                    <b>About me</b>:
                    <Field
                        placeholder={'About me'}
                        name={'aboutMe'}
                        component={Input}
                    />
                </div>
            </div>
            <div className={s.descBlock}>
                <b>Contacts</b>:
                {Object.keys(props.profile.contacts).map((key) => {
                    return (
                        <div key={key}>
                            <b>
                                {key}:
                                <Field
                                    placeholder={key}
                                    name={'contacts.' + key}
                                    component={Input}
                                />
                            </b>
                        </div>
                    );
                })}
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(
    ProfileDataForm
);

export default ProfileDataFormReduxForm;
