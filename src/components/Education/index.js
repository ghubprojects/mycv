import classNames from 'classnames/bind';
import styles from './Education.module.scss';

const cx = classNames.bind(styles);

function Education() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Education</div>
            <div className={cx('content')}>
                <div className={cx('university')}>
                    <p className={cx('name')}>University of Engineering and Technology</p>
                    <p className={cx('time')}>2020 - now</p>
                </div>

                <div className={cx('major')}>
                    <p className={cx('content-title')}>Major:</p>
                    <p className={cx('content-data')}>Information Technology</p>
                </div>

                <div className={cx('gpa')}>
                    <p className={cx('content-title')}>GPA:</p>
                    <p className={cx('content-data')}>3.2</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
