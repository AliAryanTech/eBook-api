# eBook-API

## Introduction
eBook-API is an unofficial API built with Node.js and Express for accessing data from PDFDrive.com. This API allows users to search for eBooks and retrieve direct download links programmatically.

## Features
- Search for eBooks by title, author, or category.
- Retrieve direct download links for eBooks in various formats.

## Requirements
- Node.js (v12.x or higher)
- npm (v6.x or higher)
- Internet connection

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/AliAryanTech/eBook-API.git
    ```
2. Navigate to the project directory:
    ```
    cd eBook-API
    ```
3. Install dependencies:
    ```
    npm install
    ```

## Usage
1. Start the server:
    ```
    npm start
    ```
2. Send HTTP requests to the appropriate endpoints.

## Endpoints
### Search eBooks
- **URL**: `/search`
- **Method**: `GET`
- **Parameters**:
    - `query` (required): The search query.
    - `page` (optional): The page number for pagination (default is 1).
- **Example**: `/search?query=programming&page=2`

### Get Direct Download Link
- **URL**: `/download`
- **Method**: `GET`
- **Parameters**:
    - `url` (required): The URL of the eBook on PDFDrive.com.
- **Example**: `/download?url=https://www.pdfdrive.com/example-book`

## Contributing
Contributions are welcome! If you find any issues, have feature requests, or want to contribute in any way to enhance eBook-API, feel free to do so.

Here are some ways you can contribute:
- **Reporting Bugs**: If you encounter any bugs or unexpected behavior, please open an issue on GitHub and provide detailed information about the problem.
- **Suggesting Enhancements**: Have an idea to improve eBook-API? Share it with us by opening an issue and explaining your suggestion.
- **Submitting Pull Requests**: If you'd like to contribute directly to the codebase, you can fork the repository, make your changes, and submit a pull request. Make sure to follow the existing code style and guidelines.

Your contributions are highly appreciated and will help make eBook-API even better for everyone!

