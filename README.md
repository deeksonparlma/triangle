# Triangle Tracker
#### The best program to determine the type of triangle you have with any values, Friday 15th February,Vrsn 1.0
#### By **Dickson Nyaigoti**
## Description
github repository :https://github.com/deeksonparlma/triangle
gh-page :https://deeksonparlma.github.io/triangle
This webapp is designed to help a user check which type of triangle it is according to the dimensions he/she has input.Irrespective of how big the figures are,the program validates whether the three sides input can form any of the three types of trinagles:Equilateral,isosceles or scalene.However, when the users values don't pass any of the checks,the program will inform you the dimensions used can't form a triangle.
## Features
* Fast response to your data
* User-friendly intaface
* Easy to use
## Setup/Installation Requirements
* Go to my github repository :https://github.com/deeksonparlma/triangletriangle
* From this point,fork the repository to be able to clone or download
* Copy the link to clone/download
* Clone/download the project using the terminal
## Behavior Driven Development

| Behavior        |  Input     | Output                        |   
| :-------------: | :--------: | :--------------------------:  |
|  blank input    |  null      |  doesn't make a triangle      |
|                 |            |                               |
|One side is zero |  sideA=0   |                               |
|                 |  sideB=3   | doesn't make a triangle       |                 
|                 |  sideC=4   |                               |
|                 |            |                               |
| Similar inputs  |  sideA=12  |                               |
|                 |  sideB=12  | Makes an  equilateral triangle|                 
|                 |  sideC=12  |                               |
|                 |            |                               |
|Two sides have   |  sideA=12  |                               |
| similar values  |  sideB=12  | Makes an  isosceles triangle  |                 
|    value        |  sideC=7   |                               |
|                 |            |                               |
| Different       |  sideA=8   |                               |
|   inputs        |  sideB=6   | Makes a scalene triangle      |                 
|                 |  sideC=5   |                               |
|                 |            |                               |
|Sum of two sides |  sideA=6   |                               |
|is greater than  |  sideB=8   | Makes a scalene triangle      |                 
|the remainig side|  sideC=10  |                               |
|                 |            |                               |
|Sum of two sides |  sideA=5   |                               |
|is less than     |  sideB=3   | doesn't make a triangle       |                 
|the remainig side|  sideC=9   |                               |

## Known Bugs
There are no bugs at the moment but if you encounter any kindly reach me via my email :dicksonparlma@gmail.com
 To develop this program in the website i used atom as my text editor.The site is built entirely on HTML, javaScript and CSS.
## Support and contact details
 incase you come across errors,feel free to reach me
email :dicksonparlma@gmail.com
### License
*MIT licence*
Copyright (c) 2019 **Dickson Nyaigoti**
