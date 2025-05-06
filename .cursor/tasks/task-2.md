# Task 2: implement user login

## Implementation Plan

1. **Set up Firebase Project**
   - Create a Firebase project in the Firebase Console.
   - Enable Google Authentication in the Firebase Authentication section.
   - Add a new web app to the Firebase project and obtain the Firebase config object.

2. **Install Firebase SDK**
   - Add Firebase to the project dependencies using npm or yarn.

3. **Create Firebase Service**
   - In `src/services`, create a `FirebaseService` class to initialize Firebase and handle authentication logic (following OOP principles).

4. **Implement Auth Context**
   - In `src/contexts`, create an `AuthContext` to manage user authentication state globally.
   - Provide methods for login (Google SSO) and logout.
   - Store user information (full name and profile image) in context after login.

5. **Create Auth Hook**
   - In `src/hooks`, create a custom hook (e.g., `useAuth`) to encapsulate authentication logic and expose it to components.

6. **Build Login UI Component**
   - In `src/components/login`, create a `login.tsx` component for the login button/UI.
   - Use CSS modules for styling.
   - Ensure the UI is responsive for mobile and desktop.

7. **Integrate Login Flow**
   - Use the `useAuth` hook and `AuthContext` in the main app to display the login UI when the user is not authenticated.
   - On successful login, store user data in context and proceed to the main app.

8. **Display User Info in Topbar**
   - Update the `Layout` component to show the user's full name and profile image in the topbar/header when authenticated.
   - Ensure the topbar remains responsive and visually appealing on both mobile and desktop.

9. **Persist User Session**
   - Ensure the user's authentication state persists across page reloads using Firebase's built-in session management.

10. **Testing**
   - Test the login flow to ensure users can sign in with Google, their session is managed correctly, and their info appears in the topbar on both mobile and desktop.

