enum FieldType {
    InputField,
    TextAreaField,
    DateField,
    EmailField,
    SelectField,
    CheckboxField
}

class BaseField {
    createInput(name: string) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(name);
        var inputnode = document.createElement("input");
        inputnode.id = name;
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
        return inputnode;
    }
}

interface Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;
    render(): void;
    getValue(): void;
}

class FieldLabel {

    constructor() { }

}

class InputField extends BaseField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(name: string) {
        super();
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.InputField;
        this.value = "";
    }

    render() {
        this.createInput(this.name)
    }
    getValue() {
        var node = document.createElement("LI");
        this.value = (<HTMLInputElement>document.getElementById(this.name)).value;
        var textnode = document.createTextNode(this.name+": "+this.value);
        node.appendChild(textnode);

        console.log(this.value);


        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.clear(node, this.value); }
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    }

    clear(node: any, value: any) {
        this.value = "";
        node.remove(node);
    }
}

class TextAreaField extends BaseField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(name: string) {
        super();
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.TextAreaField;
        this.value = "";
    }
    render() {
        var node = this.createInput(this.name);
        node.type = 'textarea';
    }
    getValue() {
        var node = document.createElement("LI");
        this.value = (<HTMLInputElement>document.getElementById(this.name)).value;
        var textnode = document.createTextNode(this.name+": "+this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.clear(node, this.value); }
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    }
    clear(node: any, value: any) {
        this.value = "";
        node.remove(node);
    }

}

class DateField extends BaseField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(name: string) {
        super();
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.DateField;
        this.value = "";
    }
    render() {
        this.createInput(this.name);
    }
    getValue() {
        var node = document.createElement("LI");
        this.value = (<HTMLInputElement>document.getElementById(this.name)).value;
        var textnode = document.createTextNode(this.name+": "+this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.clear(node, this.value); }
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    }
    clear(node: any, value: any) {
        this.value = "";
        node.remove(node);
    }
}
class EmailField extends BaseField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(name: string) {
        super();
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.EmailField;
        this.value = "";
    }
    render() {
        this.createInput(this.name);
    }
    getValue() {
        var node = document.createElement("LI");
        this.value = (<HTMLInputElement>document.getElementById(this.name)).value;
        var textnode = document.createTextNode(this.name+": "+this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.clear(node, this.value); }
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    }
    clear(node: any, value: any) {
        this.value = "";
        node.remove(node);
    }
}
class SelectField extends BaseField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(name: string) {
        super();
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.SelectField;
        this.value = "";
    }
    render() {
        var node = this.createInput(this.name);
    }
    getValue() {
        var node = document.createElement("LI");
        this.value = (<HTMLInputElement>document.getElementById(this.name)).value;
        var textnode = document.createTextNode(this.name+": "+this.value);
        node.appendChild(textnode);
        console.log(this.value);
        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.clear(node, this.value); }
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    }
    clear(node: any, value: any) {
        this.value = "";
        node.remove(node);
    }
}
class CheckboxField extends BaseField implements Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;

    constructor(name: string) {
        super();
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.CheckboxField;
        this.value = "";
    }
    render() {
        var node = this.createInput(this.name);

        node.type = 'checkbox';

    }

    getValue() {
        var node = document.createElement("LI");
        this.value = (<HTMLInputElement>document.getElementById(this.name)).checked;
        var textnode = document.createTextNode(this.name+": "+this.value);
        node.appendChild(textnode);

        console.log(this.value);

        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.clear(node, this.value); }
        node.appendChild(button);
        document.getElementById("ArrayList").appendChild(node);
    }
    clear(node: any, value: any) {
        this.value = "";
        node.remove(node);
    }
}

class Form {
    fieldArray: Array<Field> = [];

    getValue() {





        this.fieldArray.forEach(element => {
            element.getValue();
        });

    }

    render() {

        let inputField: InputField = new InputField("Imię");
        inputField.render();
        this.fieldArray.push(inputField);

        let textAreaField: TextAreaField = new TextAreaField("Nazwisko");
        textAreaField.render();
        this.fieldArray.push(textAreaField);

        let dateField: DateField = new DateField("Data urodzenia");
        dateField.render();
        this.fieldArray.push(dateField);

        let emailField: EmailField = new EmailField("email");
        emailField.render();
        this.fieldArray.push(emailField);

        let selectField: SelectField = new SelectField("Wybrany kierunek studiów");
        selectField.render();
        this.fieldArray.push(selectField);

        let checkboxField: CheckboxField = new CheckboxField("Czy preferujesz e-learning");
        checkboxField.render();
        this.fieldArray.push(checkboxField);
    }
}

class App {

}

let format = new Form();


