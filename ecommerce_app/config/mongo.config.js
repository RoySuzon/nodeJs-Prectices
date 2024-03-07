const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    // description: { type: String, required: true },
    createAt: { type: Date, default: Date.now }
});


// exports.schemaIndex = userSchema.index();
exports.userModel = mongoose.model("users", userSchema);