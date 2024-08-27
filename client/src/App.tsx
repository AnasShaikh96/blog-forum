import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/form";

function App() {
  return (
    <>
      <Input title="Email" type="password" />

      <Button size={"default"} variant={"default"} isLoading={true}>
        Loging in
      </Button>
    </>
  );
}

export default App;
