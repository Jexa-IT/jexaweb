import "./App.css";
import Routes from "@/routes/Routes";
import { useLaunchTime } from "./hooks/useLaunchTime";
import NewYearLaunch from "./components/common/NewYearLaunch";

function App() {
const launchDate = new Date("2026-01-01T00:00:00");

  const { isLive, timeLeft } = useLaunchTime(launchDate);


  if (!isLive) {
    return (
      <div>
        <NewYearLaunch timeLeft={timeLeft} />;
      </div>
    );
  }
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
