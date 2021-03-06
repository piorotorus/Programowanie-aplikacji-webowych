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

export default class ExtendedSelect extends BaseField implements Field{

    name: string;
    label: string;
    fieldType: FieldType;
    element: HTMLSelectElement;
    value: any;
   // label:Label;

    constructor(name: string) {
        super();
        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = "etykieta"
        this.fieldType = FieldType.SelectField;
        this.value = "";

        this.fetchOptions<{name: string}>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.map(x=>x.name).forEach(element => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.text = element;
                option.value = element;
               
                this.element.options.add(option);
            })
        });
        
    }

    setValue(){
        var node = document.createElement("LI");
        var textnode = document.createTextNode(this.name + ": " + this.value);
        this.value = this.edit(textnode, this.value, this.name);

        node.appendChild(textnode);
    }
        render() {
           // var node = document.createElement("LI");
             // var textnode = document.createTextNode(this.name + ": " + this.element);
           // node.appendChild(textnode);


            var node = document.createElement("LI");
            var textnode = document.createTextNode(this.name);
            var inputnode = document.createElement("select");
            inputnode.id = name;
            node.appendChild(textnode);
            node.appendChild(inputnode);
            node.appendChild(this.element);
            document.getElementById("namelist").appendChild(node);
          //  return inputnode;


          //  document.getElementById("namelist").appendChild(node);       
        }
        getValue() {
            var node = document.createElement("LI");
            this.value=this.element.value;
           // this.value = (<HTMLSelectElement>document.getElementById(this.name)).value;
            var textnode = document.createTextNode(this.name + ": " + this.value);
            node.appendChild(textnode);
    
            var button = document.createElement('button');
            button.innerText = "Usuń";
            button.onclick = () => { this.value = this.clear(node, this.value); }
            node.appendChild(button);
    
            var buttonEdit = document.createElement('button');
            buttonEdit.innerText = "Edytuj";
            buttonEdit.onclick = () => { this.value = this.editSelect(textnode, this.value, this.name,this.element); }
            node.appendChild(buttonEdit);
            document.getElementById("ArrayList").appendChild(node);
        }

        fetchOptions<T>(url: string): Promise<T[]> {
            return fetch(url)
            .then(res => res.json())
            .then(res => { 
                return res;
            })
            .catch((e) => {
              console.log("API errore fetching ");
            });
        }
    
}