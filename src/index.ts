import { transformArray } from "./transformArray";
import fs from "fs";
import path from "path";
//1
let originalArray = ["super", "20.5", "test", "23"];
let transformedArray = transformArray(originalArray);
console.log("Transformed array => ", transformedArray);

//2
function containsDigit(str: string): boolean {
  return /\d/.test(str);
}
console.log(containsDigit("test-string-123"));

//3
function getCSVFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  return files.filter((file) => path.extname(file) === ".csv");
}
const csvFiles = getCSVFiles("files");
console.log(csvFiles);