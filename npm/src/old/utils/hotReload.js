/*
the time parameter represents the delay in milliseconds before the file is reloaded. 
The setTimeout function is used to simulate this delay.
If you want to specify the time in a different format, such as seconds or minutes,
 you can modify the implementation accordingly.
  For example, if you want to provide the time in seconds,
   you can convert it to milliseconds by multiplying it by 1000: 

   function hotReload(file, timeInSeconds) {
  const timeInMillis = timeInSeconds * 1000;
  reloadData = { file, time: timeInMillis };
}

With this modification, you can now use mLearning.hotReload('/this', 5)
 to specify a delay of 5 seconds before the file is reloaded.
Feel free to adjust the implementation to suit your specific requirements regarding the time format.
   */

// mLearning module
function hotReload(x, y){
  console.log("Hot reloading File Path: " + x + " Every: " + y);
}


module.exports = hotReload;


