enum FieldType {
    InputField,
    TextAreaField,
    DateField,
    EmailField,
    SelectField,
    CheckboxField
}

interface Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;
    render(): void;
}

class FieldLabel {

    constructor() { }

}

class InputField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(value: any) {
        this.name = "inputField";
        this.label = "etykieta"
        this.fieldType = FieldType.InputField;
        this.value = value
    }

    render() {
var node=document.createElement("LI");
    var textnode=document.createTextNode(this.name);
    var inputnode=document.createElement("input");
    node.appendChild(textnode);
    node.appendChild(inputnode);
    document.getElementById("namelist").appendChild(node);
    }
}

class TextAreaField implements Field{
name:string;
label: string;
fieldType: FieldType;
value: any;

constructor(value: any) {
    this.name = "TextAreaField";
    this.label = "etykieta"
    this.fieldType = FieldType.TextAreaField;
    this.value = value
}
render() {
    var node=document.createElement("LI");
        var textnode=document.createTextNode(this.name);
        var inputnode=document.createElement("input");
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
        }

}

class DateField implements Field{
    name:string;
    label: string;
    fieldType: FieldType;
    value: any;
    
    constructor(value: any) {
        this.name = "DateField";
        this.label = "etykieta"
        this.fieldType = FieldType.DateField;
        this.value = value
    }
    render() {
        var node=document.createElement("LI");
            var textnode=document.createTextNode(this.name);
            var inputnode=document.createElement("input");
            node.appendChild(textnode);
            node.appendChild(inputnode);
            document.getElementById("namelist").appendChild(node);
            }
}
class EmailField implements Field{
    name:string;
    label: string;
    fieldType: FieldType;
    value: any;
    
    constructor(value: any) {
        this.name = "EmailField";
        this.label = "etykieta"
        this.fieldType = FieldType.EmailField;
        this.value = value
    }
    render() {
        var node=document.createElement("LI");
            var textnode=document.createTextNode(this.name);
            var inputnode=document.createElement("input");
            node.appendChild(textnode);
            node.appendChild(inputnode);
            document.getElementById("namelist").appendChild(node);
            }
}
class SelectField implements Field{
    name:string;
    label: string;
    fieldType: FieldType;
    value: any;
    
    constructor(value: any) {
        this.name = "SelectField";
        this.label = "etykieta"
        this.fieldType = FieldType.SelectField;
        this.value = value
    }
    render() {
        var node=document.createElement("LI");
            var textnode=document.createTextNode(this.name);
            var inputnode=document.createElement("input");
            node.appendChild(textnode);
            node.appendChild(inputnode);
            document.getElementById("namelist").appendChild(node);
            }
}
class CheckboxField implements Field{
    name:string;
    label: string;
    fieldType: FieldType;
    value: any;
    
    constructor(value: any) {
        this.name = "CheckboxField";
        this.label = "etykieta"
        this.fieldType = FieldType.CheckboxField;
        this.value = value
    }
    render() {
        var node=document.createElement("LI");
            var textnode=document.createTextNode(this.name);
            var inputnode=document.createElement("input");
            node.appendChild(textnode);
            node.appendChild(inputnode);
            document.getElementById("namelist").appendChild(node);
            }
}

 class Form {
    fieldArray: Array<Field> = [];
    getValue() {

    }

    render() {
        
        let inputField: InputField = new InputField("A");
        inputField.render();
        this.fieldArray.push(inputField);

        let textAreaField: TextAreaField = new TextAreaField("A");
        textAreaField.render();
        this.fieldArray.push(textAreaField);

        let dateField: DateField = new DateField("A");
        dateField.render();
        this.fieldArray.push(dateField);

        let emailField: EmailField = new EmailField("A");
        emailField.render();
        this.fieldArray.push(emailField);

        let selectField: SelectField = new SelectField("A");
        selectField.render();
        this.fieldArray.push(selectField);

        let checkboxField: CheckboxField = new CheckboxField("A");
        inputField.render();
        this.fieldArray.push(checkboxField);
    }
}

class App {

}

 let format = new Form();


