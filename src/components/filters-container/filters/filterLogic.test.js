import { filterData } from "./filterLogic";
import { testData } from "./filter.mockedData";

test('First element', () => {
    const result = (filterData(testData, ['laptops'], ['acer'], testData)[0].title);

    expect(result.toLowerCase()).toContain('acer');
});

test('Last element', () => {
    const item = filterData(testData, ['laptops'], [], testData);
    expect(item[6].title.toLowerCase()).toContain('apple');
    expect(item[item.length - 1].title.toLowerCase()).toContain('dell');
});

test('No filters', () => {
    const item = filterData(testData, [], [], testData)
    expect(item[item.length - 1].title.toLowerCase()).toContain('dell');
    expect(item[6].title.toLowerCase()).toContain('apple');
    expect(item.length).toEqual(15);
});

test('No input', () => {
    const item = filterData([], [], [], []);
    expect(item.length).toEqual(0);
    expect(typeof item).toEqual('object');
})

