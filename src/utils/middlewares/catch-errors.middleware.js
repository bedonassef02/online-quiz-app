exports.HandleException = (err, req, res) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
};
