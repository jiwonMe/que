// Test setup file
// 여기에 테스트 환경 설정을 추가할 수 있습니다.

import '@testing-library/react';
// expect를 사용하지 않으므로 import 제거
import '@testing-library/jest-dom';

// @testing-library/jest-dom의 matcher를 Vitest에 추가
// expect.extend(matchers); 대신 아래와 같이 수정

// Vitest의 Assertion 인터페이스 확장
declare module 'vitest' {
  interface Assertion {
    toBeInTheDocument(): void;
    toHaveTextContent(text: string): void;
  }
} 