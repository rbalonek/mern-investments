const { Router } = require("express");
const controllers = require("../controllers/investments");

const router = Router();

router.get("/investments", controllers.getInvestments);
router.get("/investments/:id", controllers.getInvestment);
router.post("/investments", controllers.createInvestment);
router.put("/investments/:id", controllers.updateInvestment);
router.delete("/investments/:id", controllers.deleteInvestment);

module.exports = router;
