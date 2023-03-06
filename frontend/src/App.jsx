import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout"
import GameOne from "./pages/GameOne"
import GameTwo from "./pages/GameTwo"
import GameThree from "./pages/GameThree"

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GameOne />} />
            <Route path="gameTwo" element={<GameTwo />} />
            <Route path="gameThree" element={<GameThree />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
