import mongoose, { Document, Schema } from 'mongoose';
import crypto from 'crypto';

/**
 * User 문서의 인터페이스
 */
export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  profileImage?: string;
  googleId?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

/**
 * User Schema 정의
 */
const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // 기본적으로 query 결과에 포함되지 않음
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    profileImage: {
      type: String,
      default: 'default-profile.png',
    },
    googleId: {
      type: String,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * 비밀번호 해싱 미들웨어
 */
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    // 비밀번호 해싱
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(this.password, salt, 1000, 64, 'sha512').toString('hex');
    this.password = `${salt}:${hash}`;
    next();
  } catch (error) {
    next(error as Error);
  }
});

/**
 * 비밀번호 비교 메소드
 */
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  try {
    const [salt, storedHash] = this.password.split(':');
    const hash = crypto.pbkdf2Sync(candidatePassword, salt, 1000, 64, 'sha512').toString('hex');
    return storedHash === hash;
  } catch (error) {
    return false;
  }
};

export default mongoose.model<IUser>('User', UserSchema); 