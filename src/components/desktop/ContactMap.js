import { Container, Grid, Segment } from "semantic-ui-react"

export const ContactMap = () => {

    return(
        <Segment vertical style={{padding: 0}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5931.801807948517!2d-87.6297634!3d41.47708289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1732836311946!5m2!1sen!2sus"
                                style={{
                                    width:"100%", height:350, allowfullscreen:"", 
                                    loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"
                                }} 
                                >
                            </iframe>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>           
        </Segment>
    )
}