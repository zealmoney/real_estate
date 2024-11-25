import { Segment, } from "semantic-ui-react"
import '../../fonts/BebasNeue-Regular.ttf'
import HeadingPage from "./HeadingPage"
import Footer from "./Footer"
import NavBar from "./NavBar"

const Home = () => {

    return(
      
            <Segment vertical size="tiny">
                <NavBar />
                <HeadingPage />
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer />
            </Segment>
    )
}
export default Home