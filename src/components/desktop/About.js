import { Card, Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { AboutOverview } from "./AboutOverview"
import { AboutHeading } from "./AboutHeading"
import { Team } from "./Team"
import NavbarAboutMobile from "../mobile/NavBarAboutMobile"

export const About = ({mobile}) => {

    if(mobile){
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavbarAboutMobile />
            </Segment>
        )
    }else{
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavBar />
                <AboutHeading />
                <AboutOverview />
                <Team />
                <Footer />
            </Segment>
        )
    }
}