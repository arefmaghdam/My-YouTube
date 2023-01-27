import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return <AppRouter />;
}

export default App;
