import React from 'react';
import { VStack, Text, Box, Heading } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

export const Paymentsuccess = () => {
    const searchQuery = useSearchParams()[0]
    const refno = searchQuery.get('reference')
  return (
    <Box>
        <VStack justifyContent={"center"}>
            <Heading transform={"uppercase"}> Order SuccessFull

            </Heading>
            <Text>
                Referece Number:{refno}
            </Text>
        </VStack>
    </Box>
  )
}

export default Paymentsuccess