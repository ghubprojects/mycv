import classNames from 'classnames/bind';
import styles from './Interests.module.scss';
import { BookIcon, EarthIcon, MovieIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Interests() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Interests</div>
            <div className={cx('content')}>
                <BookIcon />
                <MusicIcon />
                <MovieIcon />
                <EarthIcon />
            </div>
        </div>
    );
}

export default Interests;
