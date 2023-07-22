import { Button, VStack, Text, Image } from '@chakra-ui/react'
import React from 'react'

const CARD = ({img, amount, checkoutHandler}) => {
  return (
    <VStack> 
        <Image src={img} boxSize={64} objectFit="cover"/>
        <Text> ₹{amount} </Text>
        <Button onClick={()=>{checkoutHandler(amount)}}>Buy Now</Button>
    </VStack> 
  )
}

export default CARD