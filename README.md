# dublin-bikes-api
Noloco Technical Challenge Attempt
# Dublin Bikes API

This project implements a simple API for querying Dublin Bikes data. It provides endpoints for retrieving the data schema and querying bike station information based on various criteria.

## Features

- `/schema` endpoint to retrieve the data schema
- `/data` endpoint for querying bike station data with filtering capabilities
- Support for equality, less than, and greater than comparisons in queries

## Technical Choices

1. **Node.js and Express**: Chosen for their simplicity and efficiency in creating RESTful APIs quickly.
2. **In-memory Data Storage**: Given the time constraint, data is stored in-memory rather than using a database.
3. **Dynamic Schema Generation**: The schema is derived from the data, allowing flexibility if the data structure changes.
4. **Camel Case Conversion**: Field names are converted to camelCase in the response for consistency with JavaScript naming conventions.

## Setup and Running

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `node app.js`
4. The server will run on `http://localhost:3000`

## API Usage

### Get Schema
GET `/schema`

### Query Data
POST `/data`
Body example:
```json
{
  "where": {
    "Available Bikes": {"gt": 10}
  }
}
```

## Future Improvements

Given more time, I would consider the following enhancements:

1. **Database Integration**: Implement a proper database (e.g., MongoDB) for data persistence and improved query performance.
2. **Data Updating Mechanism**: Add functionality to periodically fetch and update the bike station data.
3. **Advanced Querying**: Implement more complex query options, such as OR conditions and nested queries.
4. **Pagination**: Add support for paginated results in the `/data` endpoint.
5. **Authentication**: Implement user authentication and API key system for secure access.
6. **Caching**: Introduce a caching layer to improve response times for frequent queries.
7. **API Documentation**: Create comprehensive API documentation using tools like Swagger.
8. **Error Handling**: Enhance error handling and provide more detailed error messages.
9. **Testing**: Implement unit and integration tests to ensure API reliability.
10. **Logging**: Add a logging system for better debugging and monitoring.
11. **Rate Limiting**: Implement rate limiting to prevent API abuse.

## Conclusion

This project demonstrates a basic implementation of the Dublin Bikes API. While it meets the core requirements, there's significant room for expansion and improvement. The focus was on creating a functional API within the given time constraint, laying the groundwork for future enhancements.