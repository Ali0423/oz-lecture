// AI 도움 받음. 별을 출력하는 함수를 먼저 만들어요. (함수 선언문)
function printStars(count = 1) { // count에 값이 안 오면 기본값으로 1을 사용해요 (매개변수 기본값)
    let stars = ""; // 별 문자열을 저장할 빈 상자 (let)

    // count 만큼 별을 추가하는 반복문 (for 반복문)
    for (let i = 0; i < count; i++) {
        stars += "*"; // stars = stars + "*" 와 같아요 (복합 대입 연산자)
    }
    console.log(stars); // 완성된 별 문자열을 화면에 보여줘!
}

// 최대 별 개수는 10개로 정해져 있어요. (const)
const MAX_STARS = 10; 

let inputIsValid = false; // 입력이 올바른지 알려주는 신호등 (처음엔 거짓이겠죠?) (let)
var userInput; // 사용자 입력을 받을 상자 (var, 요즘엔 let을 더 많이 씀)

// 올바른 숫자를 입력받을 때까지 계속 반복해요! (while 반복문)
while (!inputIsValid) { // inputIsValid가 거짓(false)인 동안 계속!
    userInput = prompt("Enter the number of stars (1-10):"); // 사용자에게 별 개수를 물어봐!

    // 입력값이 숫자인지, 그리고 1부터 10 사이인지 확인해요 (조건문, 비교 연산자, 논리 연산자)
    // isNaN()은 '숫자가 아닌지?'를 물어보는 거예요. 숫자가 아니면 true를 반환해요.
    if (isNaN(userInput) || parseInt(userInput) < 1 || parseInt(userInput) > MAX_STARS) {
        console.log("Invalid input! Enter a number between 1 and 10."); // 에러 메시지 출력
        continue; // 유효하지 않으니 다시 위로 올라가서 입력받아! (continue)
    } else {
        // 입력이 올바르다면 숫자로 바꿔서 별을 출력하는 함수에 전달해요.
        printStars(parseInt(userInput)); 
        inputIsValid = true; // 입력이 올바르다고 신호등을 켜줘!
        break; // 입력이 유효하니 이 반복문을 멈춰! (break)
    }
}