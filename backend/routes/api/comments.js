/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Get all comments.
 * @name GET/
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON array of comments
 */

/**
 * Delete a comment by its ID.
 * @name DELETE/:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object indicating success
 */

module.exports = router;

router.get("/", (req, res) => {
    Comment.find()
        .then(comments => {
        res.json(comments);
        })
        .catch(err => console.error(err));
    }
);
// add a DELETE endpoint to delete a comment by its id
router.delete("/:id", (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
        .then(() => {
        res.json({ success: true });
        })
        .catch(err => console.error(err));
    }
);
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});