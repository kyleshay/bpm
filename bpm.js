javascript:(
  function(){
    // check to see if the bpm tag already exists so we don't create a second.
    var bpm = document.getElementById('bpm');

    // there isn't one, so lets add one!
    if(bpm == null) {

      // create the element, add some styles, defaults, and add it to the page.
      bpm = document.createElement('div');
      bpm.id = 'bpm';
      bpm.style.cssText = 'position:fixed;z-index:1000;background-color:#fff;left:0;top:0;padding:10px';
      bpm.innerHTML = '0';
      document.body.appendChild(bpm);
    }

    // these variable are use to compute the bpm
    var count = 0;
    var start = 0;
    var last = 0;

    // key handler for keyboard presses.
    document.onkeypress = function(e) {

      // get the current time a key was pressed.
      var current = new Date().getTime();

      // if the time is more than 2 seconds since a key was last pressed.
      if (current - last > 2000) { // 2000 milliseconds (2 seconds)
        
        // reset key counter.
        count = 0;
      }

      // if the key counter is reset
      if (count == 0) {

        // reset the bpm text to 0
        bpm.innerHTML = 0.0;

        // reset the start time to current time.
        start = current;
      } else {

        // compute the bpm and set the text
        bpm.innerHTML = Math.round(60000 * count / (current - start) * 100) / 100;        
      }

      // increate the key counter
      count++;

      // set the last keypress time to current time.
      last = current;
    };
  }
)();
