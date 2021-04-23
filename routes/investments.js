const { Router } = require("express");
const controllers = require("../controllers/investments");
const { model } = require("../db/connection");

const router = Router();

router.get("/investments", controllers.getInvestment);
router.get("/investments/:id", controllers.getInvestment);
router.post("/investments", controllers.createInvestment);
router.put("/investments:id", controllers.updateInvestment);
router.delete("/investments/:id", controllers.deleteInvestment);

model.exports = router;
