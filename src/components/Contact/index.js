import classNames from "classnames/bind";
import styles from './Contact.module.scss'
import images from '../../assets/images'
import Button from '../Button'

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact')}>
                <form className={cx('form-contact')}>
                    <div className={cx('type')}>
                        <label>
                            <input name="type" type="radio" value="1" />
                            <span className={cx('radio-custom')}></span>
                            Say Hi
                        </label>

                        <label>
                            <input name="type" type="radio" value="2" />
                            <span className={cx('radio-custom')}></span>
                            Get a quote
                        </label>
                    </div>
                    <div className={cx('name')}>
                        <label>Name</label>
                        <input name="name" type="text" placeholder="Name" />
                    </div>
                    <div className={cx('email')}>
                        <label>Email*</label>
                        <input name="email" type="text" placeholder="Email" />
                    </div>
                    <div className={cx('message')}>
                        <label>Message*</label>
                        <textarea name="message" type="text" placeholder="Message" />
                    </div>
                    <div className={cx('send')}>
                        <Button className={cx('btn-send')} dark>Send Message</Button>
                    </div>
                </form>
            </div>
            <div className={cx('banner-contact')}>
                <img className={cx('img-contact')} alt="contact" src={images.contact} />
            </div>
        </div>
    );
}

export default Contact;