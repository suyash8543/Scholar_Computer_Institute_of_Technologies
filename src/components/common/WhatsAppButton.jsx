import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/918004036061?text=Hello%20Scholar%20Computer%20Institute"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
        >
            <FaWhatsapp />
        </a>
    );
}

export default WhatsAppButton;