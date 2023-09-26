const router = require("express").Router();
const { createComments } = require("../../api/v1/comment/controllers/crate");
const { deleteComment } = require("../../api/v1/comment/controllers/delete");
const { findComments } = require("../../api/v1/comment/controllers/find");
const {
  updateComments,
} = require("../../api/v1/comment/controllers/updateComment");

/**
 * comment all route will handel this route
 * get comment
 * post comment
 * put comment
 * patch comment
 * delete comment
 */
router.get("/comments", findComments);
router.post("/comments", createComments);
router.patch("/comments/:id", updateComments);
router.delete("/comments/:id", deleteComment);

module.exports = router;
