# Surprise Date Website 💖

An interactive, romantic date proposal experience inspired by HeartCraft. It features a creator screen to personalize the recipient's name and prompt, an interactive mobile-frame preview where the "No" button playfully dodges the cursor, the "Yes" button grows bigger with each attempt, and a celebratory confetti finale.

## 🚀 Live Demo

Deployable to Vercel in 1-click!

## ✨ Features

- **Personalization Screen**: Set the recipient's name (e.g. Megha) and choose preset or custom questions.
- **Runaway "No" Button**: Proximity detection makes the "No" button dart away whenever the cursor approaches or tries to touch it.
- **Growing "Yes" Button**: With every dodge, the "Yes" button expands in size, commanding full attention.
- **Celebration Finale**: Fullscreen confetti, floating hearts, and sweet sound effects upon clicking "Yes".
- **1-Click Shareable Links**: Generate custom links with query parameters (`?name=...&q=...`) to send directly to your date.
- **Offline & Standalone**: Zero external dependencies, built using semantic HTML5, modern CSS, and vanilla JS with Web Audio API.

## 🛠️ Local Development

```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

## ☁️ Deploy to Vercel

```bash
npx vercel
```
Or connect this repository directly in the [Vercel Dashboard](https://vercel.com/new).
