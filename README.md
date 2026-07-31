# 📄 PdfX — PDF Merger

PdfX is a lightweight web application for merging two PDF files into a single document.

Built with **Node.js**, **Express.js**, **Multer**, and **pdf-merger-js**, PdfX provides a simple and responsive interface where users can upload or drag and drop PDF files, merge them, and access the generated document in seconds.

## ✨ Features

* 📂 Upload two PDF files
* 🖱️ Drag-and-drop PDF support
* 📄 Selected file preview
* ❌ Remove selected files before merging
* 🔗 Merge two PDFs into one document
* ⚡ Simple and fast workflow
* 📱 Responsive user interface
* 🎨 Modern, clean UI
* ⏳ Loading state while the PDF is being generated
* 📥 Opens the merged PDF after processing

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript

**Backend**

* Node.js
* Express.js

**Packages**

* `express` — Web server and routing
* `multer` — Handles PDF file uploads
* `pdf-merger-js` — Combines PDF files

## 📁 Project Structure

```text
PDF_Tools/
│
├── public/
│   └── merged_*.pdf
│
├── templates/
│   └── index.html
│
├── merge.js
├── server.js
├── package.json
└── package-lock.json
```

### Main Files

**`server.js`**

Runs the Express server, serves the frontend, receives uploaded PDF files using Multer, calls the PDF merging function, and redirects the user to the generated PDF.

**`merge.js`**

Contains the PDF merging logic using `pdf-merger-js`. The two uploaded PDF files are combined and the resulting document is saved inside the `public` directory.

**`templates/index.html`**

Contains the PdfX frontend, including the responsive design, drag-and-drop upload area, file selection interface, validation, and merge loading state.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd PDF_Tools
```

### 2. Install dependencies

Make sure Node.js and npm are installed, then run:

```bash
npm install
```

### 3. Start the application

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

Open it in your browser to use PdfX.

## 💡 How It Works

1. Open PdfX in your browser.
2. Choose or drag and drop two PDF files.
3. Review the selected files.
4. Click **Merge PDFs →**.
5. The files are uploaded to the Express server.
6. `pdf-merger-js` combines the PDFs.
7. The generated PDF is saved in the public directory.
8. The browser opens the merged document.

## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "multer": "^2.2.0",
  "pdf-merger-js": "^5.1.2"
}
```

## 🔐 File Processing

Uploaded files are processed by the server to create the merged PDF.

For a production deployment, additional file cleanup, upload validation, file-size limits, error handling, and security controls should be added.

## 🔮 Future Improvements

* Merge more than two PDFs
* Drag to reorder PDFs before merging
* PDF preview
* Download button and custom output filename
* File size validation
* Automatic cleanup of uploaded and generated files
* Better server-side error handling
* PDF split functionality
* PDF compression tools
* Deployment to a cloud platform

## 🎯 Project Purpose

PdfX was created to demonstrate how a PDF utility can be built using Node.js and Express.js while providing a clean and easy-to-use frontend.

The project covers file uploads, server-side PDF processing, Express routing, frontend file handling, drag-and-drop interactions, and responsive UI design.

## 📄 License

This project is licensed under the ISC License.

---

⭐ If you find PdfX useful, consider giving the repository a star!
