import { Button, Grid, Header, Image, Segment } from "semantic-ui-react"
import '../../fonts/AGRESSIVE.otf'
import '../../style.css'
import '../../fonts/BebasNeue-Regular.ttf'
import '../../fonts/Roboto-Regular.ttf'

const HeadingPage = () => {
    return(
        <Segment id="b_template" vertical>
            <Grid verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column>
                    <Header 
                        as="h1" 
                        inverted 
                        textAlign="center"
                        style={{
                            fontFamily: 'AGRESSIVE',
                            fontWeight: 'bold',
                            fontSize: '30px'
                        }}
                    >
                        SYCAMORE CONSTRUCT
                    </Header>
                    <Header 
                        as="h4"
                        textAlign="center"
                        inverted
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}
                    
                    >
                        We Build Your Future Structures Today
                    </Header>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign="center">
                    <Grid.Column>
                        <Button 
                            size="large"
                            color="green"
                            style={{
                                fontFamily: "Bebas Neue",
                                fontSize: 20,
                                fontWeight: 'normal',
                            }}
                        >
                            VIEW PROJECTS
                        </Button>
                        <Button 
                            size="large"
                            color="teal"
                            style={{
                                fontFamily: "Bebas Neue",
                                fontSize: 20,
                                fontWeight: 'normal',
                            }}
                        >
                            CONTACT US
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </Segment>
    )
   
}
export default HeadingPage