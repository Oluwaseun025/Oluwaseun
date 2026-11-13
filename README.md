# Student Portfolio and Academic Management Website

A responsive five-page student portfolio built with HTML, external CSS and vanilla JavaScript.

## Pages
- `index.html` — homepage and introduction
- `about.html` — biography, education, career aspirations, skills, interests and academic summary table
- `projects.html` — three project demonstrations and an HTML video element
- `planner.html` — add, complete, delete and clear academic tasks
- `contact.html` — contact form with JavaScript validation and displayed contact details

## Run locally
Open `index.html` in a browser. For best results, use Visual Studio Code with the Live Server extension.

## Personal details
The portfolio is customized for **Oluwaseun Ramotallahi Olowu**, a 100-level Cybersecurity student at MIVA Open University. The homepage uses the supplied portrait in `images/oluwaseun-ramotallahi-olowu.jpeg`.

## JavaScript features
- `js/main.js`: responsive navigation and automatic footer year.
- `js/planner.js`: array-based task management, DOM updates and browser `localStorage` persistence.
- `js/contact.js`: required-field, email-format and digits-only phone validation.

## Important notes
- The contact form is front-end only. It validates entries but does not deliver messages to an email inbox.
- The planner stores tasks in the browser's local storage on the device/browser where they were entered.
- The sample video is hosted externally and requires an internet connection.
- The three project cards demonstrate the portfolio, academic planner and validated contact form included in this website. Replace or supplement them with other completed work when available.
