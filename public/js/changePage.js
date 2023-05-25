const options = {
    length: [
        `<select name="Starting Area" id="start-val">
        <option value="km">kilometer</option>
        <option value="m">Meter</option>
        <option value="cm">Centimeter</option>
        <option value="mm">Millimeter</option>
        <option value="μm">Micrometer</option>
        <option value="nm">Nanometer</option>
        <option value="mi">Mile</option>
        <option value="yd">Yard</option>
        <option value="ft">Foot</option>
        <option value="in">Inch</option>
        <option value="nmi">Nautical Mile</option>
    </select>`,
        `<select name="Length to Convert To" id="end-val">
        <option value="km">kilometer</option>
        <option value="m">Meter</option>
        <option value="cm">Centimeter</option>
        <option value="mm">Millimeter</option>
        <option value="μm">Micrometer</option>
        <option value="nm">Nanometer</option>
        <option value="mi">Mile</option>
        <option value="yd">Yard</option>
        <option value="ft">Foot</option>
        <option value="in">Inch</option>
        <option value="nmi">Nautical Mile</option>
    </select>`,
    ],
    area: [
        `<select name="Starting Area" id="start-val">
        <option value="ski">Square Kilometer</option>
        <option value="sm">Square Meter</option>
        <option value="smi">Square Mile</option>
        <option value="syd">Square Yard</option>
        <option value="sft">Square Foot</option>
        <option value="si">Square Inch</option>
        <option value="h">Hectare</option>
        <option value="acre">Acre</option>
    </select>`,
        `<select name="Area to Convert To" id="end-val">
        <option value="ski">Square Kilometer</option>
        <option value="sm">Square Meter</option>
        <option value="smi">Square Mile</option>
        <option value="syd">Square Yard</option>
        <option value="sft">Square Foot</option>
        <option value="si">Square Inch</option>
        <option value="h">Hectare</option>
        <option value="acre">Acre</option>
    </select>`,
    ],
    volume: [
        `<select name="Starting Volume" id="start-val">
        <option value="usg">US Gallon</option>
        <option value="usq">US Quart</option>
        <option value="usp">US Pint</option>
        <option value="usc">US Cup</option>
        <option value="usoz">US Fluid oz</option>
        <option value="ustbsp">US Tablespoon</option>
        <option value="ustsp">US Teaspoon</option>                        
        <option value="cm">Cubic Meter</option>
        <option value="l">Liter</option>
        <option value="ml">Milliliter</option>
        <option value="ig">Imperial Gallon</option>
        <option value="iq">Imperial Quart</option>
        <option value="ip">Imperial Pint</option>
        <option value="ic">Imperial Cup</option>                        
        <option value="ioz">Imperial Fluid oz</option>
        <option value="itbsp">Imperial Tablespoon</option>                        
        <option value="itsp">Imperial Teaspoon</option>
        <option value="cf">Cubic Foot</option>
        <option value="ci">Cubic Inch</option>
    </select>`,
        `<select name="Volume to Convert To" id="end-val">
        <option value="usg">US Gallon</option>
        <option value="usq">US Quart</option>
        <option value="usp">US Pint</option>
        <option value="usc">US Cup</option>
        <option value="usoz">US Fluid oz</option>
        <option value="ustbsp">US Tablespoon</option>
        <option value="ustsp">US Teaspoon</option>                        
        <option value="cm">Cubic Meter</option>
        <option value="l">Liter</option>
        <option value="ml">Milliliter</option>
        <option value="ig">Imperial Gallon</option>
        <option value="iq">Imperial Quart</option>
        <option value="ip">Imperial Pint</option>
        <option value="ic">Imperial Cup</option>                        
        <option value="ioz">Imperial Fluid oz</option>
        <option value="itbsp">Imperial Tablespoon</option>                        
        <option value="itsp">Imperial Teaspoon</option>
        <option value="cf">Cubic Foot</option>
        <option value="ci">Cubic Inch</option>
    </select>`,
    ],
    mass: [
        `<select name="Starting Mass" id="start-val">
        <option value="mt">Metric Ton</option>
        <option value="kg">Kilogram</option>
        <option value="g">Gram</option>
        <option value="mlg">Milligram</option>
        <option value="mg">Micrograms</option>
        <option value="it">Imperial Ton</option>
        <option value="ust">US Ton</option>
        <option value="s">Stone</option>
        <option value="lb">Pound</option>
        <option value="oz">Ounce</option>
    </select>`,
        `<select name="Mass to Convert To" id="end-val">
        <option value="mt">Metric Ton</option>
        <option value="kg">Kilogram</option>
        <option value="g">Gram</option>
        <option value="mlg">Milligram</option>
        <option value="mg">Micrograms</option>
        <option value="it">Imperial Ton</option>
        <option value="ust">US Ton</option>
        <option value="s">Stone</option>
        <option value="lb">Pound</option>
        <option value="oz">Ounce</option>
    </select>`,
    ],
    speed: [
        `<select name="Starting Speed" id="start-val">
        <option value="mi">Miles Per Hour</option>
        <option value="ft">Feet Per Second</option>
        <option value="m">Meters Per Second</option>
        <option value="ki">Kilometers Per Hour</option>
        <option value="knot">Knot</option>
    </select>`,
        `<select name="Speed to Convert To" id="end-val">
        <option value="mi">Miles Per Hour</option>
        <option value="ft">Feet Per Second</option>
        <option value="m">Meters Per Second</option>
        <option value="ki">Kilometers Per Hour</option>
        <option value="knot">Knot</option>
    </select>`,
    ],
    density: [
        `<select name="Starting Density" id="start-val">
        <option value="gm">gm/cm&sup3;</option>
        <option value="kg">kg/m&sup3;</option>
        <option value="lb">lb/ft&sup3;</option>
        <option value="slug">slug/ft&sup3;</option>
    </select>`,
        `<select name="Density to Convert To" id="end-val">
        <option value="gm">gm/cm&sup3;</option>
        <option value="kg">kg/m&sup3;</option>
        <option value="lb">lb/ft&sup3;</option>
        <option value="slug">slug/ft&sup3;</option>
    </select>`,
    ],
    energy: [
        `<select name="Starting Energy" id="start-val">
        <option value="j">Joule</option>
        <option value="cal">Calorie</option>
        <option value="btu">British Thermal Unit</option>
        <option value="kw">Kilowatt Hour</option>
        <option value="ev">Electron Volt</option>
    </select>`,
        `<select name="Energy to Convert To" id="end-val">
        <option value="j">Joule</option>
        <option value="cal">Calorie</option>
        <option value="btu">British Thermal Unit</option>
        <option value="kw">Kilowatt Hour</option>
        <option value="ev">Electron Volt</option>
    </select>`,
    ],
    power: [
        `<select name="Starting Power" id="start-val">
        <option value="w">Watt</option>
        <option value="hp">Horsepower</option>
        <option value="kw">Kilowatt</option>
    </select>`,
        `<select name="Power to Convert To" id="end-val">
        <option value="w">Watt</option>
        <option value="hp">Horsepower</option>
        <option value="kw">Kilowatt</option>
    </select>`,
    ],
    pressure: [
        `<select name="Starting Pressure" id="start-val">
        <option value="bar">Bar</option>
        <option value="p">Pascal</option>
        <option value="lb">Pound-Force Per Square Inch</option>
        <option value="atm">Atmosphere</option>
        <option value="torr">Torr</option>
    </select>`,
        `<select name="Pressure to Convert To" id="end-val">
        <option value="bar">Bar</option>
        <option value="p">Pascal</option>
        <option value="lb">Pound-Force Per Square Inch</option>
        <option value="atm">Atmosphere</option>
        <option value="torr">Torr</option>
    </select>`,
    ],
    temperature: [
        `<select name="Starting Temperature" id="start-val">
        <option value="c">Celsius</option>
        <option value="f">Farenheit</option>
        <option value="k">Kelvin</option>
    </select>`,
        `<select name="Temperature to Convert To" id="end-val">
        <option value="c">Celsius</option>
        <option value="f">Farenheit</option>
        <option value="k">Kelvin</option>
    </select>`,
    ],
};
const templates = {
    conv: `<div>
            <h2 id="conv-header"></h2>
            <p>Please choose the two units you would like to convert between to continue</p>
            <div class="combo-box">
                <div title="Enter a numeric value to convert">
                    <label for="start-val"></label>
                    <label for="start"></label><input type="number" id="start" name="start" placeholder="Value Here" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
                </div>
                <div class="option"></div>
            </div>
            
            <div class="combo-box">
                <label for="end-val">Convert to:</label>
                <div class="option2"></div>
            </div>
            <div class="group">
                <button class="button-59" onclick="">Convert</button>
                <p id="answer"></p>
            </div>
        </div>`,
    home: `<div>
            <h1>Simple Conv</h1>
            <p>Simple Conv is a simple conversion tool that aims to provide accurate conversions between popular units. To begin, simply select an option on the left-hand side and begin converting!<br><br>
                
            If you believe there has been an error with any of the conversions please feel free to navigate to the link below and fill out the form and I will look into it.</p><br><br>

            <form action="https://www.peytonsparks.com/contact.html" target="_blank">
                <button class="button-59" type="submit">Contact Us</button>
            </form>
        </div>`,
};
let mappings = {
    leng: {
        textContent: "Length Converter",
        onclick: "Get_Length",
        options: options.length,
    },
    area: {
        textContent: "Area Converter",
        onclick: "Get_Area",
        options: options.area,
    },
    volu: {
        textContent: "Volume Converter",
        onclick: "Get_Volume",
        options: options.volume,
    },
    mass: {
        textContent: "Mass Converter",
        onclick: "Get_Mass",
        options: options.mass,
    },
    spee: {
        textContent: "Speed Converter",
        onclick: "Get_Speed",
        options: options.speed,
    },
    dens: {
        textContent: "Density Converter",
        onclick: "Get_Density",
        options: options.density,
    },
    ener: {
        textContent: "Energy Converter",
        onclick: "Get_Energy",
        options: options.energy,
    },
    powe: {
        textContent: "Power Converter",
        onclick: "Get_Power",
        options: options.power,
    },
    pres: {
        textContent: "Pressure Converter",
        onclick: "Get_Pressure",
        options: options.pressure,
    },
    temp: {
        textContent: "Temperature Converter",
        onclick: "Get_Temperature",
        options: options.temperature,
    },
};

document.addEventListener("DOMContentLoaded", function () {
    let wrapper = document.querySelector(".wrapper");
    let id = wrapper.id;

    function handleAnchorClick(event) {
        event.preventDefault();
        let anchorClass = event.target.className;
        let newId = anchorClass;
        handleIdChange(newId);
    }

    function handleIdChange(newId) {
        wrapper.innerHTML = templates.conv;
        let button = document.querySelector(".button-59");
        let option1 = document.querySelector(".option");
        let option2 = document.querySelector(".option2");
        let header = document.getElementById("conv-header");

        if (mappings[newId]) {
            let mapping = mappings[newId];
            button.onclick = window[mapping.onclick];
            option1.innerHTML = mapping.options[0];
            option2.innerHTML = mapping.options[1];
            header.textContent = mapping.textContent;
        } else {
            wrapper.innerHTML = templates.home;
        }
    }

    handleIdChange(id);

    let anchorTags = document.querySelectorAll("nav a");
    anchorTags.forEach(function (anchor) {
        anchor.addEventListener("click", handleAnchorClick);
    });
});
