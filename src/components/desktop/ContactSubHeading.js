import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const ContactSubHeading = () => {

    return(
        <Segment vertical style={{backgroundColor: '#f6f6f6', padding: 50}}>
            <Container>
                <Grid>
                    <Grid.Row style={{padding: 50}}>
                        <Grid.Column width={4}>
                            <Header 
                                as='h2'
                                icon='mobile alternate'
                                content="Phones"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                            <p style={{paddingLeft: 40}}>
                                +2348054723657
                            </p>
                            <p style={{paddingLeft: 40}}>
                                +2348054723657
                            </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header 
                                as='h2'
                                icon='mail outline'
                                content="Email"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header 
                                as='h2'
                                icon='map outline'
                                content="Address"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header 
                                as='h2'
                                icon='clock outline'
                                content="Open Hours"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}