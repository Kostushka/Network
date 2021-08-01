import s from './FormsControls.module.css'

export const FormControls = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={(hasError ? s.formControlsError : '')}>
                {props.children}
            </div>
            {hasError && <span className={s.formControlsAlarm}>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><textarea {...input} {...restProps} /></FormControls>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControls {...props}><input {...input} {...restProps} /></FormControls>
}