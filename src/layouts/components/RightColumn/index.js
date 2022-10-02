import classNames from 'classnames/bind';
import styles from './RightColumn.module.scss';

import AboutMe from '~/components/AboutMe';
import Education from '~/components/Education';
import Projects from '~/components/Projects';

const cx = classNames.bind(styles);

function RightColumn() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div className={cx('name')}>Tang The Anh</div>
                <div className={cx('job')}>Web Developer Intern</div>
            </div>

            <div className={cx('container')}>
                <AboutMe />
                <Education />
                <Projects />
            </div>
        </div>
    );
}

export default RightColumn;
