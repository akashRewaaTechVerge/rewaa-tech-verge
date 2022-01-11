
import React, { useState, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { makeStyles } from '@material-ui/styles';
import './BackToTop.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '5rem',
            color: '#2babe3',
        },
    }));

    const classes = useStyles();


    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }} className='backToTop'>
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </button>
        </div>
    )
}

export default BackToTop
