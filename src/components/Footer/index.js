import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import Logo from '../Logo'
import Heading from '../Heading'
import { FbIcon, InsLightIcon, TwIcon } from "../Icons";
import Button from "../Button";

const cx = classNames.bind(styles);

const categoryNav = [
    {
        title: 'About Us',
    },
    {
        title: 'Services',
    },
    {
        title: 'Use Cases',
    },
    {
        title: 'Pricing',
    },
    {
        title: 'Blog',
    },
]

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <Logo color="white" />
                <ul className={cx('nav-list')}>
                    {categoryNav.map((item, index) =>
                    (
                        <li className={cx('nav-item')} key={index}>{item.title}</li>
                    ))}
                </ul>
                <div className={cx('social')}>
                    <InsLightIcon className={cx('icon-social')} />
                    <FbIcon className={cx('icon-social')} />
                    <TwIcon className={cx('icon-social')} />
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('contact')}>
                    <Heading className={cx('heading')} primary>Contact us:</Heading>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p>Address: 1234 Main St</p>
                    <p>Moonstone City, Stardust State 12345</p>
                </div>
                <div className={cx('mail')}>
                    <form className={cx('form-mail')}>
                        <input type="text" name="mail" placeholder="Email" />
                        <Button className={cx('btn-send')} primary>Subscribe to news</Button>
                    </form>
                </div>

            </div>
            <div className={cx('note')}>
                <p>© 2023 Positivus. All Rights Reserved.</p>

                <a href="/">Privacy Policy</a>
            </div>
        </div>
    );
}

export default Footer;