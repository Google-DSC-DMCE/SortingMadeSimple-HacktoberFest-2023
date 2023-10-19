import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import HomePage from "./pages/Home";
import BubbleSortPage from "./pages/BubbleSort";
import QuickSortPage from "./pages/QuickSort";
import MergeSortPage from "./pages/MergeSort";
import SelectionSortPage from "./pages/SelectionSort";
import InsertionSortPage from "./pages/InsertionSort";
import CountingSortPage from "./pages/CountingSort";
import HeapSortPage from "./pages/HeapSort";
import SinglyLinkList from "./pages/SinglyLinkLIst";
import Dijkstra from "./pages/Dijkstra";
import Dfs from "./pages/Dfs";
import { SnackbarProvider } from "notistack";
import "../src/App.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "white" ? "#101418" : "white");
  };

  return (
    <SnackbarProvider>
      <div className="App" style={{ backgroundColor: theme }}>
        <button className="theme-toggle-button" onClick={handleThemeSwitch}>
          {theme === "white" ? <DarkModeIcon /> : <LightModeIcon />}
          {/* Use the MoonIcon component here */}
        </button>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/bubblesort" exact component={BubbleSortPage} />
          <Route path="/quicksort" exact component={QuickSortPage} />
          <Route path="/mergesort" exact component={MergeSortPage} />
          <Route path="/selectionsort" exact component={SelectionSortPage} />
          <Route path="/heapsort" exact component={HeapSortPage} />
          <Route path="/countingsort" exact component={CountingSortPage} />
          <Route path="/insertionsort" exact component={InsertionSortPage} />
          <Route path="/singlylinklist" exact component={SinglyLinkList} />
          <Route path="/dfs" exact component={Dfs} />
          <Route path="/dijkstra" exact component={Dijkstra} />
        </Switch>
      </div>
    </SnackbarProvider>
  );
}

export default App;
