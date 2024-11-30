import { Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { ServiceHeading } from "./ServiceHeading"
import { ServiceWelcome } from "./ServiceWelcome"
import { OurServices } from "./OurServices"
import NavbarServicesMobile from "../mobile/NavBarServicesMobile"

export const Services = ({mobile}) => {

    if(mobile){
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavbarServicesMobile />
            </Segment>
        )
    }else{
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavBar /> 
                <ServiceHeading />
                <ServiceWelcome />
                <OurServices /> 
                <Footer />
            </Segment>
        )
    }
}