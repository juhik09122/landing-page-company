import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Section 1: About */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We provide high-quality services and products to help businesses grow.
          </Typography>
        </Grid>

        {/* Section 2: Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/about" color="inherit" underline="hover" display="block">
            About
          </Link>
          <Link href="/services" color="inherit" underline="hover" display="block">
            Services
          </Link>
          <Link href="/contact" color="inherit" underline="hover" display="block">
            Contact
          </Link>
        </Grid>

        {/* Section 3: Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" color="inherit">

            
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        {/* Section 4: Contact */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">Email: info@company.com</Typography>
          <Typography variant="body2">Phone: +1 234 567 890</Typography>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
