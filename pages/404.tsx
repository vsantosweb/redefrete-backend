import Image from 'next/image';
import React from 'react';
import { Page } from './_app';



const Custom404: Page = () => {

    return (
        <div className={'section-wrapper'}>
            404 | Not Found
        </div>
    )
}

Custom404.config = {
    title: 'Dashboard',
    layout: 'AccountLayout'
}

export default Custom404;