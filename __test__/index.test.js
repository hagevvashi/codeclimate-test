describe("indexFunc", () => {
  it("should return arguments", () => {
    const indexFunc = require("../index");
    expect(indexFunc("foo")).toBe("foo");  
  });
});
