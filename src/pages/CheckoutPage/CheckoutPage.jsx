import { CoffeeHero } from "../../components/CoffeeHero";
import { Footer } from "../../components/Footer";

import maskGroupBg from "../../assets/maskGroupBg.png";

export const CheckoutPage = ({cartCount, total}) => {

    return (
        <div>
            <CoffeeHero
            image={maskGroupBg}
            title="Checkout"
            cartCount={cartCount}/>
             
            <h1>Checkout</h1>
            <p>Items: {cartCount}</p>
            <p>Total: ${total.toFixed(2)}</p>



            <Footer />
        </div>
    )
}