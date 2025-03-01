document.getElementById('donate-feni-btn').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('feni-input');
    if(isNaN(addMoney)){
        alert('Failed to Donate Money')
        return;
    }
    const accountBalance=getTextValue('balance');
    const donationAmount=getTextValue('money-donated-feni');

    // New Balance starts
    const newBalance=accountBalance-addMoney;
    document.getElementById('balance').innerText=newBalance+' '+'BDT';
    // New Balance ends

    // Donation Amount starts
    const totalDonation=donationAmount+addMoney;
    document.getElementById('money-donated-feni').innerText=totalDonation +''+'BDT';
    // Donation Amount ends




})