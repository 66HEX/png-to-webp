# PNG to WebP Converter

A simple Electron desktop application for converting PNG images to WebP format with quality control.

## Features

- Select multiple PNG files for conversion
- Adjust WebP conversion quality via slider (1-100)
- Choose custom output directory
- Batch conversion with individual file conversion status

## Prerequisites

- Node.js (v16+)
- npm

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/66HEX/png-to-webp.git
   cd png-to-webp
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## Usage

1. Start the application
   ```bash
   npm start
   ```

2. Click "Select PNG Files" to choose images
3. Adjust quality slider as needed
4. Click "Convert to WebP" and select output directory
5. View conversion results in the status panel

## Build

Create portable Windows executables:
```bash
npm run build
```

Builds will be in the `dist/` directory.

## Technologies

- Electron
- Sharp (image conversion)
- HTML/CSS/JavaScript

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Create pull request
