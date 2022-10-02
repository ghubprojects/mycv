import classNames from 'classnames/bind';
import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

function Skills() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Skills</div>
            <ul className={cx('content')}>
                <li className={cx('item')}>English Level B1</li>
                <li className={cx('item')}>English IELTS 1.0</li>
            </ul>
        </div>
    );
}

export default Skills;
