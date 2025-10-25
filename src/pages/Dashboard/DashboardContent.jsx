import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const stats = [
  { title: "Total Users", value: "7,120", icon: <PeopleIcon fontSize="large" />, color: "primary.main" },
  { title: "Active Users", value: "5,430", icon: <TrendingUpIcon fontSize="large" />, color: "success.main" },
  { title: "Revenue", value: "$12,450", icon: <AttachMoneyIcon fontSize="large" />, color: "warning.main" },
  { title: "New Signups", value: "320", icon: <PersonAddIcon fontSize="large" />, color: "error.main" },
];

const DashboardContent = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3, md: 5 },
        marginLeft: { md: "10%", xs: 0 },
        marginTop: { xs: "3%", md: "2%" },
      }}
    >
      
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 550,
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 5, md: 10 },
        }}
      >
        Dashboard Overview.
      </Typography>

     
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper
              sx={{
                p: { xs: 3, md: 3 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: 140, sm: 150, md: 120 },
                bgcolor: stat.color,
                color: "white",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 5,
                },
              }}
              elevation={3}
            >
              {stat.icon}
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                {stat.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

     
      <Box sx={{ mt: 5 }}>
        <Paper
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 1, fontWeight: 600, textAlign: { xs: "center", md: "left" } }}
          >
            Recent Activity
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Placeholder for recent activity, charts, or tables.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardContent;
