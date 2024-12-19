## README - JavaScript Functions for Grade Evaluation, Salary Calculation, and Speed Radar
This repository contains three JavaScript functions that provide various functionalities:

Grade Evaluation based on student marks.
Net Salary Calculation based on basic salary and benefits.
Radar Device to evaluate driving speed and points.
## 1. Score Evaluator (Grade Evaluation)
 Description:
This function evaluates the student's marks and assigns a grade based on predefined grade boundaries. The function checks if the input is a valid number between 0 and 100.



## How to Use:
The user will be prompted to enter the student's marks.
The function evaluates the marks and displays a corresponding grade:
A for marks > 79
B for marks >= 60
C for marks >= 49
D for marks >= 40
E for marks below 40
Example:


scoreEvaluator(60);  // Output: Grade: B
Note:
Marks must be a number between 0 and 100.
If the input is invalid, the function will notify the user and ask for a valid input.



## Net Salary Calculator
Description:
This function calculates the net salary based on basic salary and benefits by considering:

PAYE (Pay As You Earn) tax deductions.
NHIF (National Hospital Insurance Fund) deductions.
NSSF (National Social Security Fund) contributions.

## How to Use:
Provide the basic salary and benefits.
The function calculates the gross salary, applies deductions for PAYE, NHIF, and NSSF, and outputs the net salary.

## Example:


calculateNetSalary(80000, 30000); 
// Output:
// Gross Salary: Ksh 110000.00
// PAYE Deduction: Ksh 27500.00
// NHIF Deduction: Ksh 1300
// NSSF Deduction: Ksh 3600.00
// Total Deductions: Ksh 31800.00
// Net Salary: Ksh 78200.00
## Note:
PAYE deductions are calculated based on the gross salary using different tax bands.
NHIF deductions vary based on the gross salary range.
NSSF deductions are split into Tier 1 and Tier 2 contributions.

## Radar Device (Speed Evaluation)

Description:

This function simulates a radar device to evaluate the speed of a vehicle. It compares the speed against a predefined velocity limit (70 km/h) and calculates the penalty points for speeding. If the number of points exceeds a limit (12), the driver's license is suspended.

Function Definition:

function radarDevice(speed) {
    // Function to calculate speeding points and determine whether the license is suspended.
}
## How to Use:
Provide the speed of the vehicle.
The function will:
Output "Ok" if the speed is within the legal limit.
Output the number of penalty points if the speed exceeds the limit.
Suspend the license if the points exceed 12.
## Example:


radarDevice(80);  // Output: Points: 2
radarDevice(280); // Output: License suspended
radarDevice(60);  // Output: Ok
Notes:
The velocity limit is set at 70 km/h.
Each 5 km/h above the limit results in 1 penalty point.
A total of 13 or more points leads to license suspension.
