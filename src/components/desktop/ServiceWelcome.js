import { Container, Grid, Header, Image, Segment } from "semantic-ui-react"

export const ServiceWelcome = () => {

    return(
        <>
            <Segment vertical style={{padding: 50}}>
                <Container>
                    <Grid>
                        <Grid.Row style={{padding: 50}}> 
                            <Grid.Column>
                                <Header 
                                    as="h4"
                                    content="WELCOME"
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
                        <Grid.Row>
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
                                    professionals who are looking to offer wide range 
                                    of Engineering services to pur clients and to ensure 
                                    that they get value for their money.
                                    This company was registered under corporate affairs				
                                    commission in 2020 and its founders have gathered vast 
                                    experience from working with different companies in Nigeria					
                                    in the past 10 years.
                                </p>
                                <p style={{
                                        fontSize: 14, 
                                        fontFamily: 'Arvo',
                                        fontWeight: 'normal',
                                        display: 'block'
                                        }}
                                >
                                        This company was registered under corporate affairs				
                                        commission in 2020 and its founders have gathered vast 
                                        experience from working with different companies in Nigeria					
                                        in the past 10 years.
                                        Because we love what we do, we do it seamlessly without
                                        struggle.
                                        Our previous jobs executed speak volumes and our clients are
                                        rest assured with their projects in our care.
                                </p>
                                <p style={{
                                        fontSize: 14, 
                                        fontFamily: 'Arvo',
                                        fontWeight: 'normal',
                                        display: 'block'
                                        }}
                                >
                                        This company was registered under corporate affairs				
                                        commission in 2020 and its founders have gathered vast 
                                        experience from working with different companies in Nigeria					
                                        in the past 10 years.
                                        Because we love what we do, we do it seamlessly without
                                        struggle.
                                        Our previous jobs executed speak volumes and our clients are
                                        rest assured with their projects in our care.
                                </p>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}