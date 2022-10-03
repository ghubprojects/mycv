import classNames from 'classnames/bind';
import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

function Skills() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Technical Skills</div>
            <ul className={cx('content')}>
                <li className={cx('item')}>HTML &amp; CSS, JS ES6, SCSS, Responsive</li>
                <li className={cx('item')}>RDBMS MySQL</li>
                <li className={cx('item')}>Version Control Github</li>
                <li className={cx('item')}>ReactJS basic, Router, Hooks</li>
                <li className={cx('item')}>OOP, Data Structure and Algorithms</li>
            </ul>
        </div>
    );
}

export default Skills;
