import classNames from 'classnames/bind';
import styles from './LeftColumn.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

import Contact from '~/components/Contact';
import Objectives from '~/components/Objectives';
import Skills from '~/components/Skills';
import Interests from '~/components/Interests';

const cx = classNames.bind(styles);

function LeftColumn() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Image className={cx('avatar-img')} src={images.avatar} />
            </div>

            <div className={cx('container')}>
                <Contact />
                <Objectives />
                <Skills />
                <Interests />
            </div>
        </div>
    );
}

export default LeftColumn;
