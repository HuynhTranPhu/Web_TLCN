// import express from 'express';
// import Product from '../models/productModel';
import productController from '../controllers/productController';
// import {isAuth, isAdmin} from '../utill';
//const router = express.Router();

module.exports =(app) =>{
    app.route('/api/products/').get(productController.getProduct);
    app.route('/api/products/:id').get(productController.getProductById);
    app.route('/api/products/').post(productController.createNewProduct);
    app.route('/api/products/:id').put(productController.updateProduct);
    app.route('/api/products/:id').delete(productController.deleteProduct);

}

// router.get("/:id", async(req, res)=>{
//     const products = await Product.findOne({ _id:req.params.id });
//     if(products){
//         res.send(products);
//     }else{
//         res.status(404).send({message:" "});
//     }
    
// });
// router.post("/", async(req,res)=>{
//     const product = new Product ({
//         name: req.body.name,
//         price: req.body.price,
//         image: req.body.image,
//         brand: req.body.brand,
//         category: req.body.category,
//         countInStock: req.body.countInStock,
//         description: req.body.description,
//         rating: req.body.rating,
//         numReviews: req.body.numReviews,
//     });
//     const newProduct = await product.save();
//     if(newProduct){
//         return res.status(201).send({message: 'New Product Created', data: newProduct});
//     }
//     return res.status(500).send({message:'Error in Creating Product'});
// })

// router.put("/:id", async(req,res)=>{
//     const productId = req.params.id;
//     const product = await Product.findById( productId);
//     if(product){
//         product.name= req.body.name;
//         product.price= req.body.price;
//         product.brand= req.body.brand;
//         product.category= req.body.category;
//         product.countInStock= req.body.countInStock;
//         product.description= req.body.description;    
//         const updatedProduct = await product.save();
//         if(updatedProduct){
//             return res.status(200).send({message:' Product Updated', data:updatedProduct});
//         } 
//     }
//     return res.status(500).send({message:'Error in Updating Product.'});
// })
// router.delete("/:id", async(req, res)=>{
//     const deleteProduct= await Product.findById(req.params.id);
//     if(deleteProduct){
//         await deleteProduct.remove();
//         res.send({message:"Product Deleted"});
//     }else{
//         res.send("Error in Deletion");
//     }
   
// })
// export default router;