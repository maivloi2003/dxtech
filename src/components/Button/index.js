import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ outline = false, dark = false, primary = false, children, className }) {

    return (
        <button className={cx('wrapper', { [className]: className, outline, dark, primary })} >
            {children}
        </button >
    );
}

export default Button;