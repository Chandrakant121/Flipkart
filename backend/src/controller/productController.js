import Product from "../models/product.schema"
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}