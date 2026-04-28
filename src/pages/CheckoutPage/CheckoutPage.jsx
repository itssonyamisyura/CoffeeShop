import { CoffeeHero } from "../../components/CoffeeHero";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import maskGroupBg from "../../assets/maskGroupBg.png";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const CheckoutPage = ({ cartCount, total, cartItems, clearCart }) => {

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setOrderNumber(`ORD-${Math.floor(10000 + Math.random() * 90000)}`);
        setOrderPlaced(true);
        clearCart();
        reset();
    };

    if (orderPlaced) {
        return (
            <div>
                <CoffeeHero
                    image={maskGroupBg}
                    title="Order Confirmed"
                    cartCount={0} />

                <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
                    <Box display="flex" justifyContent="center" mb={2}>
                        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }} />
                    </Box>
                    <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                        Thank you for your order!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                        Your order <strong>#{orderNumber}</strong> has been placed successfully. We'll send a confirmation email with your tracking details shortly.
                    </Typography>
                    <Button
                        component={Link}
                        to="/coffee"
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#1f1f1f",
                            px: 4, py: 1.5,
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '16px',
                            "&:hover": { backgroundColor: "#000" }
                        }}>
                        Continue Shopping
                    </Button>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <CoffeeHero
                image={maskGroupBg}
                title="Checkout"
                cartCount={cartCount} />

            <Container maxWidth="sm" sx={{ py: 6 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: '12px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                            Checkout
                        </Typography>

                        <Box sx={{ mb: 3, p: 2, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Order summary
                            </Typography>
                            {cartItems.map((item) => (
                                <Typography key={item.id} variant="body2" sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                    <span>{item.name} × {item.quantity}</span>
                                </Typography>
                            ))}
                            <Typography variant="body1" fontWeight="bold" sx={{ mt: 2, pt: 2, borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </Typography>
                        </Box>

                        <TextField
                            label='Full Name'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            {...register('name', {
                                required: 'Name is required',
                            })}
                        />
                        <TextField
                            label='Email Address'
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
                            })}
                        />
                        <TextField
                            label='Shipping Address'
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!errors.address}
                            helperText={errors.address?.message}
                            {...register('address', {
                                required: 'Address is required',
                            })}
                        />
                        <TextField
                            label='Phone Number'
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
                            })}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                                mt: 4,
                                py: 1.5,
                                fontSize: '16px',
                                textTransform: 'none',
                                borderRadius: '8px',
                                backgroundColor: "#1f1f1f",
                                "&:hover": {
                                    backgroundColor: "#000",
                                },
                            }}>
                            Place order • ${total.toFixed(2)}
                        </Button>
                    </form>
                </Paper>
            </Container>

            <Footer />
        </div>
    )
}