// 영화 목록을 출력하는 함수를 먼저 만들어요. (함수 선언문)
function printMovies(moviesArray) { // 영화들이 담긴 배열을 'moviesArray'라는 이름으로 받아와요.
    console.log("Movie Collection:"); // 영화 컬렉션 제목 출력

    // 영화가 없을 경우를 대비해서 기본 메시지를 설정할 수 있어요 (매개변수 기본값 개념 활용)
    // 여기서는 속성 자체에 기본값을 줄 거라서 함수 매개변수 기본값은 배열에 안 줄게요.

    // 'i'는 몇 번째 영화인지 세는 숫자예요.
    // 'moviesArray.length'는 배열 안에 영화가 몇 개 들어있는지 알려줘요.
    for (let i = 0; i < moviesArray.length; i++) { // 배열의 첫 번째 영화부터 마지막 영화까지 반복해요.
        let movie = moviesArray[i]; // 현재 반복 중인 영화 객체를 'movie'라는 상자에 담아요.

        // 만약 영화 정보가 비어있으면 'Unknown'으로 채워줘요. (조건문, 논리 부정 연산자)
        // !movie.title은 movie.title이 비어있거나 없는 경우 true가 돼요.
        if (!movie.title) movie.title = "Unknown Title";
        if (!movie.director) movie.director = "Unknown Director";
        if (!movie.year) movie.year = 0; // 숫자가 비어있을 때는 0이나 다른 기본값
        if (!movie.genre) movie.genre = "Unknown Genre";

        // 영화 정보를 예쁜 형식으로 출력해요.
        console.log(`${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`);
    }

    console.log(`Total Movies: ${moviesArray.length}`); // 총 영화 수 출력
}


// 1. 영화 객체를 저장할 빈 배열을 만들어요. (let)
let movies = []; 

// 2. 최소 3개의 영화 객체를 만들고 배열에 추가해요. (객체, 배열, const)
// 'const'로 영화 객체를 만들면 이 객체 자체를 다른 객체로 통째로 바꿀 수는 없지만,
// 객체 안의 속성(title, director 등)은 바꿀 수 있어요.

const movie1 = {
    title: "The Matrix",
    director: "Wachowskis",
    year: 1999,
    genre: "Sci-Fi"
};

const movie2 = {
    title: "Inception",
    director: "Nolan",
    year: 2010,
    genre: "Sci-Fi"
};

const movie3 = {
    title: "Parasite",
    director: "Bong",
    year: 2019,
    genre: "Drama"
};

// 3. var를 사용하여 영화 수를 세는 변수를 만들어요 (나중에 사용)
var movieCount = 0; // 아직 사용하진 않지만, var 사용 예시

// 배열에 영화 객체들을 하나씩 넣어줘요.
movies.push(movie1); // push는 배열의 맨 뒤에 새로운 것을 추가하는 명령어예요.
movies.push(movie2);
movies.push(movie3);

// (선택 사항) 빈 속성을 가진 영화를 추가하여 함수에서 기본값 처리 테스트
const movie4 = {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    // director와 genre는 일부러 비워둬서 함수에서 'Unknown'으로 채워지는지 확인
};
movies.push(movie4);

// 배열에 들어있는 총 영화 수를 movieCount 변수에 저장 (var 사용 예시)
movieCount = movies.length;

// 4. 영화 목록 출력 함수를 호출해요.
printMovies(movies);