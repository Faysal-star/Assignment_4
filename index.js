// Problem 1 : anaToVori()
// 16 Ana = 1 Vori

function anaToVori(ana) {
  if (ana >= 0) {
    let vori = ana / 16;
    return vori;
  } else {
    return 'Input positive integer number';
  }
}

// Problem 2 :  pandaCost(singara,somucha,jilapi)
// singaraCost = 7,somuchaCost = 10,jilapiCost = 15

function pandaCost(singara, somucha, jilapi) {
  if (singara >= 0 && somucha >= 0 && jilapi >= 0) {
    var totalCost;
    totalCost = singara * 7 + somucha * 10 + jilapi * 15;
    return totalCost;
  } else {
    return 'Input positive quantity';
  }
}

// Problem 3 : picnicBudget()
// upto100 = 5000,upto200 = 4000,upper = 3000

function picnicBudget(people) {
  if (people >= 0) {
    var totalCost;
    if (people <= 100) {
      totalCost = people * 5000;
    } else if (people <= 200) {
      totalCost = 100 * 5000 + (people - 100) * 4000;
    } else {
      totalCost = 100 * 5000 + 100 * 4000 + (people - 200) * 3000;
    }
    return totalCost;
  } else {
    return 'Please input positive value';
  }
}

// Problem 4 : oddFriend()
// first name with odd length

function oddFriend(friends) {
  if (friends.length >= 1) {
    var count = 0;
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length % 2 == 1) {
        return friends[i];
        break;
      }
      count++;
    }
    if (friends.length == count) {
      return 'No odd friend';
    }
  } else {
    return 'Plese do not input empty array';
  }
}
