import classNames from "classnames/bind";
import styles from './NavBar.module.scss'
import Logo from "../Logo";
import Button from "../Button";

const cx = classNames.bind(styles)

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

function NavBar() {
    return (
        <div className={cx('wrapper')}>
            <Logo color='black' />
            <div className={cx('nav')}>
                <ul className={cx('nav-list')}>
                    {categoryNav.map((item, index) =>
                    (
                        <li className={cx('nav-item')} key={index}>{item.title}</li>
                    ))}
                </ul>
                <Button outline>Request a quote</Button>
            </div>
        </div>
    );
}

export default NavBar;