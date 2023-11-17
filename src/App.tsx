import "./App.css";
import { Card, CardHeader, Section } from "./components/Card";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Input from "./components/Input";
import Taskbar from "./components/Taskbar";

function App() {
  return (
    <div className="min-h-screen w-screen grid place-content-center bg-[#AAA8AB]">
      <Taskbar></Taskbar>
      <Card>
        <CardHeader>Card</CardHeader>
        <Section title="Content section">
          <Alert>An info type alert</Alert>
          <Alert type="warning">Warning! This is a warning alert</Alert>
          <Alert type="error">Watch out! This is an error alert</Alert>
          <Alert type="success">Perfect! This is a success alert</Alert>
          <div className="m-2">
            <Input label="Text input" type="text"></Input>
          </div>
          <div className="flex justify-end">
            <Button>Cancel</Button>
            <Button>OK</Button>
          </div>
        </Section>
      </Card>
    </div>
  );
}

export default App;
