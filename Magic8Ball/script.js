document.getElementById("askButton").addEventListener("click", function() {
    const questionInput = document.getElementById("questionInput");
    const question = questionInput.value.trim(); // Kullanıcının girdisini al
    
    if (question === "") {
        alert("Lütfen önce bir soru sorun!"); // 🔴 Kullanıcıya uyarı ver
        questionInput.focus(); // 🔴 Kullanıcıyı input kutusuna yönlendir
        return; // 🚫 İşlemi durdur, devam etme
    }

    const answers = [
        "Evet!", "Hayır!", "Belki.", "Kesinlikle!", "Asla!", "Yakında göreceksin.",
        "Şüpheli.", "Şimdi değil.", "Buna güvenebilirsin.", "İmkansız!",
        "Emin değilim.", "Olabilir.", "Çok büyük ihtimalle!", "Daha sonra sor.",
        "Kendine inan.", "Bunu bilemem.", "Elbette!", "Sana bağlı.",
        "Kesinlikle hayır!", "Sorunlu bir soru.", "İlginç bir soru.",
        "Bekleyip görmelisin.", "Düşük ihtimalle.", "Harika bir fikir!",
        "Düşünceli ol.", "Cevap şu an belirsiz.", "Zaman gösterecek.",
        "Önce kendine sor.", "Sana söyleyemem.", "Bunu unut."
    ];

    const colors = [
        "#FF5733", "#33FF57", "#5733FF", "#FFD700", "#00FFFF", "#FF00FF",
        "#FF4500", "#008000", "#0000CD", "#8B0000", "#00CED1", "#FF1493",
        "#7CFC00", "#FF6347", "#1E90FF", "#4B0082", "#D2691E", "#FF8C00",
        "#32CD32", "#8A2BE2", "#4682B4", "#DC143C", "#20B2AA", "#DAA520",
        "#FF69B4", "#9932CC", "#00FA9A", "#2E8B57", "#B22222", "#FFB6C1"
    ];

    const animations = ["bounce", "rotate", "scale", "pulse"];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    const ball = document.getElementById("magicBall");
    const answerBox = document.getElementById("answerBox");
    const askButton = document.getElementById("askButton");

    // Top sallanma efekti ekler
    ball.classList.add("shake");

    setTimeout(() => {
        // Animasyonu kaldır
        ball.classList.remove("shake");

        // Arka plan rengini değiştir
        document.body.style.backgroundColor = colors[randomIndex];

        // Cevabı göster
        answerBox.innerText = answers[randomIndex];
        answerBox.classList.add(randomAnimation);

        setTimeout(() => {
            answerBox.classList.remove(randomAnimation);
        }, 1000);

    }, 3000);
});
