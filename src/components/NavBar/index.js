import classNames from "classnames/bind";
import { useState } from "react";
import styles from './NavBar.module.scss'
import Logo from "../Logo";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
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
                <Button className={cx('btn-quote')} outline>Request a quote</Button>

            </div>
            <FontAwesomeIcon className={cx('icon-menu')} icon={faBars} onClick={toggleMenu} />
            {isOpen && (
                <div className={cx('overlay')}>
                    <div className={cx('overlay-content')}>
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={cx('close-icon')}
                            onClick={closeMenu}
                        />
                        <ul className={cx('overlay-nav-list')}>
                            {categoryNav.map((item, index) => (
                                <li
                                    className={cx('overlay-nav-item')}
                                    key={index}
                                    onClick={closeMenu}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('overlay-background')} onClick={closeMenu}></div>
                </div>
            )}
        </div>
    );
}

export default NavBar;