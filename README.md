# John Doe Music Website

A professional website for John Doe, a musician and guitar teacher in Sheridan, Wyoming.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Information about music lessons and services offered
- Showcase of recent performances through YouTube videos
- Listing of upcoming gigs and events
- Contact form with EmailJS integration
- Smooth scrolling navigation

## Contact Form Setup with EmailJS

The contact form uses EmailJS to send emails without requiring a backend server. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (like Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `user_name` (sender's name)
   - `user_email` (sender's email)
   - `user_phone` (sender's phone)
   - `user_interest` (lesson type they're interested in)
   - `message` (their message)
   - `recipient_email` (your email address)

4. Update the `.env.local` file with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_RECIPIENT_EMAIL=your_recipient_email
   ```

## YouTube Videos

To add your own YouTube videos to the Performances section:

1. Open `client/src/lib/constants.ts`
2. Find the `performances` array
3. Replace the `videoId` values with your actual YouTube video IDs
   (The ID is the part after `v=` in a YouTube URL, e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ` has ID `dQw4w9WgXcQ`)

## Upcoming Gigs

To update your upcoming gigs and events:

1. Open `client/src/lib/constants.ts`
2. Find the `upcomingGigs` array
3. Update or add new gig information as needed

## Development

This project uses:
- React with TypeScript
- Tailwind CSS for styling
- EmailJS for the contact form

To run the project:
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`