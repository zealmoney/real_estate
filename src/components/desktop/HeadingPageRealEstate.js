import { Segment, Grid, Breadcrumb, Icon, Header } from "semantic-ui-react"

const HeadingPageRealEstate = () => {

    return(
        <Segment vertical id="realestate_template">
            <Grid verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column>
                    <Header 
                        as="h1" 
                        inverted 
                        textAlign="center"
                        style={{
                            fontFamily: 'AGRESSIVE',
                            fontWeight: 'bold',
                            fontSize: '30px'
                        }}
                    >
                        SYCOMORE CONSTRUCT REAL ESTATE
                    </Header>
                    <Header 
                        as="h4"
                        textAlign="center"
                        inverted
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}
                    
                    >
                        See Our Recently Built Houses For Sale
                    </Header>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row textAlign="center">
                    <Grid.Column>
                        <Breadcrumb>
                            <Breadcrumb.Section link style={{fontSize: 18, color: 'green'}}>
                                Home
                            </Breadcrumb.Section>
                             <Icon name='right chevron' inverted size="small" />
                             <Breadcrumb.Section style={{color: '#f6f6f6'}}>
                                Real Estate
                            </Breadcrumb.Section>
                        </Breadcrumb>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>

    )
}
export default HeadingPageRealEstate