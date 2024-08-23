# ASIN URL Generator
<a href="https://saramjh.github.io/asinURLGenerator/">![image](https://github.com/user-attachments/assets/6098212c-aa6d-4eaa-835d-02298e46e2fa)</a><br>
<a href="https://saramjh.github.io/asinURLGenerator/">Go to the Tool</a>

## Overview

The ASIN URL Generator is a web application designed to help users generate Amazon URLs based on a list of ASIN codes. Users can input their ASIN codes into a textarea, specify a base URL, and the application will generate clickable links. Additionally, users can download the generated URLs as an Excel file and clear the textarea with a dedicated button.

## Features

- **Generate Amazon URLs:** Combine a base URL with a list of ASIN codes to create clickable links.
- **Download as Excel:** Export the generated links to an Excel file with the current date in the filename.
- **Clear Input:** Reset the textarea with a single click.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

## Installation

To use the ASIN URL Generator, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/saramjh/asin-url-generator.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd asin-url-generator
   ```

3. **Open `index.html` in a Web Browser:**

   Simply open the `index.html` file in your preferred web browser.

## Usage

1. **Enter Base URL:**

   - In the "URL" input field, enter the base URL for Amazon, e.g., `https://www.amazon.co.jp/dp/`.

2. **Input ASIN Codes:**

   - Enter ASIN codes into the textarea, each on a new line.

3. **Generate Links:**

   - The application will automatically generate clickable links based on the entered ASIN codes and base URL.

4. **Download Links:**

   - Click the "Download XLSX" button to export the generated links to an Excel file. The file will be named with the current date.

5. **Clear Input:**

   - Click the "Clear Textarea" button to reset the textarea and generated links.

6. **Handle Empty Input:**
   - If no ASIN codes are entered, a modal will appear prompting you to generate links before downloading.

## File Structure

- `index.html`: The main HTML file for the application.
- `css/style.css`: Contains the CSS for styling the application.
- `scripts/script.js`: Contains the JavaScript code for functionality.
- `README.md`: This file.

## Dependencies

- [Google Fonts - Poppins](https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap)
- [xlsx](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js): For exporting data to Excel format.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [devtestudinidae@gmail.com](mailto:devtestudinidae@gmail.com).
