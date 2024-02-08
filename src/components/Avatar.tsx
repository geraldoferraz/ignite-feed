import styles from './Avatar.module.css';
import PropTypes from 'prop-types';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder: boolean;
    src: string
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool.isRequired,
};