import { Button, Container, Form, Grid, Header, Segment } from "semantic-ui-react"

export const ContactGet = () => {

    return(
        <Segment vertical style={{paddingTop: 50}}>
            <Container>
                <Grid stackable>
                    <Grid.Row style={{paddingTop: 50}}>
                        <Grid.Column>
                            <Header 
                                as="h4"
                                content="Get In Touch"
                                textAlign="center"
                                attached="bottom"
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontSize: 24,
                                    fontWeight: 'bold'        
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column textAlign="center" width={12}>                        
                            <Form size="large">
                                <Form.Group widths='equal'>
                                    <Form.Input placeholder="First Name" />
                                    <Form.Input placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input placeholder="Phone No" />
                                    <Form.Input placeholder="Email" />
                                </Form.Group>
                                <Form.Field>
                                    <Form.TextArea placeholder="Message" />
                                </Form.Field>
                                <Form.Field>
                                    <Button
                                        color="green"
                                        size="huge"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 16, 
                                            fontWeight: 'bold'
                                        }}                                       
                                    >

                                        SEND MESSAGE
                                    </Button>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                    </Grid.Row>
                </Grid>    
            </Container>
        </Segment>
    )
}