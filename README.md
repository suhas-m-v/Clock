# Digital Clock Web Application

This project is a simple yet elegant digital clock built using HTML, CSS, and JavaScript. The clock updates in real-time, displaying the current time in 12-hour format with an AM/PM indicator.

## Features

- **Real-time Clock:** The time is updated every second, providing accurate real-time information.
- **12-hour Format:** Displays time in a 12-hour format with an AM/PM indicator.
- **Responsive Design:** The clock is centered on the screen and adapts to different device sizes.
- **Stylish Background:** The background features a customizable image with full coverage and a fixed position.
- **Modern Design:** Uses modern CSS properties like `backdrop-filter` to create a blurred background effect.

## Technologies Used

- **HTML5:** Provides the structure of the web page.
- **CSS3:** Handles the styling of the clock and background, including Flexbox for layout and responsive design.
- **JavaScript (ES6):** Manages the time logic and dynamically updates the clock display.

## Project Structure

digital-clock/
├── index.html      # Main HTML file
├── style.css       # Styles for the clock
├── clock.js        # JavaScript for clock functionality
└── back.jpg        # Background image

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/suhas-m-v/digital-clock.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd digital-clock
    ```

3. **Run the application:**
   - Open the `index.html` file in a web browser to view the clock.

## How It Works

- **HTML (`index.html`):**
  - Contains a `div` with the id `clock` where the time is displayed.
  - Includes links to external CSS and JavaScript files for styling and functionality.

- **CSS (`style.css`):**
  - Sets a background image that covers the entire screen.
  - Uses Flexbox to center the clock both horizontally and vertically.
  - Adds styling to the clock with monospace font, a blurred background, and custom colors.

- **JavaScript (`clock.js`):**
  - The `timu()` function retrieves the current time, formats it into a 12-hour format with AM/PM, and updates the `clock` element every second using `setInterval()`.

## Customization

- **Background Image:**
  - Replace `back.jpg` with your desired image to customize the background.
  - You can change the background settings in the `style.css` file under the `body` selector.

- **Clock Style:**
  - Modify the font size, color, or layout by editing the styles in `style.css`, specifically under the `#clock` and `#con` selectors.

## Example

When you open the application, the clock will display something like:
![Clock Example](https://github.com/suhas-m-v/Clock/blob/395d00b999afef28ed5b2d67c418cf7b7d572cd5/Screenshot%202024-10-11%20220802.png)




The background image will stay fixed while the clock remains centered on the screen.

## Contribution

If you would like to contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or fix.
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add a new feature'
    ```
4. Push the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions, suggestions, or collaboration, feel free to reach out:

- **Email:** [mvsuhas2004@gmail.com](mailto:mvsuhas2004@gmail.com)
- **GitHub:** [https://github.com/suhas-m-v](https://github.com/suhas-m-v)


