import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const OurServices = () => {

    return(
        
            <Segment vertical id="service_template2" style={{paddingTop: 50}}>
                <Container>
                    <Grid stackable>
                        <Grid.Row style={{paddingTop: 50}}>
                            <Grid.Column>
                                <Header 
                                    as="h4"
                                    content="Our Services"
                                    textAlign="center"
                                    style={{
                                        fontFamily: 'AGRESSIVE',
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: 'white'        
                                    }}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Grid stackable columns={3} textAlign="center">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                icon
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'Arvo'
                                                }}
                                            >
                                                <Icon 
                                                    circular
                                                    inverted
                                                    color="green"
                                                    name="user"
                                                />
                                                <p style={{marginTop: 20}}>Find An Agent</p>
                                                <Header 
                                                    as='h3'
                                                    content='Our agents are professional in everything they do. 
                                                            Just call our office or contact the agent you like 
                                                            via email or his/her social profile.'
                                                    style={{
                                                        fontSize: 14, 
                                                        fontFamily: 'Arvo',
                                                        fontWeight: 'normal',
                                                        color: 'white',
                                                        display: 'block',
                                                        marginTop: 20
                                                    }}
                                                />
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                icon
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'Arvo'
                                                }}
                                            >
                                                <Icon 
                                                    circular
                                                    inverted
                                                    color="green"
                                                    name="lock"
                                                />
                                                <p style={{marginTop: 20}}>Property Insurance</p>
                                                <Header 
                                                    as='h3'
                                                    content='You can insure your property at our company immediately
                                                             after buying or renting. Take care of the safety of your 
                                                             home and family.'
                                                    style={{
                                                        fontSize: 14, 
                                                        fontFamily: 'Arvo',
                                                        fontWeight: 'normal',
                                                        color: 'white',
                                                        display: 'block',
                                                        marginTop: 20
                                                    }}
                                                />
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                icon
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'Arvo'
                                                }}
                                            >
                                                <Icon 
                                                    circular
                                                    inverted
                                                    color="green"
                                                    name="home"
                                                />
                                                <p style={{marginTop: 20}}>Property Management</p>
                                                <Header 
                                                    as='h3'
                                                    content="We deal with different kinds of properties. 
                                                            No matter what you need a house, an apartment or 
                                                            garage you'll find a good option on our site."
                                                    style={{
                                                        fontSize: 14, 
                                                        fontFamily: 'Arvo',
                                                        fontWeight: 'normal',
                                                        color: 'white',
                                                        display: 'block',
                                                        marginTop: 20
                                                    }}
                                                />
                                            </Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Grid stackable columns={3} textAlign="center">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                icon
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'Arvo'
                                                }}
                                            >
                                                <Icon 
                                                    circular
                                                    inverted
                                                    color="green"
                                                    name="user"
                                                />
                                                <p style={{marginTop: 20}}>Find An Agent</p>
                                                <Header 
                                                    as='h3'
                                                    content='Our agents are professional in everything they do. 
                                                            Just call our office or contact the agent you like 
                                                            via email or his/her social profile.'
                                                    style={{
                                                        fontSize: 14, 
                                                        fontFamily: 'Arvo',
                                                        fontWeight: 'normal',
                                                        color: 'white',
                                                        display: 'block',
                                                        marginTop: 20
                                                    }}
                                                />
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                icon
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'Arvo'
                                                }}
                                            >
                                                <Icon 
                                                    circular
                                                    inverted
                                                    color="green"
                                                    name="lock"
                                                />
                                                <p style={{marginTop: 20}}>Property Insurance</p>
                                                <Header 
                                                    as='h3'
                                                    content='You can insure your property at our company immediately
                                                             after buying or renting. Take care of the safety of your 
                                                             home and family.'
                                                    style={{
                                                        fontSize: 14, 
                                                        fontFamily: 'Arvo',
                                                        fontWeight: 'normal',
                                                        color: 'white',
                                                        display: 'block',
                                                        marginTop: 20
                                                    }}
                                                />
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                icon
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'Arvo'
                                                }}
                                            >
                                                <Icon 
                                                    circular
                                                    inverted
                                                    color="green"
                                                    name="home"
                                                />
                                                <p style={{marginTop: 20}}>Property Management</p>
                                                <Header 
                                                    as='h3'
                                                    content="We deal with different kinds of properties. 
                                                            No matter what you need a house, an apartment or 
                                                            garage you'll find a good option on our site."
                                                    style={{
                                                        fontSize: 14, 
                                                        fontFamily: 'Arvo',
                                                        fontWeight: 'normal',
                                                        color: 'white',
                                                        display: 'block',
                                                        marginTop: 20
                                                    }}
                                                />
                                            </Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        
    )
}