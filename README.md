# Smart Recipe Generator

Smart Recipe Generator is a frontend-based web application that suggests recipes based on the ingredients provided by the user.  
This project was developed as part of a technical assessment to demonstrate problem-solving ability, UI design, and application logic.

## Approach

I built the Smart Recipe Generator by keeping the application simple and easy to use.  
The main idea was to help users find recipes based on the ingredients they already have, 
instead of making the system too complex.

Users can enter ingredients manually and apply filters such as diet type, cooking time, 
difficulty level, and serving size.

The recipe matching logic works by comparing the user’s input ingredients with the 
ingredients required for each recipe in the database. Based on this comparison, 
suitable recipes are displayed along with cooking steps and basic nutritional details 
like calories and protein.

Serving size adjustments are handled in a simple way by scaling the nutritional values 
proportionally.

For ingredient recognition from images, I used a simulated approach to demonstrate the 
complete flow without adding heavy dependencies. This helps show how the feature would 
work in a real application while keeping the project lightweight and easy to maintain.

Overall, the focus of this project was on clean UI, clear logic, responsive design, and 
basic error handling, while making sure all required features are covered.



## Features

- Ingredient input using text (comma separated)
- Simulated ingredient recognition from images
- Dietary preference filters:
  - Vegan
  - Vegetarian
  - Gluten-Free
  - Non-Vegetarian
- Difficulty and cooking time filters
- Serving size adjustment
- Recipe matching algorithm
- Nutritional information (calories and protein)
- Ingredient substitution suggestions
- Rate recipes and save favorites (using localStorage)
- Predefined recipe database with 20 recipes
- Loading states for better user experience
- Clean and mobile-responsive UI


## Ingredient Recognition from Images

Ingredient recognition from images is implemented as a simulated approach.  
When a user uploads an image, the application demonstrates the detection flow by auto-filling sample ingredients.  
This keeps the project lightweight while clearly showcasing the end-to-end user experience.  
The logic can be easily extended to integrate real AI/ML image recognition APIs in the future.


## How Recipe Matching Works

The application compares user-provided ingredients with recipe requirements.  
Additional filters such as dietary preference, difficulty level, cooking time, and serving size are applied to refine results.


## Tech Stack

- React (Create React App)
- JavaScript
- HTML & CSS


## How to Run Locally
npm install
npm start
