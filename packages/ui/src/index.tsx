import * as React from "react";

/**
 * Button 컴포넌트 Props
 * @interface ButtonProps
 * @property {React.ReactNode} children - 버튼 내부 콘텐츠
 * @property {() => void} onClick - 클릭 이벤트 핸들러
 * @property {string} [className] - 추가 CSS 클래스
 */
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

/**
 * 기본 Button 컴포넌트
 * @param {ButtonProps} props - 버튼 속성
 * @returns {JSX.Element} Button 컴포넌트
 */
export function Button({ children, onClick, className = "" }: ButtonProps): JSX.Element {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 