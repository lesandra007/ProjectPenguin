import React from 'react'
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Title from '../components/Title';
import PengyStats from '../components/PengyStats';
import ProgressBar from '../components/ProgressBar';
import penguinlogo from "../penguinlogo.png";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ShopItem from '../components/ShopItem';
import blackSquareShades from "../ShopImgs/blackSquareShades.jpg";
import blueHoodie from "../ShopImgs/blueHoodie.jpg";
import greenHat from "../ShopImgs/greenHat.jpg";
import hair from "../ShopImgs/hair.jpg";

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
        <div className="PageMenuAndContent" /*style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: '#1F2947'}}*/>
            <Sidebar/>
            <Topbar/>
            <div className="PageContent" /*style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1'}}*/>
                <Title title="Home"/>
                <div className="ShopSections" style={{flexWrap:'wrap-reverse', gap: '20px', marginLeft:'20px'}}/*style={itemListStyle}*/>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', flexBasis:'0', flexGrow:'3', minWidth:'330px'}}>
                        {/* PENGY STATS BOX */}
                        <div style={{boxSizing: 'border-box', padding: '5px 30px 20px'}}>
                            {/* <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                    PENGY STATS
                                </div>
                            </div> */}
                            <h2 style={{color: 'whitesmoke'}}>PENGY STATS</h2>
                            <hr style={{width: '100%'}}></hr>
                            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'10px'}}>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Applications" number="28"/>
                                    <button type="button" className="statsButton">Applied to Job</button>
                                </div>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Interviews" number="2"/>
                                    <button type="button" className="statsButton">Got Interviewed</button>
                                </div>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Questions" number="10"/>
                                    <Button type="button" href="/questions" style={{color:'whitesmoke', border:'inset', padding: '5px 12px'}}>See More</Button>
                                </div>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Hacks" number="7"/>
                                    <Button type="button" href="/hackings" style={{color:'whitesmoke', border:'inset', padding: '5px 12px'}}>See More</Button>
                                </div>
                            </div>
                            
                            
                            
                        </div>

                        {/* <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '30px'}}>
                            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                    PENGY'S WARDROBE
                                </div>
                                <h2 style={{color: 'var(--dark-orange', fontSize: 'larger'}}>PENGY WARDROBE</h2>
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
                        </div> */}
                        <div className='wardrobeHome'>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <h2 style={{color:'var(--dark-orange)'}}>WARDROBE</h2>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="orange" href="/shop" style={{height:'38px', border:'inset'}}>
                                        EXPLORE MORE
                                    </Button>
                                </ThemeProvider>
                            </div>
                            
                            <hr></hr>
                            <div className='shopList' style={{flexWrap:'nowrap', height: '140px', overflow:'auto'}}>
                                <img src={blackSquareShades} alt="black square shades" className='fitItem'/>
                                <img src={blueHoodie} alt="blue hoodie" className='fitItem'/>
                                <img src={greenHat} alt="green hat" className='fitItem'/>
                                <img src={hair} alt="hair" className='fitItem'/>
                            </div>
                        </div>
                    </div>
                    
                    {/* PENGY Character BOX */}
                    <div className='statsBox' style={{backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '5px 30px 20px', flexBasis:'0', flexGrow:'2', minWidth:'330px'}}>
                        <h2 style={{color: 'whitesmoke'}}>PENGY</h2>
                        <hr style={{width: '100%'}}></hr>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                            {/* <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                PENGY STATS
                            </div> */}
                            {/* PENGY Character */}
                            <div>
                                <div style={{backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '20px'}}>
                                    <h2 style={{color: '#F39237', margin: '0px' }}>
                                        LEVEL 20
                                    </h2>
                                    <ProgressBar percentCompleted={20}/>
                                    <h3 style={{color: 'silver', fontSize: '15px', margin: '0px', marginBottom: '0px'}}>
                                        320/1000 XP
                                    </h3>
                                </div>
                            </div>
                            <img src={penguinlogo} alt="logo" style={{width: '420px', height:'280px'}}/>
                        </div>
                        
                    </div>

                </div>
            </div>
            <Bottombar/>
        </div>
    );
}