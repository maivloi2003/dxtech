import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from '../../assets/images'
import Button from '../Button'

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <h1 className={cx('heading')}>
                    Navigating the digital landscape for success
                </h1>
                <h4 className={cx('title')}>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </h4>
                <Button className={cx('book')} dark>Book a consultation</Button>
            </div>
            <div className={cx('banner')}>
                <img className={cx('img-banner')} alt="banner" src={images.notice} />
            </div>
        </div>
    );
}

export default Header;