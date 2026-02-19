# ✝ Lenten Journey 2026

A beautiful, devotional web application for Lent 2026 (Ash Wednesday, February 18 – Holy Saturday, April 4).

## Features

- **Daily Mass Readings** — First Reading, Responsorial Psalm, Second Reading (Sundays), and Holy Gospel
- **Saint of the Day** — Biography and feast day information
- **Daily Meditation** — 40 unique quotes from saints, Scripture, and theologians
- **Prayer of the Day** — Rotating traditional Catholic prayers
- **Fasting & Abstinence Reminders** — Auto-detected on Ash Wednesday and Fridays
- **Stations of the Cross** — All 14 stations with reflection text and prayer, in a click-to-expand modal
- **Lenten Progress Tracker** — Visual progress bar from Ash Wednesday to Easter
- **Day Navigation** — Browse any day of Lent forward or back
- **Auto-detects Today's Date** — Opens to the current day of Lent automatically
- **Email Subscription** — 6am daily digest signup form (requires backend connection)

---

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it `lenten-journey` (or whatever you like)
3. Set it to **Public**

### Step 2: Push the Files
```bash
git init
git add index.html README.md
git commit -m "Initial commit: Lenten Journey 2026"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

### Step 4: Custom Domain (if you have one)
1. In Settings → Pages, enter your custom domain (e.g., `lentenjourney.com`)
2. Add a `CNAME` file to the repo root with just your domain name:
   ```
   lentenjourney.com
   ```
3. At your domain registrar, add a CNAME DNS record pointing to `YOUR_USERNAME.github.io`

---

## Email Subscription — Backend Options

The frontend form is ready. To actually send emails, connect one of these:

### Option A: Formspree (Easiest — No Code)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form, copy your form endpoint (e.g., `https://formspree.io/f/XXXXXXXX`)
3. In `index.html`, find the `handleSubscribe` function and change it to:
```javascript
async function handleSubscribe(e) {
  e.preventDefault();
  const email = document.getElementById('email-input').value;
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
  });
  document.querySelector('.subscribe-form').style.opacity = '0.4';
  document.querySelector('.subscribe-form').style.pointerEvents = 'none';
  document.getElementById('sub-success').style.display = 'block';
}
```

### Option B: Mailchimp
1. Create a Mailchimp audience
2. Use their embedded form API or their hosted signup URL
3. Direct the form action to Mailchimp's form processor

### Option C: ConvertKit / Beehiiv
Both have simple embed forms or API endpoints that work well for daily devotional newsletters.

---

## Customization

### Adding More Readings
In the `READINGS` object (keyed by `"M-D"` format), add entries for any date:
```javascript
"3-1": {
  title: "Monday of the Second Week of Lent",
  first: { type: "First Reading", ref: "Daniel 9:4b-10", text: "..." },
  psalm: { ref: "Psalm 79", response: "...", text: "..." },
  gospel: { ref: "Luke 6:36-38", text: "..." }
}
```

### Adding Saints
Similarly add to the `SAINTS` object:
```javascript
"3-1": { name: "Saint David of Wales", dates: "c.500–589", icon: "🌿",
  bio: "...", feast: "Feast: March 1" }
```

---

## Tech Stack
- Vanilla HTML, CSS, JavaScript — no dependencies, no build step
- Google Fonts: Cormorant Garamond, Cinzel, Crimson Text
- Works offline after first load (fonts cached)
- Mobile responsive

---

*"Return to me with your whole heart." — Joel 2:12*
