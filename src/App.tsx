import React from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import AppRouter from "./components/Router/AppRouter";
import AppContextProvider from "./store/AppContext";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppContextProvider>
      <div className="bg-secondary">
        <AppRouter />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
      </div>
    </AppContextProvider>
  );
}

export default App;
