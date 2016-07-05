# schmaker
Schedule Maker for NCSSM 2016-17
working link @ [yandtt.com/schmaker](yandtt.com/schmaker)

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
