import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/_component/Layout";
import Intro from "../pages/intro/_component/Intro";
import Main from "../pages/main/_component/Main";
import Job from "../pages/job/_component/Job";
import PostContainer from "../pages/post/PostContainer";
import PostRead from "../pages/post/_component/PostRead";


const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element : < Main />,
            },
            {
                path : "/intro",
                element : < Intro />,
            },
            {
                path : "/job/:title",
                element : < Job />,
            },
            {
                path : "/post",
                element : < PostContainer />,
            },
            {
                path : "/post/:id",  // post의 하위 경로로 들어왔기 때문에 param으로 가져온다.
                                    // useparams로 가져온다.
                element : < PostRead />,
            },
        ]
    }
]);

export default router;