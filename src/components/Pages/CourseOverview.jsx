import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Badge, Grid, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CourseOverview = () => {
  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh', py: 8, px: 2, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 1000, boxShadow: 3, borderRadius: 2 }}>
        <Grid container>
          {/* Course Image */}
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <CardMedia
                component="img"
                image="https://via.placeholder.com/600x400" // Replace with your image
                alt="MERN Fundamentals"
                sx={{ height: '100%', objectFit: 'cover' }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Course Details */}
          <Grid item xs={12} md={6}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box>
                <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                  MERN Fundamentals
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Learn how to build a full-stack application with the MERN stack.
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Badge badgeContent="Free tutorial" color="error" sx={{ mr: 2 }} />
                  <Typography variant="body2" color="textSecondary">
                    <StarIcon sx={{ fontSize: 16, color: 'gold', verticalAlign: 'middle' }} />
                    3.7 (18 ratings) | 1,752 students
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <AccessTimeIcon sx={{ fontSize: 18, color: 'gray', mr: 1 }} />
                  <Typography variant="body2" color="textSecondary">
                    1hr 41min of on-demand video
                  </Typography>
                </Box>
              </Box>

              <Button variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
                Enroll now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CourseOverview;
