import { Container, Grid, Header, Segment, Form, Input, Icon, Button, List } from "semantic-ui-react"
import '../../fonts/Arvo-Regular.ttf'

const Footer = () => {
    return(
       
        <Segment vertical style={{backgroundColor: '#000', paddingTop: 60, paddingBottom: 60}}>
            <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                <Header 
                                    as="h3"
                                    inverted
                                    style={{
                                        fontFamily: 'AGRESSIVE',
                                        fontSize: 14,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    SYCOMORE CONSTRUCT
                                </Header>
                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Icon 
                                        inverted circular 
                                        color="white" 
                                        name="facebook f" 
                                        size="small"
                                        co 
                                    />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Icon 
                                        inverted circular 
                                        color="white" 
                                        name="twitter" 
                                        size="small" 
                                    />

                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Icon 
                                        inverted circular 
                                        color="white" 
                                        name="google plus g" 
                                        size="small" 
                                    />

                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Icon 
                                        inverted circular 
                                        color="white" 
                                        name="instagram" 
                                        size="small" 
                                    />

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                       
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                <Header 
                                    as="h4"
                                    inverted
                                    style={{
                                        fontFamily: 'Arvo',
                                        fontSize: 18,
                                        fontWeight: 'normal'
                                    }}
                                >
                                    NEWS LETTER
                                </Header>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header
                                        inverted
                                        color="white"
                                        as="h5"
                                        content="Keep up with the latest company news and events. Enter your email and subscribe to our newsletter."
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>     
                                <Input placeholder='Search...' />
                                <Button color="green" content='SUBSCRIBE' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    

                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                <Header 
                                    as="h4"
                                    inverted
                                    style={{
                                        fontFamily: 'Arvo',
                                        fontSize: 18,
                                        fontWeight: 'normal'
                                    }}
                                >
                                    USEFUL LINKS
                                </Header>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <List link inverted relaxed style={{
                                        color: '#fff'
                                    }}>
                                        <List.Item>
                                            <Icon name="angle right" />
                                            About
                                        </List.Item>
                                        <List.Item>
                                            <Icon name="angle right" />
                                            Services
                                        </List.Item>
                                        <List.Item>
                                            <Icon name="angle right" />
                                            Real Estate
                                        </List.Item>
                                        <List.Item>
                                            <Icon name="angle right" />
                                            Contact
                                        </List.Item>
                                    </List>
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
export default Footer