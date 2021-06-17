const ProductModel = require('../db/product.schema')
let controller = {}


controller.update = async (req, res)=>{

   try{

     let id = req.params.id

     let record = await ProductModel.find({_id: id})
     if (record.length === 0)
     {
         res.json({status:false, message: "No Document Exist With id given"})
     }
     else
     {
        let product = {
            display: req.body.display,
            name: req.body.name ? req.body.name : record[0].name ,
            manufacturer: req.body.manufacturer ? req.body.manufacturer : record[0].manufacturer,
            serialNumber: req.body.serialNumber ? req.body.serialNumber : record[0].serialNumber
     }

     let updateResponse = await ProductModel.updateOne({_id:id}, product)

     res.json({stats:true, data:updateResponse})


     }


   }catch(err){

   console.log(`File:updateController, Fun:update, Error: ${err}`)
    res.json({status:false, error: err})

   }


}




module.exports = controller