import { Schema, model, Document } from "mongoose";

interface IQuestion extends Document {
  userId: string;
  userName: string;
  imageUrl: string;
  title: string;
  content: string;
  likeIds: Schema.Types.ObjectId[];
  commentIds: Schema.Types.ObjectId[];
}

const QuestionSchema = new Schema<IQuestion>(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likeIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // 댓글 참조하는 배열
    commentIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

export default model<IQuestion>("Question", QuestionSchema);