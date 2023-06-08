import { Router } from "express";
import CommentController from "../controller/commentController";

const commentRouter = Router();

// 게시글에 댓글 생성
commentRouter.post(
  "/questions/comments/:postId",
  CommentController.createComment,
);

// 특정 게시글의 모든 댓글 조회
commentRouter.get(
  "/questions/comments/:postId/",
  CommentController.readAllCommentsOfPost,
);

// 게시글에 특정 댓글 조회
commentRouter.get(
  "/questions/comments/:postId/:id",
  CommentController.readComment,
);

// 댓글 수정
commentRouter.patch(
  "/questions/comments/:postId/:id",
  CommentController.updateComment,
);

// 댓글 삭제
commentRouter.delete(
  "/questions/comments/:postId/:id",
  CommentController.deleteComment,
);

export default commentRouter;