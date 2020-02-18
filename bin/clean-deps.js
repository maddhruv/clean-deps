#!/usr/bin/node

const { execSync } = require("child_process");
const ProgressBar = require("progress");

const findDirs = require("../index");

try {
  // find directories with node_modules in path
  const results = findDirs();

  // number of directories
  const noOfDirs = results.length;

  const bar = new ProgressBar(":bar", { total: noOfDirs });

  // delete individual directories
  for (let dir = 0; dir < noOfDirs; dir++) {
    execSync(`rm -rf ${results[dir]}`);
    bar.tick();
  }

  console.log(
    `Removed ${results.length} node_modules director${
      results.length === 1 ? "y" : "ies"
    }`
  );
} catch (err) {
  console.error(err);
  process.exit(0);
}
