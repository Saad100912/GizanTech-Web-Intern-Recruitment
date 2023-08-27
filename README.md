# Notes

## **General Notes -**

1. Technologies use: MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS), Cors, Tailwind, DaisyUI, React Router, Firebase, xlsx, jsPDF, react-csv, React Icons
2. Kept the UI for tasks 1 to 3 simple to focus more on logic and functions.
3. Used the help of Google searching and ChatGPT to find solutions for the problems faced. But mostly used ChatGPT.

### **Task 1 Notes**

1. I created 9 different routes for 9 GET requests.
2. Here I used file system to read the exercise.json file as database for the webpage.
3. Some of the routes might take a bit oof time to load, so I suppose a little patience is necessary.

### **Task 2 Notes**

1. Used MongoDB as database system for this project.

### **Task 3 Notes**

1. Used Firebase for user authentication.
2. Enabled user sign-up using email and password.
3. Enabled user login using email and password.
4. Made the pages private using PrivateRoute to only be accessible if the user is logged in.
5. Enabled loading state and user observer so that when you're on a private page and reload the page it doesn't send you back to the login page again.
6. When the user tries to go to a private route without login they'll be redirected to the login page for user verification. Then after login, they'll be again redirected back to the page they were trying the access.
7. Made 2 demo pages (home & demoPage) to test the private routes.
8. The user can make filter requests using the 3 select inputs separately. So, if it's necessary they can just select 1 or 2 inputs while leaving the rest unselected and it'll work.
9. The user can then download the data in 3 formats - Excel, PDF, and CSV.
10. Used packages - xlsx for Excel, jsPDF for PDF, and react-csv for CSV file format download.

### **Task 4 Notes**

1. All the images have been uploaded in ImgBB and used the links to show the images. So, no images are loading locally. Some of the images have been edited as necessary.
2. Used Tailwind and DaisyUI to create the pages.
3. The webpages were designed on a 1366x768 resolution monitor. But I used the console to properly design the pages for displays with higher resolution.
4. I didn't use a separate navbar link to navigate to page 2 to keep the design as identical as possible to the original design.
5. Page 1 is set as the default route when loading the project. To go to page 2 you'll have to manually write `"/page2"` in the address bar.
