import styles from "./App.module.css";
import Login from "./components/Login";

function App() {
  return <main class={`${styles.main}`}>
    <Login/>
  </main>;
}

export default App;
