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
- Node.js 18+
- pnpm 8+
- Docker & Docker Compose (선택 사항)

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/jiwonMe/que.git
cd que
```

2. 의존성 설치
```bash
pnpm install
```

3. 환경 변수 설정
```bash
# 백엔드 환경 변수 설정
cp apps/backend/.env.example apps/backend/.env
# 필요에 따라 .env 파일 수정
```

4. 개발 모드로 실행

```bash
# MongoDB와 Redis 컨테이너 실행
docker-compose -f docker-compose.dev.yml up -d

# 전체 앱 개발 모드 실행
pnpm dev
```

5. 프로덕션 빌드
```bash
pnpm build
```

6. Docker를 사용한 전체 스택 실행
```bash
docker-compose up -d
```

## MongoDB 연결 설정

프로젝트는 MongoDB를 데이터베이스로 사용합니다. 연결 설정은 다음과 같이 할 수 있습니다:

### 로컬 개발 환경

1. Docker Compose를 사용하여 MongoDB 실행:
```bash
docker-compose -f docker-compose.dev.yml up -d mongodb
```

2. 백엔드 .env 파일에 MongoDB URI 설정:
```
MONGODB_URI=mongodb://localhost:27017/que
```

### 커스텀 MongoDB 인스턴스 사용

1. 백엔드 .env 파일에 MongoDB URI 설정:
```
MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>
```

## Git 워크플로우

이 프로젝트는 GitHub Flow 모델을 따릅니다:

1. `main` 브랜치는 항상 배포 가능한 상태를 유지합니다.
2. 새로운 기능 개발 시 `feature/기능명` 형식의 브랜치를 생성합니다.
3. 버그 수정 시 `fix/버그명` 형식의 브랜치를 생성합니다.
4. 작업 완료 후 Pull Request를 생성하여 코드 리뷰를 진행합니다.
5. CI 테스트를 통과하고 코드 리뷰가 완료되면 `main` 브랜치에 병합합니다.
6. `main` 브랜치에 병합되면 자동으로 배포 파이프라인이 실행됩니다.

### 커밋 메시지 컨벤션

```
<type>(<scope>): <subject>

<body>

<footer>
```

- **type**: feat, fix, docs, style, refactor, test, chore 등
- **scope**: 변경된 컴포넌트나 파일 (선택 사항)
- **subject**: 변경 사항에 대한 간결한 설명
- **body**: 변경 사항에 대한 자세한 설명 (선택 사항)
- **footer**: 이슈 참조 등 (선택 사항)

예시:
```
feat(auth): 소셜 로그인 기능 추가

Google OAuth를 사용한 소셜 로그인 기능을 구현했습니다.
- Google 로그인 버튼 추가
- OAuth 콜백 처리 로직 구현
- 사용자 프로필 정보 저장 기능 추가

Closes #123
```

## 프로젝트 구조

```
que/
├── apps/              # 애플리케이션
│   ├── frontend/      # React 프론트엔드
│   └── backend/       # Express 백엔드
├── packages/          # 공유 패키지
├── .github/           # GitHub 워크플로우
├── docker-compose.yml # 프로덕션 Docker Compose 설정
└── README.md
```

## 라이센스

MIT

## 기여 방법

이슈를 통해 기능 요청이나 버그 리포트를 제출해주세요. 