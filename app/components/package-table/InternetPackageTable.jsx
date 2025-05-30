import React from "react";
import "./package-table.scss";

const InternetPackageTable = ({item}) => {
  return (
    <div className="package-table">
      {item.map((item, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th></th>
              {item.head.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {item.body.map((item, index) => (
              <tr key={index}>
                {item.content.map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default InternetPackageTable;
