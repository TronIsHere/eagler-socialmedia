import "./style.css";
import { Outlet } from "react-router-dom";
import { ThreeColLayout } from "./components/ui/layouts/threeColLayout";

function App() {
  return <ThreeColLayout children={<Outlet />} />;
}

export default App;
