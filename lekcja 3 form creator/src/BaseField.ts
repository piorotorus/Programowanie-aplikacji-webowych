

export default class BaseField {

    

    createInput(name: string,type:string) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(name);
        var inputnode = document.createElement(type);
        inputnode.id = name;
        node.appendChild(textnode);
        node.appendChild(inputnode);
        document.getElementById("namelist").appendChild(node);
        return inputnode;
    }

    clear(node: any, value: any) {
        value = "";
        node.remove(node);
        return value;
    }

    edit(textnode: any, value: string, name: string) {
        value = (<HTMLInputElement>document.getElementById(name)).value;
        textnode.nodeValue = (name + ": " + value);
        return value;
    }
}