// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

// let attack = function(attackingPlayer,defendingPlayer,baseDamage,variableDamage){
//   const randomDamage = Math.floor(Math.random()*variableDamage);
//   const totalDamage = baseDamage + randomDamage;
//   defendingPlayer.health -= totalDamage;
//   return `${attackingPlayer.name} attacked ${defendingPlayer.name} for {totalDamage}`;
// }

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
// const player1 = {
//   name = 'Matt',
//   health = 10
// };
// const player2 = {
//   name = 'James',
//   health = 10
// };

// 3. Refactor attack function to an arrow function.  Comment out function above.
let attack = (attackingPlayer,defendingPlayer,baseDamage,variableDamage) =>{
  const randomDamage = Math.floor(Math.random()*variableDamage);
  const totalDamage = baseDamage + randomDamage;
  defendingPlayer.health -= totalDamage;

  return `${attackingPlayer.name} attacked ${defendingPlayer.name} for ${totalDamage}`;
}
 const player1 = {name :'Matt',health : 10};
 const player2 = {name : 'James',health : 10};

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);