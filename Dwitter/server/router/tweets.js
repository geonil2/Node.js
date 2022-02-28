import express from "express";
import 'express-async-errors';
import { body } from "express-validator";
import * as tweetController from '../controller/tweet.js';
import { isAuth } from "../middleware/auth.js";
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
router.get('/', isAuth, tweetController.getTweets);

// get /tweets/:id
router.get('/:id', isAuth, tweetController.getTweet);

// post /tweets
router.post('/', isAuth, validateTweet, tweetController.createTweet); 

// put /tweets/:id
router.put('/:id', isAuth, validateTweet, tweetController.updateTweet);

// delete /tweets/:id
router.delete('/:id', isAuth, tweetController.deleteTweet);

export default router;