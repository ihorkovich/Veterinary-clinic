# Veterinary clinic project made with React and Firebase

Responsive, modern and user-friendly vet clinic web application\
You can visit the site by following this link - [clerks](https://clerks.vercel.app/)

## Hero Screenshot
![Hero Screenshot](https://user-images.githubusercontent.com/103593831/224328995-64ade1cb-23e0-4498-b4ca-ae29eda52598.png)

## Roles
- Customer
- Doctor
- Admin

## Functionality
- **Authentication** - Users can sign up, log in, and log out using their email and password. Authentication is handled by Firebase.
> Customer
- **Appointments** - Registered user has an ability to make an appointment to any doctor for any time regardless of whether it is day or night because clinic work 24/7.
- **Reviews** - Users can leave a review about every member of doctors
- **Send an email** - If the user has a question, the answer to which cannot be found in the FAQ section, then on the main page there is a form that he can fill out, send and receive an answer
> Doctor
- **Appointments** - Each doctor can view all records made by users to him. There is also a button on each appointment that you can use to see detailed information about it.
- **Reviews** - as well as with appointments doctors have an access to approved reviews about them.
> Admin
- **Users** - Can see all registered users as well as all banned users. Can ban users and delete them.
- **Reviews** - Have a list of unapproved reviews users left and can approve it or delete.


## Tech Stack
**Client:** ![react](https://user-images.githubusercontent.com/103593831/224331430-91552bfd-cfba-4a2c-843b-79564f8f7299.svg){: width="32px" height="32px"}
 ![redux](https://user-images.githubusercontent.com/103593831/224331476-5148f370-40c6-42ed-8c4b-92a5e968dac8.svg){: width="32px" height="32px"}
 ![tailwindcss-icon](https://user-images.githubusercontent.com/103593831/224331573-e54d76e7-e726-406b-9b9c-52a7fea4fe74.svg){: width="32px" height="32px"}
 ![sass](https://user-images.githubusercontent.com/103593831/224331532-9309667b-dde6-460b-a269-71a59307d7f2.svg){: width="32px" height="32px"}


**Server:** ![firebase](https://user-images.githubusercontent.com/103593831/224331691-951d8860-4103-40f7-9beb-f890c66fd19f.svg){: width="32px" height="32px"}


## Additional libraries user
- EmailJS
- React hook form
- antd
- react-intersection-observer
- redux-persist
- swiper
