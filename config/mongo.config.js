const mongoose = require("mongoose");
// mongodb connection
module.exports = (URL) => {
    try {
         mongoose.connect(URL);
        console.log(`connected to ${URL}`)
            
        } catch (error) {
            throw new Error(error.message);
    
}
}