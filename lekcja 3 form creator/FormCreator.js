var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FieldType;
(function (FieldType) {
    FieldType[FieldType["InputField"] = 0] = "InputField";
    FieldType[FieldType["TextAreaField"] = 1] = "TextAreaField";
    FieldType[FieldType["DateField"] = 2] = "DateField";
    FieldType[FieldType["EmailField"] = 3] = "EmailField";
    FieldType[FieldType["SelectField"] = 4] = "SelectField";
    FieldType[FieldType["CheckboxField"] = 5] = "CheckboxField";
})(FieldType || (FieldType = {}));
var BaseField = /** @class */ (function () {
    function BaseField() {
    }
    BaseField.prototype.createInput = function (name) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(name);
        var inputnode = document.createElement("input");
        inputnode.id = name;
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
        return inputnode;
    };
    return BaseField;
}());
var FieldLabel = /** @class */ (function () {
    function FieldLabel() {
    }
    return FieldLabel;
}());
var InputField = /** @class */ (function (_super) {
    __extends(InputField, _super);
    function InputField(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.label = "etykieta";
        _this.fieldType = FieldType.InputField;
        _this.value = "";
        return _this;
    }
    InputField.prototype.render = function () {
        this.createInput(this.name);
    };
    InputField.prototype.getValue = function () {
        var _this = this;
        var node = document.createElement("LI");
        this.value = document.getElementById(this.name).value;
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = function () { _this.clear(node, _this.value); };
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    };
    InputField.prototype.clear = function (node, value) {
        this.value = "";
        node.remove(node);
    };
    return InputField;
}(BaseField));
var TextAreaField = /** @class */ (function (_super) {
    __extends(TextAreaField, _super);
    function TextAreaField(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.label = "etykieta";
        _this.fieldType = FieldType.TextAreaField;
        _this.value = "";
        return _this;
    }
    TextAreaField.prototype.render = function () {
        var node = this.createInput(this.name);
        node.type = 'textarea';
    };
    TextAreaField.prototype.getValue = function () {
        var _this = this;
        var node = document.createElement("LI");
        this.value = document.getElementById(this.name).value;
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = function () { _this.clear(node, _this.value); };
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    };
    TextAreaField.prototype.clear = function (node, value) {
        this.value = "";
        node.remove(node);
    };
    return TextAreaField;
}(BaseField));
var DateField = /** @class */ (function (_super) {
    __extends(DateField, _super);
    function DateField(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.label = "etykieta";
        _this.fieldType = FieldType.DateField;
        _this.value = "";
        return _this;
    }
    DateField.prototype.render = function () {
        this.createInput(this.name);
    };
    DateField.prototype.getValue = function () {
        var _this = this;
        var node = document.createElement("LI");
        this.value = document.getElementById(this.name).value;
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = function () { _this.clear(node, _this.value); };
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    };
    DateField.prototype.clear = function (node, value) {
        this.value = "";
        node.remove(node);
    };
    return DateField;
}(BaseField));
var EmailField = /** @class */ (function (_super) {
    __extends(EmailField, _super);
    function EmailField(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.label = "etykieta";
        _this.fieldType = FieldType.EmailField;
        _this.value = "";
        return _this;
    }
    EmailField.prototype.render = function () {
        this.createInput(this.name);
    };
    EmailField.prototype.getValue = function () {
        var _this = this;
        var node = document.createElement("LI");
        this.value = document.getElementById(this.name).value;
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = function () { _this.clear(node, _this.value); };
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    };
    EmailField.prototype.clear = function (node, value) {
        this.value = "";
        node.remove(node);
    };
    return EmailField;
}(BaseField));
var SelectField = /** @class */ (function (_super) {
    __extends(SelectField, _super);
    function SelectField(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.label = "etykieta";
        _this.fieldType = FieldType.SelectField;
        _this.value = "";
        return _this;
    }
    SelectField.prototype.render = function () {
        var node = this.createInput(this.name);
    };
    SelectField.prototype.getValue = function () {
        var _this = this;
        var node = document.createElement("LI");
        this.value = document.getElementById(this.name).value;
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = function () { _this.clear(node, _this.value); };
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    };
    SelectField.prototype.clear = function (node, value) {
        this.value = "";
        node.remove(node);
    };
    return SelectField;
}(BaseField));
var CheckboxField = /** @class */ (function (_super) {
    __extends(CheckboxField, _super);
    function CheckboxField(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.label = "etykieta";
        _this.fieldType = FieldType.CheckboxField;
        _this.value = "";
        return _this;
    }
    CheckboxField.prototype.render = function () {
        var node = this.createInput(this.name);
        node.type = 'checkbox';
    };
    CheckboxField.prototype.getValue = function () {
        var _this = this;
        var node = document.createElement("LI");
        this.value = document.getElementById(this.name).checked;
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = function () { _this.clear(node, _this.value); };
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    };
    CheckboxField.prototype.clear = function (node, value) {
        this.value = "";
        node.remove(node);
    };
    return CheckboxField;
}(BaseField));
var Form = /** @class */ (function () {
    function Form() {
        this.fieldArray = [];
    }
    Form.prototype.getValue = function () {
        this.fieldArray.forEach(function (element) {
            element.getValue();
        });
    };
    Form.prototype.render = function () {
        var inputField = new InputField("Imię");
        inputField.render();
        this.fieldArray.push(inputField);
        var textAreaField = new TextAreaField("Nazwisko");
        textAreaField.render();
        this.fieldArray.push(textAreaField);
        var dateField = new DateField("Data urodzenia");
        dateField.render();
        this.fieldArray.push(dateField);
        var emailField = new EmailField("email");
        emailField.render();
        this.fieldArray.push(emailField);
        var selectField = new SelectField("Wybrany kierunek studiów");
        selectField.render();
        this.fieldArray.push(selectField);
        var checkboxField = new CheckboxField("Czy preferujesz e-learning");
        checkboxField.render();
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
