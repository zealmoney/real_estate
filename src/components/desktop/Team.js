import { Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"

export const Team = () => {

    return(
        <>
         <Segment vertical style={{paddingTop: 50, backgroundColor: '#f6f6f6'}}>
            <Container>
                <Grid textAlign="center" columns={3} stackable>
                    <Grid.Row style={{paddingTop: 50}}>
                        <Grid.Column>
                            <Header 
                                as="h4"
                                content="OUR TEAM"
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
                        <Grid.Column textAlign="left">
                            <Image size="large" src='/images/jide.jpg' rounded/>
                            <Header
                                as='h4'
                                content="Engr. Babajide Solarin"
                                color="green"
                                style={{ 
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold',
                                    margin: 10,
                                    marginLeft: 0
                                }}
                            />
                            <p>
                                <Icon name="mobile alternate" size="large" />
                                    <span style={{
                                            fontSize: 12,
                                            fontFamily: 'Arvo', 
                                            fontWeight: 'normal'
                                        }}
                                    >
                                        +23480575245
                                    </span>
                            </p>
                            <p>
                                <Icon name="mail outline" size="large" />
                                <span style={{
                                        fontSize: 12,
                                        fontFamily: 'Arvo', 
                                        fontWeight: 'normal'
                                    }}
                                >
                                    @yourname@gmail.com
                                </span>
                            </p>
                        </Grid.Column>
                        <Grid.Column textAlign="left">
                            <Image src='/images/ope.jpg' rounded/>
                            <Header
                                as='h4'
                                content="CEO Blder Opeoluwa Williams"
                                color="green"
                                style={{ 
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold',
                                    margin: 10,
                                    marginLeft: 0
                                }}
                            />
                            <p>
                                <Icon name="mobile alternate" size="large" />
                                    <span style={{
                                            fontSize: 12,
                                            fontFamily: 'Arvo', 
                                            fontWeight: 'normal'
                                        }}
                                    >
                                        +23480575245
                                    </span>
                            </p>
                            <p>
                                <Icon name="mail outline" size="large" />
                                <span style={{
                                        fontSize: 12,
                                        fontFamily: 'Arvo', 
                                        fontWeight: 'normal'
                                    }}
                                >
                                    @yourname@gmail.com
                                </span>
                            </p>
                        </Grid.Column>
                        <Grid.Column textAlign="left">
                            <Image src='/images/ajayi.jpg' rounded/>
                            <Header
                                as='h4'
                                content="Builder Ajayi Emmanuel"
                                color="green"
                                style={{ 
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold',
                                    margin: 10,
                                    marginLeft: 0
                                }}
                            />
                            <p>
                                <Icon name="mobile alternate" size="large" />
                                    <span style={{
                                            fontSize: 12,
                                            fontFamily: 'Arvo', 
                                            fontWeight: 'normal'
                                        }}
                                    >
                                        +23480575245
                                    </span>
                            </p>
                            <p>
                                <Icon name="mail outline" size="large" />
                                <span style={{
                                        fontSize: 12,
                                        fontFamily: 'Arvo', 
                                        fontWeight: 'normal'
                                    }}
                                >
                                    @yourname@gmail.com
                                </span>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
         </Segment>
        </>
    )
}