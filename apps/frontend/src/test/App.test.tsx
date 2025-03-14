import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

/**
 * App 컴포넌트 테스트 스위트
 * 
 * App 컴포넌트의 기본 렌더링 및 동작을 테스트합니다.
 */
describe('App Component', () => {
  /**
   * App 컴포넌트가 올바르게 렌더링되는지 테스트합니다.
   */
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  /**
   * 카운트 버튼이 올바르게 동작하는지 테스트합니다.
   */
  it('increments count when button is clicked', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    
    // 초기 카운트 값 확인
    expect(button).toHaveTextContent('count is 0');
    
    // 버튼 클릭
    button.click();
    
    // 카운트 값이 증가했는지 확인
    expect(button).toHaveTextContent('count is 1');
  });
}); 