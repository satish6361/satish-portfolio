import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'OptiNet',
        description: "Multi-label classification of eye disease using the eye fundus image. Implemented an ensemble model to enhance the predictive performance of the system. This ensemble consists of ResNet50, VGG-19, and EfficientNetB0, with the final predictions determined by averaging the weights of each model. The trained model was saved and integrated into a user-friendly web application using the MERN stack. Additionally, a FastAPI was implemented to facilitate image input for predictions, enhancing the accessibility and performance of the application.",
        tools: ['React', 'Node', 'Express', 'MongoDB', 'FastAPI', 'TensorFlow', 'Keras'],
        // role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'MetaBlog',
        description: 'I have designed and developed a full-stack web app for sharing and posting blogs. I created the UI using ReactJS, JavaScript, TailwindCSS, TinyMCE-Realtime code editor, React Hook-Form, React-icons and Redux. The app shows multiple posts from different users. I developed the Backend Part Appwrite.',
        tools: ['ReactJS', 'Tailwind CSS',"TinyMCE"," Appwrite"],
        // role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'ZoomStock',
        description: 'Developed a full-stack web app for stocks market. Provides real-time stock prices and comprehensive data for selected companies. Utilizes AlphaVantage API for efficient company search and autocomplete feature. The realtime stock details are webscrapped from screener.io. For frontend used ReactJS, JavaScript, Bootstrap, AlphaVantage. And for backend, used Express, Node, MongoDB, news APIs. The user also gets mails and this is implemented using nodemailer',
        tools: ['React', 'Bootstrap', 'Express', 'Node', 'Express', 'JavaScript', 'MongoDB', 'AlphaVantage', 'nodemailer'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Social Media App',
        description: "A web-based Social Media Application.User interactions through friends, share posts, like posts. Secure user logins through JWT tokens and password encryption through bcrypt.",
        tools: ['React','Redux-ToolKit', 'Material UI', 'Tailwind CSS','Express','MongoDB', 'Node', 'JWT', "Multer"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },