import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  //** 프로젝트 시작할때, 스트릭모드가 한번 렌더링함. */
  // strictMode 스트릭트 모드 제거
  // App컴퍼넌트 내중에서, 하위 컴퍼넌트를 사용함.
  
  <App />
)
