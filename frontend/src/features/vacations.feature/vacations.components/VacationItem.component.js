import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Vacations.stylesheet.css'

const VacationItem = props => {
    return (
        <div className="vacation-item">
            <Card className="item-card">
                <CardContent>
                    <Typography className="item-description" color="textSecondary" gutterBottom>
                        Followers {props.followerscount}
                    </Typography>
                    <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>

                    </CardActions>
                    <Typography className="item-description" color="textSecondary" gutterBottom>
                        D: {props.description}
                    </Typography>
                    <Typography className="item-price" color="textSecondary" gutterBottom>
                        {props.price} $
                    </Typography>

                    <img src={props.images} className='item-image'/>

                    <Typography className="item-dates" color="textSecondary" gutterBottom>
                        {props.datefrom} To {props.dateto}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small">Follow</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default VacationItem

