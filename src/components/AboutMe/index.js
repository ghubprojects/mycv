import classNames from 'classnames/bind';
import styles from './AboutMe.module.scss';

const cx = classNames.bind(styles);

function AboutMe() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>About me</div>
            <div className={cx('content')}>
                <p>
                    Hi, I'm Emma Watson. I am 25 years old. With accumulated work experience, I want
                    to have a stable job and become an excellent employee, accumulate a lot of
                    experience to develop myself and handle many tasks efficiently and quickly,
                    thereby contributing to the strong growth of the company.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
