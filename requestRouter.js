import express from "express";
import {getAllreq,postReq,acceptReq,getMyServices,getMyrequests,UpdateReq,delReq,getActivereq,getSingleRequest} from '../controllers/requestController.js'
import {isAuthorized} from '../middlewares/auth.js'


const router = express.Router();

router.get('/getAll',isAuthorized,getAllreq);
router.post('/postReq',isAuthorized,postReq);
router.get('/getMyser',isAuthorized,getMyServices);
router.get('/getMyReq',isAuthorized,getMyrequests);
router.put('/accpetReq/:id',isAuthorized,acceptReq);
router.put('/updReq/:id',isAuthorized,UpdateReq);
router.delete('/delreq/:id',isAuthorized,delReq);
router.get('/getAct',isAuthorized,getActivereq);
router.get('/:id',isAuthorized,getSingleRequest);




//mongodb+srv://rajasekharnaidu:1QjXlCYuLakZpW7E@cluster0.sfeiqlr.mongodb.net/
//1QjXlCYuLakZpW7E
export default router;