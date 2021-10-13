const router = require('express').Router();
const { getAllThoughts, addThought, getThoughtById, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought/userId
router
    .route('/:userId')
    .get(getAllThoughts)
    .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/userID/thoughtId
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById) 
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:userId/:thoughtId/:reactionId') 
    .delete(removeReaction)

module.exports = router;