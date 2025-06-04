import React from "react";

function Employee() {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const { name, age, department } = employee;

  return (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </>
  );
}

export default Employee;