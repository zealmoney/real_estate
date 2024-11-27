import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import { ContactHeading } from "./ContactHeading"
import Footer from "./Footer"
import { ContactSubHeading } from "./ContactSubHeading"

export const Contact = () => {

    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <NavBar />
            <ContactHeading />
            <ContactSubHeading />
            <Footer />
        </Segment>
    )
}