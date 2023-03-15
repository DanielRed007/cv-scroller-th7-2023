
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const InfoCard = (props: any) => (
    <div className="info-card-item">
        <Card sx={{ maxWidth: 345, padding: "1.2rem" }} square={true}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500], fontFamily: "Oswald" }} aria-label="recipe">
                    {props.content.avatar}
                </Avatar>
                }
                title={ <Typography variant="h6" style={{ fontFamily: "Oswald", fontSize: '24px', fontWeight: 'bold' }}>
                        {props.content.title}
                    </Typography> }
                subheader={ <Typography variant="h6" style={{ fontFamily: "Oswald", fontSize: '18px', fontWeight: 'light' }}>
                            {props.content.years}
                        </Typography> }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Dosis", fontSize: '21px', fontWeight: '600' }}>
                    {props.content.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="Achivements" />
                </Stack>
                <ExpandMore
                expand={props.expanded}
                onClick={props.expandFn}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={props.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    { props.content.achivements.map((achivement:string,key:number) => (
                        <Typography>
                            {achivement}
                        </Typography>
                    )) }
                </CardContent>
            </Collapse>
        </Card>
    </div>
);