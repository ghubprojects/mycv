import classNames from 'classnames/bind';
import styles from './Projects.module.scss';

const cx = classNames.bind(styles);

const projects = [
    {
        name: 'BTS Band',
        preview: {
            href: 'https://btsband.vercel.app/',
            shortUrl: 'btsband.vercel.app',
        },
        source: {
            href: 'https://github.com/ghubprojects/btsband',
            shortUrl: 'ghubprojects/btsband',
        },
        description: 'website booking tickets for BTS Show',
        features: 'responsive on mobile, tablet',
        technologies: 'HTML, CSS, JavaScript',
    },
    {
        name: 'Music Player',
        preview: {
            href: 'https://relaxing-with-music.vercel.app/',
            shortUrl: 'relaxing-with-music.vercel.app',
        },
        source: {
            href: 'https://github.com/ghubprojects/music-player',
            shortUrl: 'ghubprojects/music-player',
        },
        description:
            'music streaming website with relaxing songs you can listen to while working or studying',
        features: 'music player, toggle dark light theme, share modal, real-time clock, fullscreen',
        technologies: 'React, SCSS, TailwindCSS',
    },
    {
        name: 'My CV',
        preview: {
            href: 'https://mycv-ghubprojects.vercel.app/',
            shortUrl: 'mycv-ghubprojects.vercel.app',
        },
        source: {
            href: 'https://github.com/ghubprojects/mycv',
            shortUrl: 'ghubprojects/mycv',
        },
        description: 'my online cv',
        technologies: 'React, SCSS',
    },
];

function Projects() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Project</div>
            <ul className={cx('content')}>
                {projects.map((project, index) => {
                    const object = Object.entries(project);
                    console.log(object);
                    return (
                        <li key={index} className={cx('item')}>
                            <p className={cx('name')}>{project.name}</p>
                            <div>
                                <p className={cx('title-item')}>Live Preview: </p>
                                <a href={project.preview.href} target='_blank' rel='noreferrer'>
                                    {project.preview.shortUrl}
                                </a>
                            </div>
                            <div>
                                <p className={cx('title-item')}>Source code: </p>
                                <a href={project.source.href} target='_blank' rel='noreferrer'>
                                    {project.source.shortUrl}
                                </a>
                            </div>
                            <div>
                                <p className={cx('title-item')}>Description: </p>
                                {project.description}
                            </div>
                            {project.features && (
                                <div>
                                    <p className={cx('title-item')}>Features: </p>
                                    {project.features}
                                </div>
                            )}
                            <div>
                                <p className={cx('title-item')}>Technologies: </p>
                                {project.technologies}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Projects;
