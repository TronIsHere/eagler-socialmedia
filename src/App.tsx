import "./style.css";
import { Outlet } from "react-router-dom";
import { ThreeColLayout } from "./layouts/threeColLayout";

function App() {
  return <ThreeColLayout children={<Outlet />} />;
}

export default App;
