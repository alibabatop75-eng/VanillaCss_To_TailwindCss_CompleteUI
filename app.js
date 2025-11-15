// server/app.js
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = createServer(app);

const corsOptions = {
    origin: 'http://localhost:5173', // Vite default port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Serve static files
app.use('/uploads', express.static('uploads'));

// Temporary routes until you create the actual route files
app.use('/api/auth', (req, res) => {
    res.json({ message: "Auth endpoint" });
});

app.use('/api/products', (req, res) => {
    res.json({ message: "Products endpoint" });
});

app.use('/api/seller', (req, res) => {
    res.json({ message: "Seller endpoint" });
});

const PORT = process.env.PORT || 5000;

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('New socket connection');
  
    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });
  
    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));