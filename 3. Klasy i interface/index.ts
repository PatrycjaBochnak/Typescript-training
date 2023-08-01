interface Provider {
    id: number;
    sendInfo(numberOfVisits: number): void;
}


class Example implements Provider{

  constructor(
    public id: number, 
    private readonly name: string) {}

    sendInfo() {}
}
const example = new Example(55, 'Pat')

console.log(example.id)