const schema = [
    {
      display: "id",
      name: "id",
      type: "INTEGER",
      options: []
    },
    {
      display: "Harvest Time (UTC)",
      name: "harvestTimeUtc",
      type: "DATE",
      options: []
    },
    {
      display: "Station id",
      name: "stationId",
      type: "INTEGER",
      options: []
    },
    {
      display: "Available Bike-Stands",
      name: "availableBikeStands",
      type: "INTEGER",
      options: []
    },
    {
      display: "Bike-Stands",
      name: "bikeStands",
      type: "INTEGER",
      options: []
    },
    {
      display: "Available Bikes",
      name: "availableBikes",
      type: "INTEGER",
      options: []
    },
    {
      display: "banking",
      name: "banking",
      type: "BOOLEAN",
      options: []
    },
    {
      display: "bonus",
      name: "bonus",
      type: "BOOLEAN",
      options: []
    },
    {
      display: "Last Update",
      name: "lastUpdate",
      type: "DATE",
      options: []
    },
    {
      display: "status",
      name: "status",
      type: "OPTION",
      options: ["OPEN", "CLOSED", "MAINTENANCE"]
    },
    {
      display: "Address",
      name: "address",
      type: "TEXT",
      options: []
    },
    {
      display: "name",
      name: "name",
      type: "TEXT",
      options: []
    },
    {
      display: "latitude",
      name: "latitude",
      type: "FLOAT",
      options: []
    },
    {
      display: "longitude",
      name: "longitude",
      type: "FLOAT",
      options: []
    }
  ];
  
  module.exports = schema;