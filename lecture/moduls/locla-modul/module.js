const sum = (a, b) => {
    return a + b;
}
const multy = (a, b) => {
    return a * b;
}

const toDo = [
    {
        id: 1,
        task: "Coding",
        course: ["ai", "Data_science", "Web_devlopment"]
    },
    {
        id: 2,
        task: "watch Anime",
        course: ["ai", "Data_science", "Web_devlopment"]
    },
    {
        id: 3,
        task: "play Pubg",
        course: ["ai", "Data_science", "Web_devlopment"]
    }
]

module.exports = {
    sum, multy, toDo
}
