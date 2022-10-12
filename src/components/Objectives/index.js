import classNames from 'classnames/bind';
import styles from './Objectives.module.scss';

const cx = classNames.bind(styles);

const objectives = [
    {
        data: 'Promote my abilities, learn to accumulate experience and hone technical skills in a professional working environment.',
    },
    {
        data: 'Strive to work hard to improve work efficiency and contribute into the company development.',
    },
];

function Objectives() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Career Objectives</div>

            <ul className={cx('content')}>
                {objectives.map((objective, index) => (
                    <li key={index} className={cx('item')}>
                        {objective.data}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Objectives;
