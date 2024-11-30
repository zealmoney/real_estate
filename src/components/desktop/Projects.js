import { Segment } from "semantic-ui-react"
import Footer from "./Footer"
import ProjectPage from "./ProjectPage"
import HeadingPageProjects from "./HeadingPageProjects"
import NavbarProjectMobile from "../mobile/NavbarProjectMobile"
import NavBar from "./NavBar"

const Projects = ({mobile}) => {

    if(mobile){
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavbarProjectMobile />
               
            </Segment>
        )

    }else{
        return(
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavBar />
                <HeadingPageProjects  />
                <ProjectPage />
                <Footer /> 
            </Segment>
        )

    }

}
export default Projects