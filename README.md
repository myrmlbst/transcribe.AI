# TranscribeAI
**TranscribeAI is a webapp that hosts two machine learning algorithms for audio transcription and translation.**

## Procedure
TranscribeAI allows users to input audio (.wave or .mp3) files into the webapp either by selecting the file from their local machine, or by recording a snippet of their own voice and submitting it in real-time. Users may input multiple recordins at once, and will be prompted to:
1. **Generate transcription of the audio in English**, and consequentially they would be allowed to
2. **Translate audio recording into any chosen language** out of the 204-long selection presented by HuggingFace.co.

## Use Cases
This webapp may be used to:
- Generate subtitles for social media posts such as YouTube or Tiktok
- Transcribe texts to be inserted in 'closed captions' for deaf/HoH users
- Translate content into foreign languages for improved reach to international audiences, ESL speakers, and non-English speakers

## Directory Structure
+ **src/** source code and main/general constituents of the webapp, such as stylizations and animations (src/index.css) and final desired output (src/App.jsx)
+ **src/components** individual constituents of the webapp, such as the header, homepage, information page, transcription/translation output pages, etc.
+ **utils/** imported ML HuggingFace algorithms for dealing with the linguistic tasks such as transforming audio into text and translation text into desired foreign language

# To run the program on your local machine:
## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dependency Installation via NPM:
**To run this project, you'll need some external dependencies:**
After ```cd```-ing into the directory and installing **Vite and React** into your project, you'll need to import:
- Tailwind CSS: run ```npm install -D tailwindcss``` then ```npx tailwindcss init```
- Transformers.js: run ```npm i @xenova/transformers```
