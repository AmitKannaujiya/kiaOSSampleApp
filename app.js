window.addEventListener("load", function () {
  console.log("Hello World!");
});

const softkeyCallback = {
  left: function () { console.log('You click on SoftLeft') },
  center: function () { console.log('You click on Enter') },
  right: function () { console.log('You click on SoftRight') },
  back : function (event) {
    event.preventDefault();
    if(confirm('Do you want to exit')) {
      window.close();
      return;
    }

  }
};
function handleKeyDown(evt) {
  switch (evt.key) {
    case 'SoftLeft':
      // Action case press left key
      softkeyCallback.left();
      break;

    case 'SoftRight':
      // Action case press right key
      softkeyCallback.right();
      break;

    case 'Enter':
      // Action case press center key
      softkeyCallback.center();
      break;

    case 'Backspace':
      softkeyCallback.back(evt);
      break;
  }
};

function updateSoftKey(props) {
  const keys = Object.keys(props);

  keys.forEach(function (key) {
    const button = document.getElementById('softkey-' + key);
    button.textContent = props[key].label;
    softkeyCallback[key] = props[key].callback;
  });
}

/* This function is call that way */
updateSoftKey({
  left: {
    label: 'Left text',
    callback: function () {
      console.log('UpdateSoftKey - Left key');
    }
  },
  center: {
    label: 'Center text',
    callback: function () { console.log('UpdateSoftKey - Left center'); }
  },
  right: {
    label: 'Right text',
    callback: function () { console.log('UpdateSoftKey - Left Right'); }
  }
});

function handleKeydown(e) {
  switch (e.key) {
    case 'ArrowUp':
      console.log('ArrowUp');
      nav(-1);
      break;
    case 'ArrowDown':
      console.log('ArrowDown');
      nav(1);
      break;
    case 'ArrowRight':
      console.log('ArrowRight');
      nav(1);
      break;
    case 'ArrowLeft':
      console.log('ArrowLeft');
      nav(-1);
      break;
  }
}

function nav(move) {
  const currentIndex = document.activeElement.tabIndex;
  const next = currentIndex + move;
  const items = document.querySelectorAll('.items');
  const targetElement = items[next];
  targetElement.focus();
}

document.addEventListener('keydown', handleKeyDown);

//document.activeElement.addEventListener('keydown', handleKeydown2);

window.addEventListener('load', function() {
  let status = document.getElementById("status");
  let log = document.getElementById("log");

  function updateOnlineStatus(event) {
    let condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.type;

function updateConnectionStatus() {
  console.log("Connection type changed from " + type + " to " + connection.type);
}
updateConnectionStatus();
connection.addEventListener('change', updateConnectionStatus);

