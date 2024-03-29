document.getElementById('throwButton').addEventListener('click', function() {
    const result = throwDivinationCups();
    document.getElementById('result').textContent = result;
});

function throwDivinationCups() {
    const cup1 = Math.round(Math.random());
    const cup2 = Math.round(Math.random());
    
    if (cup1 !== cup2) {
        return "圣杯：神明给予了明确的答案。";
    } else if (cup1 === 0 && cup2 === 0) {
        return "笑杯：神明未能给出决定，或需要重新考虑问题。";
    } else {
        return "怒杯：神明对于所提问题的不满，或拒绝。";
    }
}
