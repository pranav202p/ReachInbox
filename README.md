# ReachInbox Frontend

## Overview
ReachInbox is a frontend project designed to manage and display inbound emails in a user-friendly interface. The project features user authentication, email management, and a responsive design with dark mode support.

## Technologies Used
- React.js
- Tailwind CSS
- Vite.js


## Deployment Link
You can access the live version of ReachInbox [here](https://reach-inbox-ecru.vercel.app/).

## Screenshots
### Login Page
![Login Page](link-to-your-screenshot1.png)

### Home Page
![Home Page](link-to-your-screenshot2.png)





---

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pranav202p/ReachInbox
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ReachInbox-frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   ```bash
   http://localhost:5173
   ```

--- 



## Features
- User Authentication via Google Sign-In.
- Dynamic token storage and management.
- Responsive UI with Dark Mode support.
- Interactive email inbox and management.
- Secure API calls for email handling.
<!-- Add more features as needed -->



## API Calls Used

### 1. **List All Mails**
   - **Endpoint:** `GET https://hiring.reachinbox.xyz/api/v1/onebox/list`
   - **Description:** Retrieves a list of all email threads as displayed on the main page.
   - **Authorization:** Requires Bearer Token in the `Authorization` header.

### 2. **Get Onebox Thread**
   - **Endpoint:** `GET https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id`
   - **Description:** Fetches all messages within the specified email thread.
   - **Authorization:** Requires Bearer Token in the `Authorization` header.

### 3. **Delete Email Thread**
   - **Endpoint:** `DELETE https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id`
   - **Description:** Deletes the specified email thread from Onebox.
   - **Authorization:** Requires Bearer Token in the `Authorization` header.

### 4. **Reply to Email**
   - **Endpoint:** `POST https://hiring.reachinbox.xyz/api/v1/onebox/reply/:thread_id`
   - **Description:** Sends a reply to the specified email thread.
   - **Authorization:** Requires Bearer Token in the `Authorization` header.

### 5. **Google Login**
   - **Endpoint:** `GET https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com`
   - **Description:** Redirects the user to Google login and returns to the specified frontend URL upon successful authentication.

--- 



## Credits
This project was developed by Pranav. Special thanks to all contributors and libraries used in the development of this project.

