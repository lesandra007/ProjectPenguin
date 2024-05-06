import React, { useState, useEffect }  from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import penguinlogo from "../penguinlogo.png";
import blueHat from "../ShopImgs/blue_hat.jpg";
import blackSquareShades from "../ShopImgs/blackSquareShades.jpg";
import blueHoodie from "../ShopImgs/blueHoodie.jpg";
import browlineGlasses from "../ShopImgs/browlineGlasses.jpg";
import brownLayer from "../ShopImgs/brownLayer.jpg";
import greenBackpack from "../ShopImgs/greenBackpack.jpg";
import greenSweater from "../ShopImgs/greenSweater.jpg";
import purpleDress from "../ShopImgs/purpleDress.jpg";
import skirt from "../ShopImgs/skirt.jpg";
import pinkShades from "../ShopImgs/pinkShades.jpg";
import greenHat from "../ShopImgs/greenHat.jpg";
import hair from "../ShopImgs/hair.jpg";
import DiamondIcon from '@mui/icons-material/Diamond';


export default function Shop() {

  const[isPurchaseMenuOpen, setIsPurchaseMenuOpen] = useState(false);
  const[itemToPurchase, setItemToPurchase] = useState("");

  function handleSelect(item){
    setItemToPurchase(item);
    setIsPurchaseMenuOpen(true);
    console.log("item: " + itemToPurchase)
  }

  function cancelPurchase(){
    setItemToPurchase("");
    setIsPurchaseMenuOpen(false);
    console.log("item canceled: " + itemToPurchase)
  }

  function handlePurchase(){
    setItemToPurchase("");
    setIsPurchaseMenuOpen(false);
    console.log("item canceled: " + itemToPurchase)
  }

  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <div className="PageContent">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Shop'/>
          </div>
          <div className='ShopSections'>
            <div className='AssetsSection'>
              <div className='shop'>
                <div className='shopStatsHeader'>
                  <h2>SHOP</h2>
                  <div className='shopTokens'><DiamondIcon/><div>1230</div></div>
                </div>
                <hr></hr>
                <div className='shopList'>
                  {/* <img src={blueHat} className='fitItem'/> */}
                  <img src={brownLayer} className='fitItem' onClick={() => handleSelect(brownLayer)}/>
                  <img src={greenBackpack} className='fitItem' onClick={() => handleSelect(greenBackpack)}/>
                  <img src={greenSweater} className='fitItem' onClick={() => handleSelect(greenSweater)}/>
                  <img src={purpleDress} className='fitItem' onClick={() => handleSelect(purpleDress)}/>
                  <img src={browlineGlasses} className='fitItem' onClick={() => handleSelect(browlineGlasses)}/>
                  <img src={skirt} className='fitItem' onClick={() => handleSelect(skirt)}/>
                  <img src={pinkShades} className='fitItem' onClick={() => handleSelect(pinkShades)}/>
                  <img src={blueHat} className='fitItem' onClick={() => handleSelect(blueHat)}/>
                </div>
                {isPurchaseMenuOpen && 
                <div>
                  <div className='purchaseBackground'/>
                  <div className='purchaseDialog'>
                    <img src={itemToPurchase} className='fitItem'/>
                    <div className='purchaseButtons'>
                      <button className="buyButton" onClick={handlePurchase}><DiamondIcon/><div>500</div></button>
                      <button className="cancelBuyButton" onClick={cancelPurchase}>cancel</button>
                    </div>
                  </div>
                </div>} 
              </div>
              <div className='wardrobe'>
                <h2>WARDROBE</h2>
                <hr></hr>
                <div className='shopList'>
                  <img src={blackSquareShades} className='fitItem'/>
                  <img src={blueHoodie} className='fitItem'/>
                  <img src={greenHat} className='fitItem'/>
                  <img src={hair} className='fitItem'/>
                </div>
              </div>
            </div>
            <div className='FitsSection'>
              <h2>PENGY STATS</h2>
              <hr></hr>
              <div className='fits'>
                <h2>PENGY FITS</h2>
                <img src={penguinlogo} alt="logo"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}