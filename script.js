const input = document.getElementById("input");
const output = document.getElementById("output");

function cevir() {
    console.log("basıldı")
    const sesliHarfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
    const kusdili = ['aga', 'ege', 'ıgı', 'igi', 'ogo', 'ögö', 'ugu', 'ügü'];

    let string = input.value; // Initialize string with the input value

    for (let i = 0; i < sesliHarfler.length; i++) {
        string = string.replaceAll(sesliHarfler[i],kusdili[i]);
    }

    output.value = string; // Set the output value after all replacements are done
}

        