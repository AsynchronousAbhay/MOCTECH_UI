var menu = document.querySelector(".cpn_left  .menu")
var sidebar = document.querySelector(" .overlay1")
// var main = document.querySelector(" .main")
var cross1 = document.querySelector(".cross2")
var service_advisor = document.querySelector(".sidebar_inner ul  .service-advisor")
var service_manager = document.querySelector(".sidebar_inner ul  .service-manager")
var advisor = document.querySelector(".advisor")
var add = document.querySelector("#plus")
var parts = document.querySelector("#req-parts")
var qty = document.querySelector("#qty")
var card = document.querySelector(".card")
var unitprice = document.querySelector("#unitprice")
var labourcharge = document.querySelector("#labourcharge")
var subtotal = document.querySelector("#subtotal")
var total = document.querySelector("#total")
var tax = document.querySelector("#tax")
// jobcard related
var preInvoiceDesc = document.querySelector(".preInvoice_desc")
var mainInvoiceDesc = document.querySelector(".mainInvoice_desc")
var jobCardButton = document.querySelector("#jobCardButton")
var preInvoiceButton = document.querySelector("#preInvoiceButton")
var mainInvoiceButton = document.querySelector("#mainInvoiceButton")
var cross4 = document.querySelector(".cross4")
var jobCardNo = document.querySelector("#jobCardNo")
var jobCardDate = document.querySelector("#jobCardDate")
var jobCardRegNo = document.querySelector("#jobCardRegNo")
var jobCardKM = document.querySelector("#jobCardKM")
var jobCardTime = document.querySelector("#jobCardTime")
var jobCardVehicleMake = document.querySelector("#jobCardVehicleMake")
var jobCardVehicleModel = document.querySelector("#jobCardVehicleModel")
var jobCardCustomerName = document.querySelector("#jobCardCustomerName")
var jobCardCustomerContact = document.querySelector("#jobCardCustomerContact")
var jobCardCustomerAddress = document.querySelector("#jobCardCustomerAddress")
var jobCardUnitPrice = document.querySelector("#jobCardUnitPrice")
var jobCardLabourCharge = document.querySelector("#jobCardLabourCharge")
var jobCardTaxes = document.querySelector("#jobCardTaxes")


// invoices related
var invoice = document.querySelector(".invoice")
var invoiceJobNo = document.querySelectorAll(".top1 h1 p")
var invoiceDate = document.querySelectorAll(".top2  p")
var invoiceTime = document.querySelectorAll(".top2 h3 ")
var invoiceCustomerName = document.querySelectorAll(".middle h2 ")
var invoiceCustomerNO = document.querySelectorAll(".middle h3 ")
var invoiceCustomerAdd = document.querySelectorAll(".middle p ")
var invoiceVehicleMake = document.querySelectorAll(".desc1 p ") 
var invoiceVehicleModel = document.querySelectorAll(".desc2 p ") 
var invoiceVehicleRegNo = document.querySelectorAll(".desc3 p ") 
var invoiceVehicleKM = document.querySelectorAll(".desc4 p ") 
var invoiceLabourCost = document.querySelectorAll(".costs h1 p ") 
var invoiceMaterialCost = document.querySelectorAll(".costs h2 p ") 
var invoiceSubtotal = document.querySelectorAll(".costs h3 p ") 
var invoiceGST = document.querySelectorAll(".taxes h1 p ") 
var invoiceCGST = document.querySelectorAll(".taxes h2 p ") 
var invoiceTotal = document.querySelectorAll(".taxes h3 p ") 
var tbody = document.querySelectorAll("tbody")

var jobCardGST = 5;







var calc 



var logout = document.querySelector(".cpn_right button")
menu.addEventListener("click", function () {
    sidebar.style.display = "initial";
});

cross1.addEventListener("click", function () {
    sidebar.style.display = "none";
});

service_advisor.addEventListener("click", function () {
    advisor.style.display = "initial";
});

service_manager.addEventListener("click", function () {
    advisor.style.display = "none";
});

var counter = 1;


var clutter = ""
var invoiceClutter =""
add.addEventListener("click", function () {
    console.log(parts.value)
    clutter += `<li class="list-group-item mt-1"> <input type="checkbox" checked>${parts.value} ${qty.value} </li>`
    card.innerHTML = clutter;
    qty.innerHTML = clutter;
    
    invoiceClutter+=`<tr>
    <th scope="row">${counter}</th>
    <td>${parts.value}</td>
    <td>${qty.value}</td>
    <td>${jobCardLabourCharge.value}</td>
    <td>${jobCardLabourCharge.value}</td>
    <td>${subtotal.value}</td>
    
    </tr> `
    
    tbody[0].innerHTML =invoiceClutter
    tbody[1].innerHTML =invoiceClutter
    counter++;
    parts.value =""

});

function calculation (num1,num2){
return Number( num1 ) + Number ( num2 ) ;
 
}

function multiplication (num2,num3){
    return Number( num2 ) * Number ( num3 ) ;
}



jobCardUnitPrice.addEventListener("input", function () {
calc =   calculation(jobCardUnitPrice.value,jobCardLabourCharge.value)
    subtotal.value = calc;
    total.value = calc;
    priceAfterGST = subtotal*jobCardGST/100 
    total.value = priceAfterGST + subtotal
    console.log(priceAfterGST)
});

jobCardLabourCharge.addEventListener("input", function () {
 calc =   calculation(jobCardUnitPrice.value,jobCardLabourCharge.value)
 subtotal.value = calc;
 total.value = calc;
//  total = subtotal + jobCardTaxes;
//  priceAfterGST = subtotal*jobCardGST/100 + subtotal
//  total.value = priceAfterGST
});

jobCardButton.addEventListener("click", function (){
    advisor.style.display = "none"
    invoice.style.display = "initial"
    preInvoiceDesc.style.display = "flex"
    invoiceJobNo[0].textContent = jobCardNo.value;
    invoiceDate[0].textContent = jobCardDate.value;
    invoiceVehicleRegNo[0].textContent = jobCardRegNo.value;
    invoiceVehicleKM[0].textContent = jobCardKM.value;
    invoiceTime[0].textContent = jobCardTime.value;
    invoiceVehicleMake[0].textContent = jobCardVehicleMake.value;
    invoiceVehicleModel[0].textContent = jobCardVehicleModel.value;
    invoiceCustomerName[0].textContent = jobCardCustomerName.value;
    invoiceCustomerNO[0].textContent = jobCardCustomerContact.value;
    invoiceCustomerAdd[0].textContent = jobCardCustomerAddress.value;
    invoiceMaterialCost[0].textContent = jobCardUnitPrice.value;
    invoiceLabourCost[0].textContent = jobCardLabourCharge.value;
    invoiceSubtotal[0].textContent = total.value;
    invoiceGST[0].textContent = jobCardTaxes.value;

})

preInvoiceButton.addEventListener("click", function (){
    mainInvoiceDesc.style.display = "flex"
    preInvoiceDesc.style.display = "none"
    invoiceJobNo[1].textContent = jobCardNo.value;
    invoiceDate[1].textContent = jobCardDate.value;
    invoiceVehicleRegNo[1].textContent = jobCardRegNo.value;
    invoiceVehicleKM[1].textContent = jobCardKM.value;
    invoiceTime[1].textContent = jobCardTime.value;
    invoiceVehicleMake[1].textContent = jobCardVehicleMake.value;
    invoiceVehicleModel[1].textContent = jobCardVehicleModel.value;
    invoiceCustomerName[1].textContent = jobCardCustomerName.value;
    invoiceCustomerNO[1].textContent = jobCardCustomerContact.value;
    invoiceCustomerAdd[1].textContent = jobCardCustomerAddress.value;
    invoiceMaterialCost[1].textContent = jobCardUnitPrice.value;
    invoiceLabourCost[1].textContent = jobCardLabourCharge.value;
    invoiceSubtotal[1].textContent = total.value;
    invoiceGST[1].textContent = jobCardTaxes.value;

console.log("first")
})

cross4.addEventListener("click", function (){ 
    advisor.style.display = "initial"
    invoice.style.display = "none"
})


