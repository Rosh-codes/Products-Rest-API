import Product from "../models/product.js";
import mongoose from "mongoose";

export const getProduct = async(req,res)=>{
    try {
       const productList = await Product.find()
       res.status(200).json({ success: true, data: productList })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'internal server error'})
    }
    
}

export const postProduct = async (req, res) => {
  const product = req.body;

	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error in Create product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};


export const deleteProduct = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log('error')
        return res.status(404).send('id not matched')
    }
   try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({ success: true, message : "Product deleted"});
   } catch (error) {
    console.log(error.message)
    res.status(500).json({ success: false, message: "Server Error" })
   }
    
}

export const putProduct = async(req,res)=>{
    const {id}= req.params
    const updatedData = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log('error')
        return res.status(404).json({success:false , message : "product failed to Update"})}
    try {
        const updatedProduct = await  Product.findByIdAndUpdate(id,updatedData,{new : true})
        res.status(200).json({success:true , message : "product updated" , data : updatedProduct})
    } catch (error) {
        res.status(500).json({success:false , message : "Server Error"})
    }

}