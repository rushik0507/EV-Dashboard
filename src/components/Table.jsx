import React, { useState, useMemo } from "react";
import "../stylesheet/table.css";
import { Data } from "./Data";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const filteredItems = items.filter(
    (item) =>
      item.vehicleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columnSums = useMemo(() => {
    const aggregates = {};
    if (filteredItems.length > 0) {
      Object.keys(filteredItems[0]).forEach((key) => {
        const values = filteredItems.map((item) => item[key]);
        if (!values.every((value) => typeof value === "number")) {
          // If values are not all numbers, count unique values
          aggregates[key] = new Set(values).size;
        } else {
          // If values are numbers, sum them up
          const sum = values.reduce((acc, value) => acc + value, 0);
          aggregates[key] = parseFloat(sum.toFixed(2));
        }
      });
    }
    return aggregates;
  }, [filteredItems]);

  return (
    <>
      <div className="table-search">
        <h2>Vehical Utilization:</h2>
        <input
          type="text"
          placeholder="Search by Vehicle ID or Vendor's Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table">
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("vehicleId")}
                className={getClassNamesFor("vehicleId")}
              >
                Vehical ID
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("numberOfTrips")}
                className={getClassNamesFor("numberOfTrips")}
              >
                No. of Trips
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("tripKilometers")}
                className={getClassNamesFor("tripKilometers")}
              >
                Trips KMs
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("averageKilometersPerTrip")}
                className={getClassNamesFor("averageKilometersPerTrip")}
              >
                Avg Trips/day
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("averageDailyChargingTime")}
                className={getClassNamesFor("averageDailyChargingTime")}
              >
                Avg Daily Charge Time
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("averageTripsPerDay")}
                className={getClassNamesFor("averageTripsPerDay")}
              >
                AVG Trips/day
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("averageWorkingHours")}
                className={getClassNamesFor("averageWorkingHours")}
              >
                AVG working hours
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("co2Emission")}
                className={getClassNamesFor("co2Emission")}
              >
                CO<sub>2</sub> Emission saved
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("vendorName")}
                className={getClassNamesFor("vendorName")}
              >
                Vendor Name
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.vehicleId}>
                <td>{item.vehicleId}</td>
                <td>{item.numberOfTrips}</td>
                <td>{item.tripKilometers}</td>
                <td>{item.averageKilometersPerTrip}</td>
                <td>{item.averageDailyChargingTime}</td>
                <td>{item.averageTripsPerDay}</td>
                <td>{item.averageWorkingHours}</td>
                <td>{item.co2Emission}</td>
                <td>{item.vendorName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          )}
          {/* Row for sums */}
          <tr className="lastraw">
            {/* Render sums for each column */}
            {Object.keys(columnSums).map((key) => (
              <td key={key}>{columnSums[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
};

export default function Tablesort() {
  return (
    <>
      <div className="table-body">
        <ProductTable products={Data} />
      </div>
    </>
  );
}
