const checkNumber = (req, res, next) =>{
    // how to catch error, we use "try" to catch error
    try{
        const {number} = req.query;
        if (number < 6)
        res.send("number is small")
        next();
    }catch(err){
        console.log(err.message)
    }
}
module.exports = checkNumber