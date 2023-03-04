import  express from 'express';
import { 
        AddNewUser,
        didUserJoinOnThisYear,
        getAllUsers,
        getUser,
        getByEmail,
        getUserOlderThan,
        LogIn,
        getAllUsersJoinedSameYearOrAfter,
        totalCountHavingThisRole,
        updatePassword 
            } from '../controller/user.controller';
let router =  express.Router();

router.post("/", AddNewUser)
router.post("/login", LogIn)
router.post("/sameyear/:id", didUserJoinOnThisYear)
router.put("/pass/:id", updatePassword)
router.get("/age/:age", getUserOlderThan)
router.get("/role/:role", totalCountHavingThisRole)
router.get("/year/:year", getAllUsersJoinedSameYearOrAfter)
router.get("/", getAllUsers)
router.get("/email/:email", getByEmail)
router.get("/:id", getUser)



export default router;