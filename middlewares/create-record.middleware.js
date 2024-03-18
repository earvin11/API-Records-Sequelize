const createRecordMiddleware = async(req, res, next) => {
    const { name, email } = req.body;

    if(!name || !email) return res.status(400).json({
        message: 'Name & email son necesarios'
    });

    next();
};

module.exports = createRecordMiddleware;