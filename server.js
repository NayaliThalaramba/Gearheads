// const express = require('express');
// const path = require('path');


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from specific subdirectories for clarity
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/videos', express.static(path.join(__dirname, 'public/videos')));


// Route to serve the html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/LogIn.html'));
});

app.get('/LogIn.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/LogIn.html'));
});

app.get('/CreateProfile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/CreateProfile.html'));
});

app.get('/ExploreCars.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/ExploreCars.html'));
});

app.get('/SportsCars.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/SportsCars.html'));
});

app.get('/News.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/News.html'));
});

app.get('/Community.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/Community.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/index.html'));
});

app.get('/Profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/Profile.html'));
});

app.get('/Fav.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/Fav.html'));
});

app.get('/Drives.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/Drives.html'));
});

// Route to serve the css files
app.get('/EC.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client/EC.css'));
});

// Serve the sportscars.json file from the 'server' folder inside 'public'
app.get('/server/data/sportscar.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/server/data/sportscar.json'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
