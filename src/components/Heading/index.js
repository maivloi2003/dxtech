import classNames from "classnames/bind";
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

function Heading({ primary = false, light = false, dark = false, children, className }) {

    return (
        <h1 className={cx('wrapper', { [className]: className, primary, light, dark })}>
            {children}
        </h1 >
    );
}

export default Heading;