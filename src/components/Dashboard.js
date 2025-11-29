import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { employeeData } from "../data/employeeData";
import "./Dashboard.css";

const Dashboard = () => {
  const [rowData] = useState(employeeData.employees);

  const stats = useMemo(
    () => ({
      totalEmployees: rowData.length,
      activeEmployees: rowData.filter((emp) => emp.isActive).length,
      departments: new Set(rowData.map((emp) => emp.department)).size,
      avgPerformance: (
        rowData.reduce((sum, emp) => sum + emp.performanceRating, 0) /
        rowData.length
      ).toFixed(1),
    }),
    [rowData]
  );

  const columnDefs = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 90, pinned: "left" },
      { field: "firstName", headerName: "First Name", width: 140 },
      { field: "lastName", headerName: "Last Name", width: 140 },
      { field: "email", headerName: "Email", width: 220 },
      { field: "department", headerName: "Department", width: 150 },
      { field: "position", headerName: "Position", width: 200 },
      {
        field: "salary",
        headerName: "Salary",
        width: 120,
        valueFormatter: (params) => `$${params.value.toLocaleString()}`,
      },
      { field: "hireDate", headerName: "Hire Date", width: 120 },
      { field: "age", headerName: "Age", width: 80 },
      { field: "location", headerName: "Location", width: 120 },
      {
        field: "performanceRating",
        headerName: "Performance",
        width: 130,
        cellRenderer: (params) => {
          const rating = params.value;
          const bgColor =
            rating >= 4.5 ? "#10b981" : rating >= 4.0 ? "#f59e0b" : "#ef4444";
          const textColor = "#ffffff";
          return `<span style="background: ${bgColor}; color: ${textColor}; padding: 6px 12px; border-radius: 20px; font-weight: 600; font-size: 12px; display: inline-block;">${rating} ⭐</span>`;
        },
      },
      { field: "projectsCompleted", headerName: "Projects", width: 100 },
      {
        field: "isActive",
        headerName: "Status",
        width: 120,
        cellRenderer: (params) => {
          const status = params.value ? "Active" : "Inactive";
          const bgColor = params.value ? "#10b981" : "#ef4444";
          const icon = params.value ? "✓" : "✕";
          return `<span style="background: ${bgColor}; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 12px; display: inline-block;">${icon} ${status}</span>`;
        },
      },
      {
        field: "skills",
        headerName: "Skills",
        width: 200,
        valueFormatter: (params) => params.value.join(", "),
      },
      { field: "manager", headerName: "Manager", width: 150 },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      floatingFilter: true,
    }),
    []
  );

  const gridOptions = {
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [10, 20],
    rowSelection: "multiple",
    enableRangeSelection: true,
    suppressRowClickSelection: true,
    rowHeight: 50,
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>FactWise Employee Dashboard</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Employees</h3>
            <p>{stats.totalEmployees}</p>
          </div>
          <div className="stat-card">
            <h3>Active Employees</h3>
            <p>{stats.activeEmployees}</p>
          </div>
          <div className="stat-card">
            <h3>Departments</h3>
            <p>{stats.departments}</p>
          </div>
          <div className="stat-card">
            <h3>Avg Performance</h3>
            <p>{stats.avgPerformance}</p>
          </div>
        </div>
      </div>

      <div className="ag-theme-alpine dashboard-grid">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          animateRows={true}
          enableCellTextSelection={true}
        />
      </div>
    </div>
  );
};

export default Dashboard;
