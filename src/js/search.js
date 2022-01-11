



var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var Workouts = ["Ab Wheel","Aerobics","Arnold press (Dumbbell)","Around the world","Back extension","Back extension (Machine)","Ball slams","Battle ropes","Bench dips","Bench press (Barbell)","Bench press (Cable)","Bench press (Dumbbell)","Bench press (Smith machine)","Bench press - close grip (Barbell)","Bench press - Wide grip (Barbell)","Bent over one arm row (Barbell)","Bent over row (band)","bent over row (Barbell)","Bent over row - underhand (Barbell)","Bicep Curl (Barbell)","Bicep Curl (Cable)","Bicep Curle (Dumbbell)","Bicep Curl (Machine)","Bicycle Crunch","Box jump","Box squat (Barbell)","Bulgarian split squat","Burpee","Cable crossover","Cable crunch","Cable kickback","Cable pull through","Cable twist","Calf press on leg press","Calf press on seated leg press","Chest dip","Chest dip (assisted)","Chest fly","Chest fly (Band)","Chest fly (Dumbbell)","Chest press (Band)","Chest press (Machine)","Chin Up","Chin up (Assisted)","Clean (Barbell)","Clean and jerk (Barbell)","Climbing","Concentration Curl (Dumbbell)","Cross body crunch","Crunch","Crunch (Machine)","Crunch (Stability ball)","Cycling","Cycling (Indoors)","Deadlift (Barbell)","Deadlift (Dumbbell)","Deadlift (Smith machine)","Deadlift high pull (Barbell)","Decline bench press (Barbell)","Decline bench press (Dumbbell)","Decline bench press (Smith machine)","Decline crunch","Deficit deadlift (Barbell)","Elliptical machine","Face pull (Cable)","Flat knee raise","Flat leg raise","Floor press (Barbell)","Front raise (Band)","Front raise (Barbell)","Front raise (Plate)","Front squat (Barbell)","Glute ham raise","Glute kickback (Machine)","Goblet squat (Kettlebell)","Good morning (Barbell)","Hack squat","Hack squat (Barbell)","Hammer curl (Band)","Hammer curl (Cable)","Hammer curl (Dumbbell)","Handstand push up","Hang clean (Barbell)","Hang snatch (Barbell)","Hanging knee raise","Hanging knee raise","Hanging leg raise","High knee skips","Hiking","Hip abductor (Machine)","Hip abductor (Machine)","Hip thrust (Barbell)","Hip thrust (Bodyweight)","Incline Bench press (Barbell)",""];

$('#Workouts .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'Workouts',
  source: substringMatcher(Workouts)
});