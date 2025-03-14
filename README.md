# Que: 유튜브 동시 시청 플레이어

Que는 친구들과 함께 유튜브 영상을 실시간으로 동기화하여 시청할 수 있는 웹 애플리케이션입니다.

## 주요 기능

- 방 생성 및 참여 기능
- 유튜브 영상 동기화 재생
- 실시간 채팅
- 사용자 인증

## 기술 스택

### Frontend
- React.js
- TypeScript
- Redux Toolkit
- Styled-components
- Socket.io-client
- Material-UI

### Backend
- Node.js + Express
- TypeScript
- MongoDB
- Socket.io
- JWT 인증

## 개발 환경 설정

### 요구 사항
- Node.js 16+
- npm 또는 yarn
- MongoDB

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/jiwonMe/que.git
cd que
```

2. 프론트엔드 설치 및 실행
```bash
cd frontend
npm install
npm start
```

3. 백엔드 설치 및 실행
```bash
cd backend
npm install
npm start
```

## 프로젝트 구조

```
que/
├── frontend/         # React 프론트엔드
├── backend/          # Express 백엔드
├── doc/              # 문서
└── README.md
```

## 라이센스

MIT

## 기여 방법

이슈를 통해 기능 요청이나 버그 리포트를 제출해주세요. 