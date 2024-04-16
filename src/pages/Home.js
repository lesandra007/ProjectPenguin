import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import PengyStats from '../components/PengyStats';
import ProgressBar from '../components/ProgressBar';
import pengyForHP from "../pengyForHP.png";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ShopItem from '../components/ShopItem';

const itemListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
    width: '90%',
    gap: '5vw', // Gap between items
    marginTop: '5vh',
    marginLeft: '5vh',
    marginRight: '5vh',
};

const theme = createTheme({
    palette: {
      orange: {
        main: '#F39237',
        light: '#FA9A40',
        dark: '#C16B1A',
        contrastText: '#00000',
      },
    },
  });

export default function Home() {
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: '#1F2947'}}>
            <Sidebar/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1'}}>
                <Title title='Project Penguin'/>
                <div style={itemListStyle}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        {/* PENGY STATS BOX */}
                        <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '30px'}}>
                            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                    PENGY STATS
                                </div>
                                <hr style={{width: '100%'}}></hr>
                            </div>
                            <PengyStats title="Applications" number="28"/>
                            <PengyStats title="Interviews" number="2"/>
                            <PengyStats title="Questions" number="10"/>
                            <PengyStats title="Hacks" number="7"/>
                        </div>

                        <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '30px'}}>
                            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                    PENGY'S WARDROBE
                                </div>
                                <hr style={{width: '100%'}}></hr>
                                <div style={{marginTop: '10px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    <ShopItem />
                                    <ShopItem />
                                    <ShopItem />
                                    <ShopItem />
                                    <ShopItem />
                                    <ShopItem />
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    {/* PENGY Character BOX */}
                    <div style={{backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '30px'}}>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                PENGY STATS
                            </div>
                            <hr style={{width: '100%'}}></hr>
                            
                            {/* PENGY Character */}
                            <div>
                                <div style={{backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '20px'}}>
                                    <h2 style={{color: '#F39237', margin: '0px' }}>
                                        LEVEL 2
                                    </h2>
                                    <ProgressBar percentCompleted={20}/>
                                    <h3 style={{color: 'white', fontSize: '15px', margin: '0px', marginBottom: '15px'}}>
                                        320/1000 XP
                                    </h3>
                                    <img src={pengyForHP} alt="logo" width='100%' style={{maxHeight: '35vh'}} />
                                </div>
                            </div>
                            
                            <div style={{marginTop: '5px'}}>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="orange" href="/shop">
                                        EXPLORE MORE
                                    </Button>
                                </ThemeProvider>
                            </div>
                                
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}