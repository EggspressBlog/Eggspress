---
title: "Eggspress Chart"
subtitle: ""
subheading: "Add dynamic charts to your content with ease"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 50
date: 2024-02-07T21:02:66
author: "denton"
snippet: "Eggspress Chart turns your CSV files into dynamic charts on your pages. Create bar, line, bubble, scatter, and pie charts with ease."
description: ""
sidebar: "eggspress_links"
category: "components"
prevPost: ""
nextPost: ""
relatedPost1: "use-components"
relatedPost2: "editing-content"
relatedPost3: ""
relatedPost4: ""
relatedPost5: ""
relatedPost6: ""
relatedPost7: ""
relatedPost8: ""
relatedPost9: ""
---

Eggspress Chart is an easy-to-use component for inserting dynamic charts. It reads data from CSV files and uses them to render charts onto your pages.

![](my_posts/components/images/charts.jpg)


## Quick start
To create a simple bar chart, write the following `<Chart>` component where you'd like to place it in your content:

`<Chart filename="my-data-file.csv" title="My Chart Title"></Chart>`

Where `my-data-file.csv` is located in a folder in your workspace folder called `my_data`. 

How you structure your file matters. The first row of this file should contain your column names. The first column should contain labels for your data.

All other cells are either blank or contain numeric values. 

## Properties
All of Eggspress Chart's properties are optional *except* for the `filename` property.

`filename` **(required)** - the filename of a CSV file stored in `my_data`
`source` - the name of a remote source (e.g. `google` for Google Sheets)
`columns` - an array of column index numbers to use (default is all)
`rowStart` - the index of the first row to use (default is 1)
`rowEnd` - the index of the last row to use (default is last row)
`type` - the type of chart (`combo`, `line`, `bar`, `scatter`, `bubble`, `pie`)
`title` - the title of the chart
`xPrefix`, `xSuffix`, `primaryYPrefix`, `primaryYSuffix`, `secondaryYPrefix`, `secondaryYSuffix` - text appearing before or after an axis' numeric labels
`xTitle`, `primaryYTitle`, `secondaryYTitle` - the name given to an axis
`xMin`, `xMax`, `primaryYMin`, `primaryYMax`, `secondaryYMin`, `secondaryYMax` - the upper / lower bounds to set for a given axis to manually adjust the scale of the chart
`height` - the minimum height of a chart in pixels
`palette` - the desired color palette to use
`orientation` - whether a chart is vertically or horizontally oriented (set `horizontal` for horizontal chart)
`pointRadius` - the size of points on charts (except bubble charts)

You may also provide a caption for your charts by adding content between the opening and closing tags of your Chart component. For example:

```markdown

`<Chart data="2024-01.csv">
**Figure 1** January data shows that we're off to a great start this year
</Chart>`


```


## Prepare your data
To import your data, place them into your `my_data` folder.

If `my_data` does not exist, you may need to create a `my_data` folder manually in your workspace folder. `my_data` must appear alongside your other content folders, such as `my_posts` and `my_pages`.

![](my_posts/components/images/chart_clean.jpg)

### Save your data as CSV
Eggspress reads your data stored as CSV files. CSV, which stands for comma-separated values, is a popular format for storing tabular data.

Most spreadsheet programs and statistical packages readily support exporting a file to CSV.

In **Excel**, you can select File > Save As. In the **Save As** dialog, select the dropdown menu labeled **Save as type:** and choose **CSV (Comma delimited) (\*.csv)** as your file format.

![](my_posts/components/images/Pasted%20image%2020240207213518.png)

In **Google Sheets**, select File > Download > **Comma Separated Values (.csv)**. This will bring up a **Save As** dialog. Select a location on your computer to save your spreadsheet as a CSV file.

![](my_posts/components/images/Pasted%20image%2020240207213357.png)

In statistical packages, you may need to call a function or run a special command to create a CSV file. In **R**, you can create a CSV from a DataFrame by using:

````r
write.csv(df,file='[path-to-your-workspace]/my_data/data.csv',na='')
````

### Clean your data
To ensure that your data is properly labeled, observe the following rules when setting up your spreadsheet for Eggspress Chart:

1. Your first row should contain the names of your fields
2. Your first column should contain named labels for each row of data
3. Aside from the first row and the first column, all other cells must either hold a numeric value or be empty

Eggspress Chart does not format your numbers by rounding to significant figures or truncating decimal places. Before saving your data as a CSV file, check that you have the correct number of decimal places for your values.

### Place columns on a secondary Y-axis
By default, Eggspress will plot all of your data on one Y-axis (the primary axis).

In some instances, you may wish to have a second Y-axis (a **secondary axis**).

This is especially true if you wish to plot two data series on the same chart that are either of different magnitudes or different units.

For example, your CSV data may look like this:

| Country | Population (in millions) | GDP (in trillions) |
| ---- | ---- | ---- |
| United States | 338.3 | 25.4 |
| China | 1425.9 | 18.0 |
| Japan | 124.0 | 4.2 |

Because GDP and population are on different orders of magnitude, it would be difficult to place both on the same chart. 

The population counts would be well represented, but the GDP figure would be so small relative to the population (at least when population is in millions and GDP is in trillions) that they would appear as a flat line hovering parallel to the x-axis.

To remedy this, we can place GDP on a secondary axis. This can be done by appending the text "(secondary)" to the column name:

| Country | Population (in millions) | GDP (in trillions) (secondary) |
| ---- | ---- | ---- |
| United States | 338.3 | 25.4 |
| China | 1425.9 | 18.0 |
| Japan | 124.0 | 4.2 |
Data series on the secondary axis will be represented by a line chart superimposed over the primary axis' bar chart.
### Use numeric values
Aside from your first row and first column, all of your data should either be numeric or left blank.

We strongly recommend storing numeric values as numbers *without* units or other textual labels.

If you need to provide units or other labeling, use the properties `xPrefix`, `xSuffix`, `primaryYPrefix`, `primaryYSuffix`, `secondaryYPrefix`, and/or `secondaryYSuffix`.

One way you might represent "25 million Dollars" in a cell is with "`$25M`".  When preparing your data for Eggspress, use `25` instead.

Then, using `primaryYPrefix`, set the prefix for the primary Y-axis with the Dollar currency symbol ($). Using `primaryYSuffix`, we can denote that we are displaying data in millions (M):

`<Chart primaryYPrefix="$" primaryYSuffix="M"></Chart>`

### Make selections
You might wish to use one set of data to create multiple charts. Eggspress Chart allows this by letting you select a limited set of columns and rows from your data.

![](my_posts/components/images/chart_select.jpg)
#### Specify which columns to include
In each chart, you can decide which columns to pull data from and in what order your columns are sourced.

This is useful for when you wish to keep all of your data in one file, but create many charts and views of your data from it.

To do so, use the `columns` property, which accepts an **array** of numbers.

Here's an example in which we select columns 0 and 3 for our first chart, and columns 0, 2, 6, and 7 for a second chart:

`<Chart filename="2024-01.csv" columns={[0, 3]}></Chart>`

`<Chart filename="2024-01.csv" columns={[0, 2, 6, 7]}></Chart>`

In general, you should include column 0 (the first column) as it contains your data labels.

Note that the index of columns and rows is zero-indexed, meaning the first entry starts at 0.

#### Specify which rows to source
Unlike `columns`, in which you specify the exact columns to source, when setting rows, you set either `rowStart`, `rowEnd`, or both.

`rowEnd` is not inclusive. If you wish to include the first 15 rows of data, you should set `rowEnd="16"`.

## Drawing your chart
There are six types of charts you can draw using Eggspress Chart. These are:
1. `line` - line charts
2. `bar` - bar charts
3. `combo` - combination of bar and line charts
4. `scatter` - scatterplots
5. `bubble` - bubble charts
6. `pie` - pie charts

### Combo charts
Combo charts require at least **three columns** of data. The first column contains your data labels. All other columns contain numeric values.

Among these other columns, at least one must be placed on the secondary Y-axis. 

The column marked as secondary will be represented as a line chart. It will have its own y-axis on the right-hand side of the chart. 

To set a column on the secondary axis, append the text "`(secondary)`" field name. Refer to the screenshot above for an example.

### Line and bar charts
Line and bar charts each require at least **two columns** of data. The first column contains your data labels. All other columns contain numeric values.

When using line charts, you must specify the property `type` like so:

`<Chart filename="2024-01.csv" type="line"></Chart>`

Note that it is not necessary to specify `type` for `combo` or `bar` charts because these are the default chart types used in Eggspress Chart.

### Bubble charts
Bubble charts require *exactly* **four columns** of data. The first column contains your data labels. The other three columns contain numeric values.

The second and third columns represent the *x* and *y* coordinates of a bubble's position (based on its center). The fourth column determines its size.

To prevent bubbles from growing too large, Eggspress automatically scales your data logarithmically. You may use the `pointRadius` property to set the maximum radius of a bubble.

If you have many columns of data, Eggspress Chart will create your bubble chart based on the first four columns of your CSV file.

You can use the `columns` property to specify which columns you wish to use and their exact ordering. Here's an example:

`<Chart filename="2024-01.csv" type="bubble" columns={[0, 3, 1, 6]} ></Chart>`

In this example, we set our data labels using column 0. We then determine the position where each bubble appears by using columns 3 and 1. Data in column 6 determines the radius of the bubble.

### Scatterplots
Scatterplots require exactly **three columns** of data. The first column contains your data labels. The other columns contain numeric values.

In general, scatterplots are virtually identical to bubble charts with the exception that they do not use a fourth column of data to resize each individual plot.

To use bubble charts, you must set the property `type="scatter"`.
### Pie charts
Pie charts require exactly **two columns** of data. The first column contains your data labels. The other column contains numeric values.

To use bubble charts, you must set the property `type="pie"`.

Pie charts can be difficult to read when they contain too many rows of data. As more rows are added, each segment of a pie chart grows smaller. This makes each segment less legible and more difficult for readers to select on their screen.

You can mitigate some of these effects by limiting your data to fewer rows. This can be achieved by passing a numeric value to `rowEnd`. Note that `rowEnd` is not inclusive. To select the first ten rows of data, you should pass `rowEnd="11"`. This can be combined with `rowStart` if needed.


## Importing data from Google Sheets
Rather than having Eggspress Chart read a CSV file from the `my_data` folder, you can instruct it to pull data directly from Google Sheets.

To do so, first [share the spreadsheet publicly](https://support.google.com/docs/answer/2494822?hl=en&co=GENIE.Platform%3DDesktop) by clicking the button labeled "Share." This will bring up a "Share" dialog.

Under the section "General access," choose the option labeled "Anyone with the link."

From the same dialog, click the button labeled "Copy link."

Paste this link in a textbox that you can edit. You will need to extract the **file ID** of your spreadsheet from this link. The **file ID** is a long string located between `https://docs.google.com/spreadsheets/d/` and `/edit` (highlighted in the screenshot below).

![](my_posts/components/images/Pasted%20image%2020240226155041.png)

To render charts from your Google Sheets file, set the value for your `filename` property as your **file ID** and set `source="google"`:

```markdown

<Chart filename="17GzyU1WboA5SjsmKLOJGDDXirAXE9MveIKvcy8pOC7o" source="google">
**Figure 2.** A chart using data sourced from a publicly visible Google Sheets document
</Chart>

```