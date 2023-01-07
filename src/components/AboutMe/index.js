import classNames from 'classnames/bind';
import styles from './AboutMe.module.scss';

const cx = classNames.bind(styles);

function AboutMe() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>About me</div>
            <div className={cx('content')}>
                <p>
                    With more than three years of university education, I acquired fundamental
                    knowledge of Object-Oriented Programming, Data Structure and Algorithms and
                    Database. Besides, I learned Web Development myself and had some projects listed
                    below. I am very much looking forward to becoming a Web Developer, accumulating
                    a lot of experience to improve myself and handle many tasks efficiently and
                    quickly, thereby contributing to the strong growth of the company.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
