import "./App.css";
import { Card, CardHeader, Section } from "./components/containers/Card";
import Button from "./components/fundemental/Button";
import Taskbar from "./components/fundemental/Taskbar";

function App() {
  return (
    <div className="min-h-screen w-screen grid place-content-center bg-primary">
      <Taskbar></Taskbar>
      <Card>
        <CardHeader>Sell your soul</CardHeader>
        <Section title="Basic info">
          <Button>Cancel</Button>
          <Button>OK</Button>
        </Section>
      </Card>
    </div>
  );
}

export default App;
