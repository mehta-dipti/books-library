import Dashboard from "./Dashboard";
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ParticleBackground from "react-particle-backgrounds";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          opacity: 1,
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#273244",
    },
    secondary: {
      main: "#00d4d6",
    },
  },
});

function App() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#c1c1c1",
      minSize: 2,
      maxSize: 20,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 0.5,
    },
    opacity: {
      minOpacity: 0.2,
      maxOpacity: 0.5,
      opacityTransitionTime: 15000,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <ParticleBackground settings={settings} className="particle-bg" />
          <Dashboard />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
