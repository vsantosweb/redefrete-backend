import React from 'react'
import { AuthContext } from './AuthProvider';
import type { AppProps, } from 'next/app'
import { NextPage } from 'next';
import { useRouter } from 'next/router';


export default function withAuth(Component: React.ComponentType): any {



    const PrivateComponent = (props: any) => {

        const router = useRouter();

        const { authenticated, user, _rendering } = React.useContext(AuthContext);

        if (_rendering) return '';

        if (!authenticated && window.location.pathname !== '/account/login') {
            window.location.href = '/account/login';
            return false;
        }

        if (authenticated && window.location.pathname === '/account/register') {
            window.location.href = '/';
            return false;
        }

        if (authenticated && window.location.pathname === '/account/login'){
            window.location.href = '/panel';

            return false;
        } 

        return <Component {...props} />
    }

    return PrivateComponent
}