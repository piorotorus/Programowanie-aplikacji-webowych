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
        var textnode = document.createTextNode(this.name);
        var inputnode = document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
    };
    return InputField;
}());
var TextAreaField = /** @class */ (function () {
    function TextAreaField(value) {
        this.name = "TextAreaField";
        this.label = "etykieta";
        this.fieldType = FieldType.TextAreaField;
        this.value = value;
    }
    TextAreaField.prototype.render = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.name);
        var inputnode = document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
    };
    return TextAreaField;
}());
var DateField = /** @class */ (function () {
    function DateField(value) {
        this.name = "DateField";
        this.label = "etykieta";
        this.fieldType = FieldType.DateField;
        this.value = value;
    }
    DateField.prototype.render = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.name);
        var inputnode = document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
    };
    return DateField;
}());
var EmailField = /** @class */ (function () {
    function EmailField(value) {
        this.name = "EmailField";
        this.label = "etykieta";
        this.fieldType = FieldType.EmailField;
        this.value = value;
    }
    EmailField.prototype.render = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.name);
        var inputnode = document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
    };
    return EmailField;
}());
var SelectField = /** @class */ (function () {
    function SelectField(value) {
        this.name = "SelectField";
        this.label = "etykieta";
        this.fieldType = FieldType.SelectField;
        this.value = value;
    }
    SelectField.prototype.render = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.name);
        var inputnode = document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
    };
    return SelectField;
}());
var CheckboxField = /** @class */ (function () {
    function CheckboxField(value) {
        this.name = "CheckboxField";
        this.label = "etykieta";
        this.fieldType = FieldType.CheckboxField;
        this.value = value;
    }
    CheckboxField.prototype.render = function () {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.name);
        var inputnode = document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
    };
    return CheckboxField;
}());
var Form = /** @class */ (function () {
    function Form() {
        this.fieldArray = [];
    }
    Form.prototype.getValue = function () {
    };
    Form.prototype.render = function () {
        var inputField = new InputField("A");
        inputField.render();
        this.fieldArray.push(inputField);
        var textAreaField = new TextAreaField("A");
        textAreaField.render();
        this.fieldArray.push(textAreaField);
        var dateField = new DateField("A");
        dateField.render();
        this.fieldArray.push(dateField);
        var emailField = new EmailField("A");
        emailField.render();
        this.fieldArray.push(emailField);
        var selectField = new SelectField("A");
        selectField.render();
        this.fieldArray.push(selectField);
        var checkboxField = new CheckboxField("A");
        inputField.render();
        this.fieldArray.push(checkboxField);
    };
    return Form;
}());
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());
var format = new Form();
