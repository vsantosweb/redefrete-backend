import styled from "@emotion/styled";


export const ProfileWrapper = styled.div`
display: flex;
height: 100%;
justify-content: flex-start;
align-items: flex-start;
`


export const ProfileDetails = styled.aside`
display: flex;
min-width: 295px;
height: 100%;
/* background-color: #f1f1f1; */
flex-direction: column;
padding: 1em;
gap: 10px;

`

export const ProfileOverView = styled.div`
padding: 0 3em;
flex-grow: 1;
`

export const ProfileAvatar = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 110px;
height: 110px;
background-color: #f1f1f1;
border-radius: 100%;
border: solid 4px #ddd;
font-size: 4em;
align-items: center;
`
export const ProfileInfoContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 6px;
justify-content: center;


`


export const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export const ProfileInfoLabel = styled.div`
font-weight: bold;
color: #8f8f8f;
font-size: 16px;
`
export const ProfileInfoValue = styled.div`
color: #000;
`
