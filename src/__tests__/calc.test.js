test('Always return same value', () => {
    const myMock = jest.fn();
    myMock.mockReturnValue(5500);
    expect(myMock()).toBe(5500);
    expect(myMock(5000, 2, 5)).toBe(5500);
});