import React, { useEffect, useState } from 'react';
import { Button, Dialog, Typography, useMediaQuery } from "@mui/material";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import '../style.css';
import '../background.png';
import '../ring.jpg';

const LandingPage = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1024px)');

    useEffect(() => {
        const timer = setTimeout(() => {
            handleOpenVideo();
        }, 1000); // או כל פרק זמן אחר שתרצה במילישניות
        return () => clearTimeout(timer);
    }, []); // השארתי את התנאי ריק כדי שהטיימר יפעל רק פעם אחת ברגע שהדף מתקשר

    const handleOpenDialog = () => {
        setShowVideo(false);
        setOpenDialog(true);
    };
    const handleOpenCatalog = () => {
            window.open('https://kataloghodaya.onrender.com', '_blank');
    };

    const handleOpenVideo = () => {
        setShowVideo(true);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleButtonClick = () => {
        window.location.href = 'https://www.kupat.org/views/DonationPage?pid=1297&recid=0';
    };

    return (
        <>
            <div className='divImg' ></div>

            <div className='title'>
                <Typography style={{ fontSize: isMobile ? '4vh' : isTablet ? '5vh' : '6vh', marginBottom: isMobile ? '5vh' : isTablet ? '8vh' : '10vh', backgroundColor: 'rgba(255,255,255,0.5)', fontFamily: 'Lucida Handwriting', borderRadius: '10vh', textShadow: '1px 1px 2px rgb(44,130,105)', boxShadow: '0vh 0vh 15vh 10vh rgba(255,255,255,0.668)', backdropFilter: 'blur(2px)' }}>
                    As we’re counting sefirah, Hodaya is counting
                    towards her wedding….
                </Typography>
                <Typography style={{ fontSize: isMobile ? '5vh' : isTablet ? '7vh' : '10vh', color: 'rgb(212, 137, 141)', fontFamily: 'Monotype Corsiva', backdropFilter: 'blur(2px)', borderRadius: '20vh', textShadow: '1px 1px 2px rgb(44,130,105)', marginTop: isMobile || isTablet ? '11vh' : '0' }}>
                    <b>  It is up to  <span style={{ fontSize: isMobile ? '6vh' : isTablet ? '8vh' : '10.5vh' }}>US</span>  to make it happen.</b>
                </Typography>
            </div>
            <div className='divs'>
                <Button className='div' sx={{
                    color: 'black',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    backgroundColor: '#cbd3a9',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                    '&:hover': {
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        backgroundColor: '#cbd3a9',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                }} onClick={handleOpenVideo}>
                    <SmartDisplayIcon style={{ height: isMobile || isTablet ? '7vh' : '10vh', fontSize: isMobile || isTablet ? '5vh' : '5vh', marginRight: isMobile || isTablet ? '1vw' : '14vw' }} />
                </Button>
                <Button className='div' style={{ backgroundColor: '#cbd3a9', }} onClick={handleButtonClick} sx={{
                    color: 'black',
                    backgroundColor: '#cbd3a9',
                    boxShadow: 'none',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }}>
                    I want to donate
                </Button>
                <Button className='div' style={{ textAlign: 'center' }} sx={{
                    color: 'black',
                    boxShadow: 'none',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    backgroundColor: '#cbd3a9',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }} onClick={handleOpenCatalog}>
                    Catalog
                </Button>
                <Button className='div' style={{ textAlign: 'center' }} sx={{
                    color: 'black',
                    boxShadow: 'none',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    backgroundColor: '#cbd3a9',
                    fontSize: isMobile || isTablet ? '2vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }} onClick={handleOpenDialog}>
                    Read about it
                </Button>
            </div>

            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="xl">
                <Button onClick={handleCloseDialog} sx={{
                    fontSize: '2vh', marginLeft: isMobile || isTablet ? '70vw' : '90.5vw', color: 'white', backgroundColor: 'red', '&:hover': {
                        backgroundColor: 'red'
                    }
                }}><b>X</b></Button>
                {showVideo ? (
                    <iframe
                        title="video-preview"
                        src="https://drive.google.com/file/d/1q_HfgREHW5B2F83M_Lq4w4voaIi1TkgN/preview"
                        style={{ width: '100%', maxWidth: '800px', marginLeft: isMobile || isTablet ? '0vw' : '20vw' }}
                        width="100%"
                        height={isMobile ? "200px" : "400px"}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <Typography variant="body1" sx={{ fontSize: isMobile || isTablet ? '2.2vh' : '2.8vh', lineHeight: '1.7', fontFamily: 'Yu Gothic Medium', marginLeft: isMobile || isTablet ? '1vw' : '15vw' }}><i>
                        Dear reader, <br></br>
                        <b>Hodaya Arama is a twenty-three-year-old kallah who was orphaned thirteen years ago with<br></br>
                            the passing of her dear mother. The Arama family was living at the time in an Arab section of<br></br>
                            Lod, and yet Hodaya and her three younger siblings were raised by their devoted parents with<br></br>
                            full adherence to the chareidi lifestyle. </b><br></br>
                        <div className='ring'></div>
                        Two older daughters from the mother`s first marriage<br></br>
                        also lived with the Aramas till the passing of their mother.<br></br>
                        After a two-year struggle with a ravaging illness, Mrs. Arama passed on and ten-year-old<br></br>
                        Hodaya took upon herself all the household duties and the care for her younger siblings. Her<br></br>
                        father, unfortunately, is not well either and suffers from diabetes and a chronic lung disease.<br></br>
                        This, combined with the family`s poor financial state, explains why so much responsibility fell<br></br>
                        on Hodaya`s young shoulders. At age eighteen she legally assumed the medical responsibility<br></br>
                        for her father who spent months hospitalized in a coma. He recovered somewhat but is<br></br>
                        unable to act as a functioning parent and is currently a patient in a nursing facility.<br></br>
                        Due to financial considerations Hodaya`s siblings moved in with other families. She herself<br></br>
                        had a very close relationship with the principal of her high school and was invited to join the<br></br>
                        principal`s family and live there as a daughter. At last, she agreed and today she is a beloved<br></br>
                        member of the family.<br></br>
                        Recently, a drawn-out period of shidduchim reached its happy culmination with Hodaya`s<br></br>
                        engagement to a fine, learned young man known for his sterling middos and yiras shomayim.<br></br>
                        Acting as adoptive parents, Hodaya`s principal and her husband have committed to assist the<br></br>
                        kallah by raising a sum of 250,000 NIS. This sum does not include clothing for the kallah and<br></br>
                        other items she will need to start off her new life. Her father cannot be expected to take part<br></br>
                        at all as his own expenses are covered by charity.<br></br>
                        <b>  This is a true case of hachnosas kallah for an orphaned girl. Over the last six years, her adoptive<br></br>
                            parents have too been afflicted by medical issues and definitely need the assistance of<br></br>
                            generous people who will shoulder the burden. Please open your hearts and give with great<br></br>
                            generosity. May Hashem bless you for enabling Hodaya to begin her married life with joy!<br></br>
                            May you and your families reap many rewards for taking part in this great mitzvah.</b><br></br>
                        Sincerely yours,
                        Hodaya`s family</i>
                    </Typography>
                )}
                <Button style={{ backgroundColor: '#cbd3a9', }} onClick={handleButtonClick} sx={{
                    color: 'black',
                    backgroundColor: '#cbd3a9',
                    boxShadow: 'none',
                    marginLeft: '35vw',
                    marginBottom: '4vh',
                    marginTop: '2vh',
                    borderRadius: isMobile || isTablet ? '20vh' : '10vh',
                    fontSize: isMobile || isTablet ? '1.5vh' : '3vh',
                    '&:hover': {
                        backgroundColor: '#cbd3a9',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgb(255,255,255)'
                    },
                    width: isMobile || isTablet ? '100%' : '18vw',
                    maxWidth: '20vw',
                }}>
                    I want to donate
                </Button>
            </Dialog >
        </>
    );
}
export default LandingPage;