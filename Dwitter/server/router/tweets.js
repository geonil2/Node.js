import express from "express";
import 'express-async-errors';
import { body } from "express-validator";
import * as tweetController from '../controller/tweet.js';
import { validate } from "../middleware/validator.js";

// validation
// sanitization
const router = express.Router();

const validateTweet = [
    body('text')
    .trim()
    .isLength({ min : 3 })
    .withMessage('text should be at least 3 characters'),
    validate
]
// get /tweets
// get /tweets?username=?
router.get('/', tweetController.getTweets);

// get /tweets/:id
router.get('/:id', tweetController.getTweet);

// post /tweets
router.post('/', validateTweet, tweetController.createTweet);

// put /tweets/:id
router.put('/:id', validateTweet, tweetController.updateTweet);

// delete /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;