
import Field from './Field';
import InputField from'./InputField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import EmailField from './EmailField';
import DateField from './DateField';
import CheckboxField from './CheckboxField';

class Form {
    fieldArray: Array<Field> = [];

    getValue() {
        this.fieldArray.forEach(element => {
            element.getValue();
        });
        JSON.stringify(this.fieldArray);
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

    createUI() {
        var node = document.createElement("LI");
        var button = document.createElement('button');
        button.innerText = "Stwórz tabele";
        button.onclick = () => { format.render() }
        node.appendChild(button);
        var button2 = document.createElement('button');
        button2.innerText = "Zapisz";
        button2.onclick = () => { format.getValue() }
        node.appendChild(button2);
        document.getElementById("Main").appendChild(node);
    }
}

let format = new Form();
format.createUI();



