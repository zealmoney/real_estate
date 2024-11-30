import { Container, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"

export const Team = () => {

    return(
        <>
         <Segment vertical style={{padding: 50, backgroundColor: '#f6f6f6'}}>
            <Container>
                <Grid stackable>
                    <Grid.Row style={{padding: 50}}>
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
                    <Grid.Row>
                        <Grid.Column width={4}>
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
                        <Grid.Column width={4}>
                            <Image src='/images/jide.jpg' rounded/>
                            <Header
                                as='h4'
                                content="Opeoluwa Williams"
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
                        <Grid.Column width={4}>
                            <Image src='/images/jide.jpg' rounded/>
                            <Header
                                as='h4'
                                content="Awonuga Oluwadamilare"
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
                        <Grid.Column width={4}>
                            <Image src='/images/jide.jpg' rounded/>
                            <Header
                                as='h4'
                                content="Olalekan Ogunlade"
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