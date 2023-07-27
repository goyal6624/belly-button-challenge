# Belly Button Biodiversity Dashboard

## Overview
The Belly Button Biodiversity Dashboard is an interactive web application that allows users to explore the fascinating world of microbial species that colonize human navels. The dashboard is built using data from the Belly Button Biodiversity dataset, which catalogs the microbes present in human navels.

## Features
- **Demographic Information**: The dashboard displays demographic information for each individual, such as age, gender, ethnicity, and belly button type.

- **Top 10 Belly Button Bacteria**: Users can visualize the top 10 operational taxonomic units (OTUs) present in a selected individual's belly button as a horizontal bar chart.

- **Bacteria Cultures Per Sample**: A bubble chart represents the bacteria cultures found in a selected individual's belly button, with each bubble size corresponding to the number of bacterial cultures and color indicating the OTU ID.

## Dataset
The dataset used for this project reveals that a small handful of microbial species (OTUs) were present in more than 70% of people, while the rest were relatively rare. The data is sourced from the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/).

## How It's Coded
The Belly Button Biodiversity Dashboard is coded using a combination of HTML, CSS, and JavaScript. The JavaScript code leverages the `D3.js` and `Plotly.js` libraries to fetch the data from the `samples.json` file and create the interactive visualizations. The web application is hosted on GitHub Pages to make it accessible to a wider audience.

## Explore the Dashboard
You can interact with the Belly Button Biodiversity Dashboard by visiting [this link](https://goyal6624.github.io/belly-button-challenge/). Feel free to select different individuals from the dropdown menu to explore their demographic information, the top 10 belly button bacteria, and the bacteria cultures per sample in an engaging and interactive way!

Enjoy your journey into the hidden world of belly button biodiversity!
