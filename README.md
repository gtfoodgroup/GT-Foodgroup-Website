# GT Food Group

The public website for GT Food Group, a New York food company that prepares culturally familiar meals for healthcare and community partners. Rooted in culture, crafted with care, and delivered fresh, the site explains medically tailored meals, home-delivered meals, and food prescription boxes.

It also shows who GT serves and how responsibilities stay clear. The Social Care Network owns screening and eligibility. GT performs the authorized food service. Clinical oversight is led by Maya Feller, MS, RD, CDN, Founding Clinical Advisor and Supervising RDN of Record. Visitors can read about programs, menus, standards, and the company, then start a conversation from the contact page.

Built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npx next dev -p 3000
```

Open [http://localhost:3000](http://localhost:3000).

On Windows, `npm run dev` fails because that script pipes through `tee`. Use the command above.

## Pages

- `/` Home
- `/programs` Programs
- `/menus` Menus & Culture
- `/clinical-authority` Clinical Authority
- `/who-we-serve` Who We Serve
- `/our-standards` Our Standards
- `/about` About
- `/contact` Contact
- `/privacy`, `/terms`, `/accessibility`

Photos live in `public/images/gt`.

## Deploy

The site is hosted on Vercel. Push to `main` to publish a new version.
