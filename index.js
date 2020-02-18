const { execSync } = require("child_process");

function findDirs() {
  const results = execSync('find ./ -type d | grep "node_modules$"')
    .toString()
    .split("\n");

  results.pop();

  return results;
}

module.exports = findDirs;
