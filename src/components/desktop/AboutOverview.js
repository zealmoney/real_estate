import { Container, Grid, Header, Image, Segment } from "semantic-ui-react"

export const AboutOverview = () => {

    return(
            <Segment vertical style={{paddingTop: 50}}>
                <Container>
                    <Grid stackable>
                        <Grid.Row style={{paddingTop: 50}}> 
                            <Grid.Column>
                                <Header 
                                    as="h4"
                                    content="OVERVIEW"
                                    attached='bottom'
                                    textAlign="center"
                                    style={{
                                        fontFamily: 'AGRESSIVE',
                                        fontSize: 24,
                                        fontWeight: 'bold'
                                    }}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{paddingBottom: 50}}>
                            <Grid.Column width={7}>
                                <Image 
                                    src='/images/10.jpg'
                                    size="large"
                                    rounded
                                />
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <p style={{ 
                                        fontSize: 14, 
                                        fontFamily: 'Arvo',
                                        fontWeight: 'normal',
                                        display: 'block'
                                    }}
                                >
                                    We are a team of young, passionate and experienced
                                    professionals who are looking to offer wide range of
                                    Engineering Services to our Clients and to ensure that they get
                                    value for their money.
                                </p>
                                <p style={{
                                        fontSize: 14, 
                                        fontFamily: 'Arvo',
                                        fontWeight: 'normal',
                                        display: 'block'
                                        }}
                                >
                                        This company was registered under Corporate Affairs
                                        Commission in 20 and its founders have gathered vast
                                        experience from working with different companies in Nigeria in
                                        the past 10 years. Because we love what we do, 
                                        we do it seamlessly without struggle.
                                        Our previous jobs executed speak volumes and our clients are
                                        rest assured with their projects in our care.
                                </p>                               
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
    )
}