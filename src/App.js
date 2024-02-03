import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
