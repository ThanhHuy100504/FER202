import logo from './logo.svg';
import './App.css';

import Employee from './exercise1';
import EmployeeList from './exercise2'
import EmployeeTable from './exercise3'
import AverageAge from './exercise4'
import EmployeeDropdown from './exercise5'
import ITEmployees from './exercise6'
import SortedEmployeeList from './exercise7'
import GroupedEmployees from './exercise8'
import CheckTeenager from './exercise9'
import EmployeeSearch from './exercise10'

function App() {
  return (
<div className="App" style={{ padding: "20px" }}>
      <h2>Exercise 1 – Destructuring</h2>
      <Employee />

      <h2>Exercise 2 – List with map()</h2>
      <EmployeeList />

      <h2>Exercise 3 – Table of Employees</h2>
      <EmployeeTable />

      <h2>Exercise 4 – Average Age with Rest</h2>
      <AverageAge />

      <h2>Exercise 5 – Dropdown of Names</h2>
      <EmployeeDropdown />

      <h2>Exercise 6 – Filter IT Department</h2>
      <ITEmployees />

      <h2>Exercise 7 – Sort by Department & Name</h2>
      <SortedEmployeeList />

      <h2>Exercise 8 – Group by Department</h2>
      <GroupedEmployees />

      <h2>Exercise 9 – Any Teenagers?</h2>
      <CheckTeenager />

      <h2>Exercise 10 – Search by Name</h2>
      <EmployeeSearch />
    </div>
  );
}

export default App;
