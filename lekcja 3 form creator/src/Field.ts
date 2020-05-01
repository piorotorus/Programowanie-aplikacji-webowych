enum FieldType {
    InputField,
    TextAreaField,
    DateField,
    EmailField,
    SelectField,
    CheckboxField
}

export default interface Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: any;
    render(): void;
    getValue(): void;
}