import './button.styles.scss';

export const Button = ({ children, buttonType, ...otherProps }) => {
    const BUTTON_TYPES = {
        google: 'google-sign-in',
        inverted: 'inverted'
    }

    return (<button {...otherProps} className={`${BUTTON_TYPES[buttonType]} button-container`}>
        {children}
    </button>);

}