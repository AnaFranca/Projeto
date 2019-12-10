import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Campanha from '../imgAjudar/campanha.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: orange[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            LB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Campanha do Agasalho"
        subheader="6 de abril, de 2019"
      />
      <CardMedia
        className={classes.media}
        image={Campanha}
        title="Campanha do agasalho"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        A “Campanha do Agasalho”, acontecerá simultaneamente em 26 cidades do Paraná no período de 08/04 à 10/08/2019.
        Em 10 anos o Sistema Fecomércio Sesc e Senac PR, com a participação de apoiadores, parceiros e da população paranaense,
        consolidou a arrecadação de 2.832.583 peças, beneficiando, anualmente, média de 300 instituições sociais que prestam 
        atendimento à pessoas em situação de vulnerabilidade e/ou risco social.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Os postos de coleta estão disponíveis nas unidades do Sesc e do Senac em todo o estado e em algumas empresas do comércio. 
          Para identificar o local de arrecadação mais próximo, entre em contato com a unidade do Sesc da sua cidade
          </Typography>

         
        </CardContent>
      </Collapse>
    </Card>
  );
}