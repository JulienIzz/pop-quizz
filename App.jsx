import { HomePage } from './src/HomePage';

export default function App() {

  const [theme, setTheme] = useState(Theme_Colorful);

  return (
    <HomePage theme={theme} setTheme={setTheme} />
  );
}