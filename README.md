# schmaker
Schedule Maker for NCSSM 2018-19,
working link @ [jkelleyrtp.github.io/schmaker/](https://jkelleyrtp.github.io/schmaker/)

 - Created by Sayan Dutta ('17)
 - Migrated to GitHub by Jonathan Kelley ('18)
 - Updated by Mansi Sak ('19)


## index.html
table for blank timetable
dynamic course adder

## data.js
data for schedule times

manage data in localStorage using values from entered courses

COURSES array of objects with properties:
- name
- block
- one (Mon)
- two (Tue)
- three (Wed)
- four (Thu)
- five (Fri)
- lab (Block-dependent)
- color (for timetable)

## gcal.js
manages calls to Google Calendar API
