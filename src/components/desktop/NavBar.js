import { Container, Segment, Menu, Image, Header } from "semantic-ui-react"
import '../../fonts/BebasNeue-Regular.ttf'
import { useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

    return(
        <Menu
            size="tiny"
            secondary
            style={{
                fontFamily: "Bebas Neue",
                fontSize: 20,
                fontWeight: 'normal',
                verticalAlign: 'middle'
            }}
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
            
                <Menu.Item 
                    as="a" 
                    position="right"
                    onClick={() => navigate("/")}
                >
                    Home
                </Menu.Item>
                <Menu.Item 
                    as="a"
                    onClick={() => navigate("/about")}
                >
                    About
                </Menu.Item>
                <Menu.Item as="a">Projects</Menu.Item>
                <Menu.Item 
                    as="a"
                    onClick={() => navigate("/services")}
                >
                    Services
                </Menu.Item>
                <Menu.Item as="a">Real estate</Menu.Item>
                <Menu.Item as="a">Contact</Menu.Item>
            </Container>

        </Menu>
)

}
export default NavBar