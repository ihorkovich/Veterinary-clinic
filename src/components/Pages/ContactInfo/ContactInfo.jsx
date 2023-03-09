import NavBar from "../../NavBar/NavBar";

const ContactInfo = () => {
  return (
    <div classNameName="min-h-screen bg-bgGreen">
      <NavBar />
      <section className="relative overflow-hidden bg-bgGreen pt-12 pb-24">
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="font-heading tracking-px-n mb-5 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
            Get connected
          </h2>
          <p className="mx-auto mb-20 text-center text-lg font-medium leading-normal text-gray-500 md:max-w-lg">
            Stay connected with us and give your pets the quality care they
            deserve
          </p>
          <div className="-m-3 flex flex-wrap">
            <div className="w-full p-3 md:w-1/3">
              <div className="border-blueGray-100 shadow-11xl h-full rounded-xl border bg-bgGreen bg-opacity-90 p-11 text-center shadow-md">
                <div className="relative mx-auto mb-6 h-16 w-16 rounded-full bg-secGreen">
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      id="IconChangeColor"
                      height="33"
                      width="33"
                    >
                      <path
                        d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v1h20V7C22,5.3,20.7,4,19,4z M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-9H2V19z M17,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,12,17,12z M17,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,16,17,16z M12,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,12,12,12z M12,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,16,12,16z M7,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,12,7,12z M7,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,16,7,16z"
                        id="mainIconPathAttribute"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold leading-snug">
                  Work Schedule
                </h3>
                <p className="font-medium leading-relaxed">We are open 24/7</p>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/3">
              <div className="border-blueGray-100 shadow-11xl h-full rounded-xl border bg-bgGreen bg-opacity-90 p-11 text-center shadow-md">
                <div className="border-blueGray-200 relative mx-auto mb-6 h-16 w-16 rounded-full border bg-secGreen">
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold leading-snug">
                  Call Us
                </h3>
                <p className="font-medium leading-relaxed">
                  +38 (099)-988-87-77
                </p>
                <p className="font-medium leading-relaxed">
                  +38 (011)-122-23-33
                </p>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/3">
              <div className="border-blueGray-100 shadow-11xl h-full rounded-xl border bg-bgGreen bg-opacity-90 p-11 text-center shadow-md">
                <div className="border-blueGray-200 relative mx-auto mb-6 h-16 w-16 rounded-full border bg-secGreen">
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <svg
                      width="32"
                      height="33"
                      viewbox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="font-heading mb-3 text-xl font-bold leading-snug">
                  Address
                </h3>
                <p className="mx-auto max-w-xs font-medium leading-relaxed">
                  Lviv, Ukraine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
