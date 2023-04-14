import InputMask from "./InputMask.vue";

describe("vMask directive", () => {
  it("renders", () => {
    cy.mount(InputMask);
  });
  it("renders the input with a default mask char", () => {
    cy.mount(InputMask, { props: { mask: "#" } });
    cy.get("input").should("have.value", "_");
  });
  it("renders the input with multiple default mask chars", () => {
    cy.mount(InputMask, { props: { mask: "###" } });
    cy.get("input").should("have.value", "___");
  });
  it("accepts only numbers", () => {
    cy.mount(InputMask, { props: { mask: "#####" } });
    cy.get("input").type("{home}abcde");
    cy.get("input").should("have.value", "_____");
    cy.get("input").type("{home}12345");
    cy.get("input").should("have.value", "12345");
  });
  it("accepts only chars", () => {
    cy.mount(InputMask, { props: { mask: "$$$" } });
    cy.get("input").should("have.value", "___");
    cy.get("input").type("{home}123");
    cy.get("input").should("have.value", "___");
    cy.get("input").type("{home}abc");
    cy.get("input").should("have.value", "abc");
  });
  it("accepts both case chars", () => {
    cy.mount(InputMask, { props: { mask: "$$$$" } });
    cy.get("input").should("have.value", "____");
    cy.get("input").type("{home}abAB");
    cy.get("input").should("have.value", "abAB");
  });
  it("accepts both numbers & chars", () => {
    cy.mount(InputMask, { props: { mask: "*****" } });
    cy.get("input").should("have.value", "_____");
    cy.get("input").type("{home}M5P2g");
    cy.get("input").should("have.value", "M5P2g");
  });
  it("transforms to upper case letters", () => {
    cy.mount(InputMask, { props: { mask: "AA" } });
    cy.get("input").should("have.value", "__");
    cy.get("input").type("{home}ab");
    cy.get("input").should("have.value", "AB");
  });
  it("transforms to lower case letters", () => {
    cy.mount(InputMask, { props: { mask: "aaa" } });
    cy.get("input").should("have.value", "___");
    cy.get("input").type("{home}AbC");
    cy.get("input").should("have.value", "abc");
  });
  it("escapes the $ token", () => {
    cy.mount(InputMask, { props: { mask: "\\$ ##.##" } });
    cy.get("input").should("have.value", "$ __.__");
    cy.get("input").type("1234");
    cy.get("input").should("have.value", "$ 12.34");
  });
  it("escapes the * token", () => {
    cy.mount(InputMask, { props: { mask: "*** # \\* #" } });
    cy.get("input").should("have.value", "___ _ * _");
    cy.get("input").type("Mul12");
    cy.get("input").should("have.value", "Mul 1 * 2");
  });
  it("escapes the #, A, a token", () => {
    cy.mount(InputMask, { props: { mask: "\\# # \\A A \\a a" } });
    cy.get("input").should("have.value", "# _ A _ a _");
    cy.get("input").type("1gB");
    cy.get("input").should("have.value", "# 1 A G a b");
  });
});
