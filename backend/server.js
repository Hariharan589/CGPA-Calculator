const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
const cgpaRoutes = require('./routes/cgpaRoutes');

connectDB().then((ok) => {
	if (!ok) {
		console.warn('Continuing without database connection. History/save features will be unavailable.');
	}
});

const app = express();

// Configure CORS: if FRONTEND_ORIGIN is set, restrict to that origin; otherwise allow all (useful for quick deploy/testing)
const corsOptions = process.env.FRONTEND_ORIGIN ? { origin: process.env.FRONTEND_ORIGIN } : {};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/cgpa', cgpaRoutes);

// Serve built frontend (if exists) so the app is available from a single URL
const buildPath = path.join(__dirname, '..', 'frontend', 'build');
if (fs.existsSync(buildPath)) {
	app.use(express.static(buildPath));
	// For any other route, serve index.html (SPA)
	app.get('*', (req, res) => {
		res.sendFile(path.join(buildPath, 'index.html'));
	});
}

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
