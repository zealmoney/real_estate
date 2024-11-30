import { Container, Grid, Segment, Header, Form, Button } from "semantic-ui-react"

const GetInTouch = () => {

    return(
        <Segment vertical style={{paddingTop: 50}} id="form_template">
            <Container>
                <Grid stackable textAlign="center">
                    <Grid.Row style={{paddingTop: 50}}>
                        <Grid.Column>
                            <Header
                                as="h4"
                                textAlign="center"
                                inverted
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontSize: 24,
                                    fontWeight: 'bold'
                                }}
                            >
                                Get In Touch
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{maxWidth: 600}}>
                            <Form size="large">
                                <Grid stackable textAlign="center" columns={2}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Form.Input 
                                                    transparent
                                                    placeholder="First Name"
                                                    style={{
                                                            borderWidth: '1px', 
                                                            borderStyle: 'solid',
                                                            borderColor: '#fff',
                                                            height: '38px',
                                                            color: '#fff'
                                                    }}
                                                />
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Form.Input
                                                     transparent
                                                     placeholder="Last Name"
                                                     style={{
                                                             borderWidth: '1px', 
                                                             borderStyle: 'solid',
                                                             borderColor: '#fff',
                                                             height: '38px',
                                                             color: '#fff'
                                                     }}
                                                />
                                            </Form.Field>
                                        </Grid.Column>
                                            
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Form.Input 
                                                     transparent
                                                     placeholder="Phone"
                                                     style={{
                                                             borderWidth: '1px', 
                                                             borderStyle: 'solid',
                                                             borderColor: '#fff',
                                                             height: '38px',
                                                             color: '#fff'
                                                     }}
                                                />
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Form.Input
                                                    transparent
                                                    placeholder="Email"
                                                    inverted
                                                    style={{
                                                            borderWidth: '1px', 
                                                            borderStyle: 'solid',
                                                            borderColor: '#fff',
                                                            height: '38px',
                                                            color: '#fff'
                                                    }}
                                                />
                                            </Form.Field>
                                        </Grid.Column>
                                            
                                    </Grid.Row>
                                </Grid> 
                                <Grid stackable textAlign="center" columns={1}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <Form.Input
                                                     transparent
                                                     placeholder="Message"
                                                     
                                                     style={{
                                                             borderWidth: '1px', 
                                                             borderStyle: 'solid',
                                                             borderColor: '#fff',
                                                             height: '76px',
                                                             color: '#fff'
                                                     }}
                                                />
                                            </Form.Field>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid> 
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ paddingTop: 50 }}>
                        <Grid.Column>
                            <Button 
                                size="large" 
                                color="green"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                                >
                                    SEND MESSAGE
                                </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>

    )
}
export default GetInTouch