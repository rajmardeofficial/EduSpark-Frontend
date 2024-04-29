import React from "react";
import "./Table.css";
import ToPresentSvg from "../../assets/table/ToPresentSvg";
import ToAbsentSvg from "../../assets/table/ToAbsentSvg";

const Table = ({ data, from }) => {
  console.log(from);
  return (
    <div className="tableData">
      <table>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} style={{ color: "#707071" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                from === "attedanceDashboardOfTeacher" ? (
                  attedanceDashboardOfTeacher(cellIndex, cell)
                ) : from === "addMarksDashboardOfTeacher" ? (
                  addMarksDashboardOfTeacher(cellIndex, cell)
                ) : from === "feeSectionDashboardOfAdmin" ? (
                  feeSectionDashboardOfAdmin(cellIndex, cell)
                ) : (
                  <td key={cellIndex}>{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const attedanceDashboardOfTeacher = (cellIndex, cell) => {
  switch (cellIndex) {
    case 2:
      return (
        <td key={cellIndex}>
          <ToPresentSvg />
        </td>
      );
    case 3:
      return (
        <td key={cellIndex}>
          <ToAbsentSvg />
        </td>
      );
    default:
      return <td key={cellIndex}>{cell}</td>;
  }
};

const addMarksDashboardOfTeacher = (cellIndex, cell) => {
  if (cellIndex <= 2) {
    return <td key={cellIndex}>{cell}</td>;
  } else if (cellIndex === 3) {
    return (
      <td key={cellIndex}>
        <ToPresentSvg />
      </td>
    );
  } else if (cellIndex === 4) {
    return (
      <td key={cellIndex}>
        <ToAbsentSvg />
      </td>
    );
  }
};

const feeSectionDashboardOfAdmin = (cellIndex, cell) => {
  if (cellIndex <= 2) {
    return <td key={cellIndex}>{cell}</td>;
  } else {
    return (
      <td key={cellIndex}>
        <p
          style={{ backgroundColor: cell === "Not Paid" ? "#D30B0B" : cell === "Paid"?"#64C15C": "#F2BF3C" }}
          className="paymetStatusOfFeeSection"
        >
          {cell}
        </p>
      </td>
    );
  }
};

export default Table;
