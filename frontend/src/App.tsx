import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function change() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#1e293b";
    }
  }

  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-slate-800">
        <button onClick={() => change()} className="text-white bg-blue-400 rounded-md m-2 p-2">
          {" "}
          Dark Mode{" "}
        </button>
        <Router>
          <EntryProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<AllEntries />}></Route>
              <Route path="create" element={<NewEntry />}></Route>
              <Route path="edit/:id" element={<EditEntry />}></Route>
            </Routes>
          </EntryProvider>
        </Router>
      </div>
    </section>
  );
}
