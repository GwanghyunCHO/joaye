function getBallColor(num){
    if(num>=1 && num<=10) return "#fcd34d";  // 노랑
    if(num>=11 && num<=20) return "#3b82f6"; // 파랑
    if(num>=21 && num<=30) return "#ef4444"; // 빨강
    if(num>=31 && num<=40) return "#6b7280"; // 회색
    return "#10b981"; // 41~45 초록
}

function generateSingleSet() {
    let numbers = [];
    while(numbers.length < 6){
        let num = Math.floor(Math.random()*45)+1;
        if(!numbers.includes(num)) numbers.push(num);
    }
    numbers.sort((a,b)=>a-b);

    let bonus;
    do { bonus = Math.floor(Math.random()*45)+1; }
    while(numbers.includes(bonus));

    return {main:numbers, bonus:bonus};
}

function generateLottoSets() {
    const container = document.getElementById("lottoResults");
    container.innerHTML = "";

    for(let i=1;i<=5;i++){
        const set = generateSingleSet();
        const setDiv = document.createElement("div");
        setDiv.className="lotto-set";

        // 메인 번호
        set.main.forEach((num, idx)=>{
            const ball = document.createElement("div");
            ball.className="ball";
            ball.style.background=getBallColor(num);
            ball.style.animationDelay=`${idx*0.1}s`;
            ball.textContent=num;
            setDiv.appendChild(ball);
        });

        // + 표시 애니메이션
        const plusSign = document.createElement("div");
        plusSign.className="plus";
        plusSign.style.animationDelay=`${set.main.length*0.1}s`;
        plusSign.textContent="+";
        setDiv.appendChild(plusSign);

        // 보너스 번호
        const bonusBall=document.createElement("div");
        bonusBall.className="ball bonus";
        bonusBall.style.animationDelay=`${(set.main.length+1)*0.1}s`;
        bonusBall.textContent=set.bonus;
        setDiv.appendChild(bonusBall);

        container.appendChild(setDiv);
    }
}

function toggleTheme(){
    const body=document.body;
    const button=document.getElementById("themeToggle");
    body.classList.toggle("light-mode");
    button.innerHTML = body.classList.contains("light-mode") ? "☀ 화이트모드" : "🌙 다크모드";
}
