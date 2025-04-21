# Hotel-Simulator

Assignment Instructions
Create a Hotel Simulator Web Application:

Design an HTML layout with Bootstrap styling to include a "Check-In Form" and a "Guest List" section. 
Use additional CSS for an appealing user interface. Make it look pretty!
Implement the Check-In Form:

The form should include fields for:
Guest Name (text input)
Room Number (number input)
Stay Duration (number input)
Feel free to add more if you'd like, but it's not necessary.
Add validation to ensure all fields are filled before submission.
Add Room Availability Logic:

Use JavaScript to ensure no two guests can be checked into the same room.
If a room is occupied, display an error message prompting the user to select a different room. This can be an alert, a badge, a simple message.
Display Guest List:

Dynamically render a list of guests using JavaScript. Each guest should be displayed in a card format showing:
Guest Name
Room Number
Stay Duration
Prepopulate the Guest List:

Use a JavaScript array to store initial guest data and render it upon page load.
Handle Form Submission:

On form submission:
Validate inputs.
Check for room availability.
Add the new guest to the guest list and dynamically update the display.
Clear the form inputs.
Code Requirements:

Use a constructor function to create Guest objects.
Write clean, readable, and commented code.
Avoid using external JavaScript frameworks or libraries for functionality. Use only stuff we have learned in class.
