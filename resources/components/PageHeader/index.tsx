import React from 'react'
import { RouteGuardContext } from '../../../RouteGuard';
import { authService } from '../../../services';
import * as Styled from './styles';


const PageHeader = ({ title }) => {

    const { user } = React.useContext(RouteGuardContext);
    
    return (
        <Styled.PageHeaderWrapper>
            <Styled.PageHeaderContent>
                <Styled.HeaderMenu>
                    <Styled.HeaderMenuList>
                        <Styled.HeaderMenuListItem><strong>{user?.name} ({user?.email})</strong></Styled.HeaderMenuListItem>
                        <Styled.HeaderMenuListItem> <a href={'#'} onClick={() => authService.signOut()}>Sair</a> </Styled.HeaderMenuListItem>
                    </Styled.HeaderMenuList>
                </Styled.HeaderMenu>
            </Styled.PageHeaderContent>
            <Styled.PageHeaderInfo><h3>{title}</h3></Styled.PageHeaderInfo>
        </Styled.PageHeaderWrapper>
    );
}

export default React.memo(PageHeader)