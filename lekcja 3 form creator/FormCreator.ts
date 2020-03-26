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
    var textnode=document.createTextNode(this.value);
    node.appendChild(textnode);
    document.getElementById("namelist").appendChild(node);
    }
}
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
 class Form {
    fieldArray: Array<Field> = [];

    getValue() {

    }

    render() {
        alert("AAA");
        /*
        let inputField: InputField = new InputField("A");
        inputField.render();
        this.fieldArray.push(inputField);
        */
        

    }
}

class App {

}

let form = new Form();


