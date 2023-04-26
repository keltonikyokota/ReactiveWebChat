import { Routes, Route } from "react-router";
import { privateRoutes, publicRoutes } from "./routes";
import MainLayout from "./components/MainLayout/MainLayout";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);

  return (
    <Routes>
      <Route element={ <MainLayout/> }>
        {
          isAuth
          ?
          privateRoutes.map(route => <Route key={route.path} {...route} />)
          :
          publicRoutes.map(route => <Route key={route.path} {...route} />)
        }
      </Route>
    </Routes>
  );
}

export default App;
