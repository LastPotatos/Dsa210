# Anime production quality over quantity analyzer

I'm Han Eskicioglu from sabanci univesity currently in the second temr of my sophmore year in the process of getting a computer science degree 

This is my project for DSA 210

---

##  Table of Contents

1. [Project Overview](#project-overview)  
2. [Motivation](#motivation)  
3. [Objectives](#objectives)  
4. [Questions](#questions)  
5. [Data Sources](#data-sources)  
6. [Methodology](#methodology)  
   - [Anime Data Collection](#anime-data-collection)  
   - [Market Value Data Collection](#market-value-data-collection)  
   - [Correlation Computation](#correlation-computation)  
7. [Hypotheses and Results](#hypotheses-and-results)  
8. [How to use the code](#How-to-use-the-code).
9. [How the code_works](#How-the-code-works).
10. [Ai assistance](#Ai-assistance)
11. [Future Work](#Future-Work) 
 
---

## Project Overview
understanding if anime choses quality over quantity or the opposite and comparing them to the growth of the market

---

## Motivation 
since i already watch a lot of anime i wanted to know more about the growth of the market and the strategies that go along with them

---

## Objectives

- **Observe the markets growth** look for socks of select companys that contribute to anime
- **Get all the animes** by year and rating from sources to compare
- **Predict the market** by the anime count to value or market value to count
---

## Questions
1. Which has more coralation between the market growth?
2. how does the market behave if ratings or the ammount changes
3. how much anime would be released if the market held their point
--- 

## Data sources 
Stock market and my animelist(MAL) scraping will be enough for this project

---

## Hypotheses and Results

- **Hyphotesis 1** animes are produced regardless of quality and it works on markets growth
- **Result** it is infact coralated

- **Hyphotesis 2** animes quality in fact add to market growth
-  **Result**  as it seems it does not there will be studio by studio compersison later

---

## How to use the code

1. if you want the up to date info run every cell in main.ipynb
2. after that or if you are ok with the current info run the last cell and enter the website

---

## How the code works

- The first cell scrapes the stock market in the studios.txt folder and documents them by their total value
- The second cell scrapes myanimelist for all animes getting their avarage ratings and number by the quarter
- The third cell calculates p and r values for median and stock value and number and stock value
- The fourth cell applies ml methods to guestimate a number given their reletionship
- Laslty the last cell runs the html code designed to illutrate the data
---

## Ai assitance

In this project there were some code and objects that Ai helped or wrote these include

1. The website code
2. The scraper that scrapes the stock market
3. The companies names that were looked (they were fact checked this was mostly due to the fact that most companies dont have publicly visible prices

---

## Future Work 

These codes can be optimised by
1. To guess how much of the animes genre would be created
2. Predict more narrow field of companies
but sadly given todays anime count there is not enough data on this

