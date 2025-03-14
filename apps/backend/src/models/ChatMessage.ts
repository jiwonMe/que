import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IRoom } from './Room';

/**
 * 메시지 타입 enum
 */
export enum MessageType {
  TEXT = 'text',
  SYSTEM = 'system',
  JOIN = 'join',
  LEAVE = 'leave',
}

/**
 * ChatMessage 문서의 인터페이스
 */
export interface IChatMessage extends Document {
  room: IRoom['_id'];
  sender?: IUser['_id'];
  content: string;
  type: MessageType;
  createdAt: Date;
}

/**
 * ChatMessage Schema 정의
 */
const ChatMessageSchema = new Schema<IChatMessage>(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room is required'],
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // System 메시지는 sender가 없을 수 있음
    },
    content: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: Object.values(MessageType),
      default: MessageType.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * 인덱스 설정
 */
ChatMessageSchema.index({ room: 1, createdAt: -1 });
ChatMessageSchema.index({ sender: 1 });

/**
 * 메시지 검증 미들웨어
 */
ChatMessageSchema.pre('save', function (next) {
  // TEXT 타입 메시지는 sender가 필요
  if (this.type === MessageType.TEXT && !this.sender) {
    const error = new Error('Text messages must have a sender');
    return next(error);
  }
  
  next();
});

export default mongoose.model<IChatMessage>('ChatMessage', ChatMessageSchema); 