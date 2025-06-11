import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import UserProfile from './components/UserProfile';
import NameList from './components/NameList';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard"; // Import StudentCard component

function App() {
  const userData = { name: "huylttde180546@fpt.edu.vn", age: 21 };
  const namesList = ["huylttde180546@fpt.edu.vn", "test@fe.edu.vn"];
  //Danh sach students
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/student1.png" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/student2.png" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/student3.png" },
  ];

  return (
    <>
    <Welcome name="huylttde180546@fpt.edu.vn" />
    <UserProfile user={userData} />
    <NameList names={namesList} />
    <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}


export default App;
  