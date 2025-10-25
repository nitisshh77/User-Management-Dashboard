import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById } from "../../services/api";
import { Box, Typography, Button, CircularProgress, Paper } from "@mui/material";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        const localUser = localUsers.find((u) => u.id.toString() === id);

        if (localUser) {
          setUser(localUser);
        } else {
         
          const apiUser = await fetchUserById(id);
          setUser(apiUser);
        }
      } catch (err) {
        console.error("Error loading user:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">User not found.</Typography>
        <Button onClick={() => navigate("/users")} sx={{ mt: 2 }} variant="contained">
          Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, maxWidth: 500, width: "100%", borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          User Details
        </Typography>
        <Typography><strong>Name:</strong> {user.name}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Phone:</strong> {user.phone}</Typography>
        <Typography><strong>Company:</strong> {user.company?.name}</Typography>

        <Button
          onClick={() => navigate("/users")}
          sx={{ mt: 3 }}
          variant="contained"
        >
          Back to Users
        </Button>
      </Paper>
    </Box>
  );
};

export default UserDetails;
