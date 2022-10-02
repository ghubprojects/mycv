import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

import Background from '~/layouts/components/Background';
import LeftColumn from '~/layouts/components/LeftColumn';
import RightColumn from '~/layouts/components/RightColumn';

const cx = classNames.bind(styles);

function MainLayout() {
    return (
        <div className={cx('wrapper')}>
            <Background />
            <div className={cx('content')}>
                <LeftColumn />
                <RightColumn />
            </div>
        </div>
    );
}

export default MainLayout;
