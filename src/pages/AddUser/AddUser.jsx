import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import './AddUser.css';

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    
    const newUser = { ...user, id: Date.now(), company: { name: user.company } };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("User added successfully!");
    navigate("/users"); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
      }}
    >
      <Paper sx={{ p: 4, width: 400, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Add New User
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            required
            value={user.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            required
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            fullWidth
            margin="normal"
            required
            value={user.phone}
            onChange={handleChange}
          />
          <TextField
            label="Company"
            name="company"
            fullWidth
            margin="normal"
            required
            value={user.company}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add User
          </Button>

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate("/users")}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddUser;
