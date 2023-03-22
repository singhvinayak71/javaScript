const marks = [75, 73, 79, 89, 90, 64, 89, 92, 98, 96, 85, 83, 97, 96];

function compareMarks(a, b) {
    return b - a;
  }

const arrangedNumber = marks.sort(compareMarks)
// console.log(marks);
  for(let i = 0; i < 5; i++){
    console.log(marks[i])
  }