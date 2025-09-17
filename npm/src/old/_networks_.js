const { exec } = require('child_process');


function parseNetstatOutput(output) {
    const lines = output.split('\n');
    let totalConnections = 0; // Initialize a counter for the total connections
  
    // Skip the header lines and start parsing from actual data
    for (let i = 2; i < lines.length; i++) {
      const columns = lines[i].trim().split(/\s+/);
      if (columns.length >= 6) {
        const protocol = columns[0];
        const localAddress = columns[3];
        const foreignAddress = columns[4];
        const state = columns[5];
        // Increment the total number of connections
        totalConnections++;
        // Create an object with the data
        const connection = { protocol, localAddress, foreignAddress, state };
        // Here you would send this data to PostgreSQL or write to a directory
        console.log(connection);
      }
    }
  
    // Output the total number of connections after parsing
    console.log(`Total number of connections: ${totalConnections}`);
  }
  
  exec('netstat -tuln', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    // stdout is a string with the command's output
    parseNetstatOutput(stdout);
  });
