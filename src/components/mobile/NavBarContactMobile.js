import { useState } from "react"
import { Sidebar, Menu, Container, Image, Header, Segment, Icon } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../desktop/Footer"
import { ContactHeading } from "../desktop/ContactHeading"
import { ContactSubHeading } from "../desktop/ContactSubHeading"
import { ContactGet } from "../desktop/ContactGet"
import { ContactMap } from "../desktop/ContactMap"

const NavbarContactMobile = () => {

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
                <ContactHeading />
                <ContactSubHeading />
                <ContactGet />
                <ContactMap />
                <Footer />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </>
              
    )

}

export default NavbarContactMobile