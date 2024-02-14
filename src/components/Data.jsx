export const Data = [
  {
    vehicleId: "EV1",
    numberOfTrips: 50,
    tripKilometers: 1000,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.5,
    averageTripsPerDay: 5,
    averageWorkingHours: 8,
    co2Emission: 80,
    vendorName: "Tesla",
    battery: 50,
  },
  {
    vehicleId: "EV2",
    numberOfTrips: 30,
    tripKilometers: 600,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 3,
    averageTripsPerDay: 3,
    averageWorkingHours: 7,
    co2Emission: 60,
    vendorName: "Nissan",
    battery: 60,
  },
  {
    vehicleId: "EV3",
    numberOfTrips: 40,
    tripKilometers: 800,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2,
    averageTripsPerDay: 4,
    averageWorkingHours: 7.5,
    co2Emission: 70,
    vendorName: "Chevrolet",
    battery: 45,
  },
  {
    vehicleId: "EV4",
    numberOfTrips: 45,
    tripKilometers: 900,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.2,
    averageTripsPerDay: 4.5,
    averageWorkingHours: 7.8,
    co2Emission: 75,
    vendorName: "Toyota",
    battery: 90,
  },
  {
    vehicleId: "EV11",
    numberOfTrips: 35,
    tripKilometers: 700,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.4,
    averageTripsPerDay: 3.5,
    averageWorkingHours: 8.8,
    co2Emission: 65,
    vendorName: "BMW",
    battery: 70,
  },
  {
    vehicleId: "EV12",
    numberOfTrips: 48,
    tripKilometers: 960,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.7,
    averageTripsPerDay: 4.8,
    averageWorkingHours: 8.5,
    co2Emission: 78,
    vendorName: "Audi",
    battery: 20,
  },
  {
    vehicleId: "EV13",
    numberOfTrips: 55,
    tripKilometers: 1100,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.9,
    averageTripsPerDay: 5.5,
    averageWorkingHours: 9.2,
    co2Emission: 85,
    vendorName: "Mercedes-Benz",
    battery: 90,
  },
  {
    vehicleId: "EV14",
    numberOfTrips: 42,
    tripKilometers: 840,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.3,
    averageTripsPerDay: 4.2,
    averageWorkingHours: 8,
    co2Emission: 72,
    vendorName: "Hyundai",
    battery: 10,
  },
  {
    vehicleId: "EV15",
    numberOfTrips: 38,
    tripKilometers: 760,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.6,
    averageTripsPerDay: 3.8,
    averageWorkingHours: 7.5,
    co2Emission: 70,
    vendorName: "Kia",
    battery: 0,
  },
  {
    vehicleId: "EV8",
    numberOfTrips: 25,
    tripKilometers: 500,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2,
    averageTripsPerDay: 2.5,
    averageWorkingHours: 7,
    co2Emission: 50,
    vendorName: "Ford",
    battery: 0,
  },
  {
    vehicleId: "EV9",
    numberOfTrips: 40,
    tripKilometers: 800,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.3,
    averageTripsPerDay: 4,
    averageWorkingHours: 8.3,
    co2Emission: 70,
    vendorName: "Honda",
    battery: 80,
  },
  {
    vehicleId: "EV10",
    numberOfTrips: 60,
    tripKilometers: 1200,
    averageKilometersPerTrip: 20,
    averageDailyChargingTime: 2.6,
    averageTripsPerDay: 6,
    averageWorkingHours: 9,
    co2Emission: 85,
    vendorName: "Volkswagen",
    battery: 75,
  },

  // Add more vehicles as needed
];

// function countDischargedVehicles() {
//   let count = 0;
//   Data.forEach(vehicle => {
//       if(vehicle.battery < 10) {
//           count++;
//       }
//   });
//   return count;
// }

// // function to count the number of vehicles who have battery level greater than 90 (fully charged state, long range)
// function countFullyChargedVehicles() {
//   let count = 0;
//   Data.forEach(vehicle => {
//       if(vehicle.battery > 80) {
//           count++;
//       }
//   });
//   return count;
// }

// // function to count the number of vehicles who have battery level between 40 and 80 (partially charged state, medium range)
// function countMediumChargedVehicles() {
//   let count = 0;
//   Data.forEach(vehicle => {
//       if(vehicle.battery > 40 && vehicle.battery < 80) {
//           count++;
//       }
//   });
//   return count;
// }

// // function to count the number of vehicles who have battery level between 10  (partially charged state, short range)
// function countShortChargedVehicles() {
//   let count = 0;
//   Data.forEach(vehicle => {
//       if(vehicle.battery > 10 && vehicle.battery < 40) {
//           count++;
//       }
//   });
//   return count;
// }


// export { countDischargedVehicles, countFullyChargedVehicles, countMediumChargedVehicles, countShortChargedVehicles };

function countDischargedVehicles() {
  let count = 0;
  let sumCO2 = 0;
  let sumKilometers = 0;
  Data.forEach(vehicle => {
      if(vehicle.battery < 10) {
          count++;
          sumCO2 += vehicle.co2Emission;
          sumKilometers += vehicle.tripKilometers;
      }
  });
  return { count, sumCO2, sumKilometers };
}

function countFullyChargedVehicles() {
  let count = 0;
  let sumCO2 = 0;
  let sumKilometers = 0;
  Data.forEach(vehicle => {
      if(vehicle.battery > 80) {
          count++;
          sumCO2 += vehicle.co2Emission;
          sumKilometers += vehicle.tripKilometers;
      }
  });
  return { count, sumCO2, sumKilometers };
}

function countMediumChargedVehicles() {
  let count = 0;
  let sumCO2 = 0;
  let sumKilometers = 0;
  Data.forEach(vehicle => {
      if(vehicle.battery > 40 && vehicle.battery < 80) {
          count++;
          sumCO2 += vehicle.co2Emission;
          sumKilometers += vehicle.tripKilometers;
      }
  });
  return { count, sumCO2, sumKilometers };
}

function countShortChargedVehicles() {
  let count = 0;
  let sumCO2 = 0;
  let sumKilometers = 0;
  Data.forEach(vehicle => {
      if(vehicle.battery > 10 && vehicle.battery < 40) {
          count++;
          sumCO2 += vehicle.co2Emission;
          sumKilometers += vehicle.tripKilometers;
      }
  });
  return { count, sumCO2, sumKilometers };
}

export { countDischargedVehicles, countFullyChargedVehicles, countMediumChargedVehicles, countShortChargedVehicles };