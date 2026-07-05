/* ======================================================
   CONTACT FORM
   Yuvraj Singh Jadaun Portfolio
====================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", submitForm);

}

async function submitForm(e) {

    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    const originalText = submitBtn.innerHTML;

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        showMessage("Please fill all fields.", "error");

        return;

    }

    if (!validateEmail(email)) {

        showMessage("Please enter a valid email.", "error");

        return;

    }

    submitBtn.disabled = true;

    submitBtn.innerHTML = "Sending...";

    try {

        const response = await fetch(

            "http://localhost:5000/api/contact",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    name,

                    email,

                    subject,

                    message

                })

            }

        );

        const data = await response.json();

        if (response.ok) {

            showMessage(

                "✅ Message sent successfully. I'll contact you soon.",

                "success"

            );

            contactForm.reset();

        }

        else {

            showMessage(

                data.message || "Something went wrong.",

                "error"

            );

        }

    }

    catch (error) {

        console.error(error);

        showMessage(

            "Server not responding.",

            "error"

        );

    }

    submitBtn.disabled = false;

    submitBtn.innerHTML = originalText;

}

/* ==========================================
   EMAIL VALIDATION
========================================== */

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/* ==========================================
   SHOW MESSAGE
========================================== */

function showMessage(message, type) {

    let box = document.querySelector(".form-message");

    if (!box) {

        box = document.createElement("div");

        box.className = "form-message";

        contactForm.appendChild(box);

    }

    box.className = "form-message " + type;

    box.textContent = message;

    setTimeout(() => {

        box.className = "form-message";

        box.textContent = "";

    }, 5000);

}