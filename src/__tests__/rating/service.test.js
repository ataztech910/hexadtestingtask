import service from '../../services';

it('calls request and return list. Should be correct data', async () => {
  const list = await service();
  expect(typeof list).toBe('object');
  expect(typeof list).toBe('object');
  list.forEach((element) => {
    expect(typeof element.id).toBe('string');
    expect(typeof element.name).toBe('string');
    expect(typeof element.rating).toBe('number');
  });
});
