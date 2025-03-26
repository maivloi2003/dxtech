import classNames from "classnames/bind";
import styles from './Testimonials.module.scss';
import { useState } from "react";
import { NextIcon, PagiActiveIcon, PagiIcon, PrevIcon } from "../Icons";

const cx = classNames.bind(styles);

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp",
    },
    {
        text: "The team at Positivus has been instrumental in our online growth. Their expertise in digital marketing has helped us reach new heights. Highly recommend their services!",
        name: "Jane Doe",
        position: "Director of Operations",
    },
    {
        text: "Positivus delivers exceptional service. Their strategic approach to marketing has boosted our brand visibility and engagement. Couldn't be happier!",
        name: "Michael Brown",
        position: "Senior SEO Specialist",
    },
    {
        text: "The team at Positivus has been instrumental in our online growth. Their expertise in digital marketing has helped us reach new heights. Highly recommend their services!",
        name: "Emily JohnSon",
        position: "PPC Manager",
    },
    {
        text: "Positivus delivers exceptional service. Their strategic approach to marketing has boosted our brand visibility and engagement. Couldn't be happier!",
        name: "Brian Williams",
        position: "Social Media Specialist",
    },
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("testi")}>
                    <div className={cx("card")}>
                        <p className={cx("text")}>“{testimonials[currentIndex].text}”</p>
                    </div>
                    <div className={cx("author")}>
                        <p className={cx('name-author')}>{testimonials[currentIndex].name}</p>
                        <p className={cx('position-author')}>{testimonials[currentIndex].position}</p>
                    </div>
                </div>
            </div>

            {/* Custom Navigation */}
            <div className={cx('pagination')}>
                <PrevIcon className={cx("prev")} onClick={prevSlide} />
                {/* Pagination Dots */}
                <div className={cx("dots")}>
                    {testimonials.map((_, index) => (
                        <span key={index} onClick={() => setCurrentIndex(index)}>
                            {index === currentIndex ? <PagiActiveIcon /> : <PagiIcon />}
                        </span>
                    ))}
                </div>
                <NextIcon className={cx("next")} onClick={nextSlide} />
            </div>
        </div>
    );
}

export default Testimonials;
