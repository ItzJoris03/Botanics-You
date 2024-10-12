import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the routes JSON
import routeConfig from '@/assets/json/routes.json';
import Navbar from './Navbar';
import { RouteConfig } from '@/types/routes';

const { routes } = routeConfig;

// const RouterComponent: React.FC = () => {
//     return (
//         <Router>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Routes>
//                     {routes.map((route) => {
//                         // Construct the component import path using basePath
//                         const Component = lazy(() => import(`../views/${route.component}.tsx`));

//                         const getSubRoutes = (route?: RouteConfig) => {
//                             if(route?.subroutes) {
//                                 const subRoutes = route.subroutes.map((subroute) => {
//                                     const subSubRoutes = [<Route
//                                         key={subroute.path}
//                                         path={subroute.path}
//                                         element={<>
//                                             <Component />
//                                         </>}
//                                     />];

//                                     subSubRoutes.push(getSubRoutes(subroute.subroutes));

//                                     return subSubRoutes;
//                                 }).flat();

//                                 return subRoutes.forEach((Item) => <Item />);
//                             }

//                             return <></>;
//                         }

//                         return (
//                             <Route
//                                 key={route.path}
//                                 path={route.path}
//                                 element={<>
//                                     {(route.includeNavbar === undefined || route.includeNavbar) && <Navbar />}
//                                     <Component />
//                                 </>}
//                             />
//                         );
//                     })}
//                 </Routes>
//             </Suspense>
//         </Router>
//     );
// };

const renderRoutes = (route: RouteConfig) => {
    const Component = lazy(() => import(`../views/${route.component}.tsx`));

    return (
        <Route
            key={route.path}
            path={route.path}
        >
            <Route index element={
                <>
                    {(route.includeNavbar === undefined || route.includeNavbar) && <Navbar />}
                    <Component />
                </>
            } />
            {route.subroutes &&
                route.subroutes.map((subroute) => {
                    const SubComponent = lazy(() => import(`../views/${subroute.component}.tsx`));
                    return (
                        <Route
                            key={subroute.path}
                            path={subroute.path}
                            element={<>
                                {(subroute.includeNavbar === undefined || subroute.includeNavbar) && <Navbar />}
                                <SubComponent />
                            </>}
                        />
                    );
                })
            }
        </Route>
    );
};

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map((route) => renderRoutes(route))}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default RouterComponent;
