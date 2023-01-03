const errorHandler = (err, req, res, next) => {
    res.status(500).json({success: false, data: err.name || err.message})
 
}
export default errorHandler;