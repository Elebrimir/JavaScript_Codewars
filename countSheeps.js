function countSheeps(arrayOfSheep) {
    let count = 0;

    for (let index = 0; index < arrayOfSheep.length; index++) {
      if (arrayOfSheep[index] == true) {
        count++;
      }
    }

    return count;
  }