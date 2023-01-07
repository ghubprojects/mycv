import classNames from 'classnames/bind';
import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

const skills = [
    { data: 'HTML & CSS, JS ES6, SCSS, TailwindCSS, Responsive' },
    { data: 'ReactJS Basic, Router, Hooks' },
    { data: 'RDBMS MySQL' },
    { data: 'Version Control Github' },
    { data: 'OOP, Data Structure and Algorithms' },
];

function Skills() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Technical Skills</div>
            <ul className={cx('content')}>
                {skills.map((skill, index) => (
                    <li key={index} className={cx('item')}>
                        {skill.data}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
