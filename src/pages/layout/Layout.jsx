import React from "react";
import { Container, Typography, Grow, Grid, AppBar } from "@material-ui/core";
import PostsContainer from "../posts/postsContainer/PostsContainer";
import PostForm from "../../components/postForm/PostForm";
import useStyles from './style'
const Layout = () => {
   const classes=useStyles()
        return (
                <>
                        <Container maxWidth="lg">
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                        <Typography className={classes.heading} variant="h5">SnapBlog</Typography>
                                </AppBar>
                                {/* app body */}
                                <Grow in>
                                        <Container>
                                                <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                                                        <Grid item xs={12} sm={7}>
                                                                <PostsContainer />
                                                        </Grid>
                                                        <Grid item xs={12} sm={5}>
                                                                <PostForm />
                                                        </Grid>
                                                </Grid>
                                        </Container>
                                </Grow>
                        </Container>
                </>
        );
};

export default Layout;
