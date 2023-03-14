
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
import { education } from '../../data/education';

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

const EducationCard = (props: any) => (
  <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.content.avatar}
          </Avatar>
        }
        title={props.content.title}
        subheader={props.content.years}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
);

export const Education = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="section-container">
      <div className="title-container">
        <h1 className="section-main-title"> Education</h1>
        <SchoolIcon className="about-icon"/>
      </div>
      
      { education.map((item,i) => (
        <EducationCard 
          expanded={expanded} 
          expandFn={handleExpandClick} 
          key={i}
          content={item} 
        />
      )) }
    </div>
  )
}
