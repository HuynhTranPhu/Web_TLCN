import Product from '../models/productModel';

exports.getProduct= async(req, res)=>{
    const products = await Product.find({});
    res.send(products);
}
exports.getProductById = async(req, res)=>{
    const products = await Product.findOne({ _id:req.params.id });
    if(products){
        res.send(products);
    }else{
        res.status(404).send({message:" "});
    }  
}
exports.createNewProduct = async(req,res)=>{
    const product = new Product ({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message: 'New Product Created', data: newProduct});
    }
    return res.status(500).send({message:'Error in Creating Product'});
}
exports.updateProduct =  async(req,res)=>{
    const productId = req.params.id;
    const product = await Product.findById( productId);
    if(product){
        product.name= req.body.name;
        product.price= req.body.price;
        product.brand= req.body.brand;
        product.category= req.body.category;
        product.countInStock= req.body.countInStock;
        product.description= req.body.description;    
        const updatedProduct = await product.save();
        if(updatedProduct){
            return res.status(200).send({message:' Product Updated', data:updatedProduct});
        } 
    }
    return res.status(500).send({message:'Error in Updating Product.'});
}
exports.deleteProduct = async(req, res)=>{
    const deleteProduct= await Product.findById(req.params.id);
    if(deleteProduct){
        await deleteProduct.remove();
        res.send({message:"Product Deleted"});
    }else{
        res.send("Error in Deletion");
    } 
}