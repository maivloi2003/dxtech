import classNames from "classnames/bind";
import styles from './Team.module.scss'
import images from '../../assets/images'
import { InsDarkIcon } from "../Icons";
import Button from '../Button'

const cx = classNames.bind(styles);

const members = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        img: images.Smith,
        desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        img: images.Doe,
        desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        img: images.Brown,
        desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    },
    {
        name: 'Emily JohnSon',
        position: 'PPC Manager',
        img: images.Emily,
        desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        img: images.Brian,
        desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator',
        img: images.Kim,
        desc: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    },
];

function Member({ img, name, position, desc }) {
    return (
        <div className={cx('member')}>
            <div className={cx('intro')}>
                <img alt="Avatar" src={img} className={cx('avatar')} />
                <div className={cx('info')}>
                    <h3 className={cx('name')}>{name}</h3>
                    <h4 className={cx('position')}>{position}</h4>
                </div>
                <InsDarkIcon />
            </div>
            <h5 className={cx('description')}>{desc}</h5>
        </div>
    );
}

function Team() {
    return (
        <div className={cx('wrapper')}>
            {members.map((member, index) => (
                <Member key={index} img={member.img} name={member.name} position={member.position} desc={member.desc} />
            ))}
            <div className={cx('see-all')}>
                <Button dark className={cx('btn-see')}>See all team</Button>
            </div>
        </div>
    );
}

export default Team;
