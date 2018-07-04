const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  const postSchema = mongoose.Schema({
    title: String,
    description: String,
  });

  const Post = mongoose.model('Post', postSchema);
  const silence = new Post({ title: 'Silence' });
  console.log(silence.title);

  silence.save((err, silence) => {
    if (err) console.error(err);
    console.log('bla', silence);
  });
});

module.exports = 'string';
