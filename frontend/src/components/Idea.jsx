import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function Idea() {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    idea: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:4000/api/ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Your idea has been successfully submitted!");
        setFormData({
          name: "",
          className: "",
          idea: "",
        });
      } else {
        setSubmitMessage("Failed to submit your idea. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Error submitting the idea. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
          <Typography variant="h4" component="h1" sx={{ color: "white" }}>
            Post Your Idea
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ marginTop: "10px", color: "white" }}
          >
            Share your innovative idea with us!
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: "15px" }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { color: "white", backgroundColor: "#333" },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "15px" }}>
            <TextField
              fullWidth
              label="Class"
              variant="outlined"
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { color: "white", backgroundColor: "#333" },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "15px" }}>
            <TextField
              fullWidth
              label="Idea"
              variant="outlined"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              multiline
              rows={4}
              required
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { color: "white", backgroundColor: "#333" },
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
            sx={{
              backgroundColor: "#ff9800",
              "&:hover": { backgroundColor: "#e68a00" },
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>

        {submitMessage && (
          <Box sx={{ marginTop: "20px", textAlign: "center" }}>
            <Typography
              variant="body1"
              color={submitMessage.includes("successfully") ? "green" : "red"}
            >
              {submitMessage}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
