import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import { ContactHeading } from "./ContactHeading"

export const Contact = () => {

    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <NavBar />
            <ContactHeading />
        </Segment>
    )
}