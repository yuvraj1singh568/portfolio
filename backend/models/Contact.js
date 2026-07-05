import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(

    {

        name: {

            type: String,

            required: [true, "Name is required"],

            trim: true,

            minlength: 2,

            maxlength: 100

        },

        email: {

            type: String,

            required: [true, "Email is required"],

            trim: true,

            lowercase: true

        },

        subject: {

            type: String,

            required: [true, "Subject is required"],

            trim: true,

            maxlength: 200

        },

        message: {

            type: String,

            required: [true, "Message is required"],

            trim: true,

            maxlength: 5000

        }

    },

    {

        timestamps: true

    }

);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
