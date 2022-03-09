// Write your JavaScript here
const calcButton = document.getElementById('calculate-change');

const dollars = document.getElementById('dollars-output');
const quarters = document.getElementById('quarters-output');
const dimes = document.getElementById('dimes-output');
const nickels = document.getElementById('nickels-output');
const pennies = document.getElementById('pennies-output');


calcButton.addEventListener('click', () => {
    const due = document.getElementById('amount-due').value;
    const received = document.getElementById('amount-received').value;
    
    const totalchange = parseFloat(received) - parseFloat(due);

    dollars.textContent = Math.floor(totalchange);

    let change = (totalchange % 1).toFixed(2);

    let qCount = 0;
    let dCount = 0;
    let nCount = 0;
    let pCount = 0;
    
    // WARNING A LOT OF NESTING
    while ( change !== 0 ){
        if( change - 0.25 > 0){
            change -= 0.25
            qCount++;
        }
        else if( change - 0.25 < 0){
            if( change - 0.10 > 0){
                change -= 0.10;
                dCount++;
            }
            else if( change -0.10 < 0){
                if( change - 0.05 > 0){
                    change -= 0.05;
                    nCount++;
                }
                else if( change - 0.05 < 0){
                    if( change - 0.01 > 0){
                        change -= 0.01;
                        pCount++;
                    }else{
                        change = 0;
                    }
                }
            }
        }
    }

    quarters.textContent = qCount;
    dimes.textContent = dCount;
    nickels.textContent = nCount;
    pennies.textContent = pCount;
})