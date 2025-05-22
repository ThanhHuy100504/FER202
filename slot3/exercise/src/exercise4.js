import React from "react";

const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const sum = ages.reduce((total, age) => total + age, 0);
  return sum / ages.length;
};

function AverageAge() {
  // Ví dụ gọi hàm với các tuổi
  const avg = averageAge(18, 22, 30, 41, 45, 72);

  return (
    <p>Average age: {avg.toFixed(2)}</p>  // Làm tròn 2 chữ số thập phân
  );
}

export default AverageAge;
