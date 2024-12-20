import { Breadcrumb, Grid, Header, Icon, Segment } from "semantic-ui-react"
import '../../style.css'
import { useNavigate } from "react-router-dom"

export const AboutHeading = () => {

    const navigate = useNavigate()

    return(
       
            <Segment vertical id='about_template'>
                <Grid stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column>
                            <Header 
                                as='h1'
                                textAlign="center"
                                inverted
                                content='ABOUT'
                                style={{fontFamily: 'AGRESSIVE',
                                    fontWeight: 'bold',
                                    fontSize: '30px'
                                }}
                            />
                            <Header 
                                as='h4' 
                                textAlign="center"
                                inverted
                                content='History Of The Company'
                                style={{fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    fontSize: '20px'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign="center">
                        <Grid.Column>
                            <Breadcrumb>
                             <Breadcrumb.Section 
                                link 
                                style={{fontSize: 18, color: 'green'}}
                                onClick={() => navigate("/")}
                            >
                                Home
                             </Breadcrumb.Section>
                             <Icon name="right chevron" inverted size="small" />
                             <Breadcrumb.Section link style={{fontSize: 18, color: '#f6f6f6'}}>
                                About
                             </Breadcrumb.Section>
                            </Breadcrumb>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
    )
}