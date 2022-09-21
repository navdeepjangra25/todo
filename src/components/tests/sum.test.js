import sum from './test'

it("when a and b are numbers", ()=> {
    const result = sum(1,2);

    expect(result).toBe(3);
})

it("when a and b are string", ()=> {
    const result = sum("1","2");

    expect(result).toBe(3);
})