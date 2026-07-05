import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

export const submitContact = async (req, res) => {

    try {

        const { name, email, subject, message } = req.body;

        // Validation

        if (!name || !email || !subject || !message) {

            return res.status(400).json({

                success: false,

                message: "Please fill all fields."

            });

        }

        // Save to MongoDB

        const contact = await Contact.create({

            name,

            email,

            subject,

            message

        });

        // Send Email

        await sendEmail({

            name,

            email,

            subject,

            message

        });

        return res.status(201).json({

            success: true,

            message: "Message sent successfully.",

            data: contact

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};