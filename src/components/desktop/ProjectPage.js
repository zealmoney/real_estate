import { Container, Grid, Header, Segment, Image, Pagination } from "semantic-ui-react"

const ProjectPage = () => {
    return(
        <Segment vertical style={{paddingTop: 50}}>
            <Container>
                <Grid stackable>
                                 {/* Row 1 Begins */}
                                 <Grid.Row>
                        <Grid.Column>
                            <Grid stackable columns={3}>
                                <Grid.Column>
                                    <div>
                                        <Image 
                                            fluid
                                            src="../images/project/project1.jpg" 
                                            centered
                                            size="large"
                                            bordered
                                        />
                                    </div>
                                    <Header 
                                        content="ABAT Project." 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Bourdillon, Ikoyi-Lagos."
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="Supervision of ABAT Project, Bourdillon, Ikoyi-Lagos."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    /> 
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project15.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                     <Header 
                                        content="Underground sewage tank" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Lekki Lagos"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="Cast pile cap and underground sewage tank ready to be sunk. 1 bedroom studio 
apartment at Lekki"
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project2.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                     <Header 
                                        content="12-storey Vita Tower" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Kofo-Abayomi Street, V.I-Lagos"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content=" Supervision of 12-storey Vita Towers at Kofo-Abayomi Street, V.I-Lagos. Contractor – DTV"
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 1 Ends */}
                    
                    {/* Row 2 Begins */}
                    <Grid.Row>
                        <Grid.Column>
                            <Grid stackable columns={3}>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project18.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                    <Header 
                                        content="Medina Estate" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Gbagada Lagos"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="Development standing of 82 nos pile foundation at Medina Estate, Gbagada-Lagos"
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    /> 
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project9.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Underground diesel tank" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Landmark Towers"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="Reinforced concrete underground diesel tank for Landmark Towers"
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project11.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content=" Road and site development" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="UPDC Pinnock Estate, Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content=" Road and site development for UPDC Pinnock Estate, Lekki"
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 2 Ends */}
                    <Grid.Row style={{paddingTop: 50, paddingBottom: 50}}>
                        <Grid.Column textAlign="center">
                            <Pagination
                                  boundaryRange={0}
                                  defaultActivePage={1}
                                  ellipsisItem={null}
                                  firstItem={null}
                                  lastItem={null}
                                  siblingRange={1}
                                  totalPages={10}
                            />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </Container>
        </Segment>

    )
}
export default ProjectPage