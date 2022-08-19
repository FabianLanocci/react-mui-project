import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const itemData = [
    { img: 'https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Lasagna'},
    { img: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Pizza' },
    { img: 'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Burger' },
    { img: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Ramen' },
    { img: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Sushi' },
    { img: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Kebab' }
]

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={"25%"}>
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={5} sx={{ width:200, display:"flex", justifyContent:"flex-start"}}>
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/2122276/pexels-photo-2122276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            to Scott, Alex, Jennifer
                          </Typography>
                          {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Nanomachines, son"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Armstrong
                          </Typography>
                          {' — They harden in response to physical trauma...'}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar