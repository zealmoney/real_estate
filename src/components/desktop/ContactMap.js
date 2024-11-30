import { Grid, Segment } from "semantic-ui-react"

export const ContactMap = () => {

    return(
        <Segment vertical style={{
            padding: 0, 
            margin: 0
            }}
        >
                <Grid stackable>
                    <Grid.Row style={{paddingTop: 0}}>
                        <Grid.Column style={{minHeight: 400}}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3932.3348491082993!2d3.2981939749936884!3d6.609831093384173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%20unity%20close%20iyana%20ipaja%20lagos%20nigeria!5e1!3m2!1sen!2sus!4v1732906148980!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{
                                    width:"100%", 
                                    height: '100%', 
                                    border: 0,
                                }} 
                                >
                            </iframe>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>           
        </Segment>
    )
}