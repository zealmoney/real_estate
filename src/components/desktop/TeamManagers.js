import { useNavigate } from "react-router-dom"
import { Container, Grid, Header, Segment,Image, Icon, Button } from "semantic-ui-react"

const TeamMembers = () => {

    const navigate = useNavigate()

    return(
        <Segment vertical style={{ paddingTop: 50, backgroundColor: '#f6f6f6' }}>
                <Container>
                <Grid stackable>
                    <Grid.Row style={{ paddingTop: 50 }}>
                        <Grid.Column>
                            <Header
                                as="h4"
                                textAlign="center"
                                attached="bottom"
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontSize: 24,
                                    fontWeight: 'bold'
                                }}
                            >
                                Team Members
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign="center">
                            <Grid.Column>
                                <Grid stackable columns={4}>
                                    <Grid.Column>
                                        <Image
                                            src="../images/team/person1.jpg"
                                            circular
                                            size="small"
                                            centered
                                            
                                        />
                                        <Header
                                            content="Engr. Awonuga oluwadamilare"
                                            as="h4"
                                            style={{
                                                fontFamily: 'Arvo',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Header
                                            content="Site Engineer"
                                            as="h6"
                                            color="green"
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Grid>
                                            <Grid.Column>
                                                <Icon 
                                                    name="facebook f" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}      
                                                />
                                                <Icon 
                                                    name="twitter" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}} 
                                                />
                                                <Icon 
                                                    name="google plus g" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}   
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image
                                            src="../images/team/person1.jpg"
                                            circular
                                            size="small"
                                            centered
                                            
                                        />
                                               <Header
                                            content="Engr. Awonuga oluwadamilare"
                                            as="h4"
                                            style={{
                                                fontFamily: 'Arvo',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Header
                                            content="Site Engineer"
                                            as="h6"
                                            color="green"
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Grid>
                                            <Grid.Column>
                                                <Icon 
                                                    name="facebook f" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}      
                                                />
                                                <Icon 
                                                    name="twitter" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}} 
                                                />
                                                <Icon 
                                                    name="google plus g" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}   
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image
                                            src="../images/team/person1.jpg"
                                            circular
                                            size="small"
                                            centered
                                            
                                        />
                                               <Header
                                            content="Engr. Awonuga oluwadamilare"
                                            as="h4"
                                            style={{
                                                fontFamily: 'Arvo',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Header
                                            content="Site Engineer"
                                            as="h6"
                                            color="green"
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Grid>
                                            <Grid.Column>
                                                <Icon 
                                                    name="facebook f" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}      
                                                />
                                                <Icon 
                                                    name="twitter" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}} 
                                                />
                                                <Icon 
                                                    name="google plus g" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}   
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image
                                            src="../images/team/person1.jpg"
                                            circular
                                            size="small"  
                                            centered                                          
                                            
                                        />
                                               <Header
                                            content="Engr. Awonuga oluwadamilare"
                                            as="h4"
                                            style={{
                                                fontFamily: 'Arvo',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Header
                                            content="Site Engineer"
                                            as="h6"
                                            color="green"
                                            style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                margin: 10,
                                                marginLeft: 0
    
                                            }}
                                        />
                                        <Grid>
                                            <Grid.Column>
                                                <Icon 
                                                    name="facebook f" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}      
                                                />
                                                <Icon 
                                                    name="twitter" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}} 
                                                />
                                                <Icon 
                                                    name="google plus g" 
                                                    circular
                                                    size="large"
                                                    color="black"
                                                    inverted
                                                    style={{margin: 10}}   
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>

                                </Grid>
                            </Grid.Column>
                    </Grid.Row>
                    <Grid.Row  style={{paddingTop: 50, paddingBottom: 50}}>
                        <Grid.Column textAlign="center">
                            <Button 
                                color="green"
                                size="large"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                                onClick={() => navigate("/about")}
                            >
                                VIEW ALL MEMBERS
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
        </Segment>
    )
}
export default TeamMembers