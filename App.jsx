import { HomePage } from './src/pages/HomePage';
import { ThemePage } from './src/pages/ThemePage';
import { useState } from 'react';
import { Theme_Colorful } from './src/colors';

export default function App() {

    const [theme, setTheme] = useState(Theme_Colorful);

    return (
        // <HomePage theme={theme} setTheme={setTheme} />
        <ThemePage theme={theme} setTheme={setTheme} />
    );
}