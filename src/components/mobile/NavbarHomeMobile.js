import { useState } from "react"
import { Sidebar, Menu, Container, Image, Header, Segment, Icon } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"
import HeadingPage from "../desktop/HeadingPage"
import Overview from "../desktop/Overview"
import RecentProjects from "../desktop/RecentProjects"
import TeamMembers from "../desktop/TeamManagers"
import GetInTouch from "../desktop/GetInTouch"
import Footer from "../desktop/Footer"

const NavbarHomeMobile = () => {

    const [ sidebarOpened, setSidebarOpened ] = useState()
    const navigate = useNavigate()

    return(
        <>
        <Sidebar.Pushable>
            <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            inverted
            onHide={() => setSidebarOpened(false)}
            visible={sidebarOpened}          
            >
              
                <Menu.Item as='a' onClick={() => navigate("/")}>
                    Home
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/about")}>
                    About
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/projects")}>
                    Projects
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/services")}>
                    Services
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/realestate")}>
                    Real Estate
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/contact")}>
                    Contact
                </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     style={{backgroundColor: '#FFFFFF'}}           
                    >
                        <Container>
                            <Image
                                src="../images/logo.png" 
                                size="tiny"
                                inline
                                fluid
                                style={{
                                    margin: 0
                                }}
                            />
                            <Header
                                style={{
                                    fontFamily: "Bebas Neue",
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                                color="green"
                            >
                                SYCAMORE CONSTRUCT
                            </Header> 
                            <Menu.Item  position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon size="large" name="sidebar" />
                            </Menu.Item>            
                        </Container>
                    </Menu>
                </Segment>
                <HeadingPage />

                    <Overview />
                    <RecentProjects />
                    <TeamMembers />
                    <GetInTouch />
                    <Footer />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </>
              
    )

}

export default NavbarHomeMobile