type PlayerData = {
    name: string,
    age: number,
    salary: number
}

function getSalary(player: {name?: string, salary: number}):number{
    return player.salary;
}

getSalary({salary:50})

function getSalary2(player: PlayerData): number{
    return player.salary;
}
