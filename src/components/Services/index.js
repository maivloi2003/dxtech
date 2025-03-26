import classNames from "classnames/bind";
import styles from './Services.module.scss'
import Heading from "../Heading";
import Link from '../Link'
import images from "../../assets/images";

const cx = classNames.bind(styles)

function Services() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('service-1')}>
                <div className={cx('search-service')}>
                    <div className={cx('content')}>
                        <div className={cx('heading')}>
                            <Heading primary className={cx('heading-content')}>Search Engine</Heading>
                            <Heading primary className={cx('heading-content')}>optimization</Heading>
                        </div>
                        <Link text="Learn more" icon="circle" colorText="black" colorBgIcon="black" colorIcon="#B9FF66" />
                    </div>
                    <div className={cx('img')}>
                        <img className={cx('img-search')} alt="search" src={images.search} />
                    </div>
                </div>
                <div className={cx('adv-service')}>
                    <div className={cx('content')}>
                        <div className={cx('heading')}>
                            <Heading light className={cx('heading-content')}>Pay-per-click</Heading>
                            <Heading light className={cx('heading-content')}>advertising</Heading>
                        </div>
                        <Link text="Learn more" icon="circle" colorText="black" colorBgIcon="black" colorIcon="#B9FF66" />
                    </div>
                    <div className={cx('img')}>
                        <img className={cx('img-adv')} alt="advertise" src={images.click} />
                    </div>
                </div>
            </div>
            <div className={cx('service-2')}>
                <div className={cx('media-service')}>
                    <div className={cx('content')}>
                        <div className={cx('heading')}>
                            <Heading light className={cx('heading-content')}>Social Media</Heading>
                            <Heading light className={cx('heading-content')}>Marketing</Heading>
                        </div>
                        <Link text="Learn more" icon="circle" colorText="white" colorBgIcon="white" colorIcon="black" />
                    </div>
                    <div className={cx('img')}>
                        <img className={cx('img-media')} alt="Social Media" src={images.media} />
                    </div>
                </div>
                <div className={cx('email-service')}>
                    <div className={cx('content')}>
                        <Heading primary className={cx('heading-content')}>Email Marketing</Heading>
                        <Link text="Learn more" icon="circle" colorText="black" colorBgIcon="black" colorIcon="#B9FF66" />
                    </div>
                    <div className={cx('img')}>
                        <img className={cx('img-email')} alt="email" src={images.email} />
                    </div>
                </div>
            </div>
            <div className={cx('service-3')}>
                <div className={cx('content-service')}>
                    <div className={cx('content')}>
                        <div className={cx('heading')}>
                            <Heading light className={cx('heading-content')}>Content</Heading>
                            <Heading light className={cx('heading-content')}>Creation</Heading>
                        </div>
                        <Link text="Learn more" icon="circle" colorText="black" colorBgIcon="black" colorIcon="#B9FF66" />
                    </div>
                    <div className={cx('img')}>
                        <img className={cx('img-content')} alt="content" src={images.content} />
                    </div>
                </div>
                <div className={cx('analytics-service')}>
                    <div className={cx('content')}>
                        <div className={cx('heading')}>
                            <Heading primary className={cx('heading-content')}>Analytics and</Heading>
                            <Heading primary className={cx('heading-content')}>Tracking</Heading>
                        </div>
                        <Link text="Learn more" icon="circle" colorText="white" colorBgIcon="white" colorIcon="black" />
                    </div>
                    <div className={cx('img')}>
                        <img className={cx('img-analytics')} alt="analytics" src={images.analytics} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;