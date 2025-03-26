import classNames from "classnames/bind";
import styles from './Process.module.scss'
import { MinusIcon, PlusIcon } from "../Icons";

const cx = classNames.bind(styles);

function Process() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('process-active')}>
                <div className={cx('consult')}>
                    <div className={cx('title')}>
                        <h1>01</h1>
                        <h2>Consultation</h2>
                    </div>
                    <MinusIcon />
                </div>
                <h5 className={cx('body')}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</h5>
            </div>
            <div className={cx('process')}>
                <div className={cx('title')}>
                    <h1>02</h1>
                    <h2>Research and Strategy Development</h2>
                </div>
                <PlusIcon />
            </div>
            <div className={cx('process')}>
                <div className={cx('title')}>
                    <h1>03</h1>
                    <h2>Implementation</h2>
                </div>
                <PlusIcon />
            </div>
            <div className={cx('process')}>
                <div className={cx('title')}>
                    <h1>04</h1>
                    <h2>Monitoring and Optimization</h2>
                </div>
                <PlusIcon />
            </div>
            <div className={cx('process')}>
                <div className={cx('title')}>
                    <h1>05</h1>
                    <h2>Reporting and Communication</h2>
                </div>
                <PlusIcon />
            </div>
            <div className={cx('process')}>
                <div className={cx('title')}>
                    <h1>06</h1>
                    <h2>Continual Improvement</h2>
                </div>
                <PlusIcon />
            </div>
        </div>
    );
}

export default Process;