import NavBar from "../../Everywhere/NavBar/NavBar";
import Input from "../../Input/Input";
const RequestAnAppointment = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex flex-col gap-5">
        <p className="text-center text-3xl">Request An Appointment</p>
        <form action="">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
          <Input type="email" label="Email" />
          <Input type="text" label="Pet Name" />
          <Input type="text" label="Pet Species" />
          <Input type="date" label="Choose a date" />
          <Input type="text" label="Additional Comment" />
          <button className="p-3 border">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RequestAnAppointment;
