# Task 5: Update Task Form to Use a Dialog (Modal)

## Implementation Plan

1. **Update TaskForm Usage**
   - Refactor the main app view to remove the inline TaskForm.
   - Add a button (e.g., "Add Task") that will open the TaskForm in a dialog/modal.

2. **Use Ant Design Modal Component**
   - Wrap the TaskForm component inside Ant Design's `Modal` component.
   - Control the visibility of the modal using React state.
   - Ensure the modal can be opened and closed by the user.

3. **Integrate with Task List**
   - Place the "Add Task" button above the TaskList.
   - When a task is successfully added, close the modal and refresh the task list if needed.

4. **Form Reset and Feedback**
   - Reset the TaskForm fields when the modal is closed or after a successful submission.
   - Optionally, show a success message using Ant Design's `message` component.

5. **Accessibility and Responsiveness**
   - Ensure the modal is accessible (focus management, keyboard navigation).
   - Test the modal on both mobile and desktop for proper responsiveness.

6. **Testing**
   - Test the full flow: opening the dialog, adding a task, closing the dialog, and seeing the new task in the list.
