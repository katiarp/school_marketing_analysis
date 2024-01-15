# Project Description


The goal of this project is to maximize marketing and outreach resource allocation by showing clusters of geographic areas that meet specific socioeconomic and demographic conditions. By using this data analysis, any decision maker can visualize where their efforts could have a higher return of investment.

This project was based on data obtained from the Census data API at the Tract level. The dataset used was the American Community Survey: 5-Year Estimates: Detailed Tables 5-Year 2022, which at the time of this writing was the most recent (for more information go to the datasets section.) 

## Understanding Geographies

All datasets available through the Census data API can be queried at different geographies levels (for more information go to the  [Understanding Geographies ](https://www.census.gov/newsroom/blogs/random-samplings/2014/07/understanding-geographic-relationships-counties-places-tracts-and-more.html)section). Another useful visualization of geographic boundaries can be found [here](https://www.caliper.com/maptitude/census2000data/summarylevels.htm). 

The United States Census Bureau provide these geographies:      

![](https://www.census.gov/content/dam/Census/newsroom/blogs/2014/07/understanding-geographic-relationships-counties-places-tracts-and-more/geo1.jpg)





## Datasets

The geography of interest will determine the dataset to be used because not all datasets contain data at all geographies.

The American Community Survey: 5-Year Estimates: Detailed Tables 5-Year (acs/acs5) was used to get income and demographic data at the tract level.


## Variables

The variable groups used for this analysis were the following:

* B19001: Household Income in the Past 12 Months (in 2022 Inflation-Adjusted Dollars)
* B09002: Own Children Under 18 Years by Family Type and Age
