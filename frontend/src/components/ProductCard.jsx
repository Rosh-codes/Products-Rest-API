
import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, useDisclosure, ModalFooter, Button } from "@chakra-ui/react"
import {FaEdit} from 'react-icons/fa'
import { MdDelete } from "react-icons/md"
import { useProductStore } from "../store/product"
import { useState } from "react"

const ProductCard = ({product}) => {
    const [updatedProduct,setUpdatedProduct] = useState(product)

    const textColor = useColorModeValue("gray.600","gray.200")
    const bg = useColorModeValue("white","gray.800")

    const {deleteProduct,updateProduct} = useProductStore()
    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDeleteProduct = async (pid) => {
        const {success , message} = await deleteProduct(pid)
        if(success){
            toast({
                title: 'Success',
                description : message,
                status : "success",
                duration: 3000,
                isClosable: true

            })    
        }
        else{
            toast({
                title: "Error",
                description: message, 
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
    }

    const handleUpdateProduct = async (pid , updatedProduct) =>{
       const{success,message} = await updateProduct(pid, updatedProduct)
        onClose()
        if(!success){
            toast({
                title: "Error",
                description: message, 
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
        else{
                 toast({
                title: 'Success',
                description : message,
                status : "success",
                duration: 3000,
                isClosable: true

            })    
        }
    }

  return (
    <Box 
    shadow={"lg"}
    overflow={"hidden"}
    rounded={"lg"}
    transition={"all 0.3s"}
    _hover={{transform: 'translateY(-5px)',shadow: 'xl'}}
    bg={bg}
    > 
        <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"}/>

        <Box p={4}>
        <Heading as={"h3"} size={"md"} >
            {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize='xl' color={textColor} mb='4'>
            €{product.price}
        </Text>
        <HStack spacing={2}>
            <IconButton icon={<FaEdit />} colorScheme="blue" onClick={onOpen}/>
            <IconButton icon={<MdDelete />} colorScheme="red" onClick={()=>handleDeleteProduct(product._id)} />
        </HStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <Input 
                        placeholder="Product name"
                        name="name"
                        value={updatedProduct.name}
                        onChange={(e)=>setUpdatedProduct({...updateProduct , name: e.target.value})}
                        />
                        <Input 
                        placeholder="price"
                        name="price"
                        value={updatedProduct.price}
                        onChange={(e)=>setUpdatedProduct({...updateProduct , price: e.target.value})}
                        />
                        <Input 
                        placeholder="image"
                        name="image"
                        value={updatedProduct.image}
                        onChange={(e)=>setUpdatedProduct({...updateProduct , image: e.target.value})}
                        />
                      
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={()=> handleUpdateProduct(product._id, updatedProduct)} >
                        Update
                    </Button>
                    <Button variant={"ghost"} onClick={onClose} >
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
)
}
export default ProductCard