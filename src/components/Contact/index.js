import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { CakeIcon, HomeIcon, LinkedinIcon, MailIcon, PhoneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const infos = [
    { icon: <PhoneIcon />, data: '08 678 08 529' },
    { icon: <CakeIcon />, data: '23 - 08 - 2002' },
    { icon: <HomeIcon />, data: 'Nam Tu Liem, Ha Noi' },
    { icon: <MailIcon />, data: 'anhtheit2002@gmail.com' },
    { icon: <LinkedinIcon />, data: 'linkedin-theanh', href: 'https://linkedin.com/in/theanh-in/' },
];

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Contact</div>
            <div className={cx('content')}>
                {infos.map((info, index) => (
                    <div key={index} className={cx('info')}>
                        {info.icon}
                        {info.href ? (
                            <a href={info.href} target='_blank' rel='noreferrer'>
                                {info.data}
                            </a>
                        ) : (
                            info.data
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
