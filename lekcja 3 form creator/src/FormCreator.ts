
import Field from './Field';
import InputField from './InputField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import EmailField from './EmailField';
import DateField from './DateField';
import CheckboxField from './CheckboxField';
import ExtendedSelect from './ExtendedSelect';
import './styles/styles.scss';
import { stringify } from 'querystring';




class Form {
    fieldArray: Array<Field> = [];
    fieldArrayString: Array<string> = [];
    socket:WebSocket = new WebSocket("ws://localhost:8080");
    getValue() {
        this.fieldArray.forEach(element => {
            element.getValue();
            if(window.localStorage.getItem('data') == null){
           this.fieldArrayString.push(element.value);
            }
        });
        if(window.localStorage.getItem('data') == null){
        window.localStorage.setItem('data', JSON.stringify(this.fieldArrayString));
        }


        document.getElementById('send').addEventListener('click', () => {

        
            let message: string;
            message=" ";
            //message=this.fieldArray.toString();
            this.fieldArray.forEach(element => {
                message+=element.value;
            });
         // console.log(this.fieldArray[0].value);
  
 console.log(message);
            this.socket.send(message);
         })

    }

    setValue(){
this.fieldArray.forEach(element => {
    element.setValue()});
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

        let selectExtendedField: ExtendedSelect = new ExtendedSelect("Wybrany kierunek studiów");
        selectExtendedField.render();
        this.fieldArray.push(selectExtendedField);


        let checkboxField: CheckboxField = new CheckboxField("Czy preferujesz e-learning");
        checkboxField.render();
        this.fieldArray.push(checkboxField);
    }

    sendMessage() {
        let that = this;
        this.socket.onopen = (socket) => {
          alert("Connected");
          that.socket.send("Hello!");
        };
        this.socket.onmessage = function(event) {
      
          alert('Message received: ' + event.data);
        };
 
    }

    loadDate() {
        var loadItem = window.localStorage.getItem('data');
        let data = JSON.parse(loadItem);
        return data;
    }

    putLoadDataToObject(){
       for (let index = 0; index < this.fieldArray.length; index++) {
         
        this.fieldArray[index].value=this.fieldArrayString[index];
           
       }
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

        var button3 = document.createElement('button');
        button3.id="send";
        button3.innerText = "send";
        button3.onclick = () => { format.sendMessage() }
        node.appendChild(button3);

        document.getElementById("Main").appendChild(node);
    }
}

let format = new Form();
/*
if (window.localStorage.getItem('data') != null) {

    format.render();
    format.fieldArrayString=format.loadDate();
    
    format.getValue();
    format.putLoadDataToObject();
    format.setValue();
   
   
}
*/
format.createUI();




