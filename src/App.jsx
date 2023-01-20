import { Route, Routes } from "react-router-dom";
import Results from "./views/Results";
import Draw from "./views/Draw";
import Home from "./views/Home";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<Draw />} />
        <Route path="/results" element={<Results />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
