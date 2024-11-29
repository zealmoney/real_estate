import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react"

export const ContactSubHeading = () => {

    return(
        <Segment vertical style={{backgroundColor: '#f6f6f6', padding: 50}}>
            <Container>
                <Grid>
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
                                +2348054723657
                            </p>
                            <p style={{paddingLeft: 40}}>
                                +2348054723657
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
                                example@yourname.com
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
                                316 W 34th Street, Chicago Heights,
                                IL 60411
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
                                8:00 - 19:00 Mon - Fri
                            </p>
                            <p style={{paddingLeft: 40}}>
                                9:00 - 17:00 Sat
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}