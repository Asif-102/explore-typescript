const salary:number = 7500;
const friendSalaries: number[] = [7500, 12300, 17200, 9400, 8300];
const friends: string[] = ['Sakib', 'Rakib', 'Nakib'];

friendSalaries[0] = 10500;

friendSalaries.push(13454);

friends.push('Dakib');

let max = 0;

for(const salary of friendSalaries){
    if(salary > max){
        max = salary;
    }
}