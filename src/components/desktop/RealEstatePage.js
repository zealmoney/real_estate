import { Link } from "react-router-dom"
import { Container, Grid, Header, Segment, Image, Pagination } from "semantic-ui-react"

const RealEstatePage = () => {
    return(
        <Segment vertical style={{paddingTop: 50}}>
            <Container>
                <Grid stackable>
                <Grid.Row style={{paddingTop: 50}}>
                        <Grid.Column>
                            <Header 
                                as="h4"
                                textAlign="center"
                                attached="bottom"
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontSize: 24,
                                    fontWeight: 'bold'
                                }}
                            >
                                Our Properties For Sale
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
           

                     <Header>Should be uploaded</Header>

                    <Grid.Row style={{padding: 50}}>
                        <Grid.Column textAlign="center">
                           {/* <Pagination
                                  boundaryRange={0}
                                  defaultActivePage={1}
                                  ellipsisItem={null}
                                  firstItem={null}
                                  lastItem={null}
                                  siblingRange={1}
                                  totalPages={10}
                            />*/}
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </Container>
        </Segment>

    )
}
export default RealEstatePage