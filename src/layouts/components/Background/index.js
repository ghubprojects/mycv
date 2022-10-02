import classNames from 'classnames/bind';
import styles from './Background.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Background() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <div className={cx('left-col')}></div>
                <div className={cx('right-col')}></div>
            </div>

            <div className={cx('header')}>
                <Image src={images.header} />
            </div>
            <div className={cx('footer')}>
                <Image src={images.footer} />
            </div>
        </div>
    );
}

export default Background;
