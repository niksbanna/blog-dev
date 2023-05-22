const { Router } = require("express");
const { index, create, update, destroy } = require("../controllers/likeController");
const router = Router()

router.get('/', index)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)



module.exports = router;