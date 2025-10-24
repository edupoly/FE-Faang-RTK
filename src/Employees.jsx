import React from "react";
import { useGetEmployeesQuery } from "./services/employeeService";

function Employees() {
  var { isLoading, data } = useGetEmployeesQuery();
  return (
    <div>
      <h1>Employees</h1>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <ul>
          {data.map((emp) => {
            return <li>{emp.firstname}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Employees;
