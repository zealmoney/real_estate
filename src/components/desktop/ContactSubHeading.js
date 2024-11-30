import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const ContactSubHeading = () => {

    return(
        <Segment vertical style={{backgroundColor: '#f6f6f6', padding: 50}}>
            <Container>
                <Grid stackable>
                    <Grid.Row style={{padding: 50}}>
                        <Grid.Column width={4}>
                            <Header 
                                as='h3'
                                icon='mobile alternate'
                                content="Phones"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                            <p style={{paddingLeft: 40}}>
                                +2347037117288
                            </p>
                            <p style={{paddingLeft: 40}}>
                                +2347037117288
                            </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header 
                                as='h3'
                                icon='mail outline'
                                content="Email"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                            <p style={{paddingLeft: 40}}>
                                opeolowanhr@gmail.com
                            </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header 
                                as='h3'
                                icon='map outline'
                                content="Address"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                            <p style={{paddingLeft: 40}}>
                                4, Unity Close , Iyana ipaja , Lagos, Nigeria.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header 
                                as='h3'
                                icon='clock outline'
                                content="Open Hours"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                            <p style={{paddingLeft: 40}}>
                                8:00am - 6:00pm Mon - Fri
                            </p>
                            <p style={{paddingLeft: 40}}>
                                8:00am - 12:00noon Sat
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}