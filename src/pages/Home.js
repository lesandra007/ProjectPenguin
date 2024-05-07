import React, { useState, useEffect } from 'react'
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
import DiamondIcon from '@mui/icons-material/Diamond';

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
    // Tokens Database
    const [tokensJson, setTokensJson] = useState({
        tokensCount: 0,
        storeInventoryPrices: [],
    });
    // Fetch data from API
    useEffect(() => {
        fetch("/shop")
        .then(response => response.json())
        .then(
        tokensJson => {
            //tokensJson is database with user's tokens count and store inventory data
            setTokensJson({
            tokensCount: tokensJson.tokensCount,
            storeInventoryPrices: tokensJson.storeInventoryPrices,
            })
        }
        )
    }, []);
    
    // stats Database
    const [statsJson, setStatsJson] = useState({
        applications: 0,
        interviews: 0,
        questions: 0,
        hackings: 0,
    });
    // Fetch data from API
    useEffect(() => {
        fetch("/home")
        .then(response => response.json())
        .then(
            statsJson => {
                //userGoalsJson is database with users's goals, tasks, and badges information
                setStatsJson({
                    applications: statsJson.applications,
                    interviews: statsJson.interviews,
                    questions: statsJson.questions,
                    hackings: statsJson.hackings
                })
            })
    }, []);
    // console.log("intialstats=" + JSON.stringify(statsJson))

    async function handleAppSubmit(){
        //form to pass data to flask backend
        let data = new FormData()
        data.append("method", "applications")
        console.log(data.getAll("method"))

        //pass form data to backend and retrieve results
        const response = await fetch("/home", {
            method: "POST",
            body: data
        })
        const jsonData = await response.json();

        //set frontend variables
        setStatsJson({
        applications: jsonData.updatedCount,
        interviews: statsJson.interviews,
        questions: statsJson.questions,
        hackings: statsJson.hackings
        })
        console.log("stats=" + JSON.stringify(statsJson))

        //update tokens
        const responseToken = await fetch("/shop")
        const jsonDataToken = await responseToken.json();

        setTokensJson({
        tokensCount: jsonDataToken.tokensCount,
        storeInventoryPrices: tokensJson.storeInventoryPrices,
        })
    }

    async function handleInterviewSubmit(){
        //form to pass data to flask backend
        let data = new FormData()
        data.append("method", "interviews")
        console.log(data.getAll("method"))

        //pass form data to backend and retrieve results
        const response = await fetch("/home", {
            method: "POST",
            body: data
        })
        const jsonData = await response.json();

        //set frontend variables
        setStatsJson({
            applications: statsJson.applications,
            interviews: jsonData.updatedCount,
            questions: statsJson.questions,
            hackings: statsJson.hackings
        })
        console.log("stats=" + JSON.stringify(statsJson))

        //update tokens
        const responseToken = await fetch("/shop")
        const jsonDataToken = await responseToken.json();

        setTokensJson({
        tokensCount: jsonDataToken.tokensCount,
        storeInventoryPrices: tokensJson.storeInventoryPrices,
        })
    }
    return (
        <div className="PageMenuAndContent" /*style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: '#1F2947'}}*/>
            <Sidebar/>
            <Topbar/>
            <div className="PageContent" /*style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1'}}*/>
                <Title title="Home"/>
                <div className="ShopSections" style={{flexWrap:'wrap-reverse', gap: '20px', marginLeft:'20px', alignItems:'flex-end'}}/*style={itemListStyle}*/>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', flexBasis:'0', flexGrow:'3', minWidth:'330px'}}>
                        {/* PENGY STATS BOX */}
                        <div style={{boxSizing: 'border-box', padding: '5px 30px 20px'}}>
                            {/* <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                                <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                    PENGY STATS
                                </div>
                            </div> */}
                            <h2 style={{color:'whitesmoke'}}>PENGY STATS</h2>
                            <hr style={{width: '100%'}}></hr>
                            <div className="statBoxes" style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'10px'}}>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Applications" number={statsJson.applications}/>
                                    <button type="button" className="statsButton" onClick={handleAppSubmit}>Applied to Job</button>
                                </div>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Interviews" number={statsJson.interviews}/>
                                    <button type="button" className="statsButton" onClick={handleInterviewSubmit}>Got Interviewed</button>
                                </div>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Questions" number={statsJson.questions}/>
                                    <Button type="button" href="/questions" style={{color:'whitesmoke', border:'inset', padding: '5px 12px'}}>See More</Button>
                                </div>
                                <div style={{ backgroundColor:'var(--darker-blue)', borderRadius: '10px',display:'flex', flexDirection: 'column', 
                                            alignItems:'center', width:'200px', gap: '25px', boxSizing:'border-box', padding:'20px'}}>
                                    <PengyStats title="Hacks" number={statsJson.hackings}/>
                                    <Button type="button" href="/hackings" style={{color:'whitesmoke', border:'inset', padding: '5px 12px'}}>See More</Button>
                                </div>
                            </div>
                        </div>
                        <div className='wardrobeHome'>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <h2 style={{color:'var(--dark-orange)'}}>WARDROBE</h2>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="orange" href="/shop" style={{height:'38px', border:'inset'}}>
                                        EXPLORE SHOP
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
                    <div style={{backgroundColor:'var(--darker-blue)', borderRadius: '10px', boxSizing: 'border-box', padding: '5px 30px 20px', flexBasis:'0', flexGrow:'2', minWidth:'330px', maxWidth: '500px', height: 'fit-content'}}>
                        <div className='shopStatsHeader'>
                            <h2 style={{color:'whitesmoke'}}>PENGY</h2>
                            <div className='shopTokens'><DiamondIcon/><div>{tokensJson.tokensCount}</div></div>
                        </div>
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