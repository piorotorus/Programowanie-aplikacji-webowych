var FieldType;
(function (FieldType) {
    FieldType[FieldType["InputField"] = 0] = "InputField";
    FieldType[FieldType["TextAreaField"] = 1] = "TextAreaField";
    FieldType[FieldType["DateField"] = 2] = "DateField";
    FieldType[FieldType["EmailField"] = 3] = "EmailField";
    FieldType[FieldType["SelectField"] = 4] = "SelectField";
    FieldType[FieldType["CheckboxField"] = 5] = "CheckboxField";
})(FieldType || (FieldType = {}));
var FieldLabel = /** @class */ (function () {
    function FieldLabel() {
    }
    return FieldLabel;
}());
var InputField = /** @class */ (function () {
    function InputField(value) {
        this.name = "inputField";
        this.label = "etykieta";
        this.fieldType = FieldType.InputField;
        this.value = value;
    }
    InputField.prototype.render = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.value);
        node.appendChild(textnode);
        document.getElementById("namelist").appendChild(node);
    };
    return InputField;
}());
/*
class TextAreaField implements Field{

}
class DateField implements Field{

}
class EmailField implements Field{

}
class SelectField implements Field{

}
class CheckboxField implements Field{

}
*/
var Form = /** @class */ (function () {
    function Form() {
        this.fieldArray = [];
    }
    Form.prototype.getValue = function () {
    };
    Form.prototype.render = function () {
        alert("AAA");
        /*
        let inputField: InputField = new InputField("A");
        inputField.render();
        this.fieldArray.push(inputField);
        */
    };
    return Form;
}());
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());
var form = new Form();
