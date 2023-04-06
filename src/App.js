import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
