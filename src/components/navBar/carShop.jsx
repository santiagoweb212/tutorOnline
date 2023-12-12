import React from 'react'
import ModalCartShop from '../modalCartShop'
import cartShopping from "@/assets/cartShop.png";
const CarShop = () => {
  return (
    <div
    className=" h-9 relative cursor-pointer  "
    /* onMouseEnter={handleOpenModalCartShop}
    onMouseLeave={handleCloseModalCartShop} */
  >
    <img src={cartShopping} alt="imgcart" className="h-full" />
    <ModalCartShop /* openModalCartShop={openModalCartShop} */ />
  </div>
  )
}

export default CarShop