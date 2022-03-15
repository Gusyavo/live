import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import PromotionCard from "./PromotionCard";
import classes from './promotions.module.css'
import { GET } from '../../api/api';


function Promotions({ isMobile }) {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const { promotions, live, showPromotions: show } = state
  const { liveID } = live

  useEffect(() => {
    GET(`/v1/api/Offerts/GetOffertsByLiveID/${liveID}`).then(res => {
      dispatch({ type: 'setPromotions', promotions: res.data })
    })
  }, [liveID, dispatch])

  const { Promotions, title, PromotionsContainer, hideButton, hidden, nonDisplay } = classes

  const arrowSrc = show ? require('../../assets/left-arrow.png') : require('../../assets/right-arrow.png')

  return (
    <div className={`${PromotionsContainer} ${!show && isMobile ? nonDisplay : null}`}>
      {!isMobile &&
        <>
          <button
            className={hideButton}
            onClick={() => dispatch({ type: 'togglePromotions' })}
          >
            <img className={classes.hideArrow} src={arrowSrc} alt="arrow" />
          </button>
          <label className={title} >Tienda</label>
        </>
      }
      <div className={`${Promotions} ${show ? null : hidden}`}>
        {promotions.map((promo, i) => (
          <PromotionCard promo={promo} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Promotions;
