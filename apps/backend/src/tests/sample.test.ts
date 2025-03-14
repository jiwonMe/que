import { describe, it, expect } from 'vitest';

/**
 * Sample test suite
 * 
 * 기본적인 테스트 기능 확인을 위한 샘플 테스트 스위트입니다.
 */
describe('Sample Test Suite', () => {
  /**
   * 간단한 덧셈 함수 테스트
   */
  it('should add two numbers correctly', () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });

  /**
   * 문자열 비교 테스트
   */
  it('should compare strings correctly', () => {
    const str = 'Hello, Que!';
    expect(str).toContain('Que');
    expect(str).toHaveLength(11);
  });

  /**
   * 비동기 함수 테스트
   */
  it('should handle async operations', async () => {
    const result = await Promise.resolve(42);
    expect(result).toBe(42);
  });
}); 