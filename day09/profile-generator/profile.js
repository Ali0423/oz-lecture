// <강사님 꺼 카피해서 수정함>
// 이름 : 심은정
// 나이 : 45
// 직업 : 주부
// 취미 : 독서, 상상, 귀여운 것 보기
// 특이사항 :
// 1. 사랑스런 3학년 딸과 사람을 편안하게 해주는 남편과, 지지고 볶고, 햄도 볶고 살고 있음 ㅋㅋ
// 2. OZ코딩스쿨 강의 수강중
// 3. 재택수강

let firstName = "Eunjung";
let lastName = "Shim";
let fullName = lastName + firstName;
const nameTemplate = `이름 : ${fullName} \n`;
console.log(nameTemplate);

let age = 45;
const ageTemplate = `나이 : ${age}`;
console.log(ageTemplate);

let jobs = ["윤정이보호자", "집미화원", "주부", "학생"];
let job = jobs[3];
const jobTemplate = `직업 : ${job}`;
console.log(jobTemplate);

let hobbies = ["reading", "imagining", "watchingCuteContents"];
// let hobbiesString = hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2];
let hobbiesString = `${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`;
const hobbiesTemplate = `취미 : ${hobbiesString}`;
console.log(hobbiesTemplate);

let isStudent = true;
console.log("학생여부 :", isStudent);

const notes = {
  family: "사랑스런 3학년 딸과 사람을 편안하게 해주는 남편과, 지지고 볶고, 햄도 볶고 살고 있음 ㅋㅋ",
  ongoing: "OZ코딩스쿨 강의 수강중",
  isHome: "재택수강",
};
const notesTemplate = `\n\t특이사항 :
1. ${notes.family}
2. ${notes.ongoing}
3. ${notes.isHome}
`;
console.log(notesTemplate);

const myFamily = {
  name: "배윤정",
  
};
console.log("name", typeof name);
console.log("age", typeof age);
console.log("hobbies", typeof hobbies);
console.log("isStudent", typeof isStudent);
console.log("notesTemplate", typeof notesTemplate);
console.log("myPet", typeof myPet);
console.log("myPet.name", typeof myPet.name);


