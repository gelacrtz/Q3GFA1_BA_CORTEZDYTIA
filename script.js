var nickname = 'gela';
var heightinch = '66.5';
var weightkg = '55kg';

var feet = Math.floor(heightinch / 12);
var inch = (heightinch % 12)
var heightfeet = (feet + "'" + inch)

var weightlbs = (weightkg * 2.2);


alert("Name: " + nickname +"/nHeight: " + heightfeet +"/nWeight: " + weightlbs.toFixed(1) + " lbs");