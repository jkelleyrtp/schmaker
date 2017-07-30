      // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
//      var CLIENT_ID = '607218385891-i3amg4qiptpgfmtenuqannj1jeskh5lv.apps.googleusercontent.com'; //sayans old key
     var CLIENT_ID = '702925168732-qkajgtnkseoemv3i6li3dv4jj5rt3dvg.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/calendar"];
    
      var CAL_ID;
      var EVENT_IDS = [];
      
      var DELAY; //queue index
      var INTERVAL = 300; //time diff for calls in ms
      
      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        var gcalDiv = document.getElementById('gcalendar-div');
        
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          gcalDiv.style.display = 'inline';
          loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
          gcalDiv.style.display = 'none';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }
      
      function handleCreateGCalClick(event) {
        makeCalendar();
      }
      
      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApi() {
        gapi.client.load('calendar', 'v3'); //formerly gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }
    
      /**
       * makes new calendar
       * with javascript request to Google API
       */
      function makeCalendar() {
        if (localStorage.getItem("TRI"))
            TRI = localStorage.getItem("TRI");
        console.log("tri: " + TRI);
        var request = gapi.client.calendar.calendars.insert({
          'summary': 'Tri ' + TRI + ' Schedule',
          'timeZone': 'America/New_York'
        });
        
        request.execute(function(cal) {
          appendPre('Calendar created: \n\tid: ' + cal.id + '\n\tname: ' + cal.summary + '\n\tvisit calendar.google.com');
          CAL_ID = cal.id;
          console.log('CAL_ID: ' + CAL_ID);
          makeEvents();
        });
        return false;
      }
    
      /**
       * recursively makes events in previously made google calendar
       * uses data from data.js
       * 
       */
      function makeEvents() {
        var date;
        if (TRI == 1) {
            date = date1;
        } else if (TRI == 2) {
            date = date2;
        } else {
            date = date3;
        }
        
        DELAY = 0;
        for (var i=0; i<COURSES.length; i++) {
            var name = COURSES[i].name;
            var block = COURSES[i].block;
            var lab = COURSES[i].lab;
            if (COURSES[i].one) {
                setTimeout(callbackNewEvent(name, block, '1', '1', date), DELAY*INTERVAL);
            }
            if (COURSES[i].two) {
                if (lab && (block=='A' || block=='E')) {
                    setTimeout(callbackNewEvent(name, block, '2', 'L', date), DELAY*INTERVAL);
                } else {
                    setTimeout(callbackNewEvent(name, block, '2', '2', date), DELAY*INTERVAL);
                }
            }
            if (COURSES[i].three) {
                if (lab && (block=='C')) {
                    setTimeout(callbackNewEvent(name, block, '3', 'L', date), DELAY*INTERVAL);
                } else {
                    setTimeout(callbackNewEvent(name, block, '3', '3', date), DELAY*INTERVAL);
                }
            }
            if (COURSES[i].four) {
                if (lab && (block=='B' || block=='F')) {
                    setTimeout(callbackNewEvent(name, block, '4', 'L', date), DELAY*INTERVAL);
                } else {
                    setTimeout(callbackNewEvent(name, block, '4', '4', date), DELAY*INTERVAL);
                }
            }
            if (COURSES[i].five) {
                if (lab && (block=='D' || block=='G')) {
                    setTimeout(callbackNewEvent(name, block, '5', 'L', date), DELAY*INTERVAL);
                } else if (block != 'H' && block != 'I') {
                    setTimeout(callbackNewEvent(name, block, '5', '5', date), DELAY*INTERVAL);
                }
            }
        }
        
        appendPre('Events created');
        
        //add holidays/extended events to holidayEvents
        var holidayEvents = [];
        for (var i=0; i<holidays/2; i+=2) {
            for (var j=0; j<EVENT_IDS.length; j++) {
                var request = gapi.client.calendar.events.instances({
                    'calendarId': CAL_ID,
                    'eventId': EVENT_IDS[j],
                    'timeMin': holidays[i*2] + timeZoneOffset,
                    'timeMax': holidays[i*2+1] + timeZoneOffset
                });
                request.execute(function(event) {
                    //appendPre('Holiday found: ' + event.htmlLink);
                    for (var k=0; k<event.items; k++) {
                        holidayEvents.push(event.items[i].id);
                    }
                });
            }
        }
        
        //remove holiday events
        for (var i=0; i<holidayEvents.length; i++) {
            var request = gapi.client.calendar.events.patch({
                'calendarId': CAL_ID,
                'eventId': holidayEvents[i],
                'status': 'cancelled'
            });
            request.execute(function(event) {
                //appendPre('Holiday removed: ' + event.htmlLink);
            });
        }
        
        //appendPre('Holidays removed');
      }
      
      /**
       * delay each event call to prevent 503 error
       */
      function callbackNewEvent(name, block, d, pd, date) {
          DELAY++;
          return function() {
              newEvent(name, block, d, pd, date);
          }
      }
      
      /**
       * send insert event request to API
       */
      function newEvent(name, block, d, pd, date) {
        console.log("event:");
        console.log(name);
        console.log(date[d] + startTime[block + pd] + timeZoneOffset);
        console.log(date[d] + endTime[block + pd] + timeZoneOffset);
        console.log('RRULE:FREQ=WEEKLY;UNTIL=' + date['end']);
        var event = {
            'summary': name,
            'start': {
                'dateTime': date[d] + startTime[block + pd],// + timeZoneOffset,
                'timeZone': 'America/New_York'
            },
            'end': {
                'dateTime': date[d] + endTime[block + pd],// + timeZoneOffset,
                'timeZone': 'America/New_York'
            },
            'recurrence': [
                'RRULE:FREQ=WEEKLY;UNTIL=' + date['end']
            ]
        }
        
        var request = gapi.client.calendar.events.insert({
            'calendarId': CAL_ID,
            'resource': event
        });

        request.execute(function(event) {
          //appendPre('Event created: ' + event.htmlLink);
          EVENT_IDS.push(event.id);
        });
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('gcalOutput');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
