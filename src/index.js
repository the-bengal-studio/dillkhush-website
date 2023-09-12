import React from 'react';
import ReactDOM from 'react-dom';
import
{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Policy from './pages/Policy/Policy';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Home from './pages/Home/Home';
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition';
import QuickLinks from './pages/QuickLinks/QuickLinks';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
        },
        {
            path: "/disclaimer",
            element: <Disclaimer />,
        },
        {
            path: "/policy",
            element: <Policy />
        },
        {
            path: "/terms-and-condition",
            element: <TermsAndCondition />
        },
        {
            path: "/quick-link",
            element: <QuickLinks />
        }
    ]
);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
    , document.getElementById( "root" )
);
