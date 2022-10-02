import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { CakeIcon, HomeIcon, MailIcon, PhoneIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const infos = [
    { icon: <PhoneIcon />, data: '08 678 08 529' },
    { icon: <CakeIcon />, data: '23 - 08 - 2002' },
    { icon: <MailIcon />, data: 'anhtheit2002@gmail.com' },
    { icon: <HomeIcon />, data: 'Nam Tu Liem, Ha Noi' },
];

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Contact</div>
            <div className={cx('content')}>
                {infos.map((info, index) => (
                    <div key={index} className={cx('info')}>
                        {info.icon}
                        {info.data}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
