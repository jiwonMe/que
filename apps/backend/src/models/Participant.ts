import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IRoom } from './Room';

/**
 * 참여자 역할 enum
 */
export enum ParticipantRole {
  OWNER = 'owner',
  MODERATOR = 'moderator',
  VIEWER = 'viewer',
}

/**
 * Participant 문서의 인터페이스
 */
export interface IParticipant extends Document {
  user: IUser['_id'];
  room: IRoom['_id'];
  role: ParticipantRole;
  joinedAt: Date;
  lastActive: Date;
  isConnected: boolean;
}

/**
 * Participant Schema 정의
 */
const ParticipantSchema = new Schema<IParticipant>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room is required'],
    },
    role: {
      type: String,
      enum: Object.values(ParticipantRole),
      default: ParticipantRole.VIEWER,
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
    lastActive: {
      type: Date,
      default: Date.now,
    },
    isConnected: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * 인덱스 설정
 */
ParticipantSchema.index({ user: 1, room: 1 }, { unique: true });
ParticipantSchema.index({ room: 1, role: 1 });
ParticipantSchema.index({ room: 1, isConnected: 1 });

export default mongoose.model<IParticipant>('Participant', ParticipantSchema); 