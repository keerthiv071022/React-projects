import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    department: "",
    salary: "",
  });

  const [editId, setEditId] = useState(null);

  // Get employees from localStorage when page loads
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));

    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  // Handle input changes
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Add or Edit employee
  function handleSubmit(e) {
    e.preventDefault();

    if (editId === null) {
      // ADD EMPLOYEE

      const newEmployee = {
        id: Date.now(),
        name: formData.name,
        employeeId: formData.employeeId,
        department: formData.department,
        salary: formData.salary,
      };

      const updatedEmployees = [...employees, newEmployee];

      setEmployees(updatedEmployees);

      localStorage.setItem(
        "employees",
        JSON.stringify(updatedEmployees)
      );
    } else {
      // EDIT EMPLOYEE

      const updatedEmployees = employees.map((employee) =>
        employee.id === editId
          ? {
              ...employee,
              name: formData.name,
              employeeId: formData.employeeId,
              department: formData.department,
              salary: formData.salary,
            }
          : employee
      );

      setEmployees(updatedEmployees);

      localStorage.setItem(
        "employees",
        JSON.stringify(updatedEmployees)
      );

      setEditId(null);
    }

    // Clear form
    setFormData({
      name: "",
      employeeId: "",
      department: "",
      salary: "",
    });
  }

  // Delete employee
  function handleDelete(id) {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );
  }

  // Edit employee
  function handleEdit(employee) {
    setFormData({
      name: employee.name,
      employeeId: employee.employeeId,
      department: employee.department,
      salary: employee.salary,
    });

    setEditId(employee.id);
  }

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      {/* Employee Form */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <button type="submit">
          {editId === null ? "Add Employee" : "Update Employee"}
        </button>
      </form>

      {/* Employee Table */}

      <table border="1">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>

              <td>
                <button onClick={() => handleEdit(employee)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;