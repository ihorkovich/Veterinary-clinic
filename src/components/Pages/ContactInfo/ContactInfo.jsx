import NavBar from "../../Everywhere/NavBar/NavBar";

const ContactInfo = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-center mt-10 text-3xl text-textGreen">
          Contact Information
        </h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11467.393460958125!2d-123.08931758470146!3d44.06583969877508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c0e1fc446cea33%3A0xbe4051df03b95b69!2sBush%20Animal%20Hospital!5e0!3m2!1suk!2sua!4v1675526510957!5m2!1suk!2sua"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-56 border-2 border-[#b5cbb7]"
          ></iframe>
          <p className="text-center mb-5">
            2415 Oakmont Way, Eugene, OR 97401, USA
          </p>

          <div className="flex flex-col">
            <p className="text-center">phone</p>
            <p className="text-center">+38 097 798 21 73</p>
          </div>

          <div className="working schedule text-center mt-10">
            <p>WORK SCHEDULE</p>
            mon. 9-16:00
            <br />
            tue. 9-16:00
            <br />
            wen. 9-16:00
            <br />
            thu. 9-16:00
            <br />
            fri. 9-16:00
            <br />
            sat. 9-16:00
            <br />
            sun. 9-16:00
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
