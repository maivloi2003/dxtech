import classNames from 'classnames/bind';
import styles from './Home.module.scss'
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Category from '../../components/Category';
import Heading from '../../components/Heading'
import Services from '../../components/Services';
import Button from '../../components/Button';
import images from '../../assets/images';
import Studies from '../../components/Studies';
import Process from '../../components/Process';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')} >
            <NavBar />
            <Header />
            <Category />
            <div className={cx('services')}>
                <Heading primary>Services</Heading>
                <h5 className={cx('sub-services')}>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</h5>
            </div>
            <Services />
            <div className={cx('proposal')}>
                <div className={cx('content')}>
                    <h3 className={cx('heading')}>Let’s make things happen</h3>
                    <h4 className={cx('title')}>
                        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                    </h4>
                    <Button dark>Get your free proposal</Button>
                </div>
                <div className={cx('img')}>
                    <img className={cx('img-proposal')} alt="Things Happen" src={images.proposal} />
                </div>
            </div>
            <div className={cx('studies')}>
                <Heading primary>Case Studies</Heading>
                <h5 className={cx('sub-studies')}>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</h5>
            </div>
            <Studies />
            <div className={cx('process')}>
                <Heading primary>Our Working Process</Heading>
                <h5 className={cx('sub-process')}>Step-by-Step Guide to Achieving Your Business Goals</h5>
            </div>
            <Process />
            <div className={cx('team')}>
                <Heading primary>Team</Heading>
                <h5 className={cx('sub-team')}>Meet the skilled and experienced team behind our successful digital marketing strategies</h5>
            </div>
            <Team />
            <div className={cx('testimonials')}>
                <Heading primary>Testimonials</Heading>
                <h5 className={cx('sub-testimonials')}>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</h5>
            </div>
            <Testimonials />
            <div className={cx('contact')}>
                <Heading primary>Contact Us</Heading>
                <h5 className={cx('sub-contact')}>Connect with Us: Let's Discuss Your Digital Marketing Needs</h5>
            </div>
            <Contact />
            <Footer />
        </div >
    );
}

export default Home;