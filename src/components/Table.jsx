import React from "react";
import "../stylesheet/table.css";

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
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("vehicleId")}
              className={getClassNamesFor("vehicleId")}
            >
              vehicleId
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("numberOfTrips")}
              className={getClassNamesFor("numberOfTrips")}
            >
              numberOfTrips
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("tripKilometers")}
              className={getClassNamesFor("tripKilometers")}
            >
              tripKilometers
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("averageKilometersPerTrip")}
              className={getClassNamesFor("averageKilometersPerTrip")}
            >
              averageKilometersPerTrip
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("averageDailyChargingTime")}
              className={getClassNamesFor("averageDailyChargingTime")}
            >
              averageDailyChargingTime
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("co2Emission")}
              className={getClassNamesFor("co2Emission")}
            >
              co2Emission
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("vendorName")}
              className={getClassNamesFor("vendorName")}
            >
              vendorName
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("averageTripsPerDay")}
              className={getClassNamesFor("averageTripsPerDay")}
            >
              averageTripsPerDay
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("averageWorkingHours")}
              className={getClassNamesFor("averageWorkingHours")}
            >
              averageWorkingHours
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.vehicleId}>
            <td>{item.vehicleId}</td>
            <td>{item.numberOfTrips}</td>
            <td>{item.tripKilometers}</td>
            <td>{item.averageKilometersPerTrip}</td>
            <td>{item.averageDailyChargingTime}</td>
            <td>{item.co2Emission}</td>
            <td>{item.vendorName}</td>
            <td>{item.averageTripsPerDay}</td>
            <td>{item.averageWorkingHours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          {
            vehicleId: 1,
            numberOfTrips: 50,
            tripKilometers: 1000,
            averageKilometersPerTrip: 20,
            averageDailyChargingTime: 2.5,
            co2Emission: 80,
            vendorName: "Tesla",
            averageTripsPerDay: 5,
            averageWorkingHours: 8,
          },
          {
            vehicleId: 2,
            numberOfTrips: 30,
            tripKilometers: 600,
            averageKilometersPerTrip: 20,
            averageDailyChargingTime: 3,
            co2Emission: 60,
            vendorName: "Nissan",
            averageTripsPerDay: 3,
            averageWorkingHours: 7,
          },
          {
            vehicleId: 3,
            numberOfTrips: 40,
            tripKilometers: 800,
            averageKilometersPerTrip: 20,
            averageDailyChargingTime: 2,
            co2Emission: 70,
            vendorName: "Chevrolet",
            averageTripsPerDay: 4,
            averageWorkingHours: 7.5,
          },
          // Add more vehicles below
          {
            vehicleId: 4,
            numberOfTrips: 45,
            tripKilometers: 900,
            averageKilometersPerTrip: 20,
            averageDailyChargingTime: 2.2,
            co2Emission: 75,
            vendorName: "Toyota",
            averageTripsPerDay: 4.5,
            averageWorkingHours: 7.8,
          }
          // Add more vehicles as needed
        ]}
      />
    </div>
  );
}
