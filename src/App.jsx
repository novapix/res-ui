import HomePage from "./routes/HomePage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/ListPage";
import Layout from "./routes/Layout";
import SinglePage from "./routes/SinglePage";
import ProfilePage from "./routes/Profile";
import Login from "./routes/Login";
import NewPostPage from "./routes/NewPostPage";
import Register from "./routes/Register";
import Contact from "./routes/Contact";
import ProfileUpdatePage from "./routes/ProfileUpdatePage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/list",
                    element: <ListPage />
                },
                {
                    path: "/:id",
                    element: <SinglePage />
                },
                {
                    path: "/profile",
                    element: <ProfilePage />
                },
                {
                    path: "/newpost",
                    element: <NewPostPage />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/updateprofile",
                    element: <ProfileUpdatePage />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
