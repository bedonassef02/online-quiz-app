exports.HandleException = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({message: 'Something broke!'});
};
