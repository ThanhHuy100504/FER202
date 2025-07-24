import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();
  const menu = [
    { label: "Home", path: "/" },
    { label: "Quiz", path: "/quizzes" },
    { label: "Result", path: "/quiz/result" },
    { label: "Review", path: "/quiz/review" }
  ];
  return (
    <nav style={{
      background: "#232b3e",
      padding: "0 32px",
      height: 56,
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{ color: "white", fontWeight: 700, fontSize: 22, marginRight: 32 }}>
        JavaScript Quiz
      </div>
      <div style={{ display: "flex", gap: 18 }}>
        {menu.map(item =>
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            style={{
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer"
            }}
          >{item.label}</button>
        )}
      </div>
    </nav>
  );
}
