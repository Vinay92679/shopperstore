import './App.css'
const Contact = () => {
  

  return (
 <>
  <div className='contact_page'>
    <h2 className="common-heading display-3">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1969516071495!2d77.33181657495419!3d28.563847987197352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ca45dddbbd%3A0xbaeeb1faf9c50fbd!2sBotanical%20Garden%20Metro!5e0!3m2!1sen!2sin!4v1707981319387!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div className="container contact_section">
        <div className="contact-form text-center">
           <form action="https://formspree.io/f/meqygkpq" method="POST" className="contact-inputs">
              <input type="text" placeholder="username" name="Username" required autoComplete="off"/>
              <input type="email" placeholder="email" name="Email" required autoComplete="off"/>
              <textarea name="Enter your meassage" cols="30" rows="10" required autoCapitalize="off"></textarea>
              <input type="submit" value="send"></input>
           </form>
        </div>
    </div>
  </div>
</>
)
};

export default Contact;
