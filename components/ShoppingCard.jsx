// components/ShoppingCart.js

import { useState } from "react";

const ShoppingCart = () => {
   return (
      <div>
         <h1>Shopping Cart</h1>
         <div class="cart-styled__StyledCart-MkZHJ GWsoR">
            <div class="cart-styled__FreeShippingBanner-eNQiFw dfoaKE">Free standard shipping</div>
            <span class="cart-styled__ItemCount-iqXSQE iTfviz">1 item</span>
            <div class="cart-styled__CartContainer-jRUanV gzYoyQ" style="height: 230px;">
               <div class="cart-item__StyledCartItem-fMty kCtVvA">
                  <div class="cart-item__CartItemColumn-cLCeyr liAqCG">
                     <div class="cart-item__ImageCenteredColumn-huFba-D kljqhG">
                        <a
                           href="https://bash.com/asics-men-s-gel-kayano-14-black-sneaker-060601agct2/p"
                           target="_parent"
                        >
                           <img
                              src="//thefoschini.vteximg.com.br/arquivos/ids/158709161-288-auto"
                              width="150"
                              height="150"
                              alt="Asics Men's Gel-Kayano 14 Black Sneaker"
                           />
                        </a>
                     </div>
                     <div class="cart-item__CartItemDetailsWrapper-dNwDRQ sbWbN">
                        <div class="cart-item-details-styled__DetailsWrapper-hOPqQo bVRsex">
                           <div class="cart-item-details-styled__CartProductContainer-gRjTQx emURPC">
                              <div class="cart-item-details-styled__CartProductRow-MJMZg ittqZD titleRow">
                                 <h3 class="cart-item-details-styled__CartProductTitle-kqIDsq dsKPaH">
                                    <a
                                       href="https://bash.com/asics-men-s-gel-kayano-14-black-sneaker-060601agct2/p"
                                       target="_parent"
                                       class="cart-item-details-styled__LinkNoDecoration-eWtcS cTippT"
                                    >
                                       Asics Men's Gel-Kayano 14 Black Sneaker
                                    </a>
                                 </h3>
                                 <div class="cart-item-details-styled__DeleteIcon-dGLHPX dUlxRa">
                                    <svg
                                       width="13.75px"
                                       height="15px"
                                       viewBox="0 0 16 17"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M14.875 3.375H1.125M4.875 0.875H11.125M13.625 3.375V15.25C13.625 15.4158 13.5592 15.5747 13.4419 15.6919C13.3247 15.8092 13.1658 15.875 13 15.875H3C2.83424 15.875 2.67527 15.8092 2.55806 15.6919C2.44085 15.5747 2.375 15.4158 2.375 15.25V3.375"
                                          stroke="#040404"
                                          stroke-width="1.5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                       ></path>
                                    </svg>
                                 </div>
                              </div>
                              <div class="cart-item-details-styled__CartProductRow-MJMZg ittqZD">
                                 <div class="cart-item-details-styled__Brand-kAHPVa gQdlwA">Asics</div>
                              </div>
                              <div class="cart-item-details-styled__CartProductRow-MJMZg ittqZD">
                                 <div class="cart-specification__Specification-kFVCkB dKdmAm">
                                    <p class="cart-specification__SpecificationRow-cnuCcH jZEPYH">Size: 8</p>
                                    <p class="cart-specification__SpecificationRow-cnuCcH jZEPYH">Colour: Black</p>
                                 </div>
                              </div>
                              <div class="cart-item-details-styled__CartProductRow-MJMZg ittqZD">
                                 <div class="cart-item-price__CartPriceContainer-jTnTJS cvvAZc">
                                    <div class="cart-item-price__PriceRow-jTISQj denXxA">
                                       <div class="cart-item-price__SellingPrice-kkJTWD dnhPOX">R 9,599.85</div>
                                    </div>
                                    <div class="cart-item-price__PriceRow-jTISQj denXxA small-gap"></div>
                                 </div>
                              </div>
                              <div class="change-quantity__InputList-ikdmFc lktUYK">
                                 <button class="change-quantity__ChangeButton-bVcGyk jiPdEx">
                                    <img
                                       alt="minus"
                                       srcset="/_next/image?url=%2Fstatic%2Ficons%2Fmaterial-icon-minus.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2Fstatic%2Ficons%2Fmaterial-icon-minus.png&amp;w=32&amp;q=75 2x"
                                       src="/_next/image?url=%2Fstatic%2Ficons%2Fmaterial-icon-minus.png&amp;w=32&amp;q=75"
                                       width="16"
                                       height="16"
                                       decoding="async"
                                       data-nimg="1"
                                       loading="lazy"
                                       style="color: transparent;"
                                    />
                                 </button>
                                 <button class="change-quantity__InputValue-bQwA-dl OfyKm">3</button>
                                 <button class="change-quantity__ChangeButton-bVcGyk jiPdEx">
                                    <img
                                       alt="plus"
                                       srcset="/_next/image?url=%2Fstatic%2Ficons%2Fmaterial-icon-plus.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2Fstatic%2Ficons%2Fmaterial-icon-plus.png&amp;w=32&amp;q=75 2x"
                                       src="/_next/image?url=%2Fstatic%2Ficons%2Fmaterial-icon-plus.png&amp;w=32&amp;q=75"
                                       width="16"
                                       height="16"
                                       decoding="async"
                                       data-nimg="1"
                                       loading="lazy"
                                       style="color: transparent;"
                                    />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShoppingCart;
