document.getElementById('donate-noakhali-btn').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('noakhali-input');
    if(isNaN(addMoney)){
        alert('Failed to Donate Money')
        return;
    }
    const accountBalance=getTextValue('balance');
    const donationAmount=getTextValue('money-donated');

    // New Balance starts
    const newBalance=accountBalance-addMoney;
    document.getElementById('balance').innerText=newBalance+' '+'BDT';
    // New Balance ends

    // Donation Amount starts
    const totalDonation=donationAmount+addMoney;
    document.getElementById('money-donated').innerText=totalDonation +''+'BDT';
    // Donation Amount ends




})