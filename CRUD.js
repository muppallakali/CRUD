let row = 1;
let editingRow = null; // to track which row is being edited

function submitForm(event) {
    event.preventDefault();

    let fn = document.getElementById("fn").value;
    let ln = document.getElementById("ln").value;
    let rn = document.getElementById("rn").value;

    if (editingRow) {
        // Update existing row
        editingRow.children[1].textContent = fn;
        editingRow.children[2].textContent = ln;
        editingRow.children[3].textContent = rn;

        // Reset editing row state
        editingRow = null;
    } else {
        // Create a new row
        let tr = document.createElement("tr");
        let tcount = document.createElement("td");
        let tfn = document.createElement("td");
        let tln = document.createElement("td");
        let trn = document.createElement("td");
        let tbtn = document.createElement("td");
        let eb = document.createElement("button");
        let db = document.createElement("button");

        tcount.textContent = row++;
        tfn.textContent = fn;
        tln.textContent = ln;
        trn.textContent = rn;
        eb.textContent = "Edit";
        tbtn.className = "d-inline-block";
        eb.className = "btn btn-primary btn-sm mx-2";
        db.textContent = "Delete";
        db.className = "btn btn-danger btn-sm mx-2";

        tr.append(tcount);
        tr.append(tfn);
        tr.append(tln);
        tr.append(trn);
        tbtn.appendChild(eb);
        tbtn.appendChild(db);
        tr.append(tbtn);

        document.getElementById("tbody").appendChild(tr);

        eb.onclick = function () {
            editRow(tr);
        };
        db.onclick = function () {
            deleteRow(tr);
        };
    }

    // Clear input fields
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("rn").value = "";

    updateRowNumbers();
}

function editRow(tr) {
    // Set input fields with the current row values
    document.getElementById("fn").value = tr.children[1].textContent;
    document.getElementById("ln").value = tr.children[2].textContent;
    document.getElementById("rn").value = tr.children[3].textContent;

    // Track the row being edited
    editingRow = tr;
}

function deleteRow(tr) {
    tr.remove();
    updateRowNumbers();
}

function updateRowNumbers() {
    let rows = document.querySelectorAll("#tbody tr");
    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
    });
}
