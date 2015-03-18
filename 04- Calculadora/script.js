$(document).ready(function() {
  var operators = ["+", "-", "/", "*"],
  screen = $('.screen');
  $('#clear').click(function() { screen.empty();});

  $('input').click(function() {
    var val = $(this).val();
    if(screen.html().length > 11) {return;}
    if (operators.indexOf(val) !== -1) {
      screen.append(' '+ val +' ');
    } else {
      screen.append(val);
    }
  });
  $('.btn-equal').click(function() {
    screen.html(eval(screen.html()));
  })
});
//Console Notes
console.log('When I first decided to work on a calculator, I thought I would have that much work... then I found about eval(). I have found a lot of different opinions on it. ' +
  'After scratching my head hard trying to redo this calc, I decided to keep with eval, because even though it is "evil" and is becoming obsolete,' +
  'this method is suitable for this kind of operation and I couldn\'t find a way to work with operators correctly \n' +
  'It is still a work in progress, as I\'m not happy with using something that is obsolete (but meh, I\'ll probably redo this challenge a couple more times in the future!) \n' +
  'For this project, I used jQuery and the usual Dash \n' + 'While coding, listened to: Take back the Night - Justin Timberlake');