import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

// Environment 변수 로드
dotenv.config();

// Express app 생성
const app = express();
const server = http.createServer(app);

// CORS 설정
app.use(cors());
app.use(express.json());

// Socket.io 설정
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Que API Server');
});

// Socket 이벤트 처리
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// 서버 시작
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 