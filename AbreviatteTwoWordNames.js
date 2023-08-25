function abbrevName(name) {
  let nameUpperCase = name.toUpperCase();
  let spacePos = nameUpperCase.indexOf(" ");
  let nameOk = nameUpperCase.trim();
  let charName = nameOk.charAt(0);
  let charSurname = nameOk.charAt(spacePos + 1);
  return charName + "." + charSurname;
}