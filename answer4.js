/*
    The output will be "3" and will appear 3 times.
*/

function closure() {
  // for (var i = 0; i < 3; i++) {
  //   ((i) => {
  //     console.log('before timeOut:', i);
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 1000 + i);
  //   })(i);
  // }

  for (let i = 0; i < 3; i++) {
    console.log('before timeOut:', i);
    setTimeout(function () {
      console.log(i);
    }, 1000 + i);
  }
}

closure();
