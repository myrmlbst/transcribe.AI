# TranscribeAI
**TranscribeAI is a webapp that hosts two machine learning algorithms for audio transcription and translation.**
## Procedure
TranscribeAI allows users to input audio (.wav or .mp3) files into the webapp either by selecting the file from their local machine, or by recording a snippet of their own voice and submitting it in real-time. Users may input multiple recordings at once, and will be prompted to:
1. **Generate transcription of the audio in English**, and consequentially they would be allowed to
2. **Translate audio recording into any chosen language** out of the 204-long selection presented by HuggingFace.co.
## Use Cases
This webapp may be used to:
- Generate subtitles for social media posts such as YouTube or TikTok
- Transcribe texts to be inserted in 'closed captions' for deaf/hard-of-hearing (HoH) users
- Translate content into foreign languages for improved reach to international audiences, ESL speakers, and non-English speakers
## Directory Structure
+ ```@/src``` source code and main/general constituents of the webapp, such as stylization and animations (src/index.css) and final desired output (src/App.jsx)
+ ```@/src/components``` individual constituents of the webapp, such as the header, homepage, information page, transcription/translation output pages, etc.
+ ```@src/utils``` imported ML HuggingFace algorithms for dealing with the linguistic tasks such as transforming audio into text and translating that text into the desired foreign language
## Tech Stack
### Frontend:
- JavaScript
- React
- Vite
- Tailwind CSS
<div align="center">
  <img 
      src="https://skillicons.dev/icons?i=js,react,tailwind,vite"
  />
</div>

### Backend/Machine Learning Models:
#### Transcription Model
- Task: Automatic Speech Recognition (ASR)
- Model: ```Xenova/whisper-tiny.en```
- Features:
  - Optimized for English language transcription
  - Supports chunk-based processing for long audio files
  - Provides timestamps for transcribed text

#### Translation Model
- Task: Translation
- Model: ```Xenova/nllb-200-distilled-600M```
- Features:
  - Supports translation into multiple languages
  - Uses the NLLB (No Language Left Behind) architecture
  - Distilled version for improved performance

Both models are implemented using Web Workers to ensure smooth performance and prevent blocking the main thread during processing.
## Licensing
This project is licensed under the MIT License. See the [LICENSE](https://github.com/myrmlbst/transcribe.AI/blob/main/LICENSE) file for details.

## Contribution Status
**Open to contributions;** If you have any suggestions, improvements, or features you think would suit this project, feel free to open an issue or submit a pull request.

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
