import React from 'react'
import HotelView from "./HotelView";
import SideDrawer from "./SideDrawer";
import styled from 'styled-components';
function Content() {
    return (
        <Container>
            
            <SideDrawer />
            <HotelView />
        </Container>
    )
}

export default Content

const Container=styled.div`
    display:flex;
    @media only screen and (max-width:56.25em) {
    flex-direction: column;
  }
`;
