import classNames from "classnames/bind";
import styles from './Category.module.scss'
import { AmazonIcon, DribbbleIcon, HupSpotIcon, NetflixIcon, NotionIcon, ZoomIcon } from "../Icons";

const cx = classNames.bind(styles)

function Category() {
    return (
        <div className={cx('wrapper')}>
            <AmazonIcon className={cx('item')} />
            <DribbbleIcon className={cx('item')} />
            <HupSpotIcon className={cx('item')} />
            <NotionIcon className={cx('item')} />
            <NetflixIcon className={cx('item')} />
            <ZoomIcon className={cx('item')} />
        </div>
    );
}

export default Category;