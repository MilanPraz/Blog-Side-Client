import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import ThankyouPage from "./components/ThankyouPage";
import { createContext } from "react";
import Home from "./pages/Home";

export const MyContext = createContext();

function App() {
  const [isnotif, setIsNotif] = useState(false);

  return (
    <MyContext.Provider value={{ isnotif, setIsNotif }}>
      <>
        <Routes>
          <Route path="/" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/thankyou" element={<ThankyouPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </>
    </MyContext.Provider>
  );
}

export default App;
