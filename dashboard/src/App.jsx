import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layoutPage/Layout";
import Home from "./pages/homePage/Home";
import CoursesTable from "./pages/coursesTable/coursesTable";
import UsersTable from "./pages/usersTable/UsersTable";
import AddCourse from "./pages/addCourse/AddCourse";
import UpdateCourse from "./pages/updateCourse/UpdateCourse";
import ReviewsTable from "./pages/reviewsTable/ReviewsTable";
import SingleReview from "./pages/singleReview/SingleReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <CoursesTable />,
      },
      {
        path: "/updateCourse/:id",
        element: <UpdateCourse />,
      },
      {
        path: "/addCourse",
        element: <AddCourse />,
      },
      {
        path: "/users",
        element: <UsersTable />,
      },
      {
        path: "/reviews",
        element: <ReviewsTable />,
      },
      {
        path: "/reviews/:id",
        element: <SingleReview />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
