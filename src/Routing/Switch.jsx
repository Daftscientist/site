import { Routes as Wrapper, useLocation, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Routes from 'Routing/Routes';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const Switch = () => {
   const [prevLoc, setPrevLoc] = useState(false)
   const location = useLocation()

    useEffect(() => {
        setPrevLoc(location.pathname)
        NProgress.start()
        if ( location.pathname === prevLoc ) {
            setPrevLoc(false)
        }
    }, [location])

    useEffect(() => {
        NProgress.done()
    }, [prevLoc])

    return (
        <>
            <Wrapper>
                {Routes.map((route, i) =>
                    <Route key={i} path={route.path} exact={route.exact} title={route.title} element={<route.element/>} />
                )}
            </Wrapper>
        </>
    )
}

export default Switch;