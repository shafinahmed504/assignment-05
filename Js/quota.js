document.getElementById('quota-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    const addMoney=getInputFieldValueById('quota-input');
    if(isNaN(addMoney)){
        alert('Failed to Donate Money')
        return;
    }
    const accountBalance=getTextValue('balance');
    const donationAmount=getTextValue('money-donated-quota');

    // New Balance starts
    const newBalance=accountBalance-addMoney;
    document.getElementById('balance').innerText=newBalance+' '+'BDT';
    // New Balance ends

    // Donation Amount starts
    const totalDonation=donationAmount+addMoney;
    document.getElementById('money-donated-quota').innerText=totalDonation +''+'BDT';
    // Donation Amount ends




})