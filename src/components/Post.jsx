import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

const Post = () => {
    return (
        <Box flex={4} p={2}>
            <Card sx={{margin:5}}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="John Doe"
                  subheader="June 06, 2020"
                />
                <CardMedia
                  component="img"
                  height="20%"
                  image="https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Post