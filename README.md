# Movie-Watchlist
Bookmark all your favorite movies in one place

## Demo link
Access my site at [https://watchlist-bookmark.netlify.app/](https://watchlist-bookmark.netlify.app/)

## Overview
Movie Watchlist is a website that allows users to keep track and add movies, TV shows, and more to their own personalized watchlist and remove them when as you finish. It uses the Open Movie Database (OMDb) API to fetch movie data by title, name, and id.

### Features:
The challenge consisted of:
- Making API calls to the OMBd API to get movie data by the search value.
- Rendering to the DOM the searched movies.
- Give the user the ability to store movies to the watchlist using localStorage.
- Fetching the stored movies from localStorage and render them to the DOM.
- Give the user the ability to remove movies from the watchlist.

### Built with:
- HTML
- CSS
- JavaScript
- Figma
- REST API

## Demo Video


https://user-images.githubusercontent.com/37788922/235553659-57fd07e0-c59c-4373-8174-d20d6dec2fe7.mp4


## Setup
- download or clone the repository
- visit the site [Demo link](#demo-link)
- I have pushed the API Key as well though it has a 1000 requests per day limit since it's a free key. You can get your own free key at : https://www.omdbapi.com/ and change it with mine :)


## Approach

The motivation behind developing this project was to create a centralized location for tracking all the TV shows that I am currently watching. I initially tried using a website's built-in bookmarking feature, but it proved to be unreliable. This led me to develop my own application.

During the development process, my primary focus was on enhancing my skills in working with API methods such as GET and POST. Additionally, I utilized class-based components to improve the overall organization of the project.

One of the major challenges I encountered while developing this project was implementing the "remove from watchlist" functionality. I needed a way to associate each button with its corresponding card, and I solved this problem by using data attributes.

Another challenge was removing a card from both the DOM and local storage simultaneously. I wanted to avoid inefficient solutions like rerendering the entire page or fetching new data. Ultimately, I used the built-in remove() method available on all DOM elements to remove the card from its parent element and the document tree.

In the search page, I faced an issue where multiple event listeners were being attached to the document whenever I searched for multiple titles. To fix this, I removed any existing event listeners before adding new ones to ensure that there was only one event listener registered at a time per card.

I also faced difficulties getting my CSS hover effects to work properly. I utilized grid to stack the image and card-content on top of each other, then used align-self: end to push the content to the bottom. I also used @media (hover) to have non-sticky hover effects, and used translate to move the card-content down before bringing it back to its original position on hover. Additionally, I added an opacity delay animation to enhance the user experience.

## Improvements
- The Add/remove watchlist ICON buttons should be interactable not just the text.
- On mobile devices hover functions interfere with user interaction.
- Use a real database instead of localStorage. That way we can utlize the full capabilities of REST methods and Client & Server separation.

## Credits
- Design inspired by [Evie Bauland](https://dribbble.com/EvieBauland)

## Connect

Thank you for reading about this project. If you'd like to connect with me for mentoring, collaboration, or employment opportunities, you can do so via the following links:

- Email [Youkwhan@gmail.com](**Youkwhan@gmail.com**)
- LinkedIn [https://www.linkedin.com/in/youkwhan/](https://www.linkedin.com/in/youkwhan/)
- Portfolio [https://devyouk.netlify.app](https://devyouk.netlify.app)

### License
This project is licensed under the [MIT License](LICENSE.md).
