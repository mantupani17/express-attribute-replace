var changeAttribute = require('./change-atrribute-objects-express');

var objectdata = {
    student1:{fname:"mantu", lname:'pani'},
    student2:{fname:"mantu", lname:'pani'},
    student3:{fname:"mantu", lname:'pani'}
}

var arraydata = [
    {fname:"mantu", lname:'pani'},
    {fname:"mantu", lname:'pani'},
    {fname:"mantu", lname:'pani'}
]
   

changeAttribute.changeAttributeOfObject('fname','firstname', objectdata);
changeAttribute.changeAttributeOfObject('lname','lastname', arraydata);