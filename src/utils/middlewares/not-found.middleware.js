exports.NotFoundException = (req, res, next) => {
    res.status(404).send({message: 'Not Found'});
};
