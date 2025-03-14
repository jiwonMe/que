import mongoose, { Document, Schema } from 'mongoose';
import { IRoom } from './Room';

/**
 * 비디오 상태 enum
 */
export enum VideoPlaybackState {
  PLAYING = 'playing',
  PAUSED = 'paused',
  BUFFERING = 'buffering',
  ENDED = 'ended',
}

/**
 * VideoState 문서의 인터페이스
 */
export interface IVideoState extends Document {
  room: IRoom['_id'];
  videoUrl: string;
  playbackState: VideoPlaybackState;
  currentTime: number;
  lastUpdated: Date;
  duration: number;
}

/**
 * VideoState Schema 정의
 */
const VideoStateSchema = new Schema<IVideoState>(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room is required'],
      unique: true,
    },
    videoUrl: {
      type: String,
      required: [true, 'Video URL is required'],
      trim: true,
    },
    playbackState: {
      type: String,
      enum: Object.values(VideoPlaybackState),
      default: VideoPlaybackState.PAUSED,
    },
    currentTime: {
      type: Number,
      default: 0,
      min: 0,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    duration: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * 인덱스 설정
 */
VideoStateSchema.index({ room: 1 }, { unique: true });

export default mongoose.model<IVideoState>('VideoState', VideoStateSchema); 