import BaseField from './BaseField';
import Field from './Field';

enum FieldType {
    InputField,
    TextAreaField,
    DateField,
    EmailField,
    SelectField,
    CheckboxField
}

export default class EmailField extends BaseField implements Field {
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
        var textnode = document.createTextNode(this.name + ": " + this.value);
        node.appendChild(textnode);

        var button = document.createElement('button');
        button.innerText = "Usuń";
        button.onclick = () => { this.value = this.clear(node, this.value); }
        node.appendChild(button);

        var buttonEdit = document.createElement('button');
        buttonEdit.innerText = "Edytuj";
        buttonEdit.onclick = () => { this.value = this.edit(textnode, this.value, this.name); }
        node.appendChild(buttonEdit);
        document.getElementById("ArrayList").appendChild(node);
    }

}