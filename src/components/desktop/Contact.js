import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import { ContactHeading } from "./ContactHeading"
import Footer from "./Footer"
import { ContactSubHeading } from "./ContactSubHeading"
import { ContactGet } from "./ContactGet"
import { ContactMap } from "./ContactMap"
import NavbarContactMobile from "../mobile/NavBarContactMobile"

export const Contact = ({mobile}) => {

    if(mobile){
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavbarContactMobile />
            </Segment>
        )
    }else{
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavBar />
                <ContactHeading />
                <ContactSubHeading />
                <ContactGet />
                <ContactMap />
                <Footer />
            </Segment>
        )
    }
}