# Photo Gallery App

A simple photo gallery web application built with **React and Vite**.  
The app fetches photos from the Picsum Photos API and displays them in a responsive grid. Users can search photos by author name and mark photos as favourites.

---

## Features

- Fetches 30 photos from the Picsum Photos API
- Responsive grid layout for different screen sizes
- Search photos by author name
- Mark / unmark photos as favourites
- Favourites persist using localStorage
- Loading and error states while fetching data

---

## Tech Stack

- **React** (Functional components and hooks)
- **Vite** for development environment
- **Tailwind CSS** for styling
- **JavaScript**

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/photo-gallery.git
```

### 2. Navigate into the project directory

```bash
cd photo-gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local server URL shown in the terminal.

---

## API Used

Photos are fetched from the following API:

```
https://picsum.photos/v2/list?limit=30
```

---

## Notes / Assumptions

- The search feature filters the already fetched photos instead of making additional API calls.
- Favourite photos are stored using **localStorage** so they persist after refreshing the page.
- The application uses React hooks such as **useReducer**, **useMemo**, and **useCallback** for state management and performance optimization.

---
