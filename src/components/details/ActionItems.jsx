import { Box, Button, styled } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

const LeftContainer = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;
`

const Image = styled('img')({
    width: "95%",
    padding: "15px"
})

const StyledButton = styled(Button)`
width: 48%;
height:50px;
border-radius: 4px;
`

const ActionItems = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = product

    let token = JSON.parse(localStorage.getItem("token"));

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity))
        navigate("/cart")
    }
    const checklogin = () => {
        if (token) {
            // navigate("/payment")
            alert("Page is in process")
        }
        else {
            alert("Login Or Register with us")
            navigate("/")
        }
    }

    return (
        <LeftContainer>
            <Box style={{
                padding: "15px 20px",
                border: "1px solid #f0f0f0",
                width: "90%",
            }}>
                <Image src={product.detailUrl} alt="product"></Image>
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }} > <ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={() => checklogin()} style={{ background: "#fb541b" }}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItems