# Project Overview
This project is a React-based web application that showcases various sections such as the hero section, skills, projects, and blog posts. The application uses modern web technologies to ensure a responsive design, smooth animations, and a user-friendly interface.

## Technologies Used
- **React:** Frontend framework used for building the user interface.
- **React Router:** For handling navigation between different pages.
- **Styled-Components:** For writing CSS directly in JavaScript and managing theming.
- **GSAP:** For creating smooth animations and transitions.
- **React Markdown:** For rendering markdown content in the blog section.

## Installation

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project```

### Installation & Starting the server
```
npm install # or yarn install | npm start # or yarn start

```
### Styling
- **Styled-Components:** All components are styled using `styled-components`.
- **Themes:** The project supports light and dark themes, which can be modified in `utils/Themes.js`.

### Data Management
- Avatar: To change the avatar, upload a picture in the `/images` folder.
- Website Logo: To change the website logo, upload it in the `/public` folder.
- CV Download: Upload a `CV.pdf` file in the `public/CV` folder to enable the CV download functionality.
- Markdown Posts: To create a blog post, add a `markdown` file inside the `public/content` folder.
- Post Metadata: Add additional information such as title, date, tags and background to the blog post by defining it in `public/posts.json`.

### Animations
- **GSAP:** `GSAP` is used for animations throughout the site. Animations include:
  - Fade-ins and scale effects on skill cards.
  - Transitions between project carousel items.
  - Interactive animations in the hero section.

### Contributing
Contributions are welcome! Please follow these steps:
- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Make your changes.
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature-branch`).
- Open a pull request.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
