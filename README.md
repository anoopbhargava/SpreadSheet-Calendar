SpreadSheet-Calendar
====================

This google script connects between google spreadsheet and goWith our busy schedule, there is a fare chance that we may miss out on a extraction date. This effects our as well our companies performance adversely. The Client may like to get their dashboards refreshed by-weekly, however because of our mistake they may be able to view their same old data. This gives a chance to effect our company reputation. To overcome this scenario, the new reminder messaging tool has been developed.

It synchronizes your google spreadsheet with your google calender and triggers a reminder message to your mobile exactly when you start your day, stating that you need to do a certain task today. How is that?

Let see how we can activate this.

First of all we need to add out mobile number to our Google Calendar and validate it.

To do that, Open Google Calendar --> Settings Icon (Right Top Corner) --> --> Settings --> Mobile Setup (Top of the Page) --> Enter your mobile number --> Send Verification Code.

![](https://github.com/anoopbhargava/SpreadSheet-Calendar/blob/master/pics/1.PNG)

Retrieve the code from your mobile and enter the same under  "Verification Code" and Click on "Finish Setup".

Now save a copy of the "My Tracking Sheet" in your Google Drive.You can ask for the same from anoop.bhargava@eclinicalworks.com. Fill the required columns like, Clients, APUID and Mentors. 

![](https://github.com/anoopbhargava/SpreadSheet-Calendar/blob/master/pics/2.PNG)

Next, we need to go to the next sheet named "Count" and change the column headers with your Client's information using the exact format.

![](https://github.com/anoopbhargava/SpreadSheet-Calendar/blob/master/pics/3.PNG)

The last step for setup would be to go to Github and copy the Code [github.com -> anoopbhargava -> SpreadSheet-Calendar -> Google-Script -> code.gs] --> Come Back to "My Tracking Sheet" --> Click on Tools (In the menu Bar of the "My Tracking Sheet") --> Script Editor. Delete anything mentioned in the Script Editor Window and paste the Code, copied from Github.

Click on Run (In the menu Bar of the "My Tracking Sheet")  --> SetReminder and accept the acknowledgement to run the script.

That's it we are done. Now everytime you extract data for a particular Client just enter the Date along with time as 18:00:00 under the Client's column in the "Count" sheet in "My Tracking Sheet". 

![](https://github.com/anoopbhargava/SpreadSheet-Calender/raw/master/picss/3.PNG)

This will automatically trigger a SMS reminder to you mobile phone after 14 days as soon as you enter the office. It can be set to 7 days also in case of Clients where you need to extract the data weekly.

Hence, chances of missing out extraction date can be minimized.
