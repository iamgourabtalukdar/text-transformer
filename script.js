const textInput = document.querySelector("input[name='text-input']");
const lowerCaseBox = document.querySelector(".transformed-box.lower-case");
const upperCaseBox = document.querySelector(".transformed-box.upper-case");
const camelCaseBox = document.querySelector(".transformed-box.camel-case");
const pascalCaseBox = document.querySelector(".transformed-box.pascal-case");
const snakeCaseBox = document.querySelector(".transformed-box.snake-case");
const kebabCaseBox = document.querySelector(".transformed-box.kebab-case");
const trimCaseBox = document.querySelector(".transformed-box.trim-case");

function capitalizeString(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function getCamelCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function getPascalCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function getSnakeCase(str) {
  return str.split(" ").join("_");
}

function getKebabCase(str) {
  return str.split(" ").join("-");
}

function getTrimCase(str) {
  return str.split(" ").join("");
}

textInput.addEventListener("input", () => {
  lowerCaseBox.innerText = textInput.value.trim().toLowerCase();
  upperCaseBox.innerText = textInput.value.trim().toUpperCase();
  camelCaseBox.innerText = getCamelCase(textInput.value.trim());
  pascalCaseBox.innerText = getPascalCase(textInput.value.trim());
  snakeCaseBox.innerText = getSnakeCase(textInput.value.trim());
  kebabCaseBox.innerText = getKebabCase(textInput.value.trim());
  trimCaseBox.innerText = getTrimCase(textInput.value.trim());
});
