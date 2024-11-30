import { Breadcrumb, Button, Grid, Header, Icon, Image, Segment } from "semantic-ui-react"
import '../../fonts/AGRESSIVE.otf'
import '../../style.css'
import '../../fonts/BebasNeue-Regular.ttf'
import '../../fonts/Roboto-Regular.ttf'

const HeadingPageProjects = () => {
    return(
        <Segment id="project_template" vertical>
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
                        SYCOMORE CONSTRUCT PROJECTS
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
                        See Our Recently Completed Projects
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
                                Projects
                            </Breadcrumb.Section>
                        </Breadcrumb>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </Segment>
    )
   
}
export default HeadingPageProjects