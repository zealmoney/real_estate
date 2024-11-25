import { Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import Footer from "./Footer"

export const Services = () => {

    return(
        <>
            <NavBar />
            <Segment vertical>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Segment>
                                <Grid textAlign="center">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header 
                                                as="h3" 
                                                content="SYCAMORE CONSTRUCT SERVICES" 
                                                style={{fontFamily: 'AGRESSIVE'}}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column >
                                            <Header as="h5" content="Home/Services" style={{fontFamily: 'Roboto'}} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment style={{padding: '2em 2em'}}>
                                <Grid textAlign="center">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header 
                                                as="h3"
                                                content="WELCOME"
                                                style={{fontFamily: 'AGRESSIVE'}}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row style={{marginTop: '0.5em'}}>
                                        <Grid.Column width={8}>
                                            <Image 
                                                src='/images/21.jpg'
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <p style={{lineHeight: '2em', fontSize: '1.3em', fontFamily: 'Aerial'}}>
                                                We are a team of young, passionate and experienced 
                                                professionals who are looking to offer wide range 
                                                of Engineering services to pur clients and to ensure 
                                                that they get value for their money.
                                            </p>
                                            <p style={{lineHeight: '2em', fontSize: '1.3em', fontFamily: 'Aerial'}}>
                                                This company was registered under corporate affairs				
                                                commission in 2020 and its founders have gathered vast 
                                                experience from working with different companies in Nigeria					
                                                in the past 10 years
                                            </p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment vertical>
                                <Grid textAlign="center">
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header 
                                                as='h3'
                                                content='OUR SERVICES'
                                                style={{fontFamily: 'AGRESSIVE'}}
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={4}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image src='/images/15.jpg' />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <p style={{fontSize: '1.3em', fontFamily: 'Aerial'}}>
                                                            We engage in construction Projects of all kinds
                                                        </p>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image src='/images/13.jpg' />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <p style={{fontSize: '1.3em', fontFamily: 'Aerial'}}>
                                                            We engage in construction Projects of all kinds
                                                        </p>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image src='/images/12.jpg' />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <p style={{fontSize: '1.3em', fontFamily: 'Aerial'}}>
                                                            We engage in construction Projects of all kinds
                                                        </p>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image src='/images/4.jpg' />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <p style={{fontSize: '1.3em', fontFamily: 'Aerial'}}>
                                                            We engage in construction Projects of all kinds
                                                        </p>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>                        
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            <Footer />
        </>
    )
}