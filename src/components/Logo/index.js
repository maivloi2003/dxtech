import classNames from "classnames/bind";
import styles from './Logo.module.scss'
import { LogoIcon } from "../Icons";

const cx = classNames.bind(styles)

function Logo({ color }) {

    return (
        <div className={cx('wrapper')} >
            <LogoIcon color={color} />
            <h2 className={cx('heading')} style={{ color: color }}>Positivus</h2>
        </div >
    );
}

export default Logo;