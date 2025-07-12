// <AI의 도움을 받아 작성함>
// 1. 변수 선언
let inputStr = prompt("점수를 입력하세요. (0~100)");
let inputScore = parseInt(inputStr); // prompt로 받은 문자열을 숫자로 변환

const MAX_BONUS_SCORE = 105; // 최종 점수의 최대치 (변하지 않는 값이라 const)
let finalScore; // 보너스 점수가 적용된 최종 점수 (값이 변할 수 있어 let)
var grade; // 학생의 등급 (값이 변할 수 있어 var, 요즘엔 let을 더 많이 씀)
let statusMessage; // 합격/불합격 메시지
let gradeMessage; // 등급별 메시지

// 2. 최종 점수 계산 (이항 산술 연산자, 복합 대입 연산자, 연산자 우선순위)
// 입력 점수에 5점 보너스 추가
finalScore = inputScore + 5; 

// 최종 점수가 MAX_BONUS_SCORE(105)를 넘지 않도록 조정
if (finalScore > MAX_BONUS_SCORE) {
    finalScore = MAX_BONUS_SCORE;
}

// 3. 등급 부여 (if, else if, else 조건문, 비교 연산자, 논리 연산자)
if (finalScore >= 100) { // finalScore가 100 이상이면
    grade = 'S';
} else if (finalScore >= 90 && finalScore < 100) { // finalScore가 90 이상 100 미만이면
    grade = 'A';
} else if (finalScore >= 80 && finalScore < 90) { // finalScore가 80 이상 90 미만이면
    grade = 'B';
} else if (finalScore >= 70 && finalScore < 80) { // finalScore가 70 이상 80 미만이면
    grade = 'C';
} else if (finalScore >= 60 && finalScore < 70) { // finalScore가 60 이상 70 미만이면
    grade = 'D';
} else { // 그 외의 모든 경우 (60 미만)
    grade = 'F';
}

// 4. 합격/불합격 여부 (삼항 연산자)
// finalScore가 60점 이상이면 "Pass", 아니면 "Fail"
statusMessage = (finalScore >= 60) ? "Pass" : "Fail";

// 5. 등급별 메시지 출력 (switch 조건문)
switch (grade) {
    case 'S':
        gradeMessage = "Super!!";
        break; // 여기서 멈춰! 다른 case로 넘어가지 마!
    case 'A':
        gradeMessage = "Excellent work!";
        break;
    case 'B':
        gradeMessage = "Good job!";
        break;
    case 'C':
        gradeMessage = "Satisfactory performance.";
        break;
    case 'D':
        gradeMessage = "Needs improvement.";
        break;
    case 'F':
        gradeMessage = "Please try harder!";
        break;
    default: // 만약 grade가 S, A, B, C, D, F 중에 없으면 (거의 없겠지만)
        gradeMessage = "Invalid grade.";
}

// 6. 결과 출력 (console.log)
console.log(`Final Score: ${finalScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${statusMessage}`);
console.log(`Message: ${gradeMessage}`);