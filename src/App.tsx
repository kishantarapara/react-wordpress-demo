import React from "react";
import "./App.css";
import AppRouter from "./components/Router/AppRouter";
import AppContextProvider from "./store/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="bg-secondary">
        <AppRouter />
      </div>
    </AppContextProvider>
  );
}

export default App;
