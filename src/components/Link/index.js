import classNames from "classnames/bind";
import styles from './Link.module.scss'
import { MoreIcon } from "../Icons";

const cx = classNames.bind(styles)

function Link({ text, icon, colorText, colorIcon, colorBgIcon = '', className }) {
    if (icon === 'circle') {

    }
    return (
        <div className={cx('wrapper')} >
            {icon === 'circle' ?
                (
                    <>
                        <MoreIcon circle bgColor={colorBgIcon} color={colorIcon} />
                        <h2 className={cx('label', { [className]: className })} style={{ color: colorText }}>{text}</h2>
                    </>
                )
                :
                (
                    <>
                        <h2 className={cx('label', { [className]: className })} style={{ color: colorText }}>{text}</h2>
                        <MoreIcon color={colorIcon} />
                    </>
                )
            }
        </div >
    );
}

export default Link;