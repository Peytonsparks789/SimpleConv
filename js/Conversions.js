function Get_Mass(){
    const convback = [0.001, 0.001, 0.001, 0.001, 1016000000000, 0.892857, 0.007, 0.0714286, 0.0625, 0];
    const convfor = [0, 1000, 1000, 1000, 1000, 0.00000000000098421, 1.12, 142.857, 14, 16];
    const items = ["mt", "kg", "g", "mlg", "mg", "it", "ust", "s", "lb", "oz"];

    Calculate(items, convback, convfor);
}

// These values not received from Google. All others were.
function Get_Density(){
    const convback = [10, 1.48816, 32.1740486, 0];
    const convfor = [0, .1, 0.671969, 0.031081];
    const items = ["gm", "kg", "lb", "slug"];

    Calculate(items, convback, convfor);
}

function Get_Area(){
    const convback = [0.000001, 2590000, 0.00000032283, 0.111111, 0.00694444, 15500000, 0.404686, 0];
    const convfor = [0, 1000000, 0.0000003861, 3098000, 9, 144, 0.000000064516, 2.47105];
    const items = ["ski", "sm", "smi", "syd", "sft", "si", "h", "acre"];

    Calculate(items, convback, convfor);
}
function Get_Energy(){
    const convback = [4.184, 252.164, 3412.1416416, 0.000000000000000000000000044505, 0];
    const convfor = [0, 0.2388, .00396567, 0.000293, 22469000000000000000000000];
    const items = ["j", "cal", "btu", "kw", "ev"];

    Calculate(items, convback, convfor);
}
function Get_Length(){
    const convback = [0.001, .01, .1, .001, .001, 1609000000000, .000568182, .333333, .0833333, 72913.4, 0];
    const convfor = [0, 1000, 100, 10, 1000, 1000, 0.00000000000062137, 1760, 3, 12, 0.000013715];
    const items = ["km", "m", "cm", "mm", "μm", "nm", "mi", "yd", "ft", "in", "nmi"];

    Calculate(items, convback, convfor);
}
function Get_Power(){
    const convback = [0.7457, 0.00134102, 0];
    const convfor = [0, 1.34102, 745.7];
    const items = ["w", "hp", "kw"];

    Calculate(items, convback, convfor);
}
function Get_Pressure(){
    const convback = [0.00001, 6894.76, 14.6959, 0.00131579, 0];
    const convfor = [0, 100000, 0.000145038, 0.068046, 760];
    const items = ["bar", "p", "lb", "atm", "torr"];

    Calculate(items, convback, convfor);
}
function Get_Speed(){
    const convback = [0.681818, 3.28084, 0.277778, 1.852, 0];
    const convfor = [0, 1.46667, 0.3048, 3.6, 0.539957];
    const items = ["mi", "ft", "m", "ki", "knot"];

    Calculate(items, convback, convfor);
}


function Get_Volume(){
    const convback = [0.25, 0.5, 0.50721, 0.123223, 0.5, 0.333333, 202884, 0.001, 0.001, 4546.09, 0.25, 0.5, .5, 0.1, 0.625, 0.333333, 4783.74, 0.000578704, 0];
    const convfor = [0, 4, 2, 1.97157, 8.11537, 2, 3, 0.0000049289, 1000, 1000, 0.000219969, 4, 2, 2, 10, 1.6, 3, 0.000209041, 1728];
    const items = ["usg", "usq", "usp", "usc", "usoz", "ustbsp", "ustsp", "cm", "l", "ml", "ig", "iq", "ip", "ic", "ioz", "itbsp", "itsp", "cf", "ci"];

    Calculate(items, convback, convfor);
}
function Get_Temperature(){
    const convback = [-17.2222, -457.87, 0];
    const convfor = [0, 33.8, 255.928];
    const items = ["c", "f", "k"];

    Calculate(items, convback, convfor);
}

function Calculate(items, convback, convfor) {
    const start = document.getElementById("start-val").value;
    const end = document.getElementById("end-val").value;
    let start_val = document.querySelector('input').value;

    //Needed to make end result look nicer
    //var text = end.options[end.selectedIndex].text;

    if (start_val === "") {
        start_val = 0;
    }

    let x = start_val;

    // Convert using division, moving backwards through array
    if (items.indexOf(end) < items.indexOf(start)) {
        console.log(x);
        for (let i = items.indexOf(start); i > items.indexOf(end); i--) {
            x = x * convback[i - 1];
            console.log("x", x);
        }
        //document.getElementById("answer").textContent = (x + " " + text);
        document.getElementById("answer").textContent = (x);
    }

    // Convert using multiplication, moving upwards through array 
    else if (items.indexOf(end) > items.indexOf(start)) {
        console.log(x);
        for (let i = items.indexOf(start); i < items.indexOf(end); i++) {
            x = x * convfor[i + 1];
            console.log(x);
        }
        //document.getElementById("answer").textContent = (x + " " + text);
        document.getElementById("answer").textContent = (x);
    }

    // Should just be the starting value
    else {
        //document.getElementById("answer").textContent = (start_val + " " + text);
        document.getElementById("answer").textContent = (x);
        console.log(start_val);
    }
}
