import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Chip,
} from "@mui/material";
import { addProjectStyles } from "../../../assets";
import { AddProjectApi } from "../../../API";
import { redirect } from "react-router-dom";

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    techStack: [] as string[],
    github: "",
    live_url: "",
  });

  const [techStackInput, setTechStackInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTechStack = () => {
    if (techStackInput && !formData.techStack.includes(techStackInput)) {
      setFormData({
        ...formData,
        techStack: [...formData.techStack, techStackInput],
      });
      setTechStackInput(""); // Clear input after adding
    }
  };

  const handleDeleteTechStack = (tech: string) => {
    setFormData({
      ...formData,
      techStack: formData.techStack.filter((item) => item !== tech),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const educationList = await AddProjectApi(formData);
      console.log(educationList);
      redirect("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="sm" className={addProjectStyles.formContainer}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Project
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Project Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              name="img_url"
              value={formData.img_url}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Tech Stack
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <TextField
                  label="Add Tech Stack"
                  variant="outlined"
                  fullWidth
                  value={techStackInput}
                  onChange={(e) => setTechStackInput(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleAddTechStack}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <div className={addProjectStyles.techStackChips}>
              {formData.techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  onDelete={() => handleDeleteTechStack(tech)}
                  color="primary"
                  className={addProjectStyles.chip}
                />
              ))}
            </div>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="GitHub URL"
              variant="outlined"
              fullWidth
              name="github"
              value={formData.github}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Live URL"
              variant="outlined"
              fullWidth
              name="live_url"
              value={formData.live_url}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={addProjectStyles.submitButton}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ProjectForm;
