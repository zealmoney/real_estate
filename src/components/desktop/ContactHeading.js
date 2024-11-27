import { Breadcrumb, Grid, Header, Icon, Segment } from "semantic-ui-react"
import '../../style.css'

export const ContactHeading = () => {

    return(
        <>
            <Segment vertical id='contact_template'>
                <Grid verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column>
                            <Header 
                                as='h1' 
                                textAlign="center"
                                inverted
                                content='CONTACT'
                                style={{fontFamily: 'AGRESSIVE',
                                    fontWeight: 'bold',
                                    fontSize: '30px'
                                }}
                            />
                            {/*<Header 
                                as='h4' 
                                textAlign="center"
                                inverted
                                content='Our Services'
                                style={{fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    fontSize: '20px'
                                }}
                            />*/}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign="center">
                        <Grid.Column>
                            <Breadcrumb>
                             <Breadcrumb.Section link style={{fontSize: 18, color: 'green'}}>
                                Home
                             </Breadcrumb.Section>
                             <Icon name="right chevron" inverted size="small" />
                             <Breadcrumb.Section link style={{fontSize: 18, color: '#f6f6f6'}}>
                                Contact
                             </Breadcrumb.Section>
                            </Breadcrumb>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <Icon name="phone" color="green" />
                            Phones
                            1-800-1234-567
                        </Grid.Column>
                        <Grid.Column>2</Grid.Column>
                        <Grid.Column>3</Grid.Column>
                        <Grid.Column>4</Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}
