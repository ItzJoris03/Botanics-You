import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the routes JSON
import routeConfig from '@/assets/json/routes.json';
import Navbar from './Navbar';

const { routes } = routeConfig;

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map((route) => {
                        // Construct the component import path using basePath
                        const Component = lazy(() => import(`../views/${route.component}.tsx`));
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<>
                                    {(route.includeNavbar === undefined || route.includeNavbar) && <Navbar />}
                                    <Component />
                                </>}
                            />
                        );
                    })}
                </Routes>
            </Suspense>
        </Router>
    );
};

export default RouterComponent;
