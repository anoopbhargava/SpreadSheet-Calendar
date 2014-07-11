function onOpen() {  
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var menu = [ 
    {name: "Set Reminder", functionName: "SetReminder"},
  ];  
    sheet.addMenu("Calender Sync", menu);    
}


function SetReminder() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var cal = CalendarApp.getDefaultCalendar();
  var activecell = sheet.getActiveCell();
  
  var columnname = activecell.getColumn();
  var hidecl= columnname+12;
  var rowname = activecell.getRow();
 //Browser.msgBox(columnname);
 //
 var cel1 = SpreadsheetApp.getActiveSheet().getRange(rowname, hidecl, 1, 1).getValues();
 var firstCell = SpreadsheetApp.getActiveSheet().getRange(2, columnname, 1, 1).getValues();
//  Browser.msgBox(firstCell);
  
 

   var title = firstCell;  // First column
   var desc = firstCell;   // Second column
 //  var loc =firstCell;
   var tstart = new Date(cel1);
   var tstop = new Date(cel1);
   

  //new Date("March 3, 2010 08:00:00"),new Date("March 3, 2010 09:00:00")
  var extraction = cal.createEvent(title,tstart ,tstop , {description:desc});
  extraction.addSmsReminder(120);
  // cal.createEvent(title, tstart, tstop,{description:desc,location:loc});
 }
 
