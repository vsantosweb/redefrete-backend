import React from 'react'
import Router, { useRouter } from 'next/router'
import { authService } from './services';



const privatePaths = ['/', '/perfil'];


function RouteGuard({ children }) {

    const [authorized, setAuthorized] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<any>(false);
    const [rendering, setRendering] = React.useState<boolean>(true);
    const router = useRouter();

    React.useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath)

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setRendering(true)

        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath]);

    const authCheck = async (url) => {

        // redirect to login page if accessing a private page and not logged in 
        const path = url.split('?')[0];

        return await authService.session().then((user) => {

            if (user && router.pathname === '/account/login') {
                router.push(`/`)
            }

            if (!user && privatePaths.includes(path)) {
                router.push('/account/login');
                setAuthorized(false);
                setUser({})

            } else { setAuthorized(true); setUser(user.data) }

            setRendering(false)

        }).catch(() => {

            setAuthorized(false);
            router.push('/account/login');
            setUser({});
            setRendering(false);
        })


    }


    if (rendering || (!authorized && window.location.pathname !== '/account/login')) return null

    return <RouteGuardContext.Provider value={{ user, authorized, rendering, }}>{children}</RouteGuardContext.Provider>


}


export { RouteGuardContext, RouteGuard }