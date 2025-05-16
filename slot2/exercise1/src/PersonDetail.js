function PersonDetail() {
  const person = [
    { name: "Alice", age: 25, job: "Kỹ sư" },
    { name: "Bob", age: 30, job: "Nhà thiết kế" },
    { name: "Charlie", age: 28, job: "Giáo viên" }
  ];

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Danh sách người</h1>
      {person.map((p, index) => (
        <div key={index}>
          <h2>{p.name}</h2>
          <p>Tuổi: {p.age}</p>
          <p>Nghề nghiệp: {p.job}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonDetail;
