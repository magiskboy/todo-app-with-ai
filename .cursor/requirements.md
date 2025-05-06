# Requirement

1. User
- User can SSO with Google via Authenticate of Firebase service
- User's data must stored on firestore of firebase


2. Task and task's management
- Task is owned by user and it's an user's data
- This is the definition of task
    Task {
        id: uuid
        name: string
        description: string
        created_at: string
        due_date: string
        status: enum[New | In progress | Done | Cancelled]
    }
- User can do some actions on task like:
    - create a new task
    - update name, description, due_date or status of a task
    - delete a task

3. Mobile first
- Let's implement mobile and desktop version with responsiveness 