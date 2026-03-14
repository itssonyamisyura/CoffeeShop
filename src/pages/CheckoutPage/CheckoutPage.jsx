import { CoffeeHero } from "../../components/CoffeeHero";
import { Footer } from "../../components/Footer";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import maskGroupBg from "../../assets/maskGroupBg.png";

export const CheckoutPage = ({cartCount, total}) => {

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();
    //register подключает input

    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div>
            <CoffeeHero
            image={maskGroupBg}
            title="Checkout"
            cartCount={cartCount}/>
             
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Checkout</h1>
                <p>Items: {cartCount}</p>
                <p>Total: ${total.toFixed(2)}</p>

                <TextField
                    label='Name'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...register('name', {required: 'Name is required'})}
                />
                <TextField
                    label='Email'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...register('email', {required: 'Email is required'})}
                />
                    
                <button type="submit">
                    Place order
                </button>
            </form>
            <Footer />
        </div>
    )
}