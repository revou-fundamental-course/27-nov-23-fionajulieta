function displayFirstContent() {
    resetForm();
    document.querySelector('.secondcontent').style.display = 'none';
    document.querySelector('.firstcontent').style.display = 'flex';
}

function displaySecondContent() {
    resetForm();
    document.querySelector('.firstcontent').style.display = 'none';
    document.querySelector('.secondcontent').style.display = 'flex';
}

document.querySelector('#displayAreaButton').addEventListener('click', displayFirstContent);
document.querySelector('#displayPerimeterButton').addEventListener('click', displaySecondContent);
document.querySelector('.firstcontent').style.display = 'flex';
document.querySelector('.secondcontent').style.display = 'none';

function resetForm() {
    document.getElementById('inputFirstSidec').value = '';
    document.getElementById('inputFirstHeight').value = '';
    document.getElementById('inputSecondSidea').value = '';
    document.getElementById('inputSecondSideb').value = '';
    document.getElementById('inputSecondSidec').value = '';
    document.getElementById('areaResult').value = '';
    document.getElementById('perimeterResult').value = '';
}

function calculateArea() {

    var firstSideC = parseFloat(document.getElementById('inputFirstSidec').value);
    var firstHeight = parseFloat(document.getElementById('inputFirstHeight').value);

    if (isNaN(firstSideC) || isNaN(firstHeight)) {
        alert("both side c and height field must be entered");
        return;
    }

    var area = 0.5 * firstSideC * firstHeight;
    document.getElementById('areaResult').value = area;
}

function calculatePerimeter() {
    
    var secondSideA = parseFloat(document.getElementById('inputSecondSidea').value);
    var secondSideB = parseFloat(document.getElementById('inputSecondSideb').value);
    var secondSideC = parseFloat(document.getElementById('inputSecondSidec').value);

    if (isNaN(secondSideA) || isNaN(secondSideB) || isNaN(secondSideC)) {
        alert("all 3 fields (side a, b, and c) must be entered");
        return;
    }

    var perimeter = secondSideA + secondSideB + secondSideC;
    document.getElementById('perimeterResult').value = perimeter;
}