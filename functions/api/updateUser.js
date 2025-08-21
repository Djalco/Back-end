const functions = require("firebase-functions")
const admin = require("firebase-admin")
const cors = require("cors")({origin:true})


/**
 * mettre a jour les identifications de l'utilisaeteur
 * @param body {string,Object}
 * @return {string}message success| errors
 * @forPlay  https://us-central1-front-end-84aa2.cloudfunctions.net/updateUser
 * 
*/
exports.updateUser = functions.https.onRequest((req,res) =>{
    const uid = req.body.uid
    const data = req.body.data

    return cors(req,res,async()=>{
        try{
            //mettre a jour les donnees primaires
            const userRecord = await admin.auth().updateUser(uid,data)
            //renvoyer les erreurs sur le front
            res.send(userRecord.toJSON())
        }catch(error) {
            res.status(500).send(error)
        }
    })
}
)