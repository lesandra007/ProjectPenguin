import React, { useState, useEffect }  from 'react'
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
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

  const[isPurchaseMenuOpen, setIsPurchaseMenuOpen] = useState(false);
  const[itemToPurchase, setItemToPurchase] = useState(["",""]);
  const[priceToPurchase, setPriceToPurchase] = useState(0);

  function getCostOfItem(type){
    return tokensJson.storeInventoryPrices.find((item) => item.type === type).cost
  }

  function handleSelect(item, type){
    setItemToPurchase([item,type]);
    console.log("inventory: " + JSON.stringify(tokensJson.storeInventoryPrices))
    setPriceToPurchase(getCostOfItem(type))
    console.log("price: " + priceToPurchase)
    setIsPurchaseMenuOpen(true);
    console.log("item: " + itemToPurchase)
  }

  function finishPurchase(){
    setItemToPurchase(["",""]);
    // setPriceToPurchase(0);
    setIsPurchaseMenuOpen(false);
    console.log("item looked at: " + itemToPurchase[1])
  }

  async function handlePurchase(itemType){
    console.log("to purchase:" + itemToPurchase[1])

    //form to pass data to flask backend
    let data = new FormData()
    data.append("type", itemType)
    console.log(data.getAll("type"))

    const response = await fetch("/shop", {
      method: "DELETE",
      body: data
    })
    const jsonData = await response.json();
    console.log("updated tokens json count = " + JSON.stringify(jsonData.updatedCount))
    //set frontend variables
    setTokensJson({
      tokensCount: jsonData.updatedCount,
      storeInventoryPrices: tokensJson.storeInventoryPrices,
    })
    finishPurchase();
  }

  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <Topbar/>
        <div className="PageContent">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Shop'/>
          </div>
          <div className='ShopSections'>
            <div className='AssetsSection'>
              <div className='shop'>
                <div className='shopStatsHeader'>
                  <h2>SHOP</h2>
                  <div className='shopTokens'><DiamondIcon/><div>{tokensJson.tokensCount}</div></div>
                </div>
                <hr></hr>
                <div className='shopList'>
                  <img src={brownLayer}  alt="brown layer" className='fitItem' onClick={() => handleSelect(brownLayer,"outerlayer")}/>
                  <img src={greenBackpack} alt="green blackpack" className='fitItem' onClick={() => handleSelect(greenBackpack,"luggage")}/>
                  <img src={greenSweater} alt="green sweater" className='fitItem' onClick={() => handleSelect(greenSweater,"outerlayer")}/>
                  <img src={purpleDress} alt="purple dress" className='fitItem' onClick={() => handleSelect(purpleDress,"fullfit")}/>
                  <img src={browlineGlasses} alt="browline glasses" className='fitItem' onClick={() => handleSelect(browlineGlasses,"glasses")}/>
                  <img src={skirt} alt="skirt" className='fitItem' onClick={() => handleSelect(skirt,"bottoms")}/>
                  <img src={pinkShades} alt="pink shades" className='fitItem' onClick={() => handleSelect(pinkShades,"glasses")}/>
                  <img src={blueHat} alt="blue hat" className='fitItem' onClick={() => handleSelect(blueHat,"hats")}/>
                </div>
                {isPurchaseMenuOpen && 
                <div>
                  <div className='purchaseBackground'/>
                  <div className='purchaseDialog'>
                    <img src={itemToPurchase[0]}  alt="selected item" className='fitItem'/>
                    <div className='purchaseButtons'>
                      {(priceToPurchase <= tokensJson.tokensCount) && <button className="buyButton" onClick={() => handlePurchase(itemToPurchase[1])}><DiamondIcon/><div>{priceToPurchase}</div></button>}
                      {(priceToPurchase > tokensJson.tokensCount) && <button className="buyButton"><DiamondIcon/><div>{priceToPurchase}</div></button>}
                      <button className="cancelBuyButton" onClick={() => finishPurchase()}>cancel</button>
                    </div>
                  </div>
                </div>} 
              </div>
              <div className='wardrobe'>
                <h2>WARDROBE</h2>
                <hr></hr>
                <div className='shopList'>
                  <img src={blackSquareShades} alt="black square shades" className='fitItem'/>
                  <img src={blueHoodie} alt="blue hoodie" className='fitItem'/>
                  <img src={greenHat} alt="green hat" className='fitItem'/>
                  <img src={hair} alt="hair" className='fitItem'/>
                </div>
              </div>
            </div>
            <div className='FitsSection'>
              <h2>PENGY STATS</h2>
              <hr></hr>
              <div className='fits'>
                <h2>PENGY FITS</h2>
              </div>
              <img src={penguinlogo} alt="logo"/>
            </div>
          </div>
        </div>
        <Bottombar/>
    </div>
  );
}