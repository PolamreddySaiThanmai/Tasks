const ProductModel = require('../db/product.schema')
let controller = {}

controller.delete = async (req, res)=>{

    try{

        const deleteResponse = await ProductModel.deleteOne({_id:req.params.id})
        res.json({status: true, data:deleteResponse}).status(204)

    }catch(err){
        res.json({status:false})
console.log(`File:deleteController, Fun:delete, Error: ${err}`)
    }



}




module.exports = controller