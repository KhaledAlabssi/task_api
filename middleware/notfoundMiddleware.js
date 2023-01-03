const notFound = (req, res) => res.status(404).json({success: false, data: "route not found"})
export default notFound;