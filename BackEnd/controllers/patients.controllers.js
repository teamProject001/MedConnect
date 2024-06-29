const PatientModel = require ('../database/models/patients.js')

const getAll =  async(req,res)=>{

 try {
   const patient=  await PatientModel.find()
     res.status(200).json(patient)
    
 } catch (error) {
     res.status(500).send(error)
 }

}


module.exports={
 getAll

}

