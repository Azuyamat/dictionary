# Dictionary Explorer 📚

An exploratory React project that provides an interactive dictionary interface using the [Free Dictionary API](https://dictionaryapi.dev/). Search for words and discover their definitions, pronunciations, examples, synonyms, and antonyms.

## ✨ Features

- **Real-time Word Search**: Search for words with debounced input for optimized API calls
- **Comprehensive Word Information**: 
  - Multiple definitions per part of speech
  - Phonetic pronunciations with audio playback
  - Usage examples
  - Synonyms and antonyms
  - Source references
- **URL-based Navigation**: Share specific word lookups via URL
- **Responsive Design**: Built with CSS Modules and Tailwind CSS
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Dictionary API** - Word data source

## 📁 Project Structure

```
src/
├── App.tsx                 # Main application component with routing
├── components/
│   ├── ErrorBox.tsx        # Error message display
│   ├── Footer.tsx          # Application footer
│   ├── Word/               # Word display components
│   │   ├── index.tsx       # Main word card with all definitions
│   │   ├── Phonetic.tsx    # Phonetic pronunciation with audio
│   │   └── Word.module.css
│   └── WordSearchInput/    # Search input component
│       ├── index.tsx
│       └── WordSearchInput.module.css
├── hooks/
│   ├── useDebounce.ts      # Debounce hook for search optimization
│   ├── useFetch.ts         # Generic fetch hook with loading/error states
│   └── useWord.ts          # Specialized hook for dictionary API
├── helpers/
│   └── toIndependant.ts    # Transform API response to flattened structure
└── types/
    └── Word.ts             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dictionary
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔍 Key Concepts Explored

### Custom Hooks

- **useFetch**: Generic data fetching with loading and error states
- **useDebounce**: Delays API calls until user stops typing
- **useWord**: Specialized hook for dictionary API integration

### Data Transformation

The `toIndependant` helper flattens the nested API response structure, converting a word with multiple meanings and definitions into individual cards for better UX.

### URL State Management

Uses React Router to sync the search query with the URL, enabling:
- Direct links to specific words
- Browser back/forward navigation
- Shareable word lookups

## 🎨 Styling Approach

The project uses a hybrid styling approach:
- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-specific styles
- Scoped styles prevent naming conflicts

## 📡 API Integration

Uses the [Free Dictionary API](https://dictionaryapi.dev/):
- Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
- No authentication required
- Returns comprehensive word data including phonetics, meanings, and examples

## 🎓 Learning Outcomes

This exploratory project demonstrates:

1. **Modern React Patterns**: Hooks, composition, and functional components
2. **TypeScript Integration**: Type-safe API responses and component props
3. **State Management**: URL state synchronization with React Router
4. **Performance Optimization**: Debouncing for reduced API calls
5. **Error Handling**: Graceful error states and loading indicators
6. **API Integration**: Working with external REST APIs
7. **Code Organization**: Clean architecture with separation of concerns

## 📝 License

This is an educational/exploratory project. The dictionary data is provided by [Free Dictionary API](https://dictionaryapi.dev/).

---

**Note**: This is an exploratory project created for learning purposes, demonstrating modern React development practices and patterns.
