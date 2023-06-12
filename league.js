
const mykeyvalues = window.location.search
console.log(mykeyvalues)

const urlparams= new URLSearchParams(mykeyvalues);
const param1=urlparams.get('email')
console.log(param1)

document.querySelector('#email-address').value=param1;


function SquadPay() {

 
  const squadInstance = new squad({
    onClose: () => console.log("Widget closed"),
    onLoad: () => console.log("Widget loaded successfully"),
    onSuccess: () => console.log(`Linked successfully`),
    key: "sandbox_pk_edf1cfe3165c0ca3e647fb53bb7cb698768d3199239b",
    //Change key (test_pk_sample-public-key-1) to the key on your Squad Dashboard
    email: param1,
    amount: document.getElementById("amount").value * 100,
    //Enter amount in Naira or Dollar (Base value Kobo/cent already multiplied by 100)
    currency_code: "NGN"
  });
  squadInstance.setup();
  squadInstance.open();

}