import React from "react";
import { Table } from "antd";

const ScheduleTable = ({ data, periods, days }) => {
  if (!data || data.length === 0) {
    return <div></div>;
  }

  const classKeys = Object.keys(data[0].classes);
  const numberOfClasses = classKeys.length;

  if (numberOfClasses === 0) {
    return <div style={{ textAlign: "center" }}>No classes available</div>;
  }

  const tables = classKeys.map((classKey) => {
    const columns = [
      {
        title: "Period",
        dataIndex: "period",
        key: "period",
      },
    ];

    for (let dayIndex = 0; dayIndex < days; dayIndex++) {
      columns.push({
        title: `Day ${dayIndex + 1}`,
        dataIndex: `${classKey} - day${dayIndex + 1}`,
        key: `${classKey} - day${dayIndex + 1}`,
        render: (text) => <div style={{ whiteSpace: "pre-line" }}>{text}</div>,
      });
    }

    const dataSource = Array.from({ length: periods }, (_, periodIndex) => {
      const rowData = { period: periodIndex + 1 };

      for (let dayIndex = 0; dayIndex < days; dayIndex++) {
        const dayData = data[dayIndex];

        if (dayData && dayData.classes) {
          const classData = dayData.classes[classKey];

          if (classData && classData[periodIndex]) {
            const classItem = classData[periodIndex];
            rowData[`${classKey} - day${dayIndex + 1}`] = classItem
              ? `${classItem.subject}\n${classItem.teacher}`
              : "";
          } else {
            rowData[`${classKey} - day${dayIndex + 1}`] = "N/A";
          }
        } else {
          rowData[`${classKey} - day${dayIndex + 1}`] = "N/A";
        }
      }

      return rowData;
    });

    return (
      <div key={classKey} style={{ margin: "20px 0" }}>
        <h2 style={{ paddingLeft: "20px" }}>{classKey}</h2>
        <Table
          style={{ padding: "0px 20px" }}
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
      </div>
    );
  });

  return <div>{tables}</div>;
};

export default ScheduleTable;
