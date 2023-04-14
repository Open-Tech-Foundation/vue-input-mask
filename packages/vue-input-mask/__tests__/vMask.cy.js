import InputMask from "./InputMask.vue";

describe("vMask directive", () => {
  it("renders", () => {
    cy.mount(InputMask);
  });
  it("renders the input with a default mask char", () => {
    cy.mount(InputMask, { props: { mask: '#' } });
    cy.get('input').should('have.value', '_')
  });
  it("renders the input with multiple default mask chars", () => {
    cy.mount(InputMask, { props: { mask: '###' } });
    cy.get('input').should('have.value', '___')
  });
  it("accepts only numbers", () => {
    cy.mount(InputMask, { props: { mask: '#####' } });
    cy.get('input').type('{home}abcde')
    cy.get('input').should('have.value', '_____')
    cy.get('input').type('{home}12345')
    cy.get('input').should('have.value', '12345')
  });
});
