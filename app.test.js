const request = require("supertest");
const app = require("./app");

describe("Conversor API", () => {
  it("deve converter decimal para binário", async () => {
    const response = await request(app).get("/to-binary/10");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ decimal: 10, binary: "1010" });
  });

  it("deve converter decimal para hexadecimal", async () => {
    const response = await request(app).get("/to-hex/255");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ decimal: 255, hex: "FF" });
  });

  it("deve retornar erro 400 para decimal inválido", async () => {
    const response = await request(app).get("/to-binary/invalid");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Número decimal inválido" });
  });
});
