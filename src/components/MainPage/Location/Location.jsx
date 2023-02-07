const Location = () => {
  return (
    <div className="container px-4 py-14 bg-bgGreen">
      <h2 className="bg-[#b5cbb7] text-bgGreen px-4 text-center py-6 text-3xl font-bold">
        Our Clinic Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11467.393460958125!2d-123.08931758470146!3d44.06583969877508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c0e1fc446cea33%3A0xbe4051df03b95b69!2sBush%20Animal%20Hospital!5e0!3m2!1suk!2sua!4v1675526510957!5m2!1suk!2sua"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-56 border-2 border-[#b5cbb7]"
      ></iframe>
    </div>
  );
};

export default Location;
