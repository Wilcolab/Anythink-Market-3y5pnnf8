/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Route serving a list of comments.
 * @name get/comments
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {JSON} - A JSON object containing a list of comments
 */

/**
 * Route for deleting a comment by ID.
 * @name delete/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @returns {JSON} - A JSON object indicating success
 */

module.exports = router;


router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json({ comments });
    } catch (err) {
        console.log(err);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
    }
});
