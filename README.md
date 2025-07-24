# Task Overview
In this scenario, you are enhancing a project management dashboard to provide in-place editing of project names within a list. Currently, clicking 'Edit' does nothing. Your task is to refactor the existing logic so that users can rename projects inline, with keyboard accessibility, instant validation, and seamless UI feedback.

## Guidance
- Focus on enabling in-context editing for project names when the 'Edit' button is clicked.
- Make sure only one project can be edited at a time, and edits are validated instantly.
- Ensure keyboard accessibility and responsive focus handling.
- The rest of the dashboard should remain functional and unaffected by this feature.
- Provide immediate feedback on invalid or duplicate names directly in the UI.

## Objectives
- Enable inline editing of project names via a controlled input.
- Ensure keyboard and focus interactions work as required (Enter to save, Esc to cancel, auto-focus on input).
- Prevent duplicate project names (case-insensitive) with real-time validation.
- Handle user feedback and error rendering effectively.
- Reflect name changes immediately in the project list UI, keeping all other functionality unchanged.

## How to Verify
After implementing, ensure that clicking 'Edit' turns the project name into a focused input containing the current name. Test that saving with Enter or blur updates the name unless it is a duplicate (case-insensitive), and that validation errors appear as needed. Confirm that pressing Esc cancels the edit, reverting any changes. Only one project should be editable at a time, and updates should instantly be visible without impacting other dashboard features.