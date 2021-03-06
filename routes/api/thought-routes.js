const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThoughts)
.post(addThought);

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router.route('/:userId').post(addThought);

router
.route('/:thoughtId/reactions/')
.post(addReaction)
.delete(removeReaction);

router.route('/:thoughtId/reactions/:id')
.delete(removeReaction);

module.exports = router;