function PeopleTable() {
  const person = [
    { name: "Alice", age: 25, job: "Kỹ sư" },
    { name: "Bob", age: 30, job: "Nhà thiết kế" },
    { name: "Charlie", age: 28, job: "Giáo viên" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Danh sách người</h1>
      <table border="1" style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Nghề nghiệp</th>
          </tr>
        </thead>
        <tbody>
          {person.map((p, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
