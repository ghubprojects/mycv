import classNames from 'classnames/bind';
import styles from './Certificates.module.scss';

const cx = classNames.bind(styles);

function Certificates() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Certificates</div>
            <ul className={cx('content')}>
                <li className={cx('item')}>English Level B1</li>
                <li className={cx('item')}>English IELTS 1.0</li>
            </ul>
        </div>
    );
}

export default Certificates;
