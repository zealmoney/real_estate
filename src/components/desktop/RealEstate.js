import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import HeadingPageRealEstate from "./HeadingPageRealEstate"
import Footer from "./Footer"
import RealEstatePage from "./RealEstatePage"
import NavbarRealestateMobile from "../mobile/NavbarRealestateMobile"

const RealEstate = ({mobile}) => {

    if(mobile){
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavbarRealestateMobile />
            </Segment>
        )

    }else{
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavBar />
                <HeadingPageRealEstate />
                <RealEstatePage />
                <Footer />
    
            </Segment>
        )

    }
    
}
export default RealEstate