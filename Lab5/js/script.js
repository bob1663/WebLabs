function removeDuplicates() {
  let inputText = document.getElementById("inputText").value;
  let array = inputText.split(",");

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }

  alert("Масив без дублікатів: " + array);
}

function mergeArrays() {
  const input1 = document.getElementById("input1").value.split(",");
  const input2 = document.getElementById("input2").value.split(",");
  const mergedArray = [...new Set(input1.concat(input2))];
  document.getElementById("result").innerHTML = mergedArray;
}

function solveEquation() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const d = b ** 2 - 4 * a * c;

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Введіть коректні дані!");
    return;
  }

  if (d < 0) {
    document.getElementById("result").innerHTML = "Рівняння не має розв'язків";
  } else if (d === 0) {
    const x = (-b / (2 * a)).toFixed(2);
    document.getElementById("result").innerHTML =
      "Рівняння має один корінь: x = " + x;
  } else {
    const x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
    const x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
    document.getElementById("result").innerHTML =
      "Рівняння має два корені: x1 = " + x1 + ", x2 = " + x2;
  }
}

function sortValues() {
  const input = document.getElementById("input").value;
  const values = input.split(",").map((value) => value.trim());
  values.sort(() => Math.random() - 0.5);
  document.getElementById("output").textContent = values.join(", ");
}

function printColumn() {
  var n = parseInt(document.getElementById("numberInput").value); // отримуємо значення n з текстового поля
  var column = ""; // ініціалізуємо порожній рядок для зберігання значень стовпчика

  for (var i = n; i >= 0; i--) {
    column += i + "<br>"; // додаємо кожне значення в рядок стовпчика
  }

  document.getElementById("columnOutput").innerHTML = column; // виводимо стовпчик на сторінку
}
