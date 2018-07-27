var timeZoneOffset = '-05:00';

var startTime = {
    A1: 'T08:00:00', C2: 'T08:00:00', B3: 'T08:00:00', D4: 'T08:00:00', A5: 'T08:00:00',
    B1: 'T08:55:00', D2: 'T08:55:00', A3: 'T08:55:00', C4: 'T08:55:00', B5: 'T08:55:00',
    C1: 'T09:50:00', B2: 'T09:50:00', D3: 'T09:50:00', A4: 'T09:50:00', C5: 'T09:50:00',
    D1: 'T10:45:00', A2: 'T10:45:00', C3: 'T10:45:00', B4: 'T10:45:00', D5: 'T10:45:00',
                     AL: 'T10:45:00', CL: 'T10:45:00', BL: 'T10:45:00', DL: 'T10:45:00',
                     EL: 'T12:55:00', G3: 'T12:55:00', FL: 'T12:55:00', GL: 'T12:55:00',
    E1: 'T13:25:00',
                     E2: 'T13:35:00',                  F4: 'T13:35:00', G5: 'T13:35:00',
                                      E3: 'T13:50:00',
    F1: 'T14:20:00',
                     G2: 'T14:30:00',                  G4: 'T14:30:00', F5: 'T14:30:00',
                                      F3: 'T14:45:00',
    G1: 'T15:15:00',
                     F2: 'T15:25:00',                  E4: 'T15:25:00', E5: 'T15:25:00',

    H1: 'T18:15:00', H2: 'T18:15:00', H3: 'T18:15:00', H4: 'T18:15:00',
    I1: 'T20:35:00', I2: 'T20:35:00', I3: 'T20:35:00', I4: 'T20:35:00'
}
var endTime = {
    A1: 'T08:50:00', C2: 'T08:50:00', B3: 'T08:50:00', D4: 'T08:50:00', A5: 'T08:50:00',
    B1: 'T09:45:00', D2: 'T09:45:00', A3: 'T09:45:00', C4: 'T09:45:00', B5: 'T09:45:00',
    C1: 'T10:40:00', B2: 'T10:40:00', D3: 'T10:40:00', A4: 'T10:40:00', C5: 'T10:40:00',
    D1: 'T11:35:00', A2: 'T11:35:00', C3: 'T11:35:00', B4: 'T11:35:00', D5: 'T11:35:00',
                     AL: 'T12:15:00', CL: 'T12:15:00', BL: 'T12:15:00', DL: 'T12:15:00',
                     EL: 'T14:25:00', G3: 'T13:45:00', FL: 'T14:25:00', GL: 'T14:25:00',
    E1: 'T14:15:00',
                     E2: 'T14:25:00',                  F4: 'T14:25:00', G5: 'T14:25:00',
                                      E3: 'T14:40:00',
    F1: 'T15:10:00',
                     G2: 'T15:20:00',                  G4: 'T15:20:00', F5: 'T15:20:00',
                                      F3: 'T15:35:00',
    G1: 'T16:05:00',
                     F2: 'T16:15:00',                  E4: 'T16:15:00', E5: 'T16:15:00',

    H1: 'T19:55:00', H2: 'T19:55:00', H3: 'T19:55:00', H4: 'T19:55:00',
    I1: 'T22:05:00', I2: 'T22:05:00', I3: 'T22:05:00', I4: 'T22:05:00'
}

var date1 = { //dateTime date followed by # of times recurring for tri 1 periods in Google Event making
    1: '2017-08-21',
    2: '2017-08-15',
    3: '2017-08-16',
    4: '2017-08-17',
    5: '2017-08-18',
    end: '20171027T000000Z'
}

var date2 = { //dateTime date followed by # of times recurring for tri 2 periods in Google Event making
    1: '2017-11-13',
    2: '2017-11-07',
    3: '2017-11-08',
    4: '2017-11-09',
    5: '2017-11-10',
    end: '20180206T000000Z'
}

var date3 = { //dateTime date followed by # of times recurring for tri 2 periods in Google Event making
    1: '2018-02-26',
    2: '2018-02-27',
    3: '2018-02-28',
    4: '2018-03-01',
    5: '2018-03-02',
    end: '20180520T000000Z'
}

var holidays = //timeMin/timeMax when searching event instances i%2=0: min, i%2=1: max
    ['2018-08-31T00:00:00', '2018-09-03T00:00:00', //labor day extended 1
     '2018-09-28T00:00:00', '2018-10-01T00:00:00', // 2nd extended
     '2018-10-29T00:00:00', '2018-11-06T00:00:00',  //tri 1 exam + tri 1 break
    '2018-11-16T00:00:00', '2018-11-25T00:00:00', // thanksgiving break
    '2018-12-21T00:00:00', '2019-01-06T00:00:00', // winter break
    '2019-01-21T00:00:00', '2019-01-22T00:00:00', // Martin luther kingjr
    '2019-01-24T00:00:00', '2019-01-27T00:00:00', // extended
    '2019-02-11T00:00:00', '2019-03-01T00:00:00', // tri 2 exams + tri break + miniterm
    '2019-03-22T00:00:00', '2019-03-25T00:00:00',          // extended
    '2019-04-18T00:00:00', '2019-04-28T00:00:00', // spring break
    '2019-05-20T00:00:00', '2019-05-22T00:00:00' // tri 3 exams
    ];


Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var TRI;
var COURSES = [];
/*var zcourse = {
    name:"",
    block:"A",
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    lab: false,
};*/
//COURSES.push(zcourse);


function pushCourse() {
    //var ncourse = zcourse;

    var l = COURSES.length - 1;
    if (l > -1) {
        COURSES.push( {
            name: COURSES[l].name,
            block: "A",
            one: COURSES[l].one,
            two: COURSES[l].two,
            three: COURSES[l].three,
            four: COURSES[l].four,
            five: COURSES[l].five,
            lab: COURSES[l].lab,
            color: COURSES[l].color
        });
    } else {
        COURSES.push( {
            name:"",
            block:"A",
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            lab: false,
            color: "#ffffff"
        });
    }
    localStorage.setObject("COURSES", COURSES);
}

var newCourse = function() {
    $('#coursetable tbody>tr:last').clone(true).insertAfter('#coursetable tbody>tr:last').hide().fadeIn(500);
    $("#coursetable tbody>tr:last").each(function() {
        //this.reset();
    });
    //console.log("newCourse");

    updateNames();
    updateBlocks();
    updatePds();
    updateColors();
    updateCalColors();
    updateCourses();

    return false;
}

var rmCourse = function(elem) {
    if (document.getElementById('coursetable').rows.length > 3) {
        console.log($(elem).parent().parent().index());
        COURSES.splice($(elem).parent().parent().index() - 2, 1);
        localStorage.setObject("COURSES", COURSES);
        $(elem).parent().parent().remove();
    }
    //console.log("rmCourse");

    updateNames();
    updateBlocks();
    updatePds();
    updateColors();
    updateCalColors();
    updateCourses();

    return false;
}

var clearCourse = function() {
    $('.course').each(function(i) {
        if (i != 0) {
            this.remove();
        }
    });
    COURSES = [];
    TRI = 1;
    pushCourse();
    localStorage.clear();
    updateForm();

    var bs = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var ps = ["1", "2", "3", "4", "5", "L"];
    for (var i=0; i<bs.length; i++) {
        for (var j=0; j<ps.length; j++) {
            //console.log(bs[i] + ps[j]);
            if (!((bs[i]=='H' || bs[i]=='I') && (ps[j]=='5' || ps[j]=="L"))) {
                document.getElementById(bs[i] + ps[j]).setAttribute("bgcolor", "#ffffff");
            }
        }
    }
}

$(document).ready(function() {

    $(".addCourse").click( function() {
        newCourse();
    });
    $(".rmCourse").click( function() {
        rmCourse(this);
    });
    $(".clearCourse").click( function() {
        clearCourse();
    });
    function init() {
        if (localStorage["TRI"]) {
            $('#trimester').val(localStorage["TRI"]);
        }
        if (localStorage.getObject("COURSES") && (localStorage.getObject("COURSES")[0].name != "" || localStorage.getObject("COURSES")[0].name != undefined)) {
            COURSES = localStorage.getObject("COURSES");
            var length = COURSES.length;
            var c=0;
            var names = $('.name');
            var blocks = $('.block');
            var pds = $('.pd');
            var cs = $('.color');
            console.log("length: " + length);
            /*while (names[length] == undefined) {

            }*/
            /*console.log("names: ")
            for (var i=0; i<names.length; i++) {
                console.log("\t" + names[i].value);
            }
            console.log("blocks: ")
            for (var i=0; i<blocks.length; i++) {
                console.log("\t" + blocks[i].value);
            }*/
            for(; c < length; c++) {
                if(c != 0) {
                    newCourse();
                    var names = $('.name');
                    var blocks = $('.block');
                    var pds = $('.pd');
                    var cs = $('.color');
                }

                console.log("c: " + c);
                //console.log("names[c].value: " + names[c].value);
                //console.log("COURSES[c].name: " + COURSES[c].name);
                names[c].value = (COURSES[c].name);
                blocks[c].value = (COURSES[c].block);

                (COURSES[c].one) ? pds[c * 6 + 0].checked = true : pds[c * 6 + 0].checked = false;
                (COURSES[c].two) ? pds[c * 6 + 1].checked = true : pds[c * 6 + 1].checked = false;
                (COURSES[c].three) ? pds[c * 6 + 2].checked = true : pds[c * 6 + 2].checked = false;
                (COURSES[c].four) ? pds[c * 6 + 3].checked = true : pds[c * 6 + 3].checked = false;
                (COURSES[c].five) ? pds[c * 6 + 4].checked = true : pds[c * 6 + 4].checked = false;
                (COURSES[c].lab) ? pds[c * 6 + 5].checked = true : pds[c * 6 + 5].checked = false;

                cs[c].value = COURSES[c].color;
            }
            updateCourses();
        } else {
            TRI = 1;
            localStorage.setItem("TRI", TRI);
            pushCourse();
        }
    }
    init();
});

var updateForm = function() {
    var c = 0;

    var names = $('.name');
    var blocks = $('.block');
    var pds = $('.pd');
    var cs = $('.color');
    var tri = $('.trimester');

    names[c].value = (COURSES[c].name);
    blocks[c].value = (COURSES[c].block);

    (COURSES[c].one) ? pds[c * 6 + 0].checked = true : pds[c * 6 + 0].checked = false;
    (COURSES[c].two) ? pds[c * 6 + 1].checked = true : pds[c * 6 + 1].checked = false;
    (COURSES[c].three) ? pds[c * 6 + 2].checked = true : pds[c * 6 + 2].checked = false;
    (COURSES[c].four) ? pds[c * 6 + 3].checked = true : pds[c * 6 + 3].checked = false;
    (COURSES[c].five) ? pds[c * 6 + 4].checked = true : pds[c * 6 + 4].checked = false;
    (COURSES[c].lab) ? pds[c * 6 + 5].checked = true : pds[c * 6 + 5].checked = false;

    cs[c].value = COURSES[c].color;

    tri[0].value = '1';
}

var updateCourses = function() {
    $('.course').each(function(i) {
        this.style = '';
    });
}

var updateNames = function() {
    $('.name').each(function(i) {
        var elem = $(this);

        elem.bind("propertychange change click keyup input paste", function(event) {
            // Do action
            while(COURSES[i] == undefined) {pushCourse();}
            console.log("name change: " + elem.val());
            console.log("i: " + i);
            COURSES[i].name = elem.val();
            //console.log("courses[i] block: " + COURSES[i].name);
            localStorage.setObject("COURSES", COURSES);
        });
    });
}

var updateBlocks = function() {
    $('.block').each(function(i) {
        var elem = $(this);

        elem.bind("propertychange change click keyup input paste", function(event) {
            // Do action
            while(COURSES[i] == undefined) {pushCourse();}
            console.log("block change: " + elem.val());
            console.log("i: " + i);
            COURSES[i].block = elem.val();
            //console.log("courses[i] block: " + COURSES[i].block);
            localStorage.setObject("COURSES", COURSES);
            updateCalColors();
        });
    });
}

var updatePds = function() {
    $('.pd').each(function(i) {
        var elem = $(this);

        elem.on("change", function() {
            // Do action
            index = Math.floor(i/6);
            while(COURSES[index] == undefined) {pushCourse();}
            console.log("i: " + i);
            console.log("index: " + index);
            switch(i % 6) {
                case 0: COURSES[index].one = elem.is(':checked');
                    break;
                case 1: COURSES[index].two = elem.is(':checked');
                    break;
                case 2: COURSES[index].three = elem.is(':checked');
                    break;
                case 3: COURSES[index].four = elem.is(':checked');
                    break;
                case 4: COURSES[index].five = elem.is(':checked');
                    break;
                case 5: COURSES[index].lab = elem.is(':checked');
                    break;
                default: break;
            }
            console.log("pd change: " + elem.is(':checked'));
            localStorage.setObject("COURSES", COURSES);
            updateCalColors();
        });
    });
}

var updateColors = function() {
    $('.color').each(function(i) {
        var elem = $(this);

        elem.bind("propertychange change click keyup input paste", function(event) {
            // Do action
            while(COURSES[i] == undefined) {pushCourse();}
            console.log("color change: " + elem.val());
            console.log("i: " + i);
            COURSES[i].color = elem.val();
            //console.log("courses[i] block: " + COURSES[i].block);
            localStorage.setObject("COURSES", COURSES);
            updateCalColors();
        });
    });
}

var updateCalColors = function() {
    var bs = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var ps = ["1", "2", "3", "4", "5", "L"];
    for (var i=0; i<bs.length; i++) {
        for (var j=0; j<ps.length; j++) {
            //console.log(bs[i] + ps[j]);
            if (!((bs[i]=='H' || bs[i]=='I') && (ps[j]=='5' || ps[j]=="L"))) {
                document.getElementById(bs[i] + ps[j]).setAttribute("bgcolor", "#ffffff");
            }
        }
    }

    for (var i=0; i<COURSES.length; i++) {
        var block = COURSES[i].block;
        if (COURSES[i].one) {
            document.getElementById(block + "1").setAttribute("bgcolor", COURSES[i].color);
        }
        if (COURSES[i].two) {
            document.getElementById(block + "2").setAttribute("bgcolor", COURSES[i].color);
        }
        if (COURSES[i].three) {
            document.getElementById(block + "3").setAttribute("bgcolor", COURSES[i].color);
        }
        if (COURSES[i].four) {
            document.getElementById(block + "4").setAttribute("bgcolor", COURSES[i].color);
        }
        if (COURSES[i].five && block!='H' && block!='I') {
            document.getElementById(block + "5").setAttribute("bgcolor", COURSES[i].color);
        }
        if (COURSES[i].lab && block!='H' && block!='I') {
            document.getElementById(block + "L").setAttribute("bgcolor", COURSES[i].color);
        }
    }
    console.log("update CalColors");
}

$(function() { //run

    $('.trimester').on("input change keyup paste click", function(i) {
        var elem = $(this);
        TRI = elem.val();
        //alert("tri change");
        console.log("tri change: " + elem.val());
        localStorage.setItem("TRI", TRI);
    });

    updateNames();
    updateBlocks();
    updatePds();
    updateColors();
    updateCalColors();

}); //end run

/*$('.name').on("input", function(i) {
    var elem = $(this);
       // Do action
       console.log("name change: " + elem.val());
       console.log("i: " + i);
       console.log("courses[i] name: " + COURSES[i]);
       COURSES[i].name = elem.val();
       //alert("name change");
        localStorage.setItem("COURSES", COURSES);
     //}
   //});
});*/

/*$('.name').each(function(i) {
   var elem = $(this);

   // Save current value of element
   elem.data('name'+i, elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('name'+i) != elem.val()) {
       // Updated stored value
       elem.data('name'+i, elem.val());

       // Do action
       while(COURSES[i] == undefined) {pushCourse();}
       console.log("name change: " + elem.val());
       console.log("i: " + i);
       COURSES[i].name = elem.val();
       console.log("i: " + i);
       console.log("courses[i] name: " + COURSES[i].name);
       //console.log("courses[i] name: " + COURSES[i+1].name);
       localStorage.setObject("COURSES", COURSES);
     }
   });
 });*/

/*$('.block').on("input change keyup paste click", function(i) {
   var elem = $(this);
    /*
   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());

       // Do action
       COURSES[i].block = elem.val();
       console.log("block change: " + elem.val());
        localStorage.setItem("COURSES", COURSES);
     }
   //});
});*/

/*$('.block').each(function(i) {
   var elem = $(this);

   // Save current value of element
   elem.data('block'+i, elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('block'+i) != elem.val()) {
       // Updated stored value
       elem.data('block'+i, elem.val());

       // Do action
       while(COURSES[i] == undefined) {pushCourse();}
       COURSES[i].block = elem.val();
       console.log("block change: " + elem.val());
       localStorage.setObject("COURSES", COURSES);
     }
   });
 });*/

/*$('.pd').on("input change keyup paste click", function(i) {
   var elem = $(this);
    /*
   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.bind("propertychange change click keyup input paste", function(event){
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());
       index = Math.floor(i/6);

       // Do action
       COURSES[i].name = elem.val();
       switch(i % 6) {
            case 1: COURSES[index].one = elem.val();
                break;
            case 2: COURSES[index].two = elem.val();
                break;
            case 3: COURSES[index].three = elem.val();
                break;
            case 4: COURSES[index].four = elem.val();
                break;
            case 5: COURSES[index].five = elem.val();
                break;
            case 0: COURSES[index].lab = elem.val();
                break;
            default: break;
       }
       console.log("pd change: " + elem.val());
        localStorage.setItem("COURSES", COURSES);
     }
   //});
});*/

/*$('.pd').each(function(i) {
   var elem = $(this);
    console.log("checked: " + elem.is(':checked'));

   // Save current value of element
   elem.data('pd'+i, elem.is(':checked'));

   // Look for changes in the value
   elem.on("change", function() {
      // If value has changed...
      if (elem.data('pd'+i) != elem.is(':checked')) {
       // Updated stored value
       elem.data('pd'+i, elem.is(':checked'));
       // Do action
        index = Math.floor(i/6);
        while(COURSES[index] == undefined) {pushCourse();}
        console.log("i: " + i);
        console.log("index: " + index);
        switch(i % 6) {
            case 0: COURSES[index].one = elem.is(':checked');
                break;
            case 1: COURSES[index].two = elem.is(':checked');
                break;
            case 2: COURSES[index].three = elem.is(':checked');
                break;
            case 3: COURSES[index].four = elem.is(':checked');
                break;
            case 4: COURSES[index].five = elem.is(':checked');
                break;
            case 5: COURSES[index].lab = elem.is(':checked');
                break;
            default: break;
       }
       console.log("pd change: " + elem.is(':checked'));
        localStorage.setObject("COURSES", COURSES);
     }
   });
 });*/
