Task Glitch – Bug Fix Assignment
Project Overview

Task Glitch is a Task Management Web Application designed for sales teams to manage and prioritize tasks based on ROI (Return on Investment).

This repository contains fixes for five critical bugs affecting:

Data loading

Undo behavior

Sorting stability

Dialog interactions

ROI calculation and validation

The goal of this assignment is to stabilize the application, improve user experience, and ensure consistent behavior across renders.

Features Supported

Add, edit, and delete tasks

View task details and notes

Search and filter by status and priority

ROI calculation (Revenue ÷ Time Taken)

Sort tasks by ROI and priority

Summary insights:

Total revenue

Efficiency

Average ROI

Performance grade

CSV import and export

Undo delete using snackbar

LocalStorage-based persistence

Bugs Fixed
Bug 1: Double Fetch on Page Load

Issue:
Task loading logic executed twice on initial render.

Fix:
Implemented a useRef guard inside useEffect to ensure tasks load only once.

Result:

No duplicate fetch calls

No duplicated tasks

Clean console logs

Bug 2: Undo Snackbar Restores Old Tasks

Issue:
Closing the snackbar did not clear the last deleted task, causing incorrect restores.

Fix:
Reset lastDeletedTask when the snackbar closes or auto-hides.

Result:

Undo works only during active snackbar window

No phantom or old tasks restored

Bug 3: Unstable Sorting When ROI and Priority Match

Issue:
Tasks with the same ROI and priority reordered randomly on re-render.

Fix:
Added a deterministic tie-breaker using alphabetical task title.

Sorting Order:

ROI (descending)

Priority (High > Medium > Low)

Title (alphabetical)

Result:

Stable task order

No flickering or reshuffling

Bug 4: Multiple Dialogs Opening Together

Issue:
Clicking Edit or Delete also triggered the View dialog due to event bubbling.

Fix:
Applied event.stopPropagation() to Edit and Delete buttons.

Result:

Edit opens only Edit dialog

Delete opens only Delete dialog

Row click opens only View dialog

Bug 5: ROI Calculation Errors

Issue:
ROI showed NaN, Infinity, or incorrect values for invalid inputs.

Fix:
Created a safe ROI calculation utility with validation and formatting.

Rules Applied:

Time taken = 0 → ROI = 0

Invalid or empty inputs → ROI = 0

ROI formatted to 2 decimal places

Result:

No calculation errors

UI remains stable

Folder Structure
src/
├── components/
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── TaskViewDialog.jsx
│   ├── TaskEditDialog.jsx
│   ├── TaskDeleteDialog.jsx
│   └── UndoSnackbar.jsx
│
├── hooks/
│   └── useTasks.js
│
├── utils/
│   └── roi.js
│
├── App.jsx
└── index.js

Installation & Setup
https://github.com/rakhi90-008/Task-Glitch-Bug-Fix-Implementation
cd task-glitch
npm install
npm start

Deployment

The application will be deployed publicly.


Vercel

 URL:

https://vercel.com/rakeshmarikanti90-gmailcoms-projects/taskglitchbugfix

Evaluation Criteria Covered

All mandatory bugs fixed

Stable UI and logic

Clean and readable code

Proper state management

Ready for production deployment
