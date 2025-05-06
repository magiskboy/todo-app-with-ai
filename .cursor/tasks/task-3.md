# Task 3: Implement Task Management

## Implementation Plan

1. **Set Up Firestore in FirebaseService**
   - Extend `FirebaseService` to initialize Firestore and provide methods for task CRUD operations (create, read, update, delete).
   - Ensure all task operations are scoped to the authenticated user.

2. **Define Task Model**
   - Create a TypeScript interface for the Task object according to the requirements (id, name, description, created_at, due_date, status).
   - Define the status enum: New | In progress | Done | Cancelled.

3. **Create Task Context**
   - In `src/contexts`, create a `TaskContext` to manage the list of tasks and provide CRUD methods.
   - Fetch tasks for the authenticated user from Firestore and keep them in sync (real-time updates if possible).

4. **Create Task Hooks**
   - In `src/hooks`, create hooks (e.g., `useTasks`) to encapsulate task logic and expose it to components.

5. **Build Task UI Components**
   - In `src/components/task`, create components for:
     - Task list (show all tasks for the user)
     - Task item (display task details)
     - Task form (create/update task)
     - Task actions (edit, delete, status update)
   - Use CSS modules for styling and ensure mobile-first responsiveness.

6. **Integrate Task Management in App**
   - Show the task list and actions in the main app view when the user is authenticated.
   - Allow users to create, update, and delete their own tasks.

7. **Testing**
   - Test all task management features (CRUD) for both mobile and desktop views.
   - Ensure only the authenticated user's tasks are accessible and modifiable.