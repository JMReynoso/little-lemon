## Final Capstone Project (Little Lemon Reservation App)

The culmination of the course is the Capstone Project: building a fully functional restaurant reservation web app (nicknamed “Little Lemon” in the course).  This is a real-world, portfolio-style project where students apply everything they’ve learned.

In this project, students create a “Little Lemon” restaurant website with at least three main features (as exemplified by student portfolios): a landing/homepage, a reservation (book-a-table) page with a form, and a navigation menu.  The app must be responsive and visually polished according to a design spec (the course provides a Figma design reference).  Key objectives include: integrating React components for each page, managing booking data in state, connecting the booking form to a backend API (sending/receiving JSON), validating user input, and updating the UI dynamically. On submission, the app should display booked tables and allow new reservations.

Deliverables for the capstone are the completed React application code and a deployed demo (or similar demonstration).  Students typically host their code on GitHub and deploy the app (e.g. via Netlify or GitHub Pages).  The course guide mentions a solution walkthrough video (see Module 4 readings) titled “Booking a table on the Little Lemon website,” indicating the target functionality.  By finishing, learners will have a job-ready project to showcase – a working React web app combining UI design with real functionality ￼.

## Technologies, Languages and Tools

Throughout the course, students apply standard front-end technologies and tools:
	•	Languages: HTML5, CSS3, and modern JavaScript (ES6+). The course presumes familiarity with these core languages, as the capstone builds a complete HTML/CSS/JS front end ￼.
	•	Front-End Framework: React.js – all application logic is built in React. Students use React components for different views (e.g. pages or UI widgets) and manage state via React’s state/hooks (and often Context API for cross-component state). The certificate emphasizes React skills ￼.
	•	Libraries/Routing: Students typically use React Router (or similar) to create multiple views and handle client-side navigation (“multiple views” is an explicit learning outcome ￼). Common React helper libraries may be used (e.g. for unique IDs, icons, etc.).
	•	Tools: Version control with Git and GitHub is integral (the syllabus lists Git as a key skill ￼, and Module 1 tasks include setting up a Git repo ￼).  For design and prototyping, Figma is used in planning the app’s UI (e.g. wireframing and applying design fundamentals ￼). Development is done in a code editor (e.g. VS Code) with a Node.js build environment (npm/yarn to install React).
	•	Testing & Validation: The capstone includes unit testing for React code. Students learn to use a testing framework (implicitly Jest and React Testing Library) – the modules include exercises on writing component tests and form-validation tests ￼. Form input validation logic is added in JavaScript as well.
	•	Accessibility & UX: The course covers web accessibility (WCAG) guidelines – ensuring semantic HTML, ARIA attributes, and keyboard navigation – and usability testing principles ￼ ￼.
	•	Other Tools: Students may also use browser APIs (fetch/localStorage) when implementing the booking feature, and tools like React Icons. (Instructor materials suggest purely in-house styling; no external CSS framework is used ￼.)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
