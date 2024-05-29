# React Native Frontend for Airsoft CS:GO Replica

This React Native app serves as the front-end interface for an airsoft adaptation project inspired by the CS:GO game. The app interacts with an ESP8266 NodeMCU server, allowing users to control an LCD, buzzer, LED, and button setup. The app provides a simple interface to send commands and receive feedback from the ESP8266 device.

## Features

- **Connect to ESP8266 Access Point**: Connect to the ESP8266's WiFi network to control the airsoft game elements.
- **Send Commands**: Use buttons within the app to send commands (e.g., turn LED on/off) to the ESP8266 server.
- **Receive Feedback**: Display status updates and responses from the ESP8266 on the app's interface.
- **User-Friendly Interface**: Simple and intuitive design for easy interaction during airsoft games.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **React Native CLI**: Install React Native CLI if not already installed.
- **Android Studio/Xcode**: Set up your development environment for Android or iOS development.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Matias-Leiva/csgo-replica-front.git
    cd csgo-replica-front
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Link native dependencies:**
    ```bash
    npx react-native link
    ```

4. **Configure environment (if necessary)**:
    - Update any configuration files with your ESP8266 network details.

## Running the App

1. **Start the Metro Bundler:**
    ```bash
    npx react-native start
    ```

2. **Run the app on Android:**
    ```bash
    npx react-native run-android
    ```

3. **Run the app on iOS:**
    ```bash
    npx react-native run-ios
    ```

## Usage

1. **Connect to the ESP8266's WiFi network:**
    - SSID: `ESP8266_AP`
    - Password: `12345678`

2. **Open the app**: Once the app is running on your device, you can use the buttons to send commands to the ESP8266 server.

3. **Receive Feedback**: View status updates and responses from the ESP8266 displayed within the app.

## Integration with ESP8266 Project

This app is designed to work with the [ESP8266 Airsoft Project](https://github.com/Matias-Leiva/csgo-replica-esp-server). Make sure the ESP8266 server is set up and running before using the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.