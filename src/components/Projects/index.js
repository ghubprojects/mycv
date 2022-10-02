import classNames from 'classnames/bind';
import styles from './Projects.module.scss';

const cx = classNames.bind(styles);

function Projects() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Project</div>
            <div className={cx('content')}>
                <p>Promote my abilities and learn to accumulate experience.</p>
                <p>
                    Strive to work hard to achieve high work efficiency and contribute actively into
                    the company development.
                </p>
            </div>
        </div>
    );
}

export default Projects;
