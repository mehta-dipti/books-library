import Dashboard from "./Dashboard";
import store from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
