const submitForm = document.getElementById('submitForm');

let arr = [];

var tableClutter = ``;

submitForm.addEventListener("click", (e) => {
    e.preventDefault();

    // handle submit
    let hsn = document.getElementById("HSN");
    let part = document.getElementById("part");
    let Qnt = document.getElementById("Qnt");
    let unit = document.getElementById("unit");
    let tax = document.getElementById("tax");
    let labour = document.getElementById("labour");
    let total = document.getElementById("total");


    if (hsn.value == "" || part.value == "" || Qnt.value == "" || unit.value == "" || tax.value == "" || labour.value == "" || total.value == "") {
        window.alert('input must not be empty!')
    } else {
        window.alert('successfully!')
        // perform operation with form input
        console.log(
            `This form has a HSN of ${hsn.value}, part of ${part.value}, quantity of ${Qnt.value}, unit of ${unit.value}, tax of ${tax.value}, labour of ${labour.value}, total of ${total.value} `
        );

        let data = {
            hsn: hsn.value,
            part: part.value,
            Qnt: Qnt.value,
            unit: unit.value,
            tax: tax.value,
            labour: labour.value,
            total: total.value
        }

        arr.push(data)

        hsn.value = "";
        part.value = "";
        Qnt.value = "";
        unit.value = "";
        tax.value = "";
        labour.value = "";
        total.value = "";
    }


    arr.forEach((elem, idx) => {
        tableClutter += `<tr class="tr">
        <td class="td">${idx}</td>
        <td class="td">${elem.hsn}</td>
        <td class="td">${elem.part}</td>
        <td class="td">${elem.Qnt}</td>
        <td class="td">${elem.unit}</td>
        <td class="td">${elem.tax}</td>
        <td class="td">${elem.labour}</td>
        <td class="td">${elem.total}</td>
    </tr>
    `
    })
    document.querySelector("#preview-table tbody").innerHTML = tableClutter;
    tableClutter = '';
});

