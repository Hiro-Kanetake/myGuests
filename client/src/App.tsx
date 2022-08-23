import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import TopPage from './TopPage'
import PropertyMainPage from './PropertyMainPage'
import AddGuest from './AddGuest'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/property" element={<PropertyMainPage />} />
          <Route path="/addGuest" element={<AddGuest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
