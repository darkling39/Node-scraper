const mongoose = require('mongoose');

productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    subtitle: String,
    description: String,
    price: Number,
    specifications: String,
    type: String,
    image: String,
    source: String
})

module.exports = mongoose.model('Product', productSchema)