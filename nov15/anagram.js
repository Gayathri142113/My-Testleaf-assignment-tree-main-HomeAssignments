function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const clean = (str) => str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const cleaned1 = clean(str1);
  const cleaned2 = clean(str2);
  //console.log(cleaned1)
  //console.log(cleaned2)

  // Early exit if lengths differ
  if (cleaned1.length !== cleaned2.length) return false;

  // Sort characters and compare
  const sorted1 = cleaned1.split("").sort().join("");
  const sorted2 = cleaned2.split("").sort().join("");
  //console.log(sorted1)
  //console.log(sorted2)

  return sorted1 === sorted2;
}
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("Dormitory", "Dirty room!!")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
