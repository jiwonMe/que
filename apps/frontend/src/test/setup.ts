// Test setup file
// 여기에 테스트 환경 설정을 추가할 수 있습니다.

import '@testing-library/react';
import 'vitest/globals';
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

// @testing-library/jest-dom의 matcher를 Vitest에 추가
expect.extend(matchers);

// 타입 정의 추가
declare global {
  namespace Vi {
    interface Assertion {
      toBeInTheDocument(): void;
      toHaveTextContent(text: string): void;
    }
  }
} 