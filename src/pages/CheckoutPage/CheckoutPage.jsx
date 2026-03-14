import { CoffeeHero } from "../../components/CoffeeHero";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import maskGroupBg from "../../assets/maskGroupBg.png";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const CheckoutPage = ({cartCount, total}) => {

    const [orderPlaced, setOrderPlaced] = useState(false);

    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors}
    } = useForm();
    //register подключает input

    const onSubmit = (data) => {
        console.log(data);
        setOrderPlaced(true);
        reset();
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

                    <Typography variant="h4" component="h1" gutterBottom>
                        Checkout
                    </Typography>

                    <Typography variant="body1">
                        Items: {cartCount}
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Total: ${total.toFixed(2)}
                    </Typography>

                        <TextField
                            label='Name'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            {...register('name', {
                                required: 'Name is required',
                                onChange: () => setOrderPlaced(false),
                            })}
                        />
                        <TextField
                            label='Email'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Enter a valid email address",
                                },
                                onChange: () => setOrderPlaced(false),
                            })}
                        />
                        <TextField
                            label='Address'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.address}
                            helperText={errors.address?.message}
                            {...register('address', {
                                required: 'Address is required',
                                onChange: () => setOrderPlaced(false),
                            })}
                        />
                        <TextField
                            label='Phone'
                            type="tel"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            {...register('phone', {
                                required: 'Phone is required',
                                pattern: {
                                    value: /^[0-9+\-\s()]{6,}$/,
                                    message: "Enter a valid phone number",
                                },
                                onChange: () => setOrderPlaced(false),
                            })}
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
                        {orderPlaced && (
                            <Typography sx={{ mt: 2 }}>
                                Order placed successfully!
                            </Typography>
                        )}
                    </form> 
                </Paper>
            </Container>

            <Footer />
        </div>
    )
}