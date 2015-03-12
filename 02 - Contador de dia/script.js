function dateDiff() {
    var firstDate = document.getElementById('first').value,
    secondDate = document.getElementById('second').value,
    result = (new Date(secondDate).getTime() - new Date(firstDate).getTime()) / 86400000,
    days = (result === 1) ? 'day' : 'days';
    if(firstDate.length < 9 || secondDate.length < 9) { return; }
    document.getElementById('result').innerHTML = result + ' ' + days + ' remaining';
}
//Console Notes
console.log('Hi! This was the second project that I did, when I started learning (now refactored). The main idea was to learn more about date methods.\n' +
  'For this project, I used only Google/StackOverflow and Dash for documentation (and Font Awesome for some cool icons) :) \n' + 'While refactoring/coding, listened to: I Bring the Beat - Ru Paul');