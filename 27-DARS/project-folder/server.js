const express = require('express');
const app = express();
const PORT = 3000;
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

app.use(express.json());
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));