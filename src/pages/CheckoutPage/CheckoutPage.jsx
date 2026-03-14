import { CoffeeHero } from "../../components/CoffeeHero";
import { Footer } from "../../components/Footer";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import maskGroupBg from "../../assets/maskGroupBg.png";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

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
             
            <Container maxWidth="sm" sx={{ py: 6 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
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
                        <TextField
                            label='Address'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.address}
                            helperText={errors.address?.message}
                            {...register('address', {required: 'Address is required'})}
                        />
                        <TextField
                            label='Phone'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            {...register('phone', {required: 'Phone is required'})}
                        />

                        <Button 
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2,
                                backgroundColor: "#1f1f1f",
                                "&:hover": {
                                backgroundColor: "#000",
                                },
                            }}>
                            Place order
                        </Button>
                    </form> 
                </Paper>
            </Container>

            <Footer />
        </div>
    )
}