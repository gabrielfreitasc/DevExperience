new TypeIt("#letters", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("E#ROR 404", { delay: 300 })
    .delete(9)
    .type("G")
    .move(null, { to: "END" })
    .type("ABRIEL")
    .pause(300)
    .type(" FREITAS")
    .go();