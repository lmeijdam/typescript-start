interface IFactory<T>{
    create(param: any) : T 
}

export default IFactory;
// Not really needed in this scenario 'yet' we only have one type of task. Just to show that Generics can be implemented already for extension.