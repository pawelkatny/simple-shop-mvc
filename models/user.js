const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true
        },
        cart: [
            {
                product: {
                    productId: {
                        type: Schema.Types.ObjectId,
                        ref: 'Product',
                        required: true
                    },
                    quantity: {
                        type: Number,
                        required: true
                    }
                }
            }
        ]
    },
    {
        timestamps: true
    }    
)

module.exports = mongoose.model('User', userSchema);