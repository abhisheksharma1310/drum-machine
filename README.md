# Drum Machine

<p align="center">
<img src="Drum Master.jpg" width="90%"></p>

This project is a web application that functions as a drum machine. It allows users to trigger audio clips of various drum sounds by clicking on drum pads or using keyboard shortcuts. The app is built using React and follows the specifications provided by freeCodeCamp.

You can access the live version of this project [here](https://kv7m45.csb.app/).

## Features

- There are 9 clickable drum pad keys, each associated with a unique audio clip and a corresponding keyboard key.
- Each drum pad has an audio sound that plays the audio clip when triggered.
- Clicking on a drum pad or pressing the corresponding keyboard key triggers the associated audio clip.
- The triggered audio clip's description is displayed on the display screen.
- The drum pads are arranged in a specific order: Q, W, E, A, S, D, Z, X, C.
- The project uses a mix of HTML, CSS, and React to create a dynamic user interface.
- The drum machine has two sound kits (Heater Kit and Smooth Piano Kit) that can be selected using a toggled button.
- The drum machine can be turned OFF and ON using its Power key.

## Technologies Used

- HTML5
- CSS3
- React
- JSX

## How to Run the Project Locally

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server using `npm start`.
5. Open your web browser and go to `http://localhost:3000` to see the Drum Machine in action.

## Project Structure

```
|-- public
|   |-- index.html
|-- src
|   |-- assets
|       |-- audios.js
|   |-- components
|       |-- ControlButton.jsx
|       |-- Controls.jsx
|       |-- Display.jsx
|       |-- DrumMachine.jsx
|       |-- PadBank.jsx
|       |-- VolumeControl.jsx
|   |-- context
|        |--  drumContext.js
|   |-- utils
|       |-- backlit.js
|       |-- volume.js
|   |-- App.js
|   |-- index.js
|   |-- styles.css
|-- README.md
```

- `public/index.html`: The main HTML file.
- `src/assets/`: Contains audio clip URL for the drum sounds.
- `src/components/`: Contains React components used to build the Drum Machine interface.
- `src/context/`: Contains context of drum machine created using useReducer and createContext.
- `src/utils`: Contains custom hooks for display backlit and volume debounce control.
- `src/App.js`: The main application component that renders the Drum Machine interface.
- `src/index.js`: The entry point for the React application.
- `src/styles.css`: Styles for the React application.

## Acknowledgements

This project was developed as part of the freeCodeCamp curriculum. The app's design and features were inspired by the drum machine example provided by freeCodeCamp.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to better match your project's structure and style. Make sure to include any additional information that you think would be useful for users who want to understand or contribute to your project.
