import React from 'react';
import './UserList.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, CircularProgress, TextField, Box, Typography
} from "@mui/material";


const UserList = () => {

  const navigate = useNavigate();

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  const [users , setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");



useEffect(() => {
  const loadUsers = async () => {
    try {
      const apiUsers = await fetchUsers();
      const localUsers = JSON.parse(localStorage.getItem("users")) || [];

      
      const allUsers = [...apiUsers, ...localUsers];

      setUsers(allUsers);
      setFiltered(allUsers);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadUsers();
}, []);

 
  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(users.filter(
      (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    ));
  }, [query, users]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleDelete = (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  
  const updatedUsers = users.filter((u) => u.id !== id);
  setUsers(updatedUsers);
  setFiltered(updatedUsers);

  
  const localUsers = JSON.parse(localStorage.getItem("users")) || [];
  const updatedLocal = localUsers.filter((u) => u.id !== id);
  localStorage.setItem("users", JSON.stringify(updatedLocal));
};


  return (
       <Box sx={{ p: 3, width:1200, }}>
     


      <div className='btndiv'>
      <button className='btn' onClick={() => navigate("/adduser")}>
        Add User
      </button>
    </div>

      <TextField
        label="Search by name or email"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
            <TableRow>
              
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
  {filtered.map((user) => (
    <TableRow key={user.id} hover>
      <TableCell
        sx={{ cursor: "pointer" }}
        onClick={() => handleUserClick(user.id)}
      >
        {user.name}
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>{user.company.name}</TableCell>
      <TableCell>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(user.id);
          }}
          style={{
            backgroundColor: "rgba(183, 178, 178, 0.544)",
            color: "black",
            border: "none",
            borderRadius: "6px",
            padding: "8px",
            cursor: "pointer",
            fontSize: "12px",
            paddingLeft:"40px",
          }}
        > Delete
        </button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
        </Table>
      </TableContainer>

      {filtered.length === 0 && (
        <Typography sx={{ textAlign: "center", mt: 3, color: "gray" }}>
          No users found.
        </Typography>
      )}
    </Box>
  );
};

export default UserList;
