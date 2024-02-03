import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
