import classNames from 'classnames/bind';
import styles from './Objectives.module.scss';

const cx = classNames.bind(styles);
function Objectives() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Career Objectives</div>

            <ul className={cx('content')}>
                <li className={cx('item')}>
                    Promote my abilities and learn to accumulate experience in a prof- essional
                    working environment.
                </li>

                <li className={cx('item')}>
                    Strive to work hard to achieve high work efficiency and contri- bute actively
                    into the company development.
                </li>
            </ul>
        </div>
    );
}

export default Objectives;
