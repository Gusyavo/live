import classes from './promotions.module.css'
import { PUT } from '../../api/api'

function PromotionCard({ promo }) {

  const { productName, offertPrice, productURL, productImage, offertID } = promo

  const clickOnPromo = () => {
    PUT(`/v1/api/Offerts/OffertClick/${offertID}`).then(res => console.log(res))
    window.open(productURL)
  }

  return (
    <button
      className={classes.button}
      onClick={clickOnPromo}
    >
      <div className={classes.left}>
        <img className={classes.product} src={productImage} alt="cellphone" />
        <div className={classes.info}>
          <label className={classes.productName} >{productName}</label>
          <label >$ {offertPrice}</label>
          {/* <label className="with-discount">$ {withDiscount}</label> */}
        </div>
      </div>
      <img className={classes.rightArrow} src={require('../../assets/right-arrow.png')} alt="arrow" />
    </button>
  );
}

export default PromotionCard;
