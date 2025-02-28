import { useState } from "react";
import "./Contact.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("https://formspree.io/f/mdkarozy", {  // 🔴 Replace with your Formspree URL
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.ok) {
            setResponseMessage("Message sent successfully!");
        } else {
            setResponseMessage("Failed to send message.");
        }
    };

    return (
        <section style={{ padding: "8rem 0 2rem 0" }} id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />

                <input type="email" placeholder="Your email " name="email" value={formData.email} onChange={handleChange} required />

                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </section>
    );
};

export default ContactForm;