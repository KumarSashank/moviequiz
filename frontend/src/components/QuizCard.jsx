import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const QuizCard = ({ quiz }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={quiz.previewImageUrl}
      alt={quiz.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5">{quiz.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {quiz.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Typography variant="caption" sx={{ flexGrow: 1 }}>
        {quiz.duration} mins
      </Typography>
      <Button
        size="small"
        variant="contained"
        component={RouterLink}
        to={`/quiz/${quiz.id}`}
      >
        Start
      </Button>
    </CardActions>
  </Card>
);

export default QuizCard;
