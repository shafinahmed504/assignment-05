document.getElementById('donate-feni-btn').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('feni-input');
    if(isNaN(addMoney)){
        alert('Failed to Donate Money')
        return;
    }
    const accountBalance=getTextValue('balance');
    const donationAmount=getTextValue('money-donated-feni');


    if(addMoney>accountBalance){
        alert('Not Possible')
        return;
    }

    // New Balance starts
    const newBalance=accountBalance-addMoney;
    document.getElementById('balance').innerText=newBalance+' '+'BDT';
    // New Balance ends

    // Donation Amount starts
    const totalDonation=donationAmount+addMoney;
    document.getElementById('money-donated-feni').innerText=totalDonation +''+'BDT';
    // Donation Amount ends


// Transaction
const div=document.createElement('div');
div.classList.add('bg-yellow-300')

div.innerHTML=`
<h4> Cash Out</h4>
<h1>${addMoney} Taka is Donated for famine-2024 at Feni,Bangladesh. </h1>

`
document.getElementById('transaction-container').appendChild(div)

})