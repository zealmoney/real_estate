import { Card, Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Overview } from "./Overview"
import { AboutHeading } from "./AboutHeading"
import { Team } from "./Team"

export const About = () => {

    return(
        <>
            <NavBar />
            <AboutHeading />
            <Overview />
            <Team />
            <Footer />
        </>
    )
}