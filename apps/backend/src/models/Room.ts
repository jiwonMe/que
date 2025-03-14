import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

/**
 * Room 문서의 인터페이스
 */
export interface IRoom extends Document {
  title: string;
  description?: string;
  creator: IUser['_id'];
  currentVideoUrl?: string;
  isPrivate: boolean;
  password?: string;
  participants: IUser['_id'][];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Room Schema 정의
 */
const RoomSchema = new Schema<IRoom>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Creator is required'],
    },
    currentVideoUrl: {
      type: String,
      trim: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      select: false, // 기본적으로 query 결과에 포함되지 않음
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

/**
 * 인덱스 설정
 */
RoomSchema.index({ title: 'text', description: 'text' });

/**
 * 비밀번호 필드 검증 미들웨어
 */
RoomSchema.pre('save', function (next) {
  // 비공개 방이면서 비밀번호가 없는 경우 에러
  if (this.isPrivate && !this.password) {
    const error = new Error('Private rooms must have a password');
    return next(error);
  }
  
  // 공개 방인데 비밀번호가 있는 경우 비밀번호 제거
  if (!this.isPrivate && this.password) {
    this.password = undefined;
  }
  
  next();
});

export default mongoose.model<IRoom>('Room', RoomSchema); 