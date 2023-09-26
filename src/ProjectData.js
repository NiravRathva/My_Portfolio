import localServices from "./Images/localServices.png";
import insta from "./Images/insta.png"
import flipkart from "./Images/flipkart.png"
export const projectsData = [
  {
    id: "1",
    img: localServices,
    name: "Local Services",
    description:
      "Developed 'Local Services,' a MERN stack application allowing users to register, log in, and choose from various in-home services such as plumbing, cleaning, and electrical work, each with customizable packages. The app provides a user-friendly experience with Bootstrap for responsive design, while Redux manages state efficiently. Axios facilitates seamless data exchange, and Redux Persist ensures persistent data storage. For secure payments, the app integrates Stripe, enabling users to make payments conveniently. ",
    link: "https://local-services-frontend-niravrathva.vercel.app/",
    frontendCode: "https://github.com/NiravRathva/local-services-frontend.git",
    backendCode: "https://github.com/NiravRathva/localServices.git",
  },
  {
    id: "2",
    img: insta,
    name: "Instagram Clone",
    description:
      "Developed an Instagram clone using the MERN stack, offering essential features like user registration, login, post creation, and the ability to follow other users. The application showcases a sleek and responsive user interface, meticulously styled with Tailwind CSS for a modern aesthetic. It incorporates robust state management through Redux, ensuring a seamless user experience. Additionally, Axios handles HTTP requests, and Redux Persist enables data persistence, enhancing data retrieval and user engagement.",
      frontendCode: "https://github.com/NiravRathva/Instagram-clone-frontend.git",
      backendCode:"https://github.com/NiravRathva/Instagram-Clone-Backend.git"
  },
  {
    id: "3",
    img: flipkart,
    name: "Flipkart Clone",
    description:
      " Building a Flipkart clone using the MERN stack.Backend API is nearly complete, pending some adjustments for seamless integration with the frontend. Currently, actively engaged in frontend development to deliver a comprehensive e-commerce solution.",
    frontendCode: "https://github.com/NiravRathva/Flipkart-clone.git",
    backendCode:"https://github.com/NiravRathva/flipkart-clone-backend.git"
  },
];
