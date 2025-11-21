import './Weather.css';

export function ContactPage() {
    return(
       <div className="page-container">
      <h1>Contact Us</h1>
      <p>Have feedback or questions? Send us a message below.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    )
}