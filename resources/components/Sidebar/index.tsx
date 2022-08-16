import { Badge } from '@chakra-ui/react';
import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import _nav from '../../../nav';

import * as Styled from './styles';
import { useRouter } from "next/router";
import Link from 'next/link';

function SidebarMenu() {

    const router = useRouter();

    return (
        <Styled.Sidebar>
            <Styled.SidebarInner>
                <Styled.SidebarHeader>
                    <div ><img src={'/redefrete.png'} width={"110px"} /></div>

                </Styled.SidebarHeader>
                <Styled.SidebarContent>
                    <Styled.SidebarMenu>
                        <ul>
                            {_nav.map(route => <Styled.SidebarMenuItem active={router.pathname === route.path}>
                                <Link href={route.path}><a> <div className={`innerItem`} >
                                    <div className={'icon-wrapper'}>
                                        <div className={'icon'}>{route.icon}</div>
                                    </div>
                                    <div className={'itemLink'}>{route.name}</div>
                                    {/* <Badge>6</Badge> */}
                                </div></a></Link>
                            </Styled.SidebarMenuItem>)}

                        </ul>
                        
                    </Styled.SidebarMenu>
                </Styled.SidebarContent>
            </Styled.SidebarInner>
        </Styled.Sidebar>
    )
}

export default React.memo(SidebarMenu)