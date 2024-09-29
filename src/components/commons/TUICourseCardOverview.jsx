import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoIcon from "@mui/icons-material/Info";  // Icon for course overview
import ScheduleIcon from "@mui/icons-material/Schedule";  // Icon for schedule

const CourseCard = ({ course }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "grey.100", p: 3, borderRadius: 4 }}>
      <Card sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box position="relative" sx={{ paddingTop: "56.25%" }}>
              <CardMedia
                component="img"
                image={course?.image ?? "https://via.placeholder.com/600x400"}
                alt={course?.title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  bgcolor: "rgba(0, 0, 0, 0.6)",
                  "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
                  transition: "background-color 0.3s",
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                >
                  {course?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course?.description}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <AccessTimeIcon
                    sx={{ fontSize: 18, color: "text.secondary", mr: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {course?.duration}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  {course?.originalPrice && (
                    <Typography
                      variant="h6"
                      color="error"
                      sx={{ textDecoration: "line-through" }}
                    >
                      ₹{course.originalPrice}
                    </Typography>
                  )}
                  <Typography variant="h5" color="primary" fontWeight="bold">
                    ₹{course?.price}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  transition: "transform 0.2s",
                  bgcolor: "#47025c",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#5e2d79",
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => {
                  // Handle course enrollment logic here
                  window.open("https://forms.gle/SEhVU4mjxSJuXueH8", "_blank");
                }}
              >
                Enroll now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Accordion for Course Overview */}
      <Accordion
        sx={{
          mt: 3,
          borderRadius: 2,
          "&:before": { display: "none" },
          boxShadow: 2,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="course-overview-content"
          id="course-overview-header"
          sx={{
            bgcolor: "#47025c",
            color: "white",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "white",
            },
          }}
        >
          <InfoIcon sx={{ mr: 2 }} /> {/* Symbol for Course Overview */}
          <Typography variant="h6">Course Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>{course?.overview}</Typography>

          {/* Learning Points Section */}
          <Typography variant="h6" gutterBottom>
            Learning Points
          </Typography>
          <List>
            {course?.learningPoints?.map((point, index) => (
              <ListItem key={index} sx={{ py: 0 }}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={point} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Schedule */}
      <Accordion
        sx={{
          mt: 2,
          borderRadius: 2,
          "&:before": { display: "none" },
          boxShadow: 2,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="schedule-content"
          id="schedule-header"
          sx={{
            bgcolor: "#47025c",
            color: "white",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "white",
            },
          }}
        >
          <ScheduleIcon sx={{ mr: 2 }} /> {/* Symbol for Schedule */}
          <Typography variant="h6">Schedule</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" gutterBottom>
            Check out the course schedule below:
          </Typography>

          <List>
            {Object.entries(course?.schedule).map(([day, activity]) => (
              <ListItem key={day} sx={{ py: 0 }}>
                <ListItemIcon>
                  <AccessTimeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={`${day}: ${activity}`} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CourseCard;
