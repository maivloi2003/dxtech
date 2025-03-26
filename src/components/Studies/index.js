import classNames from "classnames/bind";
import styles from './Studies.module.scss'
import Link from '../Link'

const cx = classNames.bind(styles);

function Studies() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('studies', 'studies-1')}>
                <h4 className={cx('heading')}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h4>
                <Link className={cx('more')} text="Learn more" icon="outline" colorText="#B9FF66" colorIcon="#B9FF66" />
            </div>
            <div className={cx('studies', 'studies-2')}>
                <h4 className={cx('heading')}>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</h4>
                <Link className={cx('more')} text="Learn more" icon="outline" colorText="#B9FF66" colorIcon="#B9FF66" />
            </div>
            <div className={cx('studies', 'studies-3')}>
                <h4 className={cx('heading')}>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</h4>
                <Link className={cx('more')} text="Learn more" icon="outline" colorText="#B9FF66" colorIcon="#B9FF66" />
            </div>
        </div>
    );
}

export default Studies;